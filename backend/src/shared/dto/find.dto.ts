import { OmitType } from '@nestjs/mapped-types';
import { RegisterDto } from './register.dto';

export class GetUserDto extends OmitType(RegisterDto, ['password'] as const) {}
