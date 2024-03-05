import { IsFQDN, IsNotEmpty, Length } from "class-validator";

export class organizationDto {
  @IsNotEmpty({ message: 'must write your Organization name' })
  @Length(3, 255)
  name: string;

  @IsNotEmpty({ message: 'write a website URL' })
  @Length(3, 255)
  @IsFQDN()
  website: string;

  @IsNotEmpty({ message: 'write a phone number' })
  @Length(9)
  phone: string;
}