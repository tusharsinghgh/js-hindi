{} // block scope 

function one(){
    const username = 'tushar'

    function two(){
        const web = 'foodie'
        console.log(username);
        
    }
    // console.log(web);
    two()
    
}
one()

//------------------------------------- interesting----------------------------------
console.log(myfunc1(6));

function myfunc1(num1){
    return num1;
}



const myfunc2 = function(num2){
      return num2;
}

console.log(myfunc2(23));