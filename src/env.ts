import { z } from 'zod'

const envSchema = z.object({
  VITE_API_URL: z.string().url(),
  VITE_ENABLE_API_DELAY: z.string().transform((value) => value === 'true'),
})

// import.meta -> de onde o vite trás as variáveis ambiente
export const env = envSchema.parse(import.meta.env)
