import { Module } from '@nestjs/common';
import { LoansService } from './loans.service';
import { LoansController } from './loans.controller';
import { Loan } from './entities/loan.entity'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UsersModule } from 'src/users/users.module';
import { UsersService } from 'src/users/users.service';
import { BooksModule } from 'src/books/books.module';
import { BooksService } from 'src/books/books.service';
import { AuthorsModule } from 'src/authors/authors.module';
import { AuthorsService } from 'src/authors/authors.service';
@Module({
  imports: [TypeOrmModule.forFeature([Loan]), UsersModule, BooksModule, AuthorsModule],
  controllers: [LoansController],
  providers: [LoansService, UsersService, BooksService, AuthorsService],
})
export class LoansModule {}
