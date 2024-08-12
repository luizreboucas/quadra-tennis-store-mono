import { createZodDTO } from 'src/utils/zod-dto';
import { z } from 'zod';

export const updatePurchaseSchema = z.object({
  date: z.date().optional(),
  total: z.number().optional(),
  userId: z.number().optional(),
  products: z.array(z.object({ id: z.number() })).optional(),
});

export class UpdatePurchaseDTO extends createZodDTO(updatePurchaseSchema) {}
