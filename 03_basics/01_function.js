function myfunc(){
    console.log('hey js');
    
}

myfunc();

function addNumbers (number1 , number2) {
    let sum = number1 + number2
    return sum;
}

const result = addNumbers(10,4)
console.log(result);

function userLoggedIn(username) {

    if(username === undefined){  // (!username)
       console.log("please enter your name!");
       
    }
    else{
         return(`${username} logged in`);
    }
   
    
}

console.log(userLoggedIn("y"))

//cartAddition 

function cartPriceAdd(...num1) {

    console.log(num1);
    
    
}

cartPriceAdd(100,200,300)

//object in functions

const reacharge = {
    pack:"2gb/day",
    price:599
}

function objInFunc(myobj) {
    console.log(` pack of ${myobj.pack} of rupees ${myobj.price} is done `);
     
}

// console.log(objInFunc(reacharge))
objInFunc({
    pack:"1gb/day",
    price:399
});


//Array in objects
 const myArray = [12,34,56,89];

 function arrayInFunc(anArray) {
    return anArray[1]
 }
 console.log(arrayInFunc(myArray));
//  console.log(arrayInFunc([11,22,33,44]))
 
