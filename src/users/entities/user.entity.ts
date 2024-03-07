import { Role } from '../../common/enums/role.enum';
import { Loan } from '../../loans/entities/loan.entity';
import {
  Column,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

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

  @Column({ nullable: false, select: false })
  password: string;

  @Column({ type: 'enum', default: Role.USER, enum: Role })
  role: Role;

  @OneToMany(() => Loan, (loan) => loan.user)
  loans: Loan[];

  @DeleteDateColumn()
  deletedAt: Date;
}
