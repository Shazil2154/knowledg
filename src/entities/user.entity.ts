import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { IUser } from '../types/user.type'

@Entity('users')
export class UserEntity implements IUser {
  @PrimaryGeneratedColumn()
      id: number

  @Column()
      name: string

  @Column()
      email: string
}