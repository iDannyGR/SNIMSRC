import { Injectable } from '@nestjs/common';
import { NoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { PrismaService } from 'src/services/prisma/prisma.service';

@Injectable()
export class NoteService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: NoteDto) {
    try {
      return await this.prisma.note.create({ data });
    } catch (error) {
      throw new Error('Error creating note');
    }
  }

  async findAll() {
    try {
      return await this.prisma.note.findMany({
        where: { deleteAt: null },
      });
    } catch (error) {
      throw new Error('Error fetching notes');
    }
  }

  async findOne(id: string) {
    const isExists = await this.prisma.note.findUnique({
      where: { id },
    });
    if (!isExists) {
      throw new Error(`Note with id ${id} not found`);
    }
    return isExists;
  }

  async update(id: string, data: UpdateNoteDto) {
    const isExists = await this.prisma.note.findUnique({
      where: { id },
    });
    if (!isExists) {
      throw new Error(`Note with id ${id} not found`);
    }
    return await this.prisma.note.update({
      where: { id },
      data,
    });
  }

  async remove(id: string) {
    const isExists = await this.prisma.note.findUnique({
      where: { id },
    });
    if (!isExists) {
      throw new Error(`Note with id ${id} not found`);
    }
    return await this.prisma.note.update({
      where: { id },
      data: { deleteAt: new Date() },
    });
  }
}
