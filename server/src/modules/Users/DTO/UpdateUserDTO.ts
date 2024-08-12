import { createZodDTO } from 'src/utils/zod-dto';
import { z } from 'zod';

export const updateUserSchema = z.object({
  email: z.string().email().optional(),
  name: z.string().optional(),
  adress: z.string().optional(),
  profileId: z.number().optional(),
});

export class UpdateUserDTO extends createZodDTO(updateUserSchema) {}
