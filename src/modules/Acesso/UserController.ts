// import { Request } from 'express'
// import { Get } from '../../utils/decorators/Methods'
// import Prisma from 'prisma'

// export class UserController {

//     prisma = new Prisma()

//     @Get('/users')
//     all() {

//         return await this.prisma.findMany()

//     }

//     @Get('/users/:id')
//     one(request: Request) {

//         const pessoa = await this.prisma.findOneOrThrow({ where: { id: Number(request.params.id) } })
//         return pessoa

//     }

// //         const pessoa = await this.prisma.pessoa.findFirstOrThrow({ where: { id: Number(request.params.id) } })
// //         return pessoa

//         return this.defaultRepository.save(request.body)

//     }

// }
