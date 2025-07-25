import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AreaService } from './area.service';
import { CreateAreaDto } from './dto/create-area.dto';
import { UpdateAreaDto } from './dto/update-area.dto';

@Controller('area')
export class AreaController {
  constructor(private readonly areaService: AreaService) {}

  @Post()
  async create(@Body() createAreaDto: CreateAreaDto): Promise<CreateAreaDto> {
    return await this.areaService.create(createAreaDto);
  }

  @Get()
  async findAllAreas(): Promise<CreateAreaDto[]> {
    return await this.areaService.findAll();
  }

  @Get(':id')
  async findOneArea(@Param('id') id: string): Promise<CreateAreaDto> {
    return await this.areaService.findOne(id);
  }

  @Patch(':id')
  async updateArea(@Param('id') id: string, @Body() data: UpdateAreaDto): Promise<CreateAreaDto> {
    return await this.areaService.update(id, data);
  }

  @Delete(':id')
  async removeArea(@Param('id') id: string): Promise<CreateAreaDto> {
    return await this.areaService.remove(id);
  }
}
