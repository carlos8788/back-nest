import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  NotFoundException,
  ConflictException,
  HttpCode,
} from '@nestjs/common';

import { UsersService } from './users.service';
import { CreateUserDTO } from 'src/users/dto/create.user';
import { UpdateUserDTO } from './dto/update.user';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  async findAll() {
    return await this.usersService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const user = await this.usersService.findOne(id);
    if (!user) throw new NotFoundException('user not found');
    return user;
  }

  @Post()
  async createuser(@Body() user: CreateUserDTO) {
    try {
      return await this.usersService.create(user);
    } catch (error) {
      if (error.code === 11000) {
        throw new ConflictException('Error creating user: user already exists');
      }
      throw error;
    }
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() user: UpdateUserDTO) {
    const userEdit = await this.usersService.update(id, user);
    if (!userEdit) throw new NotFoundException('user not found');
    return userEdit;
  }

  @Delete(':id')
  @HttpCode(204)
  async delete(@Param('id') id: string) {
    const user = await this.usersService.delete(id);
    if (!user) throw new NotFoundException('user not found');
    return user;
  }
}
