import { Controller, Get, Put, Post, Delete, Body, Param } from "@nestjs/common";
import { OrganizationService } from "./organization.service";
import {Organization} from '@prisma/client'\;

@Controller('organization')
export class orgnizationController{
   constructor(private readonly organizationService: OrganizationService){}


   @Get()
   async getOrganization(){
    this.organizationService.getOrganization()
   }

   @Post()
   async createOrganization(@Body() data:Organization){
        this.organizationService.createOrganization(data);
   }
   
   @Delete(':id')
   async deleteOrganization(@Param('id') id:string){
      this.organizationService.deleteOrganization(Number(id))
   }
}