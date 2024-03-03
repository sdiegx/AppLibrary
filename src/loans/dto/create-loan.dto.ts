import {
  ArrayMinSize,
  IsArray,
  IsBoolean,
  IsDate,
  ValidateNested,
} from 'class-validator';
import { Transform, Type } from 'class-transformer';
import { IsArrayOfStrings } from '../validators/arrayOfStrings.validator';
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
