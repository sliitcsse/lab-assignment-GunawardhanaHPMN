import Koa from 'koa';
import bodyParser from 'koa-bodyparser'
import customerRouter from "./router/user.router.js";
import itemRouter from "./router/product.router.js";

const app = new Koa();
app.use(bodyParser())



app.use(async (ctx,next)=>{
    try {
        await next();
    }
    catch (err){
        ctx.status=err.statusCode||err.status||400;
        ctx.body={
            message:err.message
        }
    };
});

app.use(customerRouter.routes())
    .use(customerRouter.allowedMethods())
    
    app.use(itemRouter.routes())
    .use(itemRouter.allowedMethods())



app.listen(3036,()=>{
    console.log(`Application Started successfully!! (Running port is 3036`)
});