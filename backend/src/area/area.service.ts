import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateAreaDto, UpdateAreaDto } from 'src/area/dto';
@Injectable()
export class AreaService {
  constructor(private prisma:PrismaService){}

 async create(createAreaDto: CreateAreaDto) {
    return 'This action adds a new area';
  }

  async findAll() {
    return `This action returns all area`;
  }

  async findOne(id: number) {
    return `This action returns a #${id} area`;
  }

  async update(id: number, updateAreaDto: UpdateAreaDto) {
    return `This action updates a #${id} area`;
  }

  async remove(id: number) {
    return `This action removes a #${id} area`;
  }
}
