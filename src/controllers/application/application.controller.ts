import { Request, Response } from 'express'
import { interfaces, controller, httpGet } from 'inversify-express-utils'
import { ApplicationService } from '../../services/application/application.service'

@controller('/')
export class ApplicationController implements interfaces.Controller {
    constructor(private applicationLogic: ApplicationService) {}

    @httpGet('/')
    sayHello(req: Request, res: Response): void {
        const message = this.applicationLogic.sayHello()
        res.send(message)
    }
}
