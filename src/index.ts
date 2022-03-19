import "reflect-metadata";
import { createConnection } from "typeorm";
import express from "express";
import { Request, Response } from "express";
import { Routes } from "./routes";
import * as dotenv from "dotenv";
import helmet from "helmet";
import cors from 'cors'
import { RetornoService } from "./utils/RetornoService";
import { Tables } from "./entity";
import { RateLimiterMemory } from 'rate-limiter-flexible';

async function run() {

    dotenv.config();

    const limiter = new RateLimiterMemory({
        points: 10,//quantas requisições por IP
        duration: 15,//segundos
    });

    const app = express();
    app.use(helmet())
        .use(cors())
        .use(express.json())
        .use(express.urlencoded({ extended: true }))
        .use(async (req, res, next) => {
            try {
                await limiter.consume(req.ip);
                return next();
            } catch (err) {
                return res.status(429).json({ message: 'Too many requests', code: 429 })
            }
        })

    const PORT = process.env.PORT || 3333;

    await createConnection({
        type: "postgres",
        port: <number><unknown>process.env.DB_PORT,
        host: <string>process.env.DB_HOST,
        username: <string>process.env.DB_USER,
        password: <string>process.env.DB_PASSWORD,
        database: <string>process.env.DB_NAME,
        synchronize: false,
        entities: [...Tables],
        migrations: [__dirname + "/migrations/*.ts"],
        cli: { "migrationsDir": "migration/" },
        cache: { duration: 30000 },
    });

    Routes.forEach(route => {
        (app as any)[route.method](route.route, async (req: Request, res: Response, next: Function) => {
            const result = await (new (route.controller as any))[route.action](req, res, next);

            if (!(typeof result === 'object' && 'dontSend' in result)) {
                if (typeof result === 'object' && 'flagErro' in result) res.send(result)
                else result instanceof Error ? res.send(RetornoService.error(result)) : res.send(RetornoService.success(result));
            }

        });
    });

    app.listen(PORT);
    console.log(`🔥 Express server has started on http://localhost:${PORT} 🔥`);

}

run().catch(error => console.log(error));