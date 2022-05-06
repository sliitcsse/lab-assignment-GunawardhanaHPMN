import Koa from 'koa';
import bodyParser from 'koa-bodyparser'
import customerRouter from "./router/user.router.js";

const app = new Koa();
app.use(bodyParser())

// function  parser(ctx,next){
//     inpurstream=request.input.stream
//     ctx.request.body=JSON.parse(inpurstream);
//     next();
// }

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

// app.use(ctx=>{
//     console.log('here2');
//     ctx.set('Content-Type', 'text/html')
//     ctx.body ='<h3>Not founds</h3>';
//     ctx.status=404
// });

app.listen(3001,()=>{
    console.log(`Application is running on port 3001`)
});