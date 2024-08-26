import { Module } from '@nestjs/common';
import { OrganizationService } from './organization.service';
import { orgnizationController } from './organization.controller';

@Module({
  controllers: [orgnizationController],
  providers: [OrganizationService],
  imports: [],
})
export class organizationModule {}
