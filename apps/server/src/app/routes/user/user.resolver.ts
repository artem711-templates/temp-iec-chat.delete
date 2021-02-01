// PLUGINS IMPORTS //
import { Resolver, Query, Args, Mutation, Context } from '@nestjs/graphql'

// EXTRA IMPORTS //
import { UserEntity } from '@lib/data'
import { UserService } from './user.service'

import { CreateUserInput } from './user.types'

/////////////////////////////////////////////////////////////////////////////

@Resolver('User')
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => UserEntity)
  async getProfile(@Args('_id') _id: string): Promise<UserEntity> {
    return await this.userService.getById(_id)
  }

  @Mutation(() => UserEntity)
  async createUser(
    @Args('input') input: CreateUserInput,
    @Context() context
  ): Promise<UserEntity> {
    const user = context.req.user_credentials
    return this.userService.create(input)
  }
}
