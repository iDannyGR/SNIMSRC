import { Injectable } from '@nestjs/common';
import { SiteDto } from './dto/create-site.dto';
import { PrismaService } from 'src/services/prisma/prisma.service';

@Injectable()
export class SiteService {
  constructor(private readonly prisma:PrismaService){}
  
 async create(data:SiteDto) {
    const isExists = await this.prisma.site.findUnique({where: {name:data.name}}) ; 
    if(isExists) throw new Error('el lugar ya existe');
    return this.prisma.site.create({data});
  }


 async findAll() {
  try {
    return await this.prisma.site.findMany({where: {deleteAt: null}});
  } catch (error) {
    throw new Error('Error al obtener los sitios');
  }
  }

  async findOne(id: string) {
    const data = await this.prisma.site.findUnique({
      where: { id },
    });
    if (!data) throw new Error('No se encontró el sitio con el ID proporcionado');
    return data;
  }

  async update(id: string, data: SiteDto) {
    const isExists = this.prisma.site.findUnique({where: {name:data.name}}) ;
    if(isExists) throw new Error('el lugar ya existe');
    try {
      return await this.prisma.site.update({
        where: { id },
        data,
      });
    } catch (error) {
      throw new Error('Error al actualizar el sitio');
    }
  }

  async remove(id: string) {
    const isExists = await this.prisma.site.findUnique({ where: { id } });
    if (!isExists) throw new Error('No se encontró el sitio con el ID proporcionado');
    try {
      return await this.prisma.site.update({
        where: { id },
        data: { deleteAt: new Date() },
      });
    } catch (error) {
      throw new Error('Error al eliminar el sitio');
    }
  }
  }
}
