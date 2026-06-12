//singleton 
//object.create

//literals

const mysym = Symbol("libra")
const user = {
    name:"Vishu",
    age:20,
    [mysym]:"libra",
    email:"vishu@2006gmail.com",
    location:"Navsari",
    isLoggedIn : false,
    lastLogIn:['tuesday','friday']
}

console.log(user.name);
console.log(user["name"]);

user.age = 21;
console.log(user);
// Object.freeze(user);
user.name="rahul";
console.log(user);

user.greetings = function(){
    console.log('good night');
    
}

console.log(user.greetings());

user.greeting2 = function(){
    console.log(`good night ${this.name}`);
    
}

console.log(user.greeting2());
