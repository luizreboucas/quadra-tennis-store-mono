import { PrismaClient } from '@prisma/client';
import { UpdatePurchaseDTO } from './DTO/UpdatePurchaseDTO';
import { CreatePurchaseDTO } from './DTO/CreatePurchaseDto';

export class PurchaseRepository {
  prismaClient: PrismaClient;

  constructor() {
    this.prismaClient = new PrismaClient();
  }

  async create(data: CreatePurchaseDTO) {
    return await this.prismaClient.purchase.create({
      data: {
        date: data.date ? data.date : new Date(),
        total: data.total,
        userId: data.userId,
        products: {
          connect: data.products.map((product) => {
            return { id: product.id };
          }),
        },
      },
    });
  }

  async getAll() {
    return await this.prismaClient.purchase.findMany({
      include: {
        products: true,
        user: true,
      },
    });
  }

  async getOneById(id: number) {
    return await this.prismaClient.purchase.findUnique({
      where: {
        id,
      },
      include: {
        products: true,
        user: true,
      },
    });
  }

  async delete(id: number) {
    return await this.prismaClient.purchase.delete({
      where: {
        id,
      },
    });
  }

  async update(id: number, newData: UpdatePurchaseDTO) {
    const OldData = await this.prismaClient.purchase.findUnique({
      where: { id },
      include: { products: true },
    });
    return await this.prismaClient.purchase.update({
      where: {
        id,
      },
      data: {
        date: newData?.date ? newData.date : OldData.date,
        total: newData.total ? newData.total : OldData.total,
        products: {
          connect: newData.products
            ? newData.products.map((product) => {
                return { id: product.id };
              })
            : OldData.products,
        },
      },
    });
  }
}
