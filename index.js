"use strict";

const choices = ["rock", "paper", "scissors"]
let playerScore = 0;
let computerScore = 0;


                    // func for computer to select random choice
const getComputerChoice = function(){
    const randomOption = choices[Math.floor(Math.random()*choices.length)];
    return randomOption
}
let computerSelection = getComputerChoice(); //for more readable code



                        // get player input

// const playerInput = prompt("Choose one: rock, paper, scissors"); (mistake i made)
// let playerSelection = playerInput.toLocaleLowerCase(); //to make it case sensetive
// console.log(playerSelection); 

const getPlayerChoice = function(){
    let validatedInput = false;
    while(validatedInput == false){
        const choose = prompt("Select: Rock, Paper, Scissors")
        let playerChoice = choose.toLocaleLowerCase();
        if(playerChoice == null){
            continue
        }
        if(choices.includes(playerChoice)){
            validatedInput = true;
            return playerChoice;
        }
    }
}

let playerSelection = getPlayerChoice();


// winning condition 

const checkWinner = function (playerSelection, computerSelection){
    if(playerSelection == computerSelection){
        return "Tie!"
    } else if(
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper")
    ){
        return "Player"
    }else {
        return "Computer"
    }
}

// play 1 round

const playRound = function (playerSelection, computerSelection){
    if(checkWinner(playerSelection, computerSelection) == "Player"){
        playerScore += 1;
        console.log(`You win! ${playerSelection} beats ${computerSelection}!`)
        console.log(`Your score is: ${playerScore}`)
        console.log(`Computer score: ${computerScore}`)
    }else if(checkWinner(playerSelection, computerSelection) == "Computer"){
        computerScore += 1;
        console.log(`You lose! ${computerSelection} beats ${playerSelection}!`)
        console.log(`Your score is: ${playerScore}`)
        console.log(`Computer score: ${computerScore}`)
    }else{
        console.log(`TIE`)
        console.log(`Your score is: ${playerScore}`)
        console.log(`Computer score: ${computerScore}`)
    }
}

// playRound(playerSelection, computerSelection);

// play 5 rounds

const game = function(){
    for (let i = 0 ; i < 5 ; i++){
        playerSelection = getPlayerChoice();
        computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
        console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~")
    }
    if(playerScore > computerScore){
        console.log(`You woooon`)
    }else if( playerScore < computerScore){
        console.log(`You looooost`)
    }else{
        console.log(`Its a tie! good game!`)
    }
}

game();


