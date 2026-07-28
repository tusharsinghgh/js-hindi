// let username = 'tushar    ';
// console.log(username.trueLength);

let myHero = ['thor','spiderman'];

let heroPowers = {
    thor:'hammer',
    spiderman:'sling',

    getpower: function(){
        console.log(`spiderman is ${this.spiderman}`);
        
    }
}

Object.prototype.tushar = function(){
    console.log(`Im Tushar`);
    
}

heroPowers.tushar()
myHero.tushar()

// MAKE A METHOD FOR STRING 
let username = 'Tushar';

String.prototype.trueLength = function(){
    console.log(`${this}`);
    return(`${this.trim().length}`);

}

username.trueLength()
let user6 = 'vishu    '
console.log( user6.trueLength());
