import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateLoanDto } from './dto/create-loan.dto';
import { UpdateLoanDto } from './dto/update-loan.dto';
import { Loan } from './entities/loan.entity';
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm' 
import { User } from 'src/users/entities/user.entity';
import { Book } from 'src/books/entities/book.entity';

@Injectable()
export class LoansService {

  constructor(
    @InjectRepository(Loan)
    private readonly loanRepository: Repository<Loan>,

    @InjectRepository(User)
    private readonly userRepository: Repository<User>,

    @InjectRepository(Book)
    private readonly bookRepository: Repository<Book>
  ) {  }
  
  async create(id: number, createLoanDto: CreateLoanDto) {
    const existingUsers = await this.userRepository.find();

    const user = existingUsers.find(user => user.id === id)

    if(!user) {
      throw new BadRequestException('User no existe');
    }

    const existingBooks = await this.bookRepository.find();

    const books = createLoanDto.books.map(bookData => {
      const book = existingBooks.find(existingBook => 
        existingBook.title === bookData.title
      );

      if(!book) {
        throw new BadRequestException(`Book "${bookData.title}" not found`)
      }
      return book;
    })

    if(!books){
      throw new BadRequestException('Books not found')
    }

    return await this.loanRepository.save({
      ...createLoanDto,
      user,
      books,
    })
  }

  async findAll() {
    return await this.loanRepository.find()
  }

  async findOne(id: number) {
    return await this.loanRepository.findOneBy({ id });
  }

  async update(id: number, updateLoanDto: UpdateLoanDto) {
    return await this.loanRepository.update(id, updateLoanDto)
  }

  async remove(id: number) {
    return await this.loanRepository.softDelete({ id })
  }
}
