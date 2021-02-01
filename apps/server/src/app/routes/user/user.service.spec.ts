// PLUGINS IMPORTS //
import { FirebaseAdminModule } from '@aginix/nestjs-firebase-admin'
import { Test, TestingModule } from '@nestjs/testing'
import { TypeOrmModule } from '@nestjs/typeorm'
import admin from 'firebase-admin'

// EXTRA IMPORTS //
import { UserEntity } from '@lib/data'
import { UserService } from './user.service'
import { TypeORMConfig } from '../../config'

/////////////////////////////////////////////////////////////////////////////

describe('UserResolver Unit test', () => {
  let service: UserService

  const input = { firstName: 'Alexandro', lastName: 'Jefferson' }
  let data = {
    _id: null,
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRootAsync({
          useClass: TypeORMConfig,
        }),
        TypeOrmModule.forFeature([UserEntity]),
        FirebaseAdminModule.forRootAsync({
          useFactory: () => ({
            credential: admin.credential.applicationDefault(),
          }),
        }),
      ],
      providers: [UserService],
    }).compile()

    service = module.get<UserService>(UserService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })

  describe('user operations', () => {
    it('should return an account', async () => {
      const result = await service.create(input)
      const { _id, ...obj } = result

      expect(obj).toEqual(input)
      data = { _id }
    })

    it('should retrieve the created account', async () => {
      const result = await service.getById(data._id)
      expect(result).toEqual({ ...input, ...data })
    })
  })
})
