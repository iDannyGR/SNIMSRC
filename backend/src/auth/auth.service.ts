import { Injectable, UnauthorizedException } from '@nestjs/common';
import { comparePassword } from 'src/utils/encrypt';
import { LoginDto } from './dto';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async singIn({ email, password }: LoginDto) {
    const user = await this.userService.findByEmail(email);

    if (!user) throw new UnauthorizedException('invalid email');

    const isPasswordValid = await comparePassword(password, user.password);
    if (!isPasswordValid) throw new UnauthorizedException('invalid password');

    const payload = { email: user.email };
    const token = await this.jwtService.signAsync(payload);
    return {
      token,
      email,
    };
  }
}
