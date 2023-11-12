import { Injectable } from '@nestjs/common';
import { CreateSplitDto } from './dto/create-split.dto';
import { UpdateSplitDto } from './dto/update-split.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SplitsService {
  constructor(private readonly prismaService: PrismaService) {}

  create(createSplitDto: CreateSplitDto) {
    console.log(createSplitDto);
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
    return `This action returns all splits`;
  }

  findOne(id: number) {
    return `This action returns a #${id} split`;
  }

  update(id: number, updateSplitDto: UpdateSplitDto) {
    return `This action updates a #${id} split`;
  }

  remove(id: number) {
    return `This action removes a #${id} split`;
  }
}
