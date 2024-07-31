import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdateUserDto } from '../users/dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { excludeFromObject, excludeFromList } from 'src/utils/excludeFields';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async update(id: number, data: UpdateUserDto): Promise<RegisterDto> {
    try {
      return await this.prisma.user.update({
        where: { id },
        data,
      });
    } catch (error) {
      throw new NotFoundException(`wrong id: ${id}`);
    }
  }

  async remove(id: number) {
    try {
      return await this.prisma.user.update({
        where: { id },
        data: { deleteAt: new Date() },
      });
    } catch (error) {
      throw new NotFoundException(`wrong id: ${id}`);
    }
  }

  async findAll(): Promise<GetUserDto[]> {
    try {
      const data = await this.prisma.user.findMany({ where: { deleteAt: null } });
      if (!data || data.length === 0) throw new NotFoundException('error retriving information');
      return excludeFromList(data, ['password']);
    } catch (error) {
      throw new Error('bad data request');
    }
  }

  async findOne(id: number): Promise<GetUserDto> {
    const data = await this.prisma.user.findUnique({
      where: {
        id,
        deleteAt: null,
      },
    });
    if (!data) throw new NotFoundException(`wrong id: ${id}`);
    return excludeFromObject(data, ['password']);
  }

  async findByEmail(email: string): Promise<RegisterDto> {
    return await this.prisma.user.findUnique({ where: { email } });
  }
}
