import { Controller, Get, Put, Post, Delete, Body, Param, NotFoundException } from '@nestjs/common';
import { OrganizationService } from './organization.service';
import { Organization } from '@prisma/client';

@Controller('organization')
export class orgnizationController {
  constructor(private readonly organizationService: OrganizationService) {}

  @Get()
  async getOrganization() {
    const dataFound = await this.organizationService.getOrganization();
    if (!dataFound) throw new NotFoundException('data not found');
    return dataFound;
  }

  @Post()
  async createOrganization(@Body() data: Organization) {
    return await this.organizationService.createOrganization(data);
  }

  @Delete(':id')
  async deleteOrganization(@Param('id') id: string) {
    try {
      return await this.organizationService.deleteOrganization(Number(id));
    } catch (error) {
        throw new NotFoundException('wrong id data');
    }
  }

  @Put(':id')
  async updateOrganization(@Param('id') id: string, @Body() data: Organization) {
    try {
    return await this.organizationService.updateOrganization(Number(id), data);
    } catch (error) {
      throw new NotFoundException("wrong id data")
    }
  }
}
