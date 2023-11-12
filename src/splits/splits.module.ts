import { Module } from '@nestjs/common';
import { SplitsService } from './splits.service';
import { SplitsController } from './splits.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { SpendingsModule } from 'src/spendings/spendings.module';

@Module({
  imports: [SpendingsModule],
  controllers: [SplitsController],
  providers: [SplitsService, PrismaService],
  exports: [SplitsService],
})
export class SplitsModule {}
