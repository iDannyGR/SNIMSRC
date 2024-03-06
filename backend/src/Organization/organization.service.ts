import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { organizationDto } from './dto/organization.dto';

@Injectable()
export class OrganizationService {
  constructor(private prisma: PrismaService) {}

  async getOrganization(): Promise<organizationDto[]> {
    return await this.prisma.organization.findMany();
  }

  async createOrganization(data: organizationDto): Promise<organizationDto> {
    return this.prisma.organization.create({ data });
  }

  async updateOrganization(id: number, data: organizationDto): Promise<organizationDto> {
    return this.prisma.organization.update({
      where: { id },
      data,
    });
  }

  async deleteOrganization(id: number): Promise<organizationDto> {
    return this.prisma.organization.delete({
      where: { id },
    });
  }
}
