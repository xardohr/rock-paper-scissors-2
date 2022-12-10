"use strict";

const choices = ["rock", "paper", "scissors"]
let playerSelection;
let playerScore = 0;
let computerScore = 0;
let gameTestPlayer = 1;
let gameTestComputer = 1;

const message = document.querySelector(".message");
const playerScoreEl = document.querySelector(".player-score");
const computerScoreEl = document.querySelector(".computer-score");
const playerArena = document.querySelector(".img-arena-player");
const computerArena = document.querySelector(".img-arena-computer");
const arenaSection = document.querySelector(".arena-section");
const selectorBtn = document.querySelectorAll(".btn-selector");



                    // func for computer to select random choice
const getComputerChoice = function(){
    const randomOption = choices[Math.floor(Math.random()*choices.length)];
    return randomOption
}
let computerSelection = getComputerChoice(); //for more readable code


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
// Game logic

const playRound = function (playerSelection, computerSelection){
        if(checkWinner(playerSelection, computerSelection) == "Player"){

            playerScore += 1;
            message.textContent =`You win! ${playerSelection} beats ${computerSelection}!`
            playerScoreEl.textContent = playerScore;
            if(playerScore > 4){
                message.textContent = `You won!`
                document.querySelector("body").style.backgroundColor = "green";
                selectorBtn.forEach(function(btn){
                    btn.classList.add("hidden")
                    playerScoreEl.textContent = 5;
                })}

        }else if(checkWinner(playerSelection, computerSelection) == "Computer"){
            computerScore += 1;
            message.textContent =`You lose! ${computerSelection} beats ${playerSelection}!`
            computerScoreEl.textContent = computerScore;
            if(computerScore > 4){
                message.textContent = `You lost!`
                document.querySelector("body").style.backgroundColor = "red";
                selectorBtn.forEach(function(btn){
                    btn.classList.add("hidden")
                    computerScoreEl.textContent = 5;
                })}
        }else{
            message.textContent =`TIE`
        }
}

const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");
const againBtn = document.querySelector(".again");

rockBtn.addEventListener("click", function(){
    computerSelection = getComputerChoice();
    computerArena.src = `${computerSelection}.png`
    arenaSection.style.marginLeft = "15rem"
    playerSelection = "rock"
    playerArena.src = `${playerSelection}.png`
    playRound(playerSelection, computerSelection);
});
paperBtn.addEventListener("click", function(){
    computerSelection = getComputerChoice();
    arenaSection.style.marginLeft = "15rem"
    playerSelection = "paper";
    computerArena.src = `${computerSelection}.png`
    playerArena.src = `${playerSelection}.png`
    playRound(playerSelection, computerSelection);
});
scissorsBtn.addEventListener("click", function(){
    computerSelection = getComputerChoice();
    arenaSection.style.marginLeft = "15rem"
    playerSelection = "rock";
    computerArena.src = `${computerSelection}.png`
    playerArena.src = `${playerSelection}.png`
    playRound(playerSelection, computerSelection);
});
againBtn.addEventListener("click",function(){
    playRound(playerSelection, computerSelection);
    playerScore = 0;
    computerScore = 0;
    message.textContent =``
    computerScoreEl.textContent = computerScore;
    playerScoreEl.textContent = playerScore;
    selectorBtn.forEach(function(btn){
        btn.classList.remove("hidden")
    })
    document.querySelector("body").style.backgroundColor = "#343a40";
    computerArena.src = `question.png`
    playerArena.src = `question.png`

})