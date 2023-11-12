import { Injectable } from '@nestjs/common';
import { CreateMemberDto } from './dto/create-member.dto';
import { UpdateMemberDto } from './dto/update-member.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MembersService {
  constructor(private readonly prismaService: PrismaService) {}

  create(createMemberDto: CreateMemberDto) {
    return this.prismaService.member.create({
      data: createMemberDto,
    });
  }

  createMany(createMemberDtos: CreateMemberDto[]) {
    // Create many is not supported by SQLite
    return createMemberDtos.map((createMemberDto) =>
      this.create(createMemberDto),
    );
  }

  findAll() {
    return this.prismaService.member.findMany();
  }

  findOne(id: number) {
    return this.prismaService.member.findUnique({
      where: { id },
    });
  }

  update(id: number, updateMemberDto: UpdateMemberDto) {
    return this.prismaService.member.update({
      where: { id },
      data: updateMemberDto,
    });
  }

  remove(id: number) {
    return this.prismaService.member.delete({
      where: { id },
    });
  }
}
