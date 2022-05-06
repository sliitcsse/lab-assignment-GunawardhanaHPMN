import {randomBytes} from 'crypto';

const items =new Map();

export const save =({ItemName,ItemPrice,ItemQty,ItemDescription})=>{
    const item ={id:randomBytes(4).toString('hex'),ItemName,ItemPrice,ItemQty,ItemDescription,postedDate: new Date()};
    items.set(item.id,item);
    return item;
}
export const  get=(id)=>{
    const  item =items.get(id);
    if(!item){
        throw  new Error(`not found for the ID ${id}`)
    }
    return item;
}

export const  getAll=()=>{
    return [...items.values()];
}

export const  update=(id,{ItemName,ItemPrice,ItemQty,ItemDescription,postedDate})=>{
  if(!items.has(id)){
      throw  new Error(`ID not found`);
  }
  const item ={id,ItemName,ItemPrice,ItemQty,ItemDescription,postedDate:new Date()};
  items.set(post.id,post);
    return item;
}

export const deletepost=(id)=>{
    if(!items.has(id)){
        throw  new Error(`ID not found`);
    }
    items.delete(id);
}


