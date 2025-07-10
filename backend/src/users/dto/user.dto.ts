import { IsString, IsNotEmpty, MinLength, IsOptional } from 'class-validator';
import { Transform } from 'class-transformer';
import { $Enums } from 'prisma/prisma-client';

export class UserDto {
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
  positionId?: string;

  @IsNotEmpty()
  @IsString()
  role: $Enums.Roles;

  @IsString()
  @IsNotEmpty({ message: 'write a area' })
  areaId: string;
}
