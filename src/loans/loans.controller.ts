import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
} from '@nestjs/common';
import { LoansService } from './loans.service';
import { CreateLoanDto } from './dto/create-loan.dto';
import { UpdateLoanDto } from './dto/update-loan.dto';
import { Auth } from '../auth/decorators/auth.decorator';
import { Role } from '../common/enums/role.enum';
import { ActiveUser } from '../common/decorators/active-user.decorator';
import { UserActiveInterface } from '../common/interfaces/user-active.interface';

@Auth(Role.USER)
@Controller('loans')
export class LoansController {
  constructor(private readonly loansService: LoansService) {}

  @Post()
  create(
    @Body() createLoanDto: CreateLoanDto,
    @ActiveUser() user: UserActiveInterface,
  ) {
    return this.loansService.create(createLoanDto, user);
  }

  @Get()
  findAll(@ActiveUser() user: UserActiveInterface) {
    return this.loansService.findAll(user);
  }

  @Get(':id')
  findOne(@Param('id') id: number, @ActiveUser() user: UserActiveInterface) {
    return this.loansService.findOne(id, user);
  }

  @Auth(Role.ADMIN)
  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() updateLoanDto: UpdateLoanDto,
    @ActiveUser() user: UserActiveInterface,
  ) {
    return this.loansService.update(id, updateLoanDto, user);
  }

  @Delete(':id')
  remove(@Param('id') id: number, @ActiveUser() user: UserActiveInterface) {
    return this.loansService.remove(id, user);
  }
}
