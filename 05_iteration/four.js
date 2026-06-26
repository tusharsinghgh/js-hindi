const myobj = {
    "DishName" : "Fries",
    "price" : "199",
    "size" : "full-plate"
}

for (const key in myobj) {
  
    console.log(`${key} is ${myobj[key]}`);
    
    
}