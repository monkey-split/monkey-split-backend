import { Injectable } from '@nestjs/common';
import { CreateSplitDto } from './dto/create-split.dto';
import { UpdateSplitDto } from './dto/update-split.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SplitsService {
  constructor(private readonly prismaService: PrismaService) {}

  create(createSplitDto: CreateSplitDto) {
    return this.prismaService.split.create({
      data: {
        ...createSplitDto,
        members: {
          create: createSplitDto.members,
        },
      },
    });
  }

  findAll() {
    return this.prismaService.split.findMany();
  }

  findOne(id: number) {
    return this.prismaService.split.findUnique({
      where: { id },
      include: {
        members: true,
      },
    });
  }

  update(id: number, updateSplitDto: UpdateSplitDto) {
    return this.prismaService.split.update({
      where: { id },
      data: updateSplitDto,
    });
  }

  remove(id: number) {
    return this.prismaService.split.delete({
      where: { id },
    });
  }
}
