function addition(x,y){
    return x+y;
}

addition.Power = 2
console.log(addition(5,5));
console.log(addition.Power);
console.log(addition.prototype);



function user(username,age){
    this.username = username;
    this.age = age;
}

user.prototype.increment = function(){
    this.age++;
}

user.prototype.printMe = function(){
 console.log(`my age is ${this.age}`);
 
}

const user1 = new user('Tushar',21);
const user2 = new user('vishu',20);


user2.increment();
user2.printMe();



