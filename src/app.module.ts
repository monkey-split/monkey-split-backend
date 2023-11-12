import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { PrismaService } from './prisma/prisma.service';
import { UsersModule } from './users/users.module';
import { SplitsModule } from './splits/splits.module';
import { MembersModule } from './members/members.module';
import { SpendingsModule } from './spendings/spendings.module';

@Module({
  imports: [ConfigModule.forRoot(), UsersModule, SplitsModule, MembersModule, SpendingsModule],
  controllers: [AppController, UsersController],
  providers: [AppService, UsersService, PrismaService],
})
export class AppModule {}
