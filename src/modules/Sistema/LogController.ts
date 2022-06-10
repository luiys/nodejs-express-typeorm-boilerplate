import { Request, Response } from 'express'
import { readdirSync, readFileSync } from 'fs'
import { Get } from '../../utils/decorators/Methods'

export class LogController {

    @Get('/logs')
    all(req: Request, res: Response) {

        const logsFiles = (readdirSync('./logs/request-response').filter(file => file.includes('log')).map(file => {

            const onlyDateBR = file.substr(5, 10)
            const onlyDateUSA = onlyDateBR.split('-')
            const date = `${onlyDateUSA[1]}-${onlyDateUSA[0]}-${onlyDateUSA[2]}`

            return {
                fileName: file,
                timestamp: new Date(date).getTime()
            }

        })).sort((a, b) => a.timestamp - b.timestamp)

        const logs = logsFiles.map(file => `\n<h2 style="margin:0;">-------${file.fileName}-------</h2><br>${readFileSync(`logs/request-response/${file.fileName}`, 'utf8').split('</br>').reverse().join('</br>')}<br>`).reverse().join('<br>')

        const html = `
            <html style="width:100%;height:auto;margin:0;">

                <head>
                    <title>Logs</title>
                </head>

                <body style="width:100vw;height:vh;margin:0;">

                    <p style="width:100%;height:auto;" >${logs}</p>

                </body>

            </html>
        `

        res.send(html)

    }

}
