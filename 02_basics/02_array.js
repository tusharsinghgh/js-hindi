let arr1 = [12,23,34,45,66];
let arr2 = [11,22,33,44,55];
arr1.push(...arr2);
console.log(arr1);

const marvels = ['thor','ironman','spiderman'];
const dc = ['superman','batman','flash'];

const marvel_dc = marvels.concat(dc);
console.log(marvel_dc);


const all = [...arr1,...arr2,...marvels,...dc]; // spread method
console.log(all);

const newArr = [1,2,3,4,[5,6,7,[8,3,2,[9,10]]]];
console.log(newArr.flat(Infinity));

console.log(Array.from({name:"rahul"})); // pass empty array

console.log(Array.isArray('tushar'));
console.log(Array.from('tushar'));

let s1 = 100;
let s2 = 200;
let s3 = 300;

console.log(Array.of(s1,s2,s3));
