import 'reflect-metadata'
import { Container } from 'inversify'
import { ApplicationController } from '../controllers/application/application.controller'
import { typeormModule } from '../modules/typeorm/typeorm.module'
import { UserController } from '../controllers/user/user.controller'

export async function initializeContainer() {
    const container = new Container({ autoBindInjectable: true, defaultScope: 'Singleton' })

    // Binding Controllers
    container.bind<ApplicationController>(ApplicationController).to(ApplicationController).inSingletonScope()
    container.bind<UserController>(UserController).to(UserController).inSingletonScope()

    // Load Modules
    // container.load(sampleModule)    
    
    // Load Async Modules
    await container.loadAsync(typeormModule)

    return container
}

