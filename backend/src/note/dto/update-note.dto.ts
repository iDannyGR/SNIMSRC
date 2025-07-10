import { PartialType } from '@nestjs/mapped-types';
import { NoteDto } from './create-note.dto';

export class UpdateNoteDto extends PartialType(NoteDto) {}
