// const promise1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log('work done');
//         resolve()
//     },1000)
// })

// promise1.then(()=>{
// console.log('promise consumed');

// })


// new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         console.log('work has been done');
//         resolve();
//     },1000)
// }).then(()=>{
//     console.log('done');

// })

// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve({username:"@ur.tuxxhar",password:"tsh@122"})
//     },1000)
// })

// promise3.then((user)=>{
// console.log(user);
// return user.password
// }).then((data)=>{
// console.log(data);

// })

const promise4 = new Promise((resolve, reject) => {
    let err = false;
    if (!err) {
        resolve({ username: "Tushar", Pass: "198" })
    } else {
        reject('ERROR: Something went wrong')
    }
})

promise4.then((data) => {
    console.log(data);

}).catch((error) => {
    console.log(error);
})

const promise5 = new Promise((resolve, reject) => {
    setTimeout(() => {
        let err = false;
        if (!err) {
            resolve({ username: "Tushar", Pass: "198" })
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

async function consumePromise5(
    
){
    
}