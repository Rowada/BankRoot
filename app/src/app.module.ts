import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ClientsModule } from './clients/clients.module';
import { AccountsModule } from './accounts/accounts.module';

@Module({
  imports: [PrismaModule, ClientsModule, AccountsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
