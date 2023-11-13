import { PickType } from '@nestjs/mapped-types';
import { GroupEntity } from '../entities/group.entity';
import { CreateMemberDto } from 'src/members/dto/create-member.dto';

export class CreateGroupDto extends PickType(GroupEntity, [
  'name',
  'description',
  'createdBy',
]) {
  members: CreateMemberDto[];
}
