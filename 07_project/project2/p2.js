const form = document.querySelector('form');
form.addEventListener('submit',(e)=>{
 e.preventDefault();

 const height = parseInt(document.querySelector('#height').value)
 const Weight = parseInt(document.querySelector('#Weight').value)
 const result = document.querySelector('.result')

 if(height <= 0 || isNaN(height)){
    result.innerHTML = `Please give a valid height ${height} `
 } else if(Weight <= 0|| isNaN(Weight)){
    result.innerHTML = `Please give a valid weight ${Weight} `
 }
 else{
    const bmi = (Weight / ((height / 100) ** 2)).toFixed(2);
    result.innerHTML = `<span>${bmi}</span>`
 }
})