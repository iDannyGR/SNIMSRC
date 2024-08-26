import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma/prisma.service';
import { UpdateOrganization, CreateOrganizationDto } from './dto/organization.dto';

@Injectable()
export class OrganizationService {
  constructor(private prisma: PrismaService) {}

  async getOrganization(): Promise<CreateOrganizationDto[]> {
    const data = await this.prisma.organization.findMany();
    if (!data && data[0].deleteAt) throw new NotFoundException('wrong data');
    return data;
  }

  async createOrganization(data: CreateOrganizationDto): Promise<CreateOrganizationDto> {
    return await this.prisma.organization.create({ data });
  }

  async updateOrganization(id: number, data: UpdateOrganization): Promise<CreateOrganizationDto> {
    try {
      return await this.prisma.organization.update({
        where: { id },
        data,
      });
    } catch (error) {
      throw new NotFoundException('wrong id data');
    }
  }

  async deleteOrganization(id: number): Promise<CreateOrganizationDto> {
    try {
      return await this.prisma.organization.delete({
        where: { id },
      });
    } catch (error) {
      throw new NotFoundException('wrong id data');
    }
  }
}
