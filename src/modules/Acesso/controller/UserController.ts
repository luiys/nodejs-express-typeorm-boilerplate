import { getRepository } from 'typeorm'
import { Request } from 'express'
import { Pessoa } from '../../../entity/Pessoa'

export class UserController {

    private userRepository = getRepository(Pessoa)

    all() {

        return this.userRepository.find()

    }

    one(request: Request) {

        return this.userRepository.findOne(request.params.id)

    }

    save(request: Request) {

        return this.userRepository.save(request.body)

    }

    async remove(request: Request) {

        try {

            const userToRemove = await this.userRepository.findOne(request.params.id)
            if (!userToRemove) throw new Error('User not found')

            await this.userRepository.remove(userToRemove)

        } catch (error) {

            return error

        }

    }

}
