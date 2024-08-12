import { Injectable } from '@nestjs/common';
import { AuthDTO } from './DTO/AuthDTO';
import UserService from '../Users/user.service';
import { Crypt } from 'src/utils/crypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async login(data: AuthDTO) {
    const user = await this.userService.getByEmail(data.username);
    if (!user) throw new Error('User not found');
    if (!(await Crypt.comparePassword(data.password, user.password))) {
      throw new Error('Invalid password');
    }
    const payload = {
      user: user.id,
      username: user.email,
      profile: user.profileId,
    };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
