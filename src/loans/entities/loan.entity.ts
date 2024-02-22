import { Column, DeleteDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class Loan {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    start_date: Date

    @Column()
    end_date: Date

    @Column()
    status: boolean

    @DeleteDateColumn()
    deletedAt: Date;

}
