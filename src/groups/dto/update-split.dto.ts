import { OmitType, PartialType } from '@nestjs/mapped-types';
import { CreateGroupDto } from './create-split.dto';

export class UpdateGroupDto extends PartialType(
  OmitType(CreateGroupDto, ['members']),
) {}
