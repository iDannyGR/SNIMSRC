import { Module } from '@nestjs/common';
import { organizationModule } from './Organization/organization.module';
import { UsersModule } from './users/users.module';
import { AreaModule } from './area/area.module';

@Module({
  imports: [organizationModule, UsersModule, AreaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
