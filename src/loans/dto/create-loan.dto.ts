import { ArrayMinSize, IsArray, IsBoolean, IsDate } from 'class-validator';
import { Transform } from 'class-transformer';
import { Book } from 'src/books/entities/book.entity';
export class CreateLoanDto {
  @IsDate()
  @Transform(({ value }) => new Date(value))
  start_date: Date;

  @IsDate()
  @Transform(({ value }) => new Date(value))
  end_date: Date;

  @IsBoolean()
  status: boolean;

  @IsArray()
  @ArrayMinSize(1)
  books: Book[];
}
