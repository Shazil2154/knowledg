import { interfaces, controller, httpGet, httpPost, requestParam, requestBody } from 'inversify-express-utils'
import { UserService } from '../../services/user/user.service'
import { UserEntity } from '../../entities/user.entity'
import { IRespone } from '../../types/response.type'
import { IUser } from '../../types/user.type'

@controller('/user')
export class UserController implements interfaces.Controller {
    constructor(private userService: UserService) { }

    @httpGet('/')
    async getAll(): Promise<IRespone<UserEntity[]>> {

        try{
            const data = await this.userService.getAll()
            return {
                status: 200,
                message: 'success',
                data: data
            }
        } catch (error) {
            return {
                status: 400,
                error: error.message
            }
        }
    }

    @httpGet('/:id')
    async getById(
        @requestParam('id') id: number
    ): Promise<IRespone<UserEntity>> {
        
        try {
            const data = await this.userService.getById(id)
            return {
                status: 200,
                message: 'success',
                data: data
            }
        } catch (error) {
            return {
                status: 400,
                error: error.message
            }
        }
    }

    @httpPost('/')
    async createUser(
        @requestBody() body: Omit<IUser, 'id'>
    ): Promise<IRespone<UserEntity>> {

        try {
            const data = await this.userService.createUser(body)
            return {
                status: 201,
                message: 'user created successfully',
                data: data
            }
        } catch (error) {
            return {
                status: 400,
                error: error.message
            }
        }
    }


}
