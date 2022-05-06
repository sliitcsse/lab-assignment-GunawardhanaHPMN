import Router from '@koa/router'
import {deletepost, get, getAll, save, update} from '../api/user.js'

const  userRouter =new Router({
    prefix:'/user'
});

userRouter.post('/', (ctx)=>{
    const data =ctx.request.body;
    ctx.body =save(data);
    ctx.set('Content-Type','application/json')
    ctx.status=201;
})

userRouter.get('/:id',(ctx)=>{
    const id =ctx.params.id;
    ctx.body =get(id);
    ctx.set('Content-Type','application/json')
    ctx.status=200;
})

userRouter.get('/',(ctx)=>{
    console.log('here1');
    ctx.body =getAll();
    ctx.set('Content-Type','application/json')
    ctx.status=200;
})

userRouter.get('/',(ctx,next)=>{
    console.log('here1');
    ctx.body =getAll();
    ctx.set('Content-Type','application/json')
    ctx.status=200;
    next();
})

userRouter.put('/:id',(ctx)=>{
    const id =ctx.params.id;
    ctx.body =update(id,ctx.request.body);
    ctx.set('Content-Type','application/json')
    ctx.status=200;
})

userRouter.delete('/:id',(ctx)=>{
    const id =ctx.params.id;
    deletepost(id);
    ctx.status=204;
})

export default userRouter;