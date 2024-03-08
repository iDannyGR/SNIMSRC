import { Position, Roles, Note } from "@prisma/client";
import { IsNotEmpty } from "class-validator";

export class CreateUserDto {
    @IsNotEmpty({message:"write a email"})
    email:String; 
  f_name:String;
  l_name:String;
  password:String;
  position?:Position;
  role:Roles;
  notes:Note[];
}
