import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from './entities/book.entity';
import { Repository } from 'typeorm';
import { Author } from 'src/authors/entities/author.entity';

@Injectable()
export class BooksService {

  constructor(
    @InjectRepository(Book)
    private readonly bookRepository: Repository<Book>,

    @InjectRepository(Author)
    private readonly authorRepository: Repository<Author>,
  ) { }

  async create(createBookDto: CreateBookDto) {
    
    // Buscar todos los autores existentes en la base de datos
    const existingAuthors = await this.authorRepository.find();

    // Mapear los autores proporcionados en el DTO a los objetos de autor existentes
    const authors = createBookDto.authors.map((authorData) => {
      // Buscar un autor existente que coincida con los datos proporcionados
      const author = existingAuthors.find((existingAuthor) =>
        existingAuthor.firstName === authorData.firstName &&
        existingAuthor.lastName === authorData.lastName &&
        existingAuthor.college === authorData.college
      );

      // Si no se encuentra un autor correspondiente, lanzar una excepción
      if (!author) {
        throw new BadRequestException(`Author "${authorData.firstName} ${authorData.lastName}" from "${authorData.college}" not found`);
      }

      return author;
    });
    // este control puede que no sea necesario, aunque si el arreglo authores esta vacio puede que si
    if(!authors) {
      throw new BadRequestException('Authors not found');
    }
    
    return await this.bookRepository.save({
      ...createBookDto,
      authors,
    })
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
