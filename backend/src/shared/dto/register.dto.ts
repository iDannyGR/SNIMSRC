import { $Enums } from '@prisma/client';
import { Transform } from 'class-transformer';
import { IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator';

export class RegisterDto {
  @IsString()
  @IsNotEmpty({ message: 'write a email' })
  email: string;

  @IsString()
  @IsNotEmpty({ message: 'write a names' })
  firstName: string;

  @IsString()
  @IsNotEmpty({ message: 'write last name' })
  lastName: string;

  @IsString()
  @MinLength(6)
  @Transform(({ value }) => (value as string).trim())
  password: string;

  @IsString()
  @IsOptional()
  position?: { connect: { id: number } };

  @IsNotEmpty()
  @IsString()
  role: $Enums.Roles;
}
