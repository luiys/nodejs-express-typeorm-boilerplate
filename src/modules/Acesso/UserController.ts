import { Request } from 'express'
import { Pessoa } from '../../entity/Pessoa'
import { AppDataSource } from '../../connection'
import { BadRequestException } from '../../utils/errors/400/BadRequestException'
import { Delete, Get, Post } from '../../utils/decorators/Methods'

export class UserController {

    private defaultRepository = AppDataSource.getRepository(Pessoa)

    @Get('/users')
    all() {

        return this.defaultRepository.find()

    }

    @Get('/users/:id')
    one(request: Request) {

        try {

            const pessoa = this.defaultRepository.findOne({ where: { id: Number(request.params.id) } })
            if (!pessoa) throw new BadRequestException('Usuário nào encontrado')

            return pessoa

        } catch (error) {

            return error

        }

    }

    @Post('/users')
    save(request: Request) {

        return this.defaultRepository.save(request.body)

    }

    @Delete('/users/:id')
    async remove(request: Request) {

        try {

            const userToRemove = await this.defaultRepository.findOne({ where: { id: Number(request.params.id) } })
            if (!userToRemove) throw new Error('User not found')

            await this.defaultRepository.remove(userToRemove)

        } catch (error) {

            return error

        }

    }

}
