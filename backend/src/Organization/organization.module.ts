import { Module } from '@nestjs/common';
import { OrganizationService } from './organization.service';

@Module({
  providers: [],
  exports: [OrganizationService],
})
export class organizationModule {}
