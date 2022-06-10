
import { Get } from '../../utils/decorators/Methods'
import config from './../../api.config.json'

export class SistemaController {

    @Get('/sistema/versao')
    verificaVersao() {

        return {
            versao: config.versaoApp.versao,
            flagObrigatorio: config.versaoApp.flagObrigatorio
        }

    }

}

