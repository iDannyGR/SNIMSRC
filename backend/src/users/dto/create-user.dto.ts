import { IsNotEmpty, IsString, Length } from "class-validator";

export class CreateUserDto {
  @IsString()
  @IsNotEmpty({ message: 'write a email' })
  email: String;

  @IsString()
  @IsNotEmpty({ message: 'write a names' })
  f_name: String;

  @IsString()
  @IsNotEmpty({ message: 'write last name' })
  l_name: String;

  @IsString()
  @IsNotEmpty()
  @Length(8, 32)
  password: String;

  @IsString()
  position?: String;

  @IsNotEmpty()
  @IsString()
  role: String;
}
