import { injectable } from 'inversify'
import { UserRepository } from '../../repositories/user/user.repository'
import { IUser } from '../../types/user.type'
import { UserEntity } from '../../entities/user.entity'

@injectable()
export class UserService {

    constructor(private readonly userRepository: UserRepository) {}

    getAll(): Promise<UserEntity[]> {
        return this.userRepository.getAll()
    }

    getById(userId: number): Promise<UserEntity> {
        return this.userRepository.getById(userId)
    }

    createUser(user: Omit<IUser, 'id'>) {
        return this.userRepository.save(user)
    }
}
