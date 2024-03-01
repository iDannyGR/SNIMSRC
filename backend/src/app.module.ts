import { Module } from '@nestjs/common';
import { organizationModule } from './Organization/organization.module';

@Module({
  imports: [organizationModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
