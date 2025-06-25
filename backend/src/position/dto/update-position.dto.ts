import { PartialType } from '@nestjs/mapped-types';
import { PositionDto } from './create-position.dto';

export class UpdatePositionDto extends PartialType(PositionDto) {}
