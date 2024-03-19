import { Injectable } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from './dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateUserDto): Promise<CreateUserDto> {
    const { email, firstName, lastName, password, role, position } = data;
    return await this.prisma.user.create({
      data: {
        email,
        firstName,
        lastName,
        password,
        position: position,
        role,
      },
    });
  }

  async findAll(): Promise<CreateUserDto[]> {
    return await this.prisma.user.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.user.findUnique({
      where: {
        id,
      },
    });
  }

  async update(id: number, data: UpdateUserDto): Promise<CreateUserDto> {
    return await this.prisma.user.update({
      where: { id },
      data,
    });
  }

  async remove(id: number) {
    return await this.prisma.user.delete({
      where: { id },
    });
  }
}
