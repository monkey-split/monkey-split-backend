import { PickType } from '@nestjs/mapped-types';
import { SpendingEntity } from '../entities/spending.entity';

export class CreateSpendingDto extends PickType(SpendingEntity, [
  'name',
  'description',
  'amount',
  'madeById',
  'splitId',
]) {}
