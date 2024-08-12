import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import UserService from '../Users/user.service';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from '../Users/user.module';
import { AuthService } from './auth.service';

@Module({
  imports: [
    UserModule,
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '1d' },
    }),
  ],
  controllers: [AuthController],
  providers: [UserService, AuthService],
})
export class AuthModule {}
