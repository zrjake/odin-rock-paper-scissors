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
            outcomeP.textContent = `Tie! We both did ${humanChoice}.`;
        } else if ((humanChoice == "rock" && computerChoice == "scissors")
                || (humanChoice == "paper" && computerChoice == "rock")
                || (humanChoice == "scissors" && computerChoice == "paper")) {
            outcomeP.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
            humanScore++;
            showHumanScore();
        } else {
            outcomeP.textContent = `I win! ${computerChoice} beats ${humanChoice}.`;
            computerScore++;
            showComputerScore();
        }

        if (humanScore >= 5) {
            outcomeP.textContent = "Congrats! You win!";
            outcomeP = null;
        }
        if (computerScore >= 5) {
            outcomeP.textContent = "Sorry, but I won.";
            outcomeP = null;
        }
    }

    function showHumanScore() {
        humanScoreP.textContent = "Your score: " + humanScore;
    }
    function showComputerScore() {
        computerScoreP.textContent = "My score: " + computerScore;
    }

    let humanScore = 0;
    let computerScore = 0;

    let humanScoreP = document.querySelector(".results .human");
    let computerScoreP = document.querySelector(".results .computer");
    showHumanScore();
    showComputerScore();

    let outcomeP = document.querySelector(".results .outcome");
    outcomeP.textContent = "New game! Select rock, paper, or scissors to begin!"

    gameButtons = document.querySelector(".game-buttons");
    gameButtons.addEventListener("click", (event) => {
        let humanChoice = event.target.id;
        let computerChoice = getComputerChoice();
        outcomeP.textContent = humanChoice + " " + computerChoice;
        playRound(humanChoice, computerChoice);
    });
} 

// Generates rock/paper/scissors randomly.
function getComputerChoice() {
    choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

const startButton = document.querySelector("#start-button");
startButton.addEventListener("click", playGame);