// // import { Request } from 'express'
// // import { Get } from '../../utils/decorators/Methods'
// // import { PrismaClient } from '@prisma/client'

// export class UserController {

//     private defaultRepository = AppDataSource.getRepository(Pessoa)

//     @Get('/users')
//     all() {

//         return this.defaultRepository.find()

//     }

//     @Get('/users/:id')
//     one(request: Request) {

//         try {

//             const pessoa = this.defaultRepository.findOne({ where: { id: Number(request.params.id) } })
//             if (!pessoa) throw new BadRequestException('Usuário nào encontrado')

// //     prisma = new PrismaClient()

//         } catch (error) {

// //         return await this.prisma.pessoa.findMany()

//         }

//     }

// //         const pessoa = await this.prisma.pessoa.findFirstOrThrow({ where: { id: Number(request.params.id) } })
// //         return pessoa

//         return this.defaultRepository.save(request.body)

//     }

// }
