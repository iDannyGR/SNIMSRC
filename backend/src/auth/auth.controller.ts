import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException,
  ParseIntPipe,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { UpdateUserDto } from './dto/update.dto';
import { LoginDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  async createUser(@Body() createUserDto: RegisterDto) {
    return await this.authService.create(createUserDto);
  }

  @Get()
  async findAllUser() {
    //for get query data need add a common nest @Query() query:any or validate interface
    const data = await this.authService.findAll();
    if (!data) throw new NotFoundException('no data');
    return data;
  }

  @Get(':id')
  async findOneUser(@Param('id') id: string) {
    return await this.authService.findOne(+id); // simbol "+" send representation numeric of string
  }

  @Patch(':id')
  async updateUser(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return await this.authService.update(+id, updateUserDto);
  }

  @Delete(':id')
  async removeUser(@Param('id', ParseIntPipe) id: number) {
    //pipe to validate and transform data in params
    return await this.authService.remove(id);
  }
  @Post('login')
  async loginUser(@Body() login : LoginDto){
    return await this.authService.login(login);
  }
}
