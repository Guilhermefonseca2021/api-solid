import { app } from './app'
import { env } from './env/env'

app.listen({
    port: env.PORT,
    host: '0.0.0.0' // torna acessivel para o front-end
}).then(() => {
    console.log("🚀 HTTP Server Running@")
})