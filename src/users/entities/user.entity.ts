import { Loan } from "src/loans/entities/loan.entity";
import { Column, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {

  @PrimaryGeneratedColumn()
	id: number;

	@Column()
	firstName: string;

	@Column()
	lastName: string;

	@Column({ unique: true, nullable: false })
	email: string;

	@Column({ nullable: false})
	password: string;

	@Column({ default: 'user' })
	rol: string;

	@OneToMany(() => Loan, loan => loan.user)
	loans: Loan[];

	@DeleteDateColumn()
  deletedAt: Date;
}
