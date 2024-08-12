import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
  UseGuards,
  UsePipes,
} from '@nestjs/common';
import { PurchaseService } from './purchase.service';
import { ZodValidationPipe } from 'src/utils/zod-validation-pipe';
import {
  CreatePurchaseDTO,
  createPurchaseSchema,
} from './DTO/CreatePurchaseDto';

import {
  UpdatePurchaseDTO,
  updatePurchaseSchema,
} from './DTO/UpdatePurchaseDTO';
import { AuthGuard } from '../Auth/auth.guard';

@Controller('/purchases')
export class PurchaseController {
  constructor(private purchaseService: PurchaseService) {}

  @Get()
  @UseGuards(AuthGuard)
  async getAll(@Req() req: any) {
    console.log('user data: ', req.user);
    return await this.purchaseService.getAll();
  }

  @Get('/:id')
  async getOneById(@Param('id') id: string) {
    return await this.purchaseService.getOneById(+id);
  }

  @Post()
  @UsePipes(new ZodValidationPipe(createPurchaseSchema))
  async create(@Body() data: CreatePurchaseDTO) {
    return await this.purchaseService.create(data);
  }

  @Put('/:id')
  @UsePipes(new ZodValidationPipe(updatePurchaseSchema))
  async update(@Param('id') id: string, @Body() newData: UpdatePurchaseDTO) {
    return await this.purchaseService.update(+id, newData);
  }

  @Delete('/:id')
  async deletePurchase(@Param('id') id: string) {
    if (!(await this.purchaseService.delete(+id)))
      throw new Error('Purchase not found');
    return { message: 'Purchase deleted' };
  }
}
