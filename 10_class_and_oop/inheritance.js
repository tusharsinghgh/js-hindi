class user{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`${this.username}`);
        
    }
}

class teacher extends user{
constructor(username,email,password){
    super(username)
    this.email = email;
    this .password = password;
}

  addcourse(){
    console.log(`New course was added by ${this.username}`)
}
}

const me = new teacher('akky','ak@gmail.com',"321");

me.addcourse()