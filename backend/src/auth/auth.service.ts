import { Injectable, NotFoundException } from '@nestjs/common';
import { RegisterDto, UpdateUserDto, GetUserDto } from './dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { encrptPsw } from 'src/utils/encrypt';
import { excludeFromObject, excludeFromList } from 'src/utils/excludeFields';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  async create(UserData: RegisterDto): Promise<GetUserDto> {
    try {

      const { password } = UserData;
      const encryptPassword = encrptPsw(password) ;

      const newUser= await this.prisma.user.create({
        data: {
          ...UserData,
          password: encryptPassword,
        },
      });

      const filterData = excludeFromObject(newUser, ['password']);
      return filterData;

    } catch (error) {
      throw new Error(error);
    }
    
  }

  async findAll(): Promise<GetUserDto[]> {
    try {
      const data = await this.prisma.user.findMany();
      if (!data || data.length === 0) throw new NotFoundException('error retriving information');
      const filterData = excludeFromList(data, ['password']);
      return filterData;
    } catch (error) {
      throw new Error('bad data request');
    }
  }

  async findOne(id: number): Promise<GetUserDto> {
    const data = await this.prisma.user.findUnique({
      where: {
        id,
      },
    });
    if (!data) throw new NotFoundException(`wrong id: ${id}`);
    const filterData = excludeFromObject(data, ['password']);
    return filterData;
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
