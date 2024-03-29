import { Author } from '../../authors/entities/author.entity';
import { Loan } from '../../loans/entities/loan.entity';
import {
  Column,
  DeleteDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  publisher: string;

  @Column()
  publicationDate: Date;

  @Column()
  genre: string;

  @Column()
  summary?: string; // El resumen es opcional

  @Column()
  language: string;

  @Column()
  pageCount: number;

  @Column()
  physicalLocation: string;

  @Column()
  available: boolean;

  @Column()
  numberOfCopies: number;

  @ManyToMany(() => Author, (author) => author.books, {
    eager: true,
  })
  @JoinTable()
  authors: Author[];

  @ManyToMany(() => Loan, (loan) => loan.books)
  @JoinTable()
  loans: Loan[];

  @DeleteDateColumn()
  deletedAt: Date;
}
