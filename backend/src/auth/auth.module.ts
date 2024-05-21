import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { JwtModule, JwtModuleOptions } from '@nestjs/jwt';


@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [
    PrismaModule,
    JwtModule.registerAsync({
      useFactory: () : JwtModuleOptions =>( {
        global: true,
      })
    }),
  ],
})
export class AuthModule {}
