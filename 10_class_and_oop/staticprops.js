class user{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Username is ${this.username}`);
        
    }
}


class teacher extends user{
    constructor(username,email){
        super(username)
        this.email = email;
    }

     static createId(){
        return ` the id of user is ${Math.floor(Math.random()*10+123)}`
    }
}

const me = new teacher('tushar','yshr@gmail.com');

console.log(me.createId())

