//this = refers current context

const user = {
    name:'tushar',
    role:'webdev',

    welcomeMsg : function(){
        console.log(`${this.name} , welcome to our website`);
        console.log(this); // return value in object
        
        
    }
}

// user.welcomeMsg()
// console.log(this); // dont return value

// function hey(){
//     console.log(this);  // it shows window value
    
// }

// hey();

// arrow function 
 const arrow = ()=>{
    console.log(this);
    
 }

 arrow();

 const addTwoNum = (num1,num2) =>{
    return num1 + num2;    // implicit
 }

 console.log( addTwoNum(2,4));
 
  const addNum = (num1,num2) => (num1 + num2);    // explicit
 

 console.log( addNum(3,3));


