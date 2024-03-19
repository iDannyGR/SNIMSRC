import { Injectable } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from './dto'
import { PrismaService } from 'src/prisma/prisma.service'

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(data : CreateUserDto): Promise<CreateUserDto> {
    const { email, f_name, l_name, password, role, position } = data;
    return await this.prisma.user.create({
      data: {
        email,
        f_name,
        l_name,
        password,
        position: { connect: { id: position } },
        role,
      },
    });
  }

 async findAll() : Promise<CreateUserDto[]> {
    return await this.prisma.user.findMany()
  }

 async findOne(id: number) {
    return `This action returns a #${id} user`;
  }

 async update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

 async remove(id: number) :Primise<> {
    return await this.prisma.user.findUnique(id)
  }
}
