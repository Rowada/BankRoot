import { Injectable } from '@nestjs/common';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AccountsService {
  constructor(private prisma: PrismaService) {}
  async create(createAccountDto: CreateAccountDto) {
    const newAccount = await this.prisma.account.create({
      data: createAccountDto,
    });
  }
  findAll() {
    return this.prisma.account.findMany({
      orderBy: { id_account: 'asc' },
      take: 10,
    });
  }

  findOne(id: number) {
    return this.prisma.account.findUnique({ where: { id_account: id } });
  }

  update(id: number, updateAccountDto: UpdateAccountDto) {
    return this.prisma.account.update({
      data: updateAccountDto,
      where: { id_account: id },
    });
  }

  remove(id: number) {
    return this.prisma.account.delete({ where: { id_account: id } });
  }
}
