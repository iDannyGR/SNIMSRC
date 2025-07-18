import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SiteService } from './site.service';
import { SiteDto } from './dto/create-site.dto';

@Controller('site')
export class SiteController {
  constructor(private readonly siteService: SiteService) {}

  @Post()
  async create(@Body() data: SiteDto) {
    return await this.siteService.create(data);
  }

  @Get()
  async findAll() {
    return await this.siteService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.siteService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() data: SiteDto) {
    return await this.siteService.update(id, data);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.siteService.remove(id);
  }
}
