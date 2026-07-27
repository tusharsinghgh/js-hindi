const user = {
    username:"Tushar",
    isLoggedIn:true,
    pass:123,
}
console.log(user);

function user1(username,isloggedIn,pass){
  this.username = username;
  this.isLoggedIn = isloggedIn;
  this.pass = pass;

  this.greetings = function(){
    console.log(`good afternoon ${this.username}`);
    
  }
}

const userOne = new user1('tushar',true,123);

console.log(userOne);
