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
import { MembersService } from 'src/members/members.service';

@Controller('splits')
export class SplitsController {
  constructor(private readonly splitsService: SplitsService) {}

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
