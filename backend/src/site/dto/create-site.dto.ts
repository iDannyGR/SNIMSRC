import { IsString, IsNotEmpty } from 'class-validator';

export class SiteDto {
  @IsString()
  @IsNotEmpty()
  name: string;
}
