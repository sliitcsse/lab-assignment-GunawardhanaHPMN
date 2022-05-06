import Router from '@koa/router'
import {deletepost, get, getAll, save, update} from '../api/product.js'

const  itemRouter =new Router({
    prefix:'/item'
});

itemRouter.post('/', (ctx)=>{
    const data =ctx.request.body;
    ctx.body =save(data);
    ctx.set('Content-Type','application/json')
    ctx.status=201;
})

itemRouter.get('/:id',(ctx)=>{
    const id =ctx.params.id;
    ctx.body =get(id);
    ctx.set('Content-Type','application/json')
    ctx.status=200;
})

itemRouter.get('/',(ctx)=>{
    console.log('here1');
    ctx.body =getAll();
    ctx.set('Content-Type','application/json')
    ctx.status=200;
})

itemRouter.get('/',(ctx,next)=>{
    console.log('here1');
    ctx.body =getAll();
    ctx.set('Content-Type','application/json')
    ctx.status=200;
    next();
})

itemRouter.put('/:id',(ctx)=>{
    const id =ctx.params.id;
    ctx.body =update(id,ctx.request.body);
    ctx.set('Content-Type','application/json')
    ctx.status=200;
})

itemRouter.delete('/:id',(ctx)=>{
    const id =ctx.params.id;
    deletepost(id);
    ctx.status=204;
})

export default itemRouter;