import { Application } from "https://deno.land/x/oak@v10.5.1/mod.ts";

const app = new Application()

app.use((ctx)=>{
ctx.response.body = "Hello Peanut"
})

await app.listen({port: 8000})