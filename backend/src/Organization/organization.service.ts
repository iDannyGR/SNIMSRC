import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateOrganization, CreateOrganizationDto } from './dto/organization.dto';

@Injectable()
export class OrganizationService {
  constructor(private prisma: PrismaService) {}

  async getOrganization(): Promise<CreateOrganizationDto[]> {
    return await this.prisma.organization.findMany();
  }

  async createOrganization(data: CreateOrganizationDto): Promise<CreateOrganizationDto> {
    return await this.prisma.organization.create({ data });
  }

  async updateOrganization(id: number, data: UpdateOrganization): Promise<CreateOrganizationDto> {
    return await this.prisma.organization.update({
      where: { id },
      data,
    });
  }

  async deleteOrganization(id: number): Promise<CreateOrganizationDto> {
    return await this.prisma.organization.delete({
      where: { id },
    });
  }
}
