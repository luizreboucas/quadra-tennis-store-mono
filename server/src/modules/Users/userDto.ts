import { User } from '@prisma/client';

export class UserDto {
  id?: number;
  email?: string;
  password?: string;
  name?: string;
  adress?: string;
  profileId: number;

  constructor(partial: Partial<User>) {
    Object.assign(this, partial);
  }
}
