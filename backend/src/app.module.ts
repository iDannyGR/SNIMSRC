import { Module } from '@nestjs/common';
import { organizationModule } from './Organization/organization.module';
import { UsersModule } from './users/users.module';
import { AreaModule } from './area/area.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [organizationModule, UsersModule, AreaModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
