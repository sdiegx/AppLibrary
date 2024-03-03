import { Book } from 'src/books/entities/book.entity';
import { User } from 'src/users/entities/user.entity';
import {
  Column,
  DeleteDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
@Entity()
export class Loan {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  start_date: Date;

  @Column()
  end_date: Date;

  @Column()
  status: boolean;

  @ManyToOne(() => User, (user) => user.loans, { eager: true })
  user: User;

  @ManyToMany(() => Book, (book) => book.loans, {
    eager: true,
  })
  @JoinTable()
  books: Book[];

  @DeleteDateColumn()
  deletedAt: Date;
}
