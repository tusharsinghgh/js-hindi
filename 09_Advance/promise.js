const promise1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('work done');
        resolve()
    },1000)
})

promise1.then(()=>{
console.log('promise consumed');

})


new Promise((resolve, reject) => {
    setTimeout(()=>{
        console.log('work has been done');
        resolve();
    },1000)
}).then(()=>{
    console.log('done');
    
})

const promise3 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve({username:"@ur.tuxxhar",password:"tsh@122"})
    },1000)
})

promise3.then((user)=>{
console.log(user);
return user.password
}).then((data)=>{
console.log(data);

})