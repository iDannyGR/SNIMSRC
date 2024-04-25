import { Injectable, NotFoundException } from '@nestjs/common';
import { RegisterDto, UpdateUserDto, GetUserDto } from './dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { encrptPsw } from 'src/utils/encrypt';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  async create(data: RegisterDto): Promise<RegisterDto> {
    const { email, firstName, lastName, password, role, position } = data;
    return await this.prisma.user.create({
      data: {
        email,
        firstName,
        lastName,
        password: encrptPsw(password),
        position: position,
        role,
      },
    });
  }

  async findAll(): Promise<GetUserDto[]> {
    return await this.prisma.user.findMany();
  }

  async findOne(id: number): Promise<GetUserDto> {
    const data = await this.prisma.user.findUnique({
      where: {
        id,
      },
    });
    if (!data) throw new NotFoundException(`wrong id: ${id}`);
    console.log(data)
    return data;
  }

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
}
