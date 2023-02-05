import { Injectable } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
@Injectable()
export class ClientsService {
  constructor(private prisma: PrismaService) {}

  // Create new client
  async create(createClientDto: CreateClientDto) {
    const newClient = await this.prisma.client.create({
      data: createClientDto,
    });
    return newClient;
  }

  // Return all Clients
  findAll() {
    return this.prisma.client.findMany();
  }

  // Find Client by id
  findOne(id: number) {
    return this.prisma.client.findUnique({
      where: { id_client: id },
    });
  }

  update(id: number, updateClientDto: UpdateClientDto) {
    return this.prisma.client.update({
      data: updateClientDto,
      where: { id_client: id },
    });
  }

  delete(id: number) {
    return this.prisma.client.delete({ where: { id_client: id } });
  }
}
