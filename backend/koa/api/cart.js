import {randomBytes} from 'crypto';

const cartitems =new Map();

export const save =({UserID,ItemID,Quantity})=>{
    const cartitem ={id:randomBytes(4).toString('hex'),UserID,ItemID,Quantity,postedDate: new Date()}; //User Id and Item Id should be foregn Keys
    cartitems.set(cartitem.id,cartitem);
    return cartitem;
}
export const  get=(id)=>{
    const  cartitem =cartitems.get(id);
    if(!cartitem){
        throw  new Error(`not found for the ID ${id}`)
    }
    return cartitem;
}

export const  getAll=()=>{
    return [...cartitems.values()];
}

export const  update=(id,{UserID,ItemID,Quantity,postedDate})=>{
  if(!cartitems.has(id)){
      throw  new Error(`ID not found`);
  }
  const cartitem ={id,UserID,ItemID,Quantity,postedDate:new Date()};
  cartitems.set(cartitem.id,cartitem);
    return cartitem;
}

export const deletepost=(id)=>{
    if(!cartitems.has(id)){
        throw  new Error(`ID not found`);
    }
    cartitems.delete(id);
}


