import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateLoanDto } from './dto/create-loan.dto';
import { UpdateLoanDto } from './dto/update-loan.dto';
import { Loan } from './entities/loan.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from '../books/entities/book.entity';
import { UserActiveInterface } from '../common/interfaces/user-active.interface';
import { Role } from '../common/enums/role.enum';

@Injectable()
export class LoansService {
  constructor(
    @InjectRepository(Loan)
    private readonly loanRepository: Repository<Loan>,

    @InjectRepository(Book)
    private readonly bookRepository: Repository<Book>,
  ) {}

  async create(createLoanDto: CreateLoanDto, user: UserActiveInterface) {
    const books = await this.validateBooks(createLoanDto.books);

    return await this.loanRepository.save({
      ...createLoanDto,
      userEmail: user.email,
      books,
    });
  }

  async findAll(user: UserActiveInterface) {
    if (user.role === Role.ADMIN) {
      return await this.loanRepository.find();
    }
    return await this.loanRepository.find({
      where: { userEmail: user.email },
    });
  }

  async findOne(id: number, user: UserActiveInterface) {
    const loan = await this.loanRepository.findOneBy({ id });

    if (!loan) {
      throw new BadRequestException('Loan not found');
    }

    this.validateOwnership(loan, user);

    return loan;
  }

  async update(
    id: number,
    updateLoanDto: UpdateLoanDto,
    user: UserActiveInterface,
  ) {
    const loan = await this.findOne(id, user);
    if (!loan) {
      throw new BadRequestException('loan not found');
    }
    if (updateLoanDto.books) {
      throw new UnauthorizedException();
    }
    return await this.loanRepository.update(id, {
      ...updateLoanDto,
      userEmail: user.email,
    });
  }

  async remove(id: number, user: UserActiveInterface) {
    if (user.role === Role.ADMIN) {
      return await this.loanRepository.softDelete({ id });
    }
    await this.findOne(id, user);
    return await this.loanRepository.softDelete({ id });
  }

  private validateOwnership(loan: Loan, user: UserActiveInterface) {
    if (user.role !== Role.ADMIN && loan.userEmail !== user.email) {
      throw new UnauthorizedException();
    }
  }

  private async validateBooks(books: Book[]) {
    const existingBooks = await this.bookRepository.find();

    const booksEntities = books.map((bookData) => {
      const book = existingBooks.find(
        (existingBook) => existingBook.title === bookData.title,
      );

      if (!book) {
        throw new BadRequestException(`Book "${bookData.title}" not found`);
      }
      return book;
    });

    if (!booksEntities) {
      throw new BadRequestException('Books not found');
    }
    return booksEntities;
  }

  async clearBooks(loan: Loan) {
    loan.books = [];
    await this.loanRepository.save(loan);
  }
}
