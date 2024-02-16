import { AsyncContainerModule } from 'inversify'
import { PostgresDataSource, TYPEORM_CLIENT, TypormClient } from './create-typeorm-client'

export const DATABASE = process.env.DB_NAME || 'knoledg'

export const typeormModule = new AsyncContainerModule(async (bind) => {
    const host = process.env.DB_HOST || 'localhost'
    const port = Number(process.env.DB_PORT) || 5432
    const username = process.env.DB_USER || 'postgres'
    const password =  process.env.DB_PASSWORD
    const database =  process.env.DB_NAME
    const entityDir = process.env.ENTITY_DIR || 'build/entities/*.entity.*'

    const dataSource = new PostgresDataSource(
        database,
        [entityDir],
        host,
        port,
        username,
        password,
        true,
        true
    )
    const connection = await dataSource.createClient()
    // RelationalDb connection client
    bind<TypormClient>(TYPEORM_CLIENT)
        .toDynamicValue(() => connection)
        .inSingletonScope()
})
