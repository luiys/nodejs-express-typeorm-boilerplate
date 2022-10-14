//!Exemplo de controller

// import { Request } from 'express'
// import { Pessoa } from '../../entity/Pessoa'
// import { AppDataSource } from '../../connection'
// import { BadRequestException } from '../../utils/errors/400/BadRequestException'
// import { Get, Post } from '../../utils/decorators/Methods'

// export class UserController {

//     private defaultRepository = AppDataSource.getRepository(Pessoa)

//     @Get('/users')
//     all() {

//         return this.defaultRepository.find()

//     }

//     @Get('/users/:id')
//     one(request: Request) {

//         const pessoa = this.defaultRepository.findOne({ where: { id: Number(request.params.id) } })
//         if (!pessoa) throw new BadRequestException('Usuário nào encontrado')

//         return pessoa

//     }

//     @Post('/users')
//     save(request: Request) {

//         return this.defaultRepository.save(request.body)

//     }

// }
