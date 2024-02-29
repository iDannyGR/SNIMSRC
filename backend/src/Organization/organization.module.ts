import { Module } from '@nestjs/common';
import { OrganizationService } from './organization.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { orgnizationController } from './organization.controller';

@Module({
  controllers: [orgnizationController],
  providers: [OrganizationService],
  imports: [PrismaModule],
})
export class organizationModule {}
