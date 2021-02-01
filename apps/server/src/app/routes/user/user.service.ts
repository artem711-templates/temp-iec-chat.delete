// # PLUGINS IMPORTS //
import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

// # COMPONENTS IMPORTS //
import { UserEntity } from '@lib/data'
import { CreateUserInput } from './user.types'

/////////////////////////////////////////////////////////////////////////////

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>
  ) {}

  async getById(_id: string): Promise<UserEntity> {
    return await this.userRepository.findOne({ _id })
  }

  async create(input: CreateUserInput): Promise<UserEntity> {
    return await this.userRepository.save(new UserEntity(input))
  }
}
