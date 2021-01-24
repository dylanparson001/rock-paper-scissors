//event listener for clicking rock button
const rock = document.querySelector("#rock"); // selects rock id
    rock.addEventListener("click", () => { // event listener 
    let choice = "rock";
    rockPaperScissors(choice);
})

const paper = document.querySelector("#paper");
    paper.addEventListener("click", () => {
    let choice = "paper";
    rockPaperScissors(choice);
})

const scissors = document.querySelector("#scissors");
    scissors.addEventListener("click", () => {
    let choice = "scissors";
    rockPaperScissors(choice);
})


let tie = () => {
    const results = document.querySelector(".results"); 
    const tie = document.createElement('h3');
    tie.textContent = "It is a tie!";
    results.appendChild(tie);

}

let playerWin = () =>{
    const results = document.querySelector(".results"); 
    const player = document.createElement('h3');
    player.textContent = "You win!";
    results.appendChild(player)
}

let computerWin = () => {
    const results = document.querySelector(".results"); 
    const computer = document.createElement('h3');
    computer.textContent = "Computer wins!";
    results.appendChild(computer)
}


// Full rock paper scissors game function
function rockPaperScissors(choice){
    const rock = 1;
    const paper = 2;
    const scissors = 3;
    let computer;
    let winner;
    let playerWins = 0;
    let computerWins = 0;

    const score = document.querySelector(".score");
    /*const playerScore = score.createElement('h1');
    const computerScore = score.createElement("h1");
    playerScore.textContent = "Player score: " + playerWins;
    computerScore.textContent = "Computer score: " + computerWins;
    score.appendChild(playerScore);
    score.appendChild(computerScore);*/

    computer = computerChoice(); // gets random number 1-3 and converts it to a string
    winner = gameDecision(choice, computer); // decides winner

    if(winner === 1){
        playerWins++; // keeps track of amount of wins for the user
    }
    else if (winner === 2){
        computerWins++; // keeps track of amount of wins for the computer
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
    const comChoice = document.querySelector(".results");
    const displayResult = document.createElement('h3');
    displayResult.textContent = "The computer chose " + choice;
    comChoice.appendChild(displayResult);

    return choice;
}

//decides whether computer or player wins

function gameDecision(playerChoice, computerChoice){
   
    if (playerChoice === computerChoice){
        tie();
        return 0;
    }
    if (playerChoice === "rock" && computerChoice === "scissors"){
        playerWin();
        return 1;
    }
    if (playerChoice === "rock" && computerChoice === "paper"){
        computerWin();
        return 2;
    }
    if (playerChoice === "scissors" && computerChoice === "paper"){
        playerWin();
        return 1;
    }
    if (playerChoice === "scissors" && computerChoice === "rock"){
        computerWin();
        return 2;
    }
    if (playerChoice === "paper" && computerChoice  === "scissors"){
        computerWin();
        return 2;
    }
    if (playerChoice.toLowerCase() === "paper" && computerChoice.toLowerCase() === "rock"){
        playerWin();
        return 1;
    }
    
}
