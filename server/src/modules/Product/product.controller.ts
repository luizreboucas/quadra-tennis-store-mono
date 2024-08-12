import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UsePipes,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDTO, createProductSchema } from './DTO/CreateProductDto';
import { ZodValidationPipe } from 'src/utils/zod-validation-pipe';
import { UpdateProductDTO, updateProductSchema } from './DTO/UpdateProductDTO';
import { ZodEffects } from 'zod';

@Controller('/products')
export class ProductController {
  constructor(private productService: ProductService) {}
  @Get()
  async getAll() {
    return await this.productService.getAll();
  }

  @Get('/:id')
  async getOneById(@Param('id') id: string) {
    return await this.productService.getOneById(+id);
  }

  @Post()
  @UsePipes(new ZodValidationPipe(createProductSchema))
  async create(@Body() data: CreateProductDTO) {
    return await this.productService.create(data);
  }

  @Put('/:id')
  @UsePipes(new ZodValidationPipe(updateProductSchema))
  async update(@Param('id') id: string, @Body() newData: UpdateProductDTO) {
    return await this.productService.update(+id, newData);
  }

  @Delete('/:id')
  async delete(@Param('id') id: string) {
    return await this.productService.delete(+id);
  }
}
