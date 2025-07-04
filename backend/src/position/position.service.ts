import { Injectable } from '@nestjs/common';
import { PositionDto } from './dto/create-position.dto';
import { PrismaService } from 'src/services/prisma/prisma.service';

@Injectable()
export class PositionService {
  constructor(private readonly prisma: PrismaService) {}
 
  async create(data: PositionDto) {
    const isExists = await this.prisma.position.findMany({
      where: { name: data.name }
    });
    if (isExists) {
      throw new Error('Position already exists');
    } 
    return await this.prisma.position.create({data});
  }

  async findAll() {
    try {
      return await this.prisma.position.findMany(
        { where: { deleteAt: null } }
      );
    } catch (error) {
      throw new Error('Error fetching positions');
    }
  }

  async findOne(id: string) {
  const position = await this.prisma.position.findUnique({
    where: { id },
  });
  if (!position) {
    throw new Error('Position not found');
  }
  return position;
}

  async update(id: string, data: PositionDto) {
    const isExists = await this.prisma.position.findUnique({ where: { id } });
    if (!isExists) {
      throw new Error('Position not found');
    }
    try {
      return await this.prisma.position.update({
        where: { id },
        data
      });
    } catch (error) {
      throw new Error('Error updating position');
    }
  }

  async remove(id: string) {
   const position = await this.prisma.position.findUnique({ where: { id } });
    if (!position) {
      throw new Error('Position not found');
    }
    try {
      return await this.prisma.position.update({
        where: { id },
        data: { deleteAt: new Date() }
      });
    } catch (error) {
      throw new Error('Error deleting position');
    } 
  }
}
