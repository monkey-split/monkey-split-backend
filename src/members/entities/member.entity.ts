import { Member } from '@prisma/client';

export class MemberEntity implements Member {
  id: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  userId: number | null;
}
