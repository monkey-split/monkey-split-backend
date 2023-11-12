import { PickType } from '@nestjs/mapped-types';
import { MemberEntity } from '../entities/member.entity';

export class CreateMemberDto extends PickType(MemberEntity, [
  'name',
  'userId',
]) {}
