import { Module } from '@nestjs/common';
import { SpendingsService } from './spendings.service';
import { SpendingsController } from './spendings.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [SpendingsController],
  providers: [SpendingsService, PrismaService],
  exports: [SpendingsService],
})
export class SpendingsModule {}
