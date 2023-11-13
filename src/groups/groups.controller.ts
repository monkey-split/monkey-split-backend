import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { GroupsService } from './groups.service';
import { CreateGroupDto } from './dto/create-split.dto';
import { UpdateGroupDto } from './dto/update-split.dto';
import { SpendingsService } from 'src/spendings/spendings.service';
import { CreateSpendingDto } from 'src/spendings/dto/create-spending.dto';

@Controller('groups')
export class GroupsController {
  constructor(
    private readonly splitsService: GroupsService,
    private readonly spendingsService: SpendingsService,
  ) {}

  @Post()
  create(
    @Body()
    createGroupDto: Omit<CreateGroupDto, 'createdBy'>,
  ) {
    // TODO : Get the user ID from the request
    // TODO : Connect the created split to the user
    const userId = 1;
    return this.splitsService.create({
      ...createGroupDto,
      createdBy: userId,
    });
  }

  @Post(':groupId/spendings')
  createSpending(
    @Param()
    { groupId }: { groupId: string },
    @Body()
    { name, description, amount, madeById }: Omit<CreateSpendingDto, 'splitId'>,
  ) {
    return this.spendingsService.create({
      name,
      description,
      amount,
      madeById,
      groupId: +groupId,
    });
  }

  @Get()
  findAll() {
    return this.splitsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.splitsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSplitDto: UpdateGroupDto) {
    return this.splitsService.update(+id, updateSplitDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.splitsService.remove(+id);
  }
}
