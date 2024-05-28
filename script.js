// This is a simple rock paper scissors game
// that runs entirely in the console, initiated
// by the function playGame and taking input
// from prompt.

// Runs playRound 5 times, tracking score
// and declaring a winner.
function playGame() {

} 

let humanScore = 0;
let computerScore = 0;
const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();
playRound(humanChoice, computerChoice);
// Determines the winner given players' choices.
function playRound(humanChoice, computerChoice) {
    // Three possibilites: tie, comp wins, human wins.
    // H beats C if: H is rock, C is scissors
    //               H is paper, C is rock
    //               H is scissors, C is paper
    // Everything that isn't a tie or one of these
    // is a victory for C.
    if (humanChoice == computerChoice) {
        console.log("It's a tie! No points awarded.");
    } else if ((humanChoice == "rock" && computerChoice == "scissors")
            || (humanChoice == "paper" && computerChoice == "rock")
            || (humanChoice == "scissors" && computerChoice == "paper")) {
        console.log("You win! +1 point");
        humanScore++;
    } else {
        console.log("I win!");
        computerScore++;
    }
}

// Prompts user for a choice, returning lowercase input.
function getHumanChoice() {
    return prompt("Rock, paper, or scissors?").toLowerCase();
}

// Generates rock/paper/scissors randomly.
function getComputerChoice() {
    choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
}