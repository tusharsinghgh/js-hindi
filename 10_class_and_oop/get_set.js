class user{
    constructor(email,password){
        this.email = email;
        this.password = password;
     
    }

    get email(){
        return  `${this._email.toUpperCase()}`
    }

    set email(value){
        this._email = value;
    }
}


const me = new user("tushar@gmail.com","sbc142")
console.log(me.email);


// using function 

function user1(password,email){
   this._email = email;
   this._password = password;

   Object.defineProperty(this,'email',{
    get : function() {
        return this._email.toUpperCase()
    },

    set : function(value){
         this._email = value;
    }
   })
}

const x = new user1('fake3232','fake@gmail.com')
console.log(x.email)


// by using object 
const user2 = {
    _password:'rk@123',
    _email:'rk@gmail.com',


    get password(){
        return this._password.toUpperCase()
    },

    set password(value){
        this._password = value;
    }
}

const y = Object.create(user2);
console.log(y.password)