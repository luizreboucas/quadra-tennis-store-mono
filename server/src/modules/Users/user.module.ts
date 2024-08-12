import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import UserService from './user.service';
import UserRepository from './userRepository';

@Module({
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
