import {
  Controller,
  Get,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException,
  ParseIntPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  async findAllUser() {
    //for get query data need add a common nest @Query() query:any or validate interface
    const data = await this.userService.findAll();
    if (!data) throw new NotFoundException('no data');
    return data;
  }

  @Get(':id')
  async findOneUser(@Param('id') id: string) {
    return await this.userService.findOne(+id); // simbol "+" send representation numeric of string
  }

  @Patch(':id')
  async updateUser(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return await this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  async removeUser(@Param('id', ParseIntPipe) id: number) {
    //pipe to validate and transform data in params
    return await this.userService.remove(id);
  }
}
