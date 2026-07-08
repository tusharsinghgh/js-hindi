const color = document.querySelectorAll('.color');
const body = document.querySelector('body');

color.forEach((color)=>{
console.log(color);
color.addEventListener('click',(e)=>{
 console.log(e.target);
 
 if(e.target.id === "red"){
    body.style.backgroundColor = e.target.id
 }
  if(e.target.id === "blue"){
    body.style.backgroundColor = e.target.id
 }
  if(e.target.id === "violet"){
    body.style.backgroundColor = e.target.id
 }
  if(e.target.id === "green"){
    body.style.backgroundColor = e.target.id
 }
})

})