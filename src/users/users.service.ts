import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  async create(createUserDto: CreateUserDto): Promise<User> {
    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
    const user = new User();
    user.name = createUserDto.name;
    user.email = createUserDto.email;
    user.phone = createUserDto.phone;
    user.password = hashedPassword;
    return user.save();
  }

  async findOneByEmail(email: string): Promise<User | undefined> {
    return User.findOne({ where: { email } });
  }

  async findOneById(id: number): Promise<User | undefined> {
    return User.findByPk(id);
  }
}
