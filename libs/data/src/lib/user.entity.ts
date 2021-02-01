// PLUGINS IMPORTS //
import { Field, InputType, ObjectType } from '@nestjs/graphql'
import { Column, Entity, ObjectIdColumn } from 'typeorm'
import { Expose, plainToClass } from 'class-transformer'
import { v4 as uuid } from 'uuid'

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

@ObjectType()
@Entity({
  name: 'users',
  orderBy: {
    createdAt: 'ASC',
  },
})
export class UserEntity {
  @Field()
  @Expose()
  @ObjectIdColumn()
  _id: string

  @Field()
  @Expose()
  @Column()
  firstName: string

  @Field()
  @Expose()
  @Column()
  lastName: string

  constructor(user: Partial<UserEntity>) {
    if (user) {
      Object.assign(
        this,
        plainToClass(UserEntity, user, { excludeExtraneousValues: true })
      )
      this._id = this._id || uuid()
    }
  }
}
