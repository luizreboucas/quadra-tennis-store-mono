import { createZodDTO } from 'src/utils/zod-dto';
import { z } from 'zod';

export const createUserSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  name: z.string(),
  adress: z.string(),
  profileId: z.number().default(1),
});

export class CreateUserDTO extends createZodDTO(createUserSchema) {}
