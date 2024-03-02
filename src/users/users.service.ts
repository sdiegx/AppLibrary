import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ) {  }

  async create(createUserDto: CreateUserDto) {
    return await this.userRepository.save(createUserDto);
  }

  async findOneByEmail(email: string) {
    return this.userRepository.findOneBy({ email });
  }


  // por el momento no necesito ninguna de estas funciones
  // async findAll() {
  //   return await this.userRepository.find();
  // }

  // async findOne(id: number) {
  //   return await this.userRepository.findOneBy({ id });
  // }

  // async update(id: number, updateUserDto: UpdateUserDto) {
  //   return await this.userRepository.update(id, updateUserDto);
  // }

  // async remove(id: number) {
  //   return await this.userRepository.softDelete({ id });
  // }
}
