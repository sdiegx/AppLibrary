import { Module } from '@nestjs/common';
import { LoansService } from './loans.service';
import { LoansController } from './loans.controller';
import { Loan } from './entities/loan.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from '../users/users.module';
import { UsersService } from '../users/users.service';
import { BooksModule } from '../books/books.module';
import { BooksService } from '../books/books.service';
import { AuthorsModule } from '../authors/authors.module';
import { AuthorsService } from '../authors/authors.service';
@Module({
  imports: [
    TypeOrmModule.forFeature([Loan]),
    UsersModule,
    BooksModule,
    AuthorsModule,
  ],
  controllers: [LoansController],
  providers: [LoansService, UsersService, BooksService, AuthorsService],
})
export class LoansModule {}
