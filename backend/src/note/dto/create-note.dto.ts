import { IsDate, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class NoteDto {
  @IsString()
  @IsNotEmpty()
  siteId: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  object: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  description: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  result: string;

  @IsString()
  @IsNotEmpty()
  authorId: string;

  @IsDate()
  deleteAt?: Date | null;
}
