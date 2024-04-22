import { Module } from '@nestjs/common';
import { organizationModule } from './Organization/organization.module';
import { AreaModule } from './area/area.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [organizationModule, AreaModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
