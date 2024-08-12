import { Injectable } from '@nestjs/common';
import { PurchaseRepository } from './PurchaseRepository';
import { CreatePurchaseDTO } from './DTO/CreatePurchaseDto';
import { UpdatePurchaseDTO } from './DTO/UpdatePurchaseDTO';

@Injectable()
export class PurchaseService {
  private purchaseRepository: PurchaseRepository;
  constructor() {
    this.purchaseRepository = new PurchaseRepository();
  }

  async create(data: CreatePurchaseDTO) {
    return await this.purchaseRepository.create(data);
  }

  async getAll() {
    return await this.purchaseRepository.getAll();
  }

  async getOneById(id: number) {
    return await this.purchaseRepository.getOneById(id);
  }

  async delete(id: number) {
    return await this.purchaseRepository.delete(id);
  }

  async update(id: number, newData: UpdatePurchaseDTO) {
    return await this.purchaseRepository.update(id, newData);
  }
}
