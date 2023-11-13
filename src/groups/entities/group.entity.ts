import { Group } from '@prisma/client';

export class GroupEntity implements Group {
  id: number;
  name: string;
  description: string;
  createdBy: number;
  createdAt: Date;
  updatedAt: Date;
}
