import { Injectable } from '@nestjs/common';
import { CreateLoanDto } from './dto/create-loan.dto';
import { UpdateLoanDto } from './dto/update-loan.dto';
import { Loan } from './entities/loan.entity';
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm' 
@Injectable()

export class LoansService {
  @InjectRepository(Loan)
  private readonly loanRepository: Repository<Loan>
  async create(createLoanDto: CreateLoanDto) {
    return await this.loanRepository.save(createLoanDto)
  }

  async findAll() {
    return await this.loanRepository.find()
  }

  async findOne(id: number) {
    return await this.loanRepository.findOneBy({ id });
  }

  async update(id: number, updateLoanDto: UpdateLoanDto) {
    return await this.loanRepository.update(id, updateLoanDto)
  }

  async remove(id: number) {
    return await this.loanRepository.softDelete({ id })
  }
}
