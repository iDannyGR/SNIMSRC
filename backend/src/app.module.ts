import { Module } from '@nestjs/common';
import { organizationModule } from './Organization/organization.module';
import { AreaModule } from './area/area.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { validate } from './config/env.validation'
import configuration from './config/configuration';

@Module({
  imports: [
    organizationModule,
    AreaModule, 
    AuthModule, 
    ConfigModule.forRoot({
      validate,
      isGlobal:true,
      load:[configuration]
    })
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
