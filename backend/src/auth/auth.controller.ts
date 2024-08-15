import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto, RegisterDto } from './dto';

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
}
