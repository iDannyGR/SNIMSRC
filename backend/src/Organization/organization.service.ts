import { Injectable } from '@nestjs/common';
import { Organization } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class OrganizationService {
  constructor(private prisma: PrismaService) {}

  async getOrganization(): Promise<Organization[]> {
    return await this.prisma.organization.findMany();
  }

  async createOrganization(data: Organization): Promise<Organization> {
    return this.prisma.organization.create({ data });
  }

  async updateOrganization(id: number, data: Organization): Promise<Organization> {
    return this.prisma.organization.update({
      where: { id },
      data,
    });
  }

  async deleteOrganization(id: number): Promise<Organization> {
    return this.prisma.organization.delete({
      where: { id },
    });
  }
}
