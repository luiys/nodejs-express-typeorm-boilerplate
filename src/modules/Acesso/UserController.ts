// import { Request } from 'express'
// import { Get } from '../../utils/decorators/Methods'
// import { PrismaClient } from '@prisma/client'

// export class UserController {

//     prisma = new PrismaClient()

//     @Get('/users')
//     async all() {

//         return await this.prisma.pessoa.findMany()

//     }

//     @Get('/users/:id')
//     async one(request: Request) {

//         const pessoa = await this.prisma.pessoa.findFirstOrThrow({ where: { id: Number(request.params.id) } })
//         return pessoa

//     }

// }

//! Controller de exemplo
