function setUsername(username){

    this.username = username
}

function createUser(username,email,pass){
    setUsername.call(this,username)
    this.email = email;
    this.pass = pass;
}

const user = new createUser('Tushar','tshr@fb',198);
console.log(user);
