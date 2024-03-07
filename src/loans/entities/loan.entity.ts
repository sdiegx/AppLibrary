import { Book } from '../../books/entities/book.entity';
import { User } from '../../users/entities/user.entity';
import {
  Column,
  DeleteDateColumn,
  Entity,
  JoinColumn,
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

  @Column({ default: false })
  status: boolean;

  @ManyToOne(() => User, (user) => user.loans, { eager: true })
  @JoinColumn({ name: 'userEmail', referencedColumnName: 'email' })
  user: User;

  @Column()
  userEmail: string;

  @ManyToMany(() => Book, (book) => book.loans, {
    eager: true,
  })
  @JoinTable()
  books: Book[];

  @DeleteDateColumn()
  deletedAt: Date;
}
