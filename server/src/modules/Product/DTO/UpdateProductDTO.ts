import { createZodDTO } from 'src/utils/zod-dto';
import { z } from 'zod';

export const updateProductSchema = z.object({
  name: z.string(),
  price: z.number(),
  photo: z.string().optional(),
});

export class UpdateProductDTO extends createZodDTO(updateProductSchema) {}
