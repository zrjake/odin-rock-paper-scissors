// This is a simple rock paper scissors game
// that runs entirely in the console, initiated
// by the function playGame and taking input
// from prompt.

// Runs playRound 5 times, tracking score
// and declaring a winner.
function playGame() {
    // Determines the winner given players' choices.
    function playRound(humanChoice, computerChoice) {
        // Three possibilites: tie, comp wins, human wins.
        // H beats C if: H is rock, C is scissors
        //               H is paper, C is rock
        //               H is scissors, C is paper
        // Everything that isn't a tie or one of these
        // is a victory for C.
        // (This also means computer wins when human gives
        // bad input, which seems fair to me.)
        if (humanChoice == computerChoice) {
            console.log(`Tie! We both did ${humanChoice}.`);
        } else if ((humanChoice == "rock" && computerChoice == "scissors")
                || (humanChoice == "paper" && computerChoice == "rock")
                || (humanChoice == "scissors" && computerChoice == "paper")) {
            console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
            humanScore++;
        } else {
            console.log(`I win! ${computerChoice} beats ${humanChoice}.`);
            computerScore++;
        }
    }

    // Run five rounds of the game.
    let humanScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }

    console.log(`Final score: ${humanScore} for you, ${computerScore} for me.`);
    if (humanScore > computerScore) {
        console.log("You win!");
    } else if (computerScore > humanScore) {
        console.log("I win!");
    } else {
        console.log("It's a tie!");
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