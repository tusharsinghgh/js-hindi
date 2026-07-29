class User{
    constructor(username,email,pass){
     this.username = username;
     this.email = email;
     this.pass = pass;
    
    }

     encryptPass(){
        return`${this.pass}abc`
     }

     changeUsername(){
        return`${this.username.toUpperCase()}`
     }
}

const tea = new User('Rakesh','Raku@gmail.com',122)

console.log(tea.encryptPass());
console.log(tea.changeUsername());


// behind the scene

function User1(username,email,pass){
   this.username = username;
   this.email = email;
   this.pass = pass;
}

User1.prototype.encryptPass = function(){
    return `${this.pass}abc`
}

User1.prototype.changeName = function(){
    return `${this.username.toUpperCase()}`
}

const tea1 = new User1('Abhi','abhi@gmail',321);
console.log(tea1);
console.log(tea1.encryptPass());
console.log(tea1.changeName());


