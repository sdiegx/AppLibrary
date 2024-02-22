import { Book } from "src/books/entities/book.entity";
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

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

	@ManyToMany(() => Book, (book) => book.authors, {
		eager: true,
	})
	@JoinTable()
	books: Book[];

}
