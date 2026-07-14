let randomNum = parseInt(Math.random()*100+1);

const userInput = document.querySelector('#guessField');
const submit = document.querySelector('#subt');
const guessSlot = document.querySelector('.guesses');
const remainig = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const stratOver = document.querySelector('.resultParas');

const para = document.createElement('p');

let prevGuess = []
let numGuess = 1

let playGame = true;

if(playGame === true){
    submit.addEventListener('click',(e)=>{
    e.preventDefault();
     const guess = parseInt(userInput.value)
     validateGuess(guess)
    })
}

function validateGuess(guess){
 if(isNaN(guess)){
   alert('Please give a valid number')
 }else if(guess < 1){
   alert('Please give a number greater than 1')
 }else if(guess > 100){
   alert('Please give a number lower than 100')
 }else{
    prevGuess.push(guess);
    if(numGuess === 10){
      cleanUpGuess(guess)
      displayMessage(`Game over random number was ${randomNum}`)
      endGame()
    }else{
        cleanUpGuess(guess)
        checkGuess(guess)
    }
 }
}

function checkGuess(guess){
if(guess === randomNum){
 displayMessage('You guessed it right')
 endGame()
} else if(guess < randomNum){
 displayMessage('Your number is too low')
} else if(guess > randomNum){
 displayMessage('Your number is too high')
}
}

function cleanUpGuess(guess){
userInput.value = ''
guessSlot.innerHTML += `${guess},`
numGuess++;
remainig.innerHTML = `${10-numGuess}`
}

function displayMessage(message){
lowOrHi.textContent = message
}

function endGame(){
userInput.value = ''
userInput.setAttribute('disabled','')
para.classList.add('button')
para.innerHTML = `<h2 id='newgame'>Start new game</h2>`
stratOver.appendChild(para)
playGame = false
newGame()
}

function newGame(){
   const newGameButton = document.querySelector('#newgame')
   newGameButton.addEventListener('click',(e)=>{
     randomNum = parseInt(Math.random()*100+1);
     prevGuess = []
     numGuess = 1
    guessSlot.innerHTML = ''
    remainig.innerHTML = `${10-numGuess}`
    userInput.removeAttribute('disabled')
    stratOver.removeChild(para)
    playGame = true;
   })
}