const rock = 1;
const paper = 2;
const scissors = 3;
let playerChoice ;
let computer;
let winner;
 
for (let i = 0; i < 5; i++){ // plays the game 5 times, will make this a function with the game inside
    console.log(i);
    playerChoice = gameChoice(); // gets user input
    computer = computerChoice(); // gets random number 1-3 and converts it to a string
    winner = gameDecision(playerChoice, computer);

}

//Functions for tic tac toe game
// gets random choice from computer
function computerChoice(){
    let choice = Math.floor(Math.random() * 3) + 1;
    if (choice === 1){
        choice = "rock";
    }
    else if (choice == 2){
        choice = "scissors";
    }
    else {
        choice = "paper";
    }
    console.log("The computer chose " + choice);
    return choice;
}

// gets input from user
function gameChoice(){
    let choice = prompt("Choose Rock Paper or Scissors");
    console.log("You chose " + choice);
    return choice;
}

//converts computer choice to string
/* I would like to make a number option that the user chooses from to avoid
typing and spelling errors but the specs wanted the user to be able to put lowercase or uppercase
So i took that as comparing strings instead of numbers */

function convertComputerChoice(choice){
   
}
//decides whether computer or player wins
function gameDecision(playerChoice, computerChoice){
    if (playerChoice === computerChoice){
        console.log("It is a tie!");
        return 0;
    }
    else if (playerChoice.toLowerCase() === "rock" && computerChoice.toLowerCase() === "scissors"){
        console.log("Player wins!");
        return 1;
    }
    else if (playerChoice.toLowerCase() === "rock" && computerChoice.toLowerCase() === "paper"){
        console.log("Computer wins!");
        return 2;
    }
    else if (playerChoice.toLowerCase() === "scissors" && computerChoice.toLowerCase() === "paper"){
        console.log("Player wins!");
        return 1;
    }
    else if (playerChoice.toLowerCase() === "scissors" && computerChoice.toLowerCase() === "rock"){
        console.log("Computer wins!");
        return 2;
    }
    else if (playerChoice.toLowerCase() === "paper" && computerChoice.toLowerCase() === "scissors"){
        console.log("Computer wins!");
        return 2;
    }
    else if (playerChoice.toLowerCase() === "paper" && computerChoice.toLowerCase() === "rock"){
        console.log("Player wins!");
        return 1;
    }
    
}