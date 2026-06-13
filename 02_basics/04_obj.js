const obj = new Object()
 obj.name = "Tushar";
 obj.age = 20;
 obj.isLoggedIn = false;
console.log(obj);


//combine objects
const obj1 = {1:"a",2:"b"};
const obj2 = {3:"a",4:"b"};

// first method

const obj3 = Object.assign({},obj1,obj2);
console.log(obj3);

//second method SPREAD

const obj4 = {...obj1,...obj2}
console.log(obj4);

//objects methods

console.log(Object.keys(obj)); //for keys
console.log(Object.values(obj)); // for values
console.log(obj.hasOwnProperty('islogged')); // check the value of obj






