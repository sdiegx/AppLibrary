import { Module } from '@nestjs/common';
import { LoansService } from './loans.service';
import { LoansController } from './loans.controller';
import { Loan } from './entities/loan.entity'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UsersModule } from 'src/users/users.module';
import { UsersService } from 'src/users/users.service';
@Module({
  imports: [TypeOrmModule.forFeature([Loan]), UsersModule],
  controllers: [LoansController],
  providers: [LoansService, UsersService],
})
export class LoansModule {}
