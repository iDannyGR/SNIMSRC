import { Module } from '@nestjs/common';
import { organizationModule } from './Organization/organization.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [organizationModule, UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
