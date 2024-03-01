import { Controller, Get, Put, Post, Delete, Body, Param } from '@nestjs/common';
import { OrganizationService } from './organization.service';
import { Organization } from '@prisma/client';

@Controller('organization')
export class orgnizationController {
  constructor(private readonly organizationService: OrganizationService) {}

  @Get()
  async getOrganization() {
    return await  this.organizationService.getOrganization();
  }

  @Post()
  async createOrganization(@Body() data: Organization) {
   return await this.organizationService.createOrganization(data);
  }

  @Delete(':id')
  async deleteOrganization(@Param('id') id: string) {
   return await this.organizationService.deleteOrganization(Number(id));
  }

  @Put(':id')
  async updateOrganization(@Param('id') id: string, @Body() data: Organization) {
   return await this.organizationService.updateOrganization(Number(id), data);
  }
}
