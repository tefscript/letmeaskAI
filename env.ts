//validacao e parsing das variaveis de ambiente

import { z } from 'zod'; // faz a validacao

const envSchema = z.object({
  PORT: z.coerce.number().default(3333), // coerce converte string para number
  DATABASE_URL: z.string().url().startsWith('postgresql://'), // valida se a string comeca com postgres://
});

export const env = envSchema.parse(process.env); // faz o parse e valida as variaveis de ambiente

