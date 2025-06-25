import { Module } from '@nestjs/common';
import { organizationModule } from './Organization/organization.module';
import { AreaModule } from './area/area.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { validate } from './config/env.validation';
import { UsersModule } from './users/users.module';
import configuration from './config/configuration';
import { PrismaModule } from './services/prisma/prisma.module';
import { PositionModule } from './position/position.module';

@Module({
  imports: [
    PrismaModule,
    organizationModule,
    AreaModule,
    AuthModule,
    UsersModule,
    ConfigModule.forRoot({
      validate,
      isGlobal: true,
      load: [configuration],
    }),
    PositionModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
