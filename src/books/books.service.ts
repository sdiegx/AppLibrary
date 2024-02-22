import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from './entities/book.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BooksService {

  constructor(
    @InjectRepository(Book)
    private readonly bookRepository: Repository<Book>
  ) { }

  async create(createBookDto: CreateBookDto) {
    return await this.bookRepository.save(createBookDto); // guarda el registro
    
  }

  async findAll() {
    return await this.bookRepository.find();
  }

  async findOne(id: number) {
    return await this.bookRepository.findOneBy({ id });
  }

  async update(id: number, updateBookDto: UpdateBookDto) {
    return await this.bookRepository.update(id, updateBookDto);
  }

  async remove(id: number) {
    return await this.bookRepository.softDelete({ id }); // Se le pasa el id
    // return await this.bookRepository.softRemove(); se le pasa la instancia
  }
}
