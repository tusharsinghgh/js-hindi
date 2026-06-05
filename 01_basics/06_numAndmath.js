const num = 100;
console.log(num);

const num2 = new Number(200);
console.log(num2);

const price = 100000;
console.log(price.toLocaleString('en-In'));
console.log(price.toFixed(2));


const qnty = 123.865;
console.log(qnty.toPrecision(4));

//-----------------------------Math-----------------------------------------

console.log(Math);
console.log(Math.abs(-10));//absolute value
console.log(Math.round(3.9));//round of numbers
console.log(Math.ceil(3.2));//round of to upper value
console.log(Math.floor(3.9));//round of to lower value

const min = 1;
const max = 6;

console.log(Math.floor(Math.random()*(max-min + 1)));




