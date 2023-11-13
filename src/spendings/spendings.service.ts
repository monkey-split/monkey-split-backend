import { Injectable } from '@nestjs/common';
import { CreateSpendingDto } from './dto/create-spending.dto';
import { UpdateSpendingDto } from './dto/update-spending.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SpendingsService {
  constructor(private readonly prismaService: PrismaService) {}

  create({ name, description, amount, madeById, groupId }: CreateSpendingDto) {
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
        group: {
          connect: {
            id: groupId,
          },
        },
      },
    });
  }

  findAll() {
    return this.prismaService.spending.findMany();
  }

  findOne(id: number) {
    return this.prismaService.spending.findUnique({
      where: {
        id,
      },
    });
  }

  update(id: number, updateSpendingDto: UpdateSpendingDto) {
    return this.prismaService.spending.update({
      where: {
        id,
      },
      data: updateSpendingDto,
    });
  }

  remove(id: number) {
    return this.prismaService.spending.delete({
      where: {
        id,
      },
    });
  }
}
