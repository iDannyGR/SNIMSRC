import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto) {
    return await this.usersService.create(createUserDto);
  }

  @Get()
  async findAllUser() {
    const data = await this.usersService.findAll();
    if (!data) throw new NotFoundException('no data');
    return data;
  }

  @Get(':id')
 async findOneUser(@Param('id') id: string) {
      return await this.usersService.findOne(+id);
  }

  @Patch(':id')
  async updateUser(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
      return await this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  async removeUser(@Param('id') id: string) {
      return await this.usersService.remove(+id);

  }
}
