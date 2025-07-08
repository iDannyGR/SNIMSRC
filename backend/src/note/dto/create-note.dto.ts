import { IsDate, IsNotEmpty, IsString, MinLength } from "class-validator";

export class NoteDto {
  @IsString()
  @IsNotEmpty()
  siteId: { connect: { id: string } };
  
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
  authorId: { connect: { id: string } };

  @IsDate()
  deleteAt?: Date | null;
}
