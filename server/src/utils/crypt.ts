import * as bcrypt from 'bcrypt';

export class Crypt {
  static async hashPassword(plainTextPassword: string) {
    const saltOrRounds = 10;
    const hashed = await bcrypt.hash(plainTextPassword, saltOrRounds);
    return hashed;
  }

  static async comparePassword(
    plainTextPassword: string,
    hashedPassWord: string,
  ) {
    return await bcrypt.compare(plainTextPassword, hashedPassWord);
  }
}
