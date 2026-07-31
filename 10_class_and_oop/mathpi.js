// console.log(Math.PI);

// const change = Math.floor(Math.PI);
// console.log(change);

// console.log(Object.getOwnPropertyDescriptor(Math,'PI'))

const newObj = {
    username : 'Tushar',
    email : 'tshr@1gmail.com',
    pass:'986'
}
// console.log(Object.getOwnPropertyDescriptor(newObj,'username'))

Object.defineProperties(newObj,{
    pass:{
    writable:false,
    enumerable:false
},
   username:{
    writable:false,
    enumerable:false
},email:    {
    writable:false,
    enumerable:false
}})

// console.log(Object.getOwnPropertyDescriptor(newObj,'pass','username','email'))

for (const [key,value] of Object.entries(newObj)) {
  
    console.log(`${key} : ${value}`);
    
    
}

