import { Request } from 'express'
import { Pessoa } from '../../../entity/Pessoa'
import { AppDataSource } from '../../../connection'
import { BadRequestException } from '../../../utils/errors/400/BadRequestException'

export class UserController {

    private defaultRepository = AppDataSource.getRepository(Pessoa)

    all() {

        return this.defaultRepository.find()

    }

    one(request: Request) {

        try {

            const pessoa = this.defaultRepository.findOne({ where: { id: Number(request.params.id) } })
            if (!pessoa) throw new BadRequestException('Usuário nào encontrado')

            return pessoa

        } catch (error) {

            return error

        }

    }

    save(request: Request) {

        return this.defaultRepository.save(request.body)

    }

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
