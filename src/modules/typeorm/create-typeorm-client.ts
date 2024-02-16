import { DataSource } from 'typeorm'

export const TYPEORM_CLIENT = Symbol.for('TYPEORM_CLIENT')
export type TypormClient = DataSource
export class PostgresDataSource extends DataSource {
    constructor(
        databaseName: string,
        entities: Array<string>,
        host: string,
        port: number,
        username: string,
        password?: string,
        synchronize = false,
        logging = false,
        subscribers: Array<string> =[],
        migrations: Array<string> =[],
    ) {
        super(
            {
                type: 'postgres',
                host: host,
                port: port,
                username: username,
                password: password,
                database: databaseName,
                synchronize: synchronize,
                logging: logging,
                entities: entities,
                subscribers: subscribers,
                migrations: migrations,
            }
        )
    }
    async createClient() {
        return this.initialize()
    }
}

