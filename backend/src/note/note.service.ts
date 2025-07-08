import { Injectable } from '@nestjs/common';
import { NoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { PrismaService } from 'src/services/prisma/prisma.service';

@Injectable()
export class NoteService {
  constructor(private readonly prisma:PrismaService) {}
  
  async create(data: NoteDto) {
    return await this.prisma.note.create({data});
  }

  findAll() {
    return `This action returns all note`;
  }

  findOne(id: number) {
    return `This action returns a #${id} note`;
  }

  update(id: number, updateNoteDto: UpdateNoteDto) {
    return `This action updates a #${id} note`;
  }

  remove(id: number) {
    return `This action removes a #${id} note`;
  }
}
