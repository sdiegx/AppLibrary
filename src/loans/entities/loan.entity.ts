import { User } from "src/users/entities/user.entity";
import { Column, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
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

    @ManyToOne(() => User, user => user.loans, { eager: true })
    user: User;

    @DeleteDateColumn()
    deletedAt: Date;

}
