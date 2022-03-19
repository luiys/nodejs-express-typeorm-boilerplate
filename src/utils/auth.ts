import { Request, Response } from "express";


export default function authTokenValidation(request: Request, response: Response) {

    if (request.headers.authorization) {

        const auth = request.headers.authorization
        if (auth === `Basic ${process.env.API_TOKEN}`) return false


        return true

    }

    return true

}