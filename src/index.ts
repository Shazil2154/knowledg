import 'reflect-metadata'
import http from 'http'
import { setupExpressServer } from './adapters/express'
import { initializeContainer } from './containers/inversify.container'
import { LoggerService } from './services/logger/logger.service'

async function main() {
    const expressApplication = setupExpressServer()
    const PORT = process.env.PORT || 8080

    const server = http.createServer(await expressApplication)
    const container = await initializeContainer()
    const loggerService = container.get<LoggerService>(LoggerService)

    loggerService.debug('Process', process.env)

    server.listen(PORT, () => {
        loggerService.logInfo(`Server started at port ${PORT}`)
    })
}

main()
