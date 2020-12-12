import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDTO } from 'src/dto/user.dto';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly _repository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return await this._repository.find();
  }

  async findOne(id): Promise<User> {
    const user = await this._repository.findOne(id);
    if (!user) throw new NotFoundException('User does not exist.');
    return user;
  }

  async create(dto: UserDTO): Promise<User> {
    const newUser = this._repository.create(dto);
    const user = await this._repository.save(newUser);
    delete user.password;
    return user;
  }

  async update(id, dto: UserDTO): Promise<User> {
    const user = await this.findOne(id);
    const editedUser = Object.assign(user, dto);
    return await this._repository.save(editedUser);
  }

  async remove(id: number): Promise<any> {
    const data = await this._repository.delete(id);
    return { message: 'User removed', data };
  }
}
