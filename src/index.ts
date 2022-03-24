import 'reflect-metadata'
import express, { NextFunction, Request, Response } from 'express'
import { Routes } from './routes'
import * as dotenv from 'dotenv'
import helmet from 'helmet'
import cors from 'cors'
import { RetornoService } from './utils/RetornoService'
import { RateLimiterMemory } from 'rate-limiter-flexible'
import { AppDataSource } from './connection'
import morgan from 'morgan'
import { AbstractException } from './utils/errors/AbstractException'

async function run() {

    dotenv.config()

    const limiter = new RateLimiterMemory({
        points: 10,//quantas requisições por IP
        duration: 15,//segundos
    })

    const app = express()
    app.use(helmet())
        .use(cors())
        .use(morgan('dev'))
        .use(express.json())
        .use(express.urlencoded({ extended: true }))
        .use(async (req, res, next) => {

            try {

                await limiter.consume(req.ip)
                return next()

            } catch (err) {

                return res.status(429).json({ message: 'Too many requests', code: 429 })

            }

        })

    const PORT = process.env.PORT || 3333

    await AppDataSource.initialize()

    Routes.forEach(route => {

        (app as any)[route.method](route.route, async (req: Request, res: Response, next: NextFunction) => {

            const result = await (new (route.controller as any))[route.action](req, res, next)
            const isObject = typeof result === 'object'
            const isCustomException = result instanceof AbstractException

            if (isObject && 'dontSend' in result) return //Não retorna nada pois é esperado que a controller ja tenha retornado
            if (isObject && 'flagErro' in result) return res.status(500).send(result) //Já veio no padrão de retorno

            if (isCustomException) return res.status(result.statusCode).send(RetornoService.error(result))
            return result instanceof Error ? res.status(500).send(RetornoService.error(result)) : res.status(200).send(RetornoService.success(result))

        })

    })

    app.listen(PORT)
    //eslint-disable-next-line no-console
    console.log(`🔥 Express server has started on http://localhost:${PORT} 🔥`)

}

run()
