import { Controller, Get, Put, Post, Delete, Body, Param } from '@nestjs/common';
import { OrganizationService } from './organization.service';
import { UpdateOrganization, CreateOrganizationDto } from './dto/organization.dto';

@Controller('organization')
export class orgnizationController {
  constructor(private readonly organizationService: OrganizationService) {}

  @Get()
  async getOrganization() {
    return await this.organizationService.getOrganization();
  }

  @Post()
  async createOrganization(@Body() data: CreateOrganizationDto) {
    return await this.organizationService.createOrganization(data);
  }

  @Delete(':id')
  async deleteOrganization(@Param('id') id: string) {
    return await this.organizationService.deleteOrganization(Number(id));
  }

  @Put(':id')
  async updateOrganization(@Param('id') id: string, @Body() data: UpdateOrganization) {
    return await this.organizationService.updateOrganization(Number(id), data);
  }
}
