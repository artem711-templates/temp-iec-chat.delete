// # PLUGINS IMPORTS //
import { Module } from '@nestjs/common'
import { APP_GUARD } from '@nestjs/core'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AuthGuard } from '../../shared/guards/auth.guard'

// # COMPONENTS IMPORTS //
import { UserEntity } from '@lib/data'
import { UserResolver } from './user.resolver'
import { UserService } from './user.service'

// # EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  providers: [
    UserResolver,
    UserService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class UserModule {}
