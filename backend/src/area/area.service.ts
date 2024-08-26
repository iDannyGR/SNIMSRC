import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma/prisma.service';
import { CreateAreaDto, UpdateAreaDto } from 'src/area/dto';
@Injectable()
export class AreaService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateAreaDto): Promise<CreateAreaDto> {
    return this.prisma.area.create({ data });
  }

  async findAll(): Promise<CreateAreaDto[]> {
    return this.prisma.area.findMany({ where: { deleteAt: null } });
  }

  async findOne(id: number): Promise<CreateAreaDto> {
    const data = await this.prisma.area.findUnique({
      where: { id },
    });
    if (!data) throw new NotFoundException('wrong id data');
    return data;
  }

  async update(id: number, updateAreaDto: UpdateAreaDto) {
    try {
      return await this.prisma.area.update({
        where: { id },
        data: updateAreaDto,
      });
    } catch (error) {
      throw new NotFoundException(`wrong ${id} data`);
    }
  }

  async remove(id: number) {
    return await this.prisma.area.delete({
      where: { id },
    });
  }
}
