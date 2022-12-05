const computerChoiceDisplay = document.getElementById("computer-choice")
const userChoiceDisplay = document.getElementById("user-choice")
const resultDisplay = document.getElementById("result")

const possibleChoices = document.querySelectorAll("button")

let userChoice;
let computerChoice;
let result;

possibleChoices.forEach(button => button.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1 //length is the same as 3 for 3 choices


    switch(randomNumber){
        case 1:
            computerChoice = 'rock' 
        break;
        case 2:
            computerChoice = 'paper'
        break;

        case 3:
            computerChoice = 'scissors'
        break;
    }
   
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult(){

    if(computerChoice === userChoice) {
        result = 'Draw'
    }
    if(computerChoice === 'rock' && userChoice === 'paper'){
        result = 'Winner!'
    }
    if(computerChoice === 'rock' && userChoice === 'scissors'){
            result = 'You Lose!'
    }
    if(computerChoice === 'paper' && userChoice === 'rock'){
        result = 'You Lose!'
    }
    if(computerChoice === 'paper' && userChoice === 'scissors'){
        result = 'Winner!'
    }

    if(computerChoice === 'scissors' && userChoice === 'paper'){
        result = 'You Lose!'
    }
    if(computerChoice === 'scissors' && userChoice === 'rock'){
        result = 'Winner!'
    }

    resultDisplay.innerHTML = result
}