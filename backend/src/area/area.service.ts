import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma/prisma.service';
import { CreateAreaDto, UpdateAreaDto } from 'src/area/dto';
@Injectable()
export class AreaService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateAreaDto): Promise<CreateAreaDto> {
    const existingArea = await this.prisma.area.findUnique({where: { name: data.name }});
      if(!existingArea) {
        throw new NotFoundException(`Area with name ${data.name} already exists`);
      }
    return this.prisma.area.create({ data });
  }

  async findAll(): Promise<CreateAreaDto[]> {
    try {
      return this.prisma.area.findMany({ where: { deleteAt: null } });
    } catch (error) {
      throw new NotFoundException('No areas found');
    }
  }

  async findOne(id: string): Promise<CreateAreaDto> {
    const data = await this.prisma.area.findUnique({
      where: { id },
    });
    if (!data) throw new NotFoundException('wrong id data');
    return data;
  }

  async update(id: string, data: UpdateAreaDto) {
    const isExists = await this.prisma.area.findUnique({ where: { id } });
    if (!isExists) throw new NotFoundException('wrong id data');
    try {
      return await this.prisma.area.update({
        where: { id },
        data,
      });
    } catch (error) {
      throw new NotFoundException(`wrong ${id} data`);
    }
  }

  async remove(id: string) {
    const area = await this.prisma.area.findUnique({ where: { id } });
    if (!area) throw new NotFoundException('wrong id data');
    return await this.prisma.area.update({
      where: { id },
      data: { deleteAt: new Date() },
    });
  }
}
