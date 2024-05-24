import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { RegisterDto, UpdateUserDto, GetUserDto } from '../users/dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { hashPassword } from 'src/utils/encrypt';
import { excludeFromObject, excludeFromList } from 'src/utils/excludeFields';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(UserData: RegisterDto): Promise<GetUserDto> {
    const { password, email } = UserData;
    const user = await this.prisma.user.findUnique({ where: { email } });
    if (user) throw new BadRequestException('User alredy Exist');

    try {
      const encryptPassword = await hashPassword(password);
      const newUser = await this.prisma.user.create({
        data: {
          ...UserData,
          password: encryptPassword,
        },
      });

      return excludeFromObject(newUser, ['password']);
    } catch (error) {
      throw new Error(`bad data request`);
    }
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
