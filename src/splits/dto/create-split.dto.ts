import { PickType } from '@nestjs/mapped-types';
import { SplitEntity } from '../entities/split.entity';
import { CreateMemberDto } from 'src/members/dto/create-member.dto';

export class CreateSplitDto extends PickType(SplitEntity, [
  'name',
  'description',
  'createdBy',
]) {
  members: CreateMemberDto[];
}
