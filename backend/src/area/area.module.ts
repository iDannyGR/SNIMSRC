import { Module } from '@nestjs/common';
import { AreaService } from './area.service';
import { AreaController } from './area.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [AreaController],
  providers: [AreaService],
  imports:[PrismaModule]
})
export class AreaModule {}
