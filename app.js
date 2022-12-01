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
    const randomNmber = Math.floor(Math.random() * possibleChoices.length) + 1 //length is the same as 3 for 3 choices
    console.log(randomNmber)

    if(randomNmber === 1){
        computerChoice = 'rock' 
    }
    
    if(randomNmber === 2){
        computerChoice = 'paper'
    }
    if(randomNmber === 3){
        computerChoice = 'scissors'
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