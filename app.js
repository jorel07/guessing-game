/* 
 game functions 
 - player must guess a number between a min and a max 
 - Notify the player of the correct answer if lose  
 -  player gets a certain amount of guesses
 -  notify player of guesses remaining 
 -  let player choose to play again 
*/

// gameValues
 let min = 10,
     max = 30,
     winningNum = 3,
     guessesLeft = 3;
    

// UI elements

const game = document.querySelector('#game')
const guessBtn= document.querySelector('#guess-btn');
const guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num');
 

 guessBtn.addEventListener('click', function(){
    let guess = parseInt(guessInput.value);


    if (isNaN(guess) || guess < min || guess > max) {

    setMessage(`please enter a number between ${min} and ${max}`, 'red') ;
    // input color
    guessInput.style.color = 'red';
    guessInput.style.borderColor = 'red';

    }

    if (guess === winningNum){
        
        setMessage(`${guess} is the right guess!, You win`, 'green');
        guessInput.style.borderColor = 'green';
        guessInput.style.color = 'green';
        guessInput.disabled = true;

    }
    else{
        console.log('wrong guess , try again!')
    }
}) 



function setMessage(msg, color){
    message.textContent = msg;
    message.style.color = color;
}




// dark theme of the browser
let button = document.querySelector('.theme-toggle')

button.addEventListener('click', ()=>{
  document.documentElement.classList.toggle('dark-mode')
})