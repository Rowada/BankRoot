import { Module } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { ClientsController } from './clients.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  providers: [ClientsService],
  controllers: [ClientsController],
  imports: [PrismaModule],
})
export class ClientsModule {}
