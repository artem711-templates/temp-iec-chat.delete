// PLUGINS IMPORTS //
import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { TypeOrmModule } from '@nestjs/typeorm'
import { FirebaseAdminModule } from '@aginix/nestjs-firebase-admin'
import * as admin from 'firebase-admin'

// EXTRA IMPORTS //
import { FirebaseConfig, GraphQLConfig, TypeORMConfig } from './config'
import * as routes from './routes'

/////////////////////////////////////////////////////////////////////////////

@Module({
  imports: [
    GraphQLModule.forRootAsync({
      useClass: GraphQLConfig,
    }),
    TypeOrmModule.forRootAsync({
      useClass: TypeORMConfig,
    }),
    FirebaseAdminModule.forRootAsync({
      useFactory: () => ({
        credential: admin.credential.applicationDefault(),
      }),
    }),
    ...Object.values(routes),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
