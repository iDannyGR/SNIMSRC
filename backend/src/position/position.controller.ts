import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PositionService } from './position.service';
import { PositionDto } from './dto/create-position.dto';

@Controller('position')
export class PositionController {
  constructor(private readonly positionService: PositionService) {}

  @Post()
  create(@Body() createPositionDto: PositionDto) {
    return this.positionService.create(createPositionDto);
  }

  @Get()
  findAll() {
    return this.positionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.positionService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePositionDto: PositionDto) {
    return this.positionService.update(id, updatePositionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.positionService.remove(id);
  }
}
