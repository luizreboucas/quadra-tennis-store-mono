import { PrismaClient, Product } from '@prisma/client';
import { CreateProductDTO } from './DTO/CreateProductDto';
import { UpdateProductDTO } from './DTO/UpdateProductDTO';

export class ProductRepository {
  private prismaClient: PrismaClient;

  constructor() {
    this.prismaClient = new PrismaClient();
  }
  async getAll() {
    return this.prismaClient.product.findMany();
  }

  async getOneById(id: number) {
    return await this.prismaClient.product.findUnique({
      where: {
        id,
      },
    });
  }

  async create(data: CreateProductDTO) {
    try {
      const product = await this.prismaClient.product.create({
        data: {
          name: data.name,
          price: data.price,
          photo: data.photo ? data.photo : '',
        },
      });
      return product;
    } catch (error) {
      throw new Error('erro ao criar produto');
    }
  }

  async delete(id: number) {
    return await this.prismaClient.product.delete({
      where: {
        id,
      },
    });
  }

  async update(id: number, newData: UpdateProductDTO) {
    return await this.prismaClient.product.update({
      where: {
        id,
      },
      data: {
        ...newData,
      },
    });
  }
}
