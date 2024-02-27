import { Book } from "src/books/entities/book.entity";
import { Column, DeleteDateColumn, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Author {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	firstName: string;

	@Column()
	lastName: string;

	@Column()
	college: string; // universidad en que trabaja

	@DeleteDateColumn()
    deletedAt: Date;

	@ManyToMany(() => Book, (book) => book.authors) // si se daña aqui habia antes un jointable
	books: Book[];

}
