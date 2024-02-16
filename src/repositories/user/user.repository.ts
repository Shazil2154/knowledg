import { inject, injectable } from 'inversify'
import { UserEntity } from '../../entities/user.entity'
import { DataSource, DeepPartial, Repository } from 'typeorm'
import { TYPEORM_CLIENT } from '../../modules/typeorm/create-typeorm-client'

@injectable()
export class UserRepository {
    private readonly repository:  Repository<UserEntity>

    constructor(@inject(TYPEORM_CLIENT) dataSource: DataSource) {
        this.repository = dataSource.getRepository(UserEntity)
    }

    async getAll() {
        return this.repository.find()
    }

    async getById(id: number) {
        return this.repository.findOne({
            where: {
                id: id
            }
        })
    }
    
    async save(entities: DeepPartial<UserEntity>) {
        return this.repository.save(entities)
    }
}