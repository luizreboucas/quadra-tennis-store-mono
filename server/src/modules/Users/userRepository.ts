import { PrismaClient } from '@prisma/client';
import { CreateUserDTO } from './DTO/CreateUserDTO';
import { UpdateUserDTO } from './DTO/UpdateUserDTO';
export class UserRepository {
  prisma: PrismaClient;
  constructor() {
    this.prisma = new PrismaClient();
  }
  async getAll() {
    return this.prisma.user.findMany();
  }

  async getOneById(id: number) {
    return await this.prisma.user.findUnique({
      where: {
        id,
      },
    });
  }
  async create(data: CreateUserDTO) {
    try {
      // Verificar se o profileId existe
      if (data.profileId) {
        await this.prisma.profile.findUniqueOrThrow({
          where: { id: data.profileId },
        });
      } else {
        throw new Error('profileId is invalid');
      }
      console.log('data => ', data);
      const user = await this.prisma.user.create({
        data: {
          email: data.email,
          password: data.password,
          name: data.name,
          adress: data.adress,
          profileId: data.profileId,
        },
      });
      return user;
    } catch (error) {
      throw new Error('erro ao criar usuário');
    }
  }

  async delete(id: number) {
    return await this.prisma.user.delete({
      where: {
        id,
      },
    });
  }

  async update(id: number, newData: UpdateUserDTO) {
    return await this.prisma.user.update({
      where: {
        id,
      },
      data: {
        ...newData,
      },
    });
  }

  async getByEmail(email: string) {
    return await this.prisma.user.findUnique({
      where: {
        email,
      },
    });
  }
}

export default UserRepository;
