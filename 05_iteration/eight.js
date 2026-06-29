// reduce 

const shoppingCart = [
  {
    id: 1,
    name: "Wireless Mouse",
    category: "Electronics",
    price: 899,
    quantity: 2,
    inStock: true,
  },
  {
    id: 2,
    name: "Mechanical Keyboard",
    category: "Electronics",
    price: 3499,
    quantity: 1,
    inStock: true,
  },
  {
    id: 3,
    name: "Laptop Stand",
    category: "Accessories",
    price: 1299,
    quantity: 1,
    inStock: true,
  },
  {
    id: 4,
    name: "USB-C Hub",
    category: "Electronics",
    price: 1999,
    quantity: 3,
    inStock: false,
  },
  {
    id: 5,
    name: "Water Bottle",
    category: "Home",
    price: 499,
    quantity: 2,
    inStock: true,
  },
  {
    id: 6,
    name: "Notebook",
    category: "Stationery",
    price: 199,
    quantity: 5,
    inStock: true,
  },
  {
    id: 7,
    name: "Backpack",
    category: "Bags",
    price: 2499,
    quantity: 1,
    inStock: true,
  },
  {
    id: 8,
    name: "Bluetooth Speaker",
    category: "Electronics",
    price: 2999,
    quantity: 1,
    inStock: false,
  },
  {
    id: 9,
    name: "Coffee Mug",
    category: "Kitchen",
    price: 399,
    quantity: 4,
    inStock: true,
  },
  {
    id: 10,
    name: "Desk Lamp",
    category: "Home",
    price: 1599,
    quantity: 2,
    inStock: true,
  },
];


const amountForpay = shoppingCart.reduce((acc,item)=>{
  return acc + item.price
}, 0)

console.log(amountForpay);
