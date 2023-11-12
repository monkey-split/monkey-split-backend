import { Injectable } from '@nestjs/common';
import { CreateSpendingDto } from './dto/create-spending.dto';
import { UpdateSpendingDto } from './dto/update-spending.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SpendingsService {
  constructor(private readonly prismaService: PrismaService) {}

  create({ name, description, amount, madeById, splitId }: CreateSpendingDto) {
    return this.prismaService.spending.create({
      data: {
        name: name,
        description: description,
        amount: amount,
        madeBy: {
          connect: {
            id: madeById,
          },
        },
        split: {
          connect: {
            id: splitId,
          },
        },
      },
    });
  }

  findAll() {
    return `This action returns all spendings`;
  }

  findOne(id: number) {
    return `This action returns a #${id} spending`;
  }

  update(id: number, updateSpendingDto: UpdateSpendingDto) {
    return `This action updates a #${id} spending`;
  }

  remove(id: number) {
    return `This action removes a #${id} spending`;
  }
}
