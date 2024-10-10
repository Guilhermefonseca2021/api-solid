import "dotenv/config";
import zod from 'zod'

const envSchema = zod.object({
    // preciso q seja uma entre essas opcoes "enum"
    NODE_ENV: zod.enum(['dev', 'test', 'production']).default('dev'),
    // pega o dado independente do formato e converte para...
    PORT: zod.coerce.number().default(3333)
})

// tenta validar as informacoes
const _env = envSchema.safeParse(process.env)

if (_env.success == false) {
    console.log('❌ Invalid environment variables', _env.error.format())
    
    throw new Error("❌ Invalid environment variables")
}

export const env = _env.data