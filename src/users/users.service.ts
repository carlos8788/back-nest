import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/schemas/user.schema';
import { CreateUserDTO } from './dto/create.user';
import { UpdateUserDTO } from './dto/update.user';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  findAll() {
    return this.userModel.find();
  }

  async create(createTask: CreateUserDTO): Promise<string | User> {
    const newTask = await this.userModel.create(createTask);
    return newTask;
  }

  async findOne(id: string) {
    return this.userModel.findById(id);
  }

  async delete(id: string) {
    return this.userModel.findByIdAndDelete(id);
  }

  async update(id: string, task: UpdateUserDTO) {
    return this.userModel.findByIdAndUpdate(id, task, { new: true });
  }
}
