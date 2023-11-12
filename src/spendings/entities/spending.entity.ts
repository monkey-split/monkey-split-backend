import { Spending } from '@prisma/client';

export class SpendingEntity implements Spending {
  id: number;
  name: string;
  description: string;
  amount: number;
  madeById: number;
  splitId: number;
  createdAt: Date;
  updatedAt: Date;
}
