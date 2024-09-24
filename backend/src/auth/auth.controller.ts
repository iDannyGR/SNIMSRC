import { Controller, Post, Body, Get, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto, RegisterDto } from './dto';
import { AuthGuard } from 'src/guards/auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async loginUser(@Body() login: LoginDto) {
    return await this.authService.login(login);
  }

  @Post('signup')
  async createUser(@Body() data: RegisterDto) {
    return await this.authService.signup(data);
  }
  @Get('profile')
  @UseGuards(AuthGuard)
  profile() {
    return '`profile';
  }
}
