import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UsePipes,
} from '@nestjs/common';
import UserService from './user.service';
import { ZodValidationPipe } from 'src/utils/zod-validation-pipe';
import { CreateUserDTO, createUserSchema } from './DTO/CreateUserDTO';
import { UpdateUserDTO, updateUserSchema } from './DTO/UpdateUserDTO';

@Controller('/users')
export class UserController {
  constructor(private userService: UserService) {}
  @Post()
  @UsePipes(new ZodValidationPipe(createUserSchema))
  async createUser(@Body() data: CreateUserDTO) {
    try {
      return await this.userService.create(data);
    } catch (error) {
      throw new Error(`erro ao criar usuário`);
    }
  }
  @Get()
  async getAll() {
    return await this.userService.getAll();
  }

  @Get('/:id')
  async getOneById(@Param('id') id: string) {
    return await this.userService.getOneById(Number(id));
  }

  @Put('/:id')
  @UsePipes(new ZodValidationPipe(updateUserSchema))
  async updateUser(@Param('id') id: string, @Body() data: UpdateUserDTO) {
    return await this.userService.update(+id, data);
  }

  @Delete('/:id')
  async deleteUser(@Param('id') id: string) {
    if (!(await this.userService.delete(+id)))
      throw new Error('User not found');
    return {
      message: 'User deleted',
    };
  }
}
