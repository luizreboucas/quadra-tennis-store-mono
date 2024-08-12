import { createZodDTO } from 'src/utils/zod-dto';
import { z } from 'zod';

export const authSchema = z
  .object({
    username: z.string(),
    password: z.string(),
  })
  .required();

export class AuthDTO extends createZodDTO(authSchema) {}
