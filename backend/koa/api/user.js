import {randomBytes} from 'crypto';

const users =new Map();

export const save =({UserType,Username,Password})=>{
    const user ={id:randomBytes(4).toString('hex'),UserType,Username,Password,postedDate: new Date()};
    users.set(user.id,user);
    return user;
}
export const  get=(id)=>{
    const  user =users.get(id);
    if(!user){
        throw  new Error(`not found for the ID ${id}`)
    }
    return user;
}

export const  getAll=()=>{
    return [...users.values()];
}

export const  update=(id,{UserType,Username,Password,postedDate})=>{
  if(!users.has(id)){
      throw  new Error(`ID not found`);
  }
  const user ={id,UserType,Username,Password,postedDate:new Date()};
  users.set(post.id,post);
    return user;
}

export const deletepost=(id)=>{
    if(!users.has(id)){
        throw  new Error(`ID not found`);
    }
    users.delete(id);
}


