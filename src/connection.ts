import 'reflect-metadata'
import { DataSource } from 'typeorm'
import { Tables } from './entity'
import * as dotenv from 'dotenv'

dotenv.config()

export const AppDataSource = new DataSource({
    type: 'postgres',
    port: Number(<number><unknown>process.env.DB_PORT),
    host: <string>process.env.DB_HOST,
    username: <string>process.env.DB_USER,
    password: <string>process.env.DB_PASSWORD,
    database: <string>process.env.DB_NAME,
    synchronize: false,
    entities: [...Tables],
})

