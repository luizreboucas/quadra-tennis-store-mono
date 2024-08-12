import { createZodDTO } from 'src/utils/zod-dto';
import { z } from 'zod';

export const createProductSchema = z.object({
  name: z.string(),
  price: z.number(),
  photo: z.string().optional(),
});

export class CreateProductDTO extends createZodDTO(createProductSchema) {}
