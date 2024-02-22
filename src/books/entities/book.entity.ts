import { Author } from "src/authors/entities/author.entity";
import { Column, DeleteDateColumn, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Book {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    // @Column({ type: 'text', array: true, nullable: true })
    // authors: string[]; // Columna de tipo texto que almacena un array de autores

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

    @DeleteDateColumn()
    deletedAt: Date;

    @ManyToMany((type) => Author, (author) => author.books, {
        eager: true,
    })
    @JoinTable()
    authors: Author[];

    // Método para serializar los autores a una cadena antes de guardar en la base de datos
    // serializeAuthors() {
    //     if (this.authors) {
    //         return JSON.stringify(this.authors);
    //     }
    //     return null;
    // }

    // // Método para deserializar la cadena de autores a un array después de recuperar de la base de datos
    // deserializeAuthors(authorsString: string) {
    //     if (authorsString) {
    //         return JSON.parse(authorsString);
    //     }
    //     return null;
    // }
}
