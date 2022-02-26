//Variable to store player score after each best of three. Initializes to zero.
let playerScore = 0;

//Variable to store cpu score after each best of three. Initializes to zero.
let cpuScore = 0;

//cpuChoice stores a random number between 1 and 3, used in cpuGuess
let cpuChoice;

//cpuGuess contains the value of the choice made in cpuChoice, based on cpuChoice.
let cpuGuess;

/* KEY:
1 = Rock
2 = Paper
3 = Scissors
*/

//function computerPlay() will generate the cpuGuess and return it's value

function computerPlay() {
    cpuChoice = Math.floor((Math.random() * 3) + 1);

    if (cpuChoice == "1"){
        cpuGuess = "ROCK";
        return(cpuGuess);
    } else if (cpuChoice == "2") {
        cpuGuess = "PAPER";
        return(cpuGuess);
    } else if (cpuChoice == "3") {
        cpuGuess = "SCISSORS";
        return(cpuGuess);
    }
}

//function playRound() decides who won the round between the player and the cpu
function playRound(playerSelection, computerSelection) {
    if (playerSelection == "ROCK" && computerSelection == "ROCK") {
        return("Tie - Player chose Rock and CPU chose Rock.")
    } else if (playerSelection == "ROCK" && computerSelection == "PAPER") {
        cpuScore = cpuScore + 0.5;
        return("Loss - Player chose Rock and CPU chose Paper.")
    } else if (playerSelection == "ROCK" && computerSelection == "SCISSORS") {
        playerScore = playerScore + 0.5;
        return("Win - Player chose Rock and CPU chose Scissors.")
    } else if (playerSelection == "PAPER" && computerSelection == "ROCK") {
        playerScore = playerScore + 0.5;
        return("Win - Player chose Paper and CPU chose Rock.")
    } else if (playerSelection == "SCISSORS" && computerSelection == "ROCK") {
        cpuScore = cpuScore + 0.5;
        return("Loss - Player chose Scissors and CPU chose Rock.")
    } else if (playerSelection == "PAPER" && computerSelection == "PAPER") {
        return("Tie - Player chose Paper and CPU chose Paper.")
    } else if (playerSelection == "PAPER" && computerSelection == "SCISSORS") {
        cpuScore = cpuScore + 0.5;
        return("Loss - Player chose Paper and CPU chose Scissors.")
    } else if (playerSelection == "SCISSORS" && computerSelection == "PAPER") {
        playerScore = playerScore + 0.5;
        return("Win - Player chose Scissors and CPU chose Paper.")
    } else if (playerSelection == "SCISSORS" && computerSelection == "SCISSORS") {
        return("Tie - Player chose Scissors and CPU chose Scissors.")
    } else {
        return("Invalid input. Try again.")
    }
}

//playerGuess will store the guess the user makes
let playerGuess;

computerPlay();

document.getElementById("result").textContent = ("Welcome to Rock Paper Scissors.");

const rockButton = document.getElementById("rock");
rockButton.addEventListener("click", selectRock);

function selectRock() {
    playerGuess = "ROCK";
    computerPlay();
    console.log(playRound(playerGuess, cpuGuess));
    document.getElementById("result").textContent = playRound(playerGuess, cpuGuess);
    document.getElementById("playerScore").textContent = ("Player score this best-of-five: " + playerScore);
    document.getElementById("cpuScore").textContent = ("CPU score this best-of-five: " + cpuScore);
    finalResult();
}

const paperButton = document.getElementById("paper");
paperButton.addEventListener("click", selectPaper);

function selectPaper() {
    playerGuess = "PAPER";
    computerPlay();
    console.log(playRound(playerGuess, cpuGuess));
    document.getElementById("result").textContent = playRound(playerGuess, cpuGuess);
    document.getElementById("playerScore").textContent = ("Player score this best-of-five: " + playerScore);
    document.getElementById("cpuScore").textContent = ("CPU score this best-of-five: " + cpuScore);
    finalResult();
}

const scissorsButton = document.getElementById("scissors");
scissorsButton.addEventListener("click", selectScissors);

function selectScissors() {
    playerGuess = "SCISSORS";
    computerPlay();
    console.log(playRound(playerGuess, cpuGuess));
    document.getElementById("result").textContent = playRound(playerGuess, cpuGuess);
    document.getElementById("playerScore").textContent = ("Player score this best-of-five: " + playerScore);
    document.getElementById("cpuScore").textContent = ("CPU score this best-of-five: " + cpuScore);
    finalResult();
}

const finalResultDiv = document.getElementById("finalResult");
finalResultDiv.style.display = "none";

function finalResult() {
    if (playerScore === 5) {
        rockButton.removeEventListener("click", selectRock);
        paperButton.removeEventListener("click", selectPaper);
        scissorsButton.removeEventListener("click", selectScissors);
        document.getElementById("finalResult").textContent = ("Player has won the game.");
        finalResultDiv.style.display = "flex";
        playAgain();
    } else if (cpuScore === 5) {
        rockButton.removeEventListener("click", selectRock);
        paperButton.removeEventListener("click", selectPaper);
        scissorsButton.removeEventListener("click", selectScissors);
        document.getElementById("finalResult").textContent = ("CPU has won the game.");
        finalResultDiv.style.display = "flex";
        playAgain();
    }
}

const playAgainDiv = document.getElementById("playAgain");
const playAgainButton = document.createElement("button");
playAgainButton.setAttribute("id", "playAgain");
playAgainButton.textContent = "Play again";
playAgainButton.addEventListener("click", resetGame);
playAgainDiv.appendChild(playAgainButton);
playAgainDiv.style.display = "none";

function playAgain() {
    playAgainDiv.style.display = "flex";
}

function resetGame() {
    playerScore = 0;
    cpuScore = 0;
    console.log("Game reset");
    rockButton.addEventListener("click", selectRock);
    paperButton.addEventListener("click", selectPaper);
    scissorsButton.addEventListener("click", selectScissors);
    document.getElementById("playerScore").textContent = ("Player score this best-of-five: " + playerScore);
    document.getElementById("cpuScore").textContent = ("CPU score this best-of-five: " + cpuScore);
    document.getElementById("result").textContent = ("Game reset.");
    playAgainDiv.style.display = "none";
    finalResultDiv.style.display = "none";
}