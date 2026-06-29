// map

const myArr = [1,2,3,4,5,6,7,8,9,10];

const newNum = myArr.map((num)=>{
  return num * 10;
})

console.log(newNum);


//chainig

const myArr1 = [2,3,4,5,6,8];

const newmyArr1 = myArr1.
                  map((num)=> num*10).
                  map((num)=>num+1).
                  filter((num)=>num>=40)

console.log(newmyArr1);
                