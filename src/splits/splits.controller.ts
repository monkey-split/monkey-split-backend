import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SplitsService } from './splits.service';
import { CreateSplitDto } from './dto/create-split.dto';
import { UpdateSplitDto } from './dto/update-split.dto';
import { SpendingsService } from 'src/spendings/spendings.service';
import { CreateSpendingDto } from 'src/spendings/dto/create-spending.dto';

@Controller('splits')
export class SplitsController {
  constructor(
    private readonly splitsService: SplitsService,
    private readonly spendingsService: SpendingsService,
  ) {}

  @Post()
  create(
    @Body()
    createSplitDto: Omit<CreateSplitDto, 'createdBy'>,
  ) {
    // TODO : Get the user ID from the request
    // TODO : Connect the created split to the user
    const userId = 1;
    return this.splitsService.create({
      ...createSplitDto,
      createdBy: userId,
    });
  }

  @Post(':splitId/spendings')
  createSpending(
    @Param()
    { splitId }: { splitId: string },
    @Body()
    { name, description, amount, madeById }: Omit<CreateSpendingDto, 'splitId'>,
  ) {
    return this.spendingsService.create({
      name,
      description,
      amount,
      madeById,
      splitId: +splitId,
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
  update(@Param('id') id: string, @Body() updateSplitDto: UpdateSplitDto) {
    return this.splitsService.update(+id, updateSplitDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.splitsService.remove(+id);
  }
}
