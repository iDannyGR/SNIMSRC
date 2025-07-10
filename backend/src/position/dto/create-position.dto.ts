import { IsNotEmpty, IsString, Length } from 'class-validator';

export class PositionDto {
  @IsString()
  @Length(4, 32)
  @IsNotEmpty({ message: 'please enter a complete name' })
  name: string;
}
