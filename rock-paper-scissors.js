rockPaperScissors();

// Full rock paper scissors game
function rockPaperScissors(){
    const rock = 1;
    const paper = 2;
    const scissors = 3;
    let playerChoice ;
    let computer;
    let winner;
    let playerWins = 0;
    let computerWins = 0;

    for (let i = 0; i < 5; i++){ // plays the game 5 times
        playerChoice = gameChoice(); // gets user input
        computer = computerChoice(); // gets random number 1-3 and converts it to a string
        winner = gameDecision(playerChoice, computer); // decides winner

        if(winner === 1){
            playerWins++; // keeps track of amount of wins for the user
        }
        else if (winner === 2)
            computerWins++; // keeps track of amount of wins for the computer
        }
        console.log("Player has won " + playerWins + " times");
        console.log("Computer has won " + computerWins + " times");

        if (computerWins > playerWins){ // if the computer had more wins total
            console.log("Computer wins!");
        }
        else if (playerWins > computerWins){ // if the player had more wins total
            console.log("You win!");
        }
        
}   
//Gets random choice for computer
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