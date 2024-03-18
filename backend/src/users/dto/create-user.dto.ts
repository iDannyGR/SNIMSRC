import { $Enums } from "@prisma/client";
import { IsNotEmpty, IsString, Length } from "class-validator";

export class CreateUserDto {
  @IsString()
  @IsNotEmpty({ message: 'write a email' })
  email: string;

  @IsString()
  @IsNotEmpty({ message: 'write a names' })
  f_name: string;

  @IsString()
  @IsNotEmpty({ message: 'write last name' })
  l_name: string;

  @IsString()
  @IsNotEmpty()
  @Length(8, 32)
  password: string;

  @IsString()
  position?: number;

  @IsNotEmpty()
  @IsString()
  role: $Enums.Roles;
}
