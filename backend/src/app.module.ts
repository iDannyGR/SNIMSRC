import { Module } from '@nestjs/common';
import { organizationModule } from './Organization/organization.module';
import { AreaModule } from './area/area.module';
import { ConfigModule } from '@nestjs/config';
import { validate } from './config/env.validation';
import configuration from './config/configuration';
import { PrismaModule } from './services/prisma/prisma.module';
import { PositionModule } from './position/position.module';
import { SiteModule } from './site/site.module';
import { NoteModule } from './note/note.module';

@Module({
  imports: [
    PrismaModule,
    organizationModule,
    AreaModule,
    ConfigModule.forRoot({
      validate,
      isGlobal: true,
      load: [configuration],
    }),
    PositionModule,
    SiteModule,
    NoteModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
