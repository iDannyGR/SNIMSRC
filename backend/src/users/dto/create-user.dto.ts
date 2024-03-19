import { $Enums } from '@prisma/client';
import { IsNotEmpty, IsOptional, IsString, Length } from 'class-validator';

export class CreateUserDto {
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
  @IsNotEmpty()
  @Length(8, 32)
  password: string;

  @IsString()
  @IsOptional()
  position?: { connect: { id: number } };

  @IsNotEmpty()
  @IsString()
  role: $Enums.Roles;
}
