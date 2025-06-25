import { Injectable } from '@nestjs/common';
import { PositionDto } from './dto/create-position.dto';
import { UpdatePositionDto } from './dto/update-position.dto';
import { PrismaService } from 'src/services/prisma/prisma.service';

@Injectable()
export class PositionService {
  constructor(private readonly prisma: PrismaService) {}
  create(data: PositionDto) {
    return this.prisma.position.create({data});
  }

  findAll() {
    return this.prisma.position.findMany();
  }

  findOne(id: number) {
    return this.prisma.position.findUnique({where: { id }  })
}

  update(id: number, data: UpdatePositionDto) {
    return this.prisma.position.update({
      where: { id };
      data
  })}

  remove(id: number) {
    return  this.prismaupdate(id, { deleteAt: new Date() });
  }
}
