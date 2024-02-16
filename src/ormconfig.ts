import { DataSourceOptions } from 'typeorm'


const ormConfig: DataSourceOptions = {
    type: 'postgres',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || '5432'),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    synchronize: true,
    logging: false,
    entities: ['entities/*.entity.ts'],
    migrations: ['migrations/*.migration.ts'],
}

export default ormConfig
