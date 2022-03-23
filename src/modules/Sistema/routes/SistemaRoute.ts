import { SistemaController } from '../controller/SistemaController'

export const SistemaRoute = [
    {
        method: 'get',
        route: '/sistema/versao',
        controller: SistemaController,
        action: 'verificaVersao',
    }
]
