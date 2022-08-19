// import { Request } from 'express'
// import { Get } from '../../utils/decorators/Methods'
// import Prisma from 'prisma'

// export class UserController {

//     prisma = new Prisma()

//     @Get('/users')
//     async all() {

//         return await this.prisma.findMany()

//     }

//     @Get('/users/:id')
//     async one(request: Request) {

//         const pessoa = await this.prisma.findOneOrThrow({ where: { id: Number(request.params.id) } })
//         return pessoa

//     }

// }

//! Controller de exemplo
