const userName = 'tushar06@gmail.com';

if (userName) {
    console.log('user got email');
    
}else{
    console.log("user dont have email");
    
}

// falsy values
// 0 , -0, "", null,undefined,bigInt 0n ,false,Nan

// truthy values
// "0","flase"," ",{},[],function(){}

// check array

const userName1 = [];
if(userName1.length ===0){
console.log('Array is empty');

}

// check objects

const emptyObj = {}
if (Object.keys(emptyObj).length===0) {
    console.log("obj is empty");
    
}


// NULLISH COALESCING OPERATOR (??) : null undefined

let val1;
 val1 = null ?? 10 ?? 22;
 console.log(val1);
 

 // TERNARY OPERATOR

 // condition ? true : false

 const price = 250;
  price <= 300 ? console.log("true") : console.log("false");
  
  