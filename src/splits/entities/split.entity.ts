import { Split } from '@prisma/client';

export class SplitEntity implements Split {
  id: number;
  name: string;
  description: string;
  createdBy: number;
  createdAt: Date;
  updatedAt: Date;
}
