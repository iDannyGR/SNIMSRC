import { Injectable, UnauthorizedException, BadRequestException } from '@nestjs/common';
import { comparePassword } from 'src/utils/encrypt';
import { LoginDto, RegisterDto } from './dto';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { hashPassword } from 'src/utils/encrypt';
import { PrismaService } from 'src/prisma/prisma.service';


@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
    private prisma: PrismaService,
  ) {}

  async signup(UserData: RegisterDto): Promise<GetUserDto> {
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

  async login({ email, password }: LoginDto) {
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
