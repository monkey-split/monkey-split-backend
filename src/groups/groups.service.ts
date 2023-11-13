import { Injectable } from '@nestjs/common';
import { CreateGroupDto } from './dto/create-split.dto';
import { UpdateGroupDto } from './dto/update-split.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class GroupsService {
  constructor(private readonly prismaService: PrismaService) {}

  create(createGrouptDto: CreateGroupDto) {
    return this.prismaService.group.create({
      data: {
        ...createGrouptDto,
        members: {
          create: createGrouptDto.members,
        },
      },
    });
  }

  findAll() {
    return this.prismaService.group.findMany();
  }

  findOne(id: number) {
    return this.prismaService.group.findUnique({
      where: { id },
      include: {
        members: true,
      },
    });
  }

  update(id: number, updateGroupDto: UpdateGroupDto) {
    return this.prismaService.group.update({
      where: { id },
      data: updateGroupDto,
    });
  }

  remove(id: number) {
    return this.prismaService.group.delete({
      where: { id },
    });
  }
}
