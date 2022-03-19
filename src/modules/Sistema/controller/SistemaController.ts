
import { Request, Response } from "express";
import config from './../../../api.config.json'


export class SistemaController {

    async verificaVersao(request: Request, response: Response) {

        return {
            versao: config.versaoApp.versao,
            flagObrigatorio: config.versaoApp.flagObrigatorio
        }

    }

}


