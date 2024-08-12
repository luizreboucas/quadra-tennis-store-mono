import { Injectable } from '@nestjs/common';
import { ProductRepository } from './ProductRepository';
import { CreateProductDTO } from './DTO/CreateProductDto';
import { UpdateProductDTO } from './DTO/UpdateProductDTO';

@Injectable()
export class ProductService {
  private productRepository: ProductRepository;

  constructor() {
    this.productRepository = new ProductRepository();
  }

  async create(data: CreateProductDTO) {
    return await this.productRepository.create(data);
  }

  async getAll() {
    return await this.productRepository.getAll();
  }

  async getOneById(id: number) {
    return await this.productRepository.getOneById(id);
  }

  async delete(id: number) {
    return await this.productRepository.delete(id);
  }

  async update(id: number, newData: UpdateProductDTO) {
    return await this.productRepository.update(id, newData);
  }
}
