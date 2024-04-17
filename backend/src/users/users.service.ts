import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from './dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from '@prisma/client';
import { createCipheriv, randomBytes, scrypt } from 'crypto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateUserDto): Promise<CreateUserDto> {
    const { email, firstName, lastName, password, role, position } = data;
    const bytes =randomBytes(16);
    const secret = 'abcdef';
    const algorithm = '';


    
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

  async findOne(id: number): Promise<User> {
    const data = await this.prisma.user.findUnique({
      where: {
        id,
      },
    });
    if (!data) throw new NotFoundException(`wrong id: ${id}`);
    return data;
  }

  async update(id: number, data: UpdateUserDto): Promise<CreateUserDto> {
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
}
