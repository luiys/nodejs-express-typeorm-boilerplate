
import config from './../../../api.config.json'

export class SistemaController {

    verificaVersao() {

        return {
            versao: config.versaoApp.versao,
            flagObrigatorio: config.versaoApp.flagObrigatorio
        }

    }

}

