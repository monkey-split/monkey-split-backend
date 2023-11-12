import { OmitType, PartialType } from '@nestjs/mapped-types';
import { CreateSplitDto } from './create-split.dto';

export class UpdateSplitDto extends PartialType(
  OmitType(CreateSplitDto, ['members']),
) {}
