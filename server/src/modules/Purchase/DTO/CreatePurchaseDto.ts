import { createZodDTO } from 'src/utils/zod-dto';
import { z } from 'zod';

export const createPurchaseSchema = z.object({
  date: z.date().default(() => new Date()),
  total: z.number(),
  userId: z.number(),
  products: z.array(z.object({ id: z.number() })),
});

export class CreatePurchaseDTO extends createZodDTO(createPurchaseSchema) {}
