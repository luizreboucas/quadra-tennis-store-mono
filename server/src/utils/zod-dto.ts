import { ZodSchema, ZodTypeDef } from 'zod';

export interface IZodDTO<
  TInput,
  TDef extends ZodTypeDef,
  TOutput extends TInput,
> {
  new (): TOutput;
  isZodDTO: true;
  schema: ZodSchema<TInput, TDef, TOutput>;
  create(input: unknown): TOutput;
}

export const createZodDTO = <
  TInput,
  TDef extends ZodTypeDef,
  TOutput extends TInput,
>(
  schema: ZodSchema<TInput, TDef, TOutput>,
) => {
  class ZodDTO {
    public static isZodDTO = true;
    public static schema = schema;
    public static create(input: unknown) {
      return this.schema.parse(input);
    }
  }

  return ZodDTO as unknown as IZodDTO<TInput, TDef, TOutput>;
};
