import { InversifyExpressServer } from 'inversify-express-utils'
import { initializeContainer } from '../../containers/inversify.container'
import express from 'express'
import { LoggerService } from '../../services/logger/logger.service'

export async function setupExpressServer(): Promise<express.Application> {
    const container = await initializeContainer()
    const loggerService = container.get<LoggerService>(LoggerService)
    const server = new InversifyExpressServer(container)
    server.setConfig((app) => {
        app.use(express.json())
        app.use(loggerService.getLoggerMiddleware())
    })
    const app = server.build()
    return app
}
