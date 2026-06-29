// filter

const nums = [1,2,3,4,5,6];

// const greaterThan4 = nums.filter( (num)=>{
//  return num>4;
// } )

// console.log(greaterThan4);

const newNum = [];

nums.forEach((num)=>{
if(num>4){
 newNum.push(num)
}
})

// console.log(newNum);

const mobiles = [
  {
    id: 1,
    brand: "Apple",
    model: "iPhone 15",
    price: 79999,
    color: "Black",
    storage: "128GB",
    ram: "6GB",
    rating: 4.8,
    inStock: true,
  },
  {
    id: 2,
    brand: "Samsung",
    model: "Galaxy S24",
    price: 74999,
    color: "Blue",
    storage: "256GB",
    ram: "8GB",
    rating: 4.7,
    inStock: true,
  },
  {
    id: 3,
    brand: "OnePlus",
    model: "OnePlus 12",
    price: 64999,
    color: "Green",
    storage: "256GB",
    ram: "12GB",
    rating: 4.6,
    inStock: false,
  },
  {
    id: 4,
    brand: "Google",
    model: "Pixel 8",
    price: 69999,
    color: "White",
    storage: "128GB",
    ram: "8GB",
    rating: 4.7,
    inStock: true,
  },
  {
    id: 5,
    brand: "Xiaomi",
    model: "Xiaomi 14",
    price: 59999,
    color: "Black",
    storage: "256GB",
    ram: "12GB",
    rating: 4.5,
    inStock: true,
  },
  {
    id: 6,
    brand: "Realme",
    model: "Realme GT 6",
    price: 42999,
    color: "Silver",
    storage: "256GB",
    ram: "12GB",
    rating: 4.4,
    inStock: false,
  },
  {
    id: 7,
    brand: "Vivo",
    model: "Vivo X100",
    price: 63999,
    color: "Blue",
    storage: "512GB",
    ram: "16GB",
    rating: 4.6,
    inStock: true,
  },
  {
    id: 8,
    brand: "Oppo",
    model: "Find X7",
    price: 68999,
    color: "Purple",
    storage: "256GB",
    ram: "12GB",
    rating: 4.5,
    inStock: true,
  },
  {
    id: 9,
    brand: "Nothing",
    model: "Phone (2)",
    price: 44999,
    color: "White",
    storage: "128GB",
    ram: "8GB",
    rating: 4.4,
    inStock: true,
  },
  {
    id: 10,
    brand: "Motorola",
    model: "Edge 50 Pro",
    price: 31999,
    color: "Black",
    storage: "256GB",
    ram: "8GB",
    rating: 4.3,
    inStock: false,
  },
];

const mobilefltr = mobiles.filter((mob)=>{
 return mob.brand === "Vivo"
})

console.log(mobilefltr);

