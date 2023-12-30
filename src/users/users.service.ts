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
    return this.userModel.find().populate('obra_social', 'name');
  }

  async create(createUser: CreateUserDTO): Promise<string | User> {
    const newUser = await this.userModel.create(createUser);
    return newUser;
  }

  async findOne(id: string) {
    return this.userModel.findById(id).populate('obra_social', 'name -_id');
  }

  async delete(id: string) {
    return this.userModel.findByIdAndDelete(id);
  }

  async update(id: string, user: UpdateUserDTO) {
    return this.userModel.findByIdAndUpdate(id, user, { new: true });
  }
}
