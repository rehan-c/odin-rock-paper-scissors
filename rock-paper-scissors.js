//Variable to store player score after each round. Initializes to zero.
let playerScore = 0;

//Variable to store cpu score after each round. Initializes to zero.
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
        cpuScore++;
        return("Loss - Player chose Rock and CPU chose Paper.")
    } else if (playerSelection == "ROCK" && computerSelection == "SCISSORS") {
        playerScore++;
        return("Win - Player chose Rock and CPU chose Scissors.")
    } else if (playerSelection == "PAPER" && computerSelection == "ROCK") {
        playerScore++;
        return("Win - Player chose Paper and CPU chose Rock.")
    } else if (playerSelection == "SCISSORS" && computerSelection == "ROCK") {
        cpuScore++;
        return("Loss - Player chose Scissors and CPU chose Rock.")
    } else if (playerSelection == "PAPER" && computerSelection == "PAPER") {
        return("Tie - Player chose Paper and CPU chose Paper.")
    } else if (playerSelection == "PAPER" && computerSelection == "SCISSORS") {
        cpuScore++;
        return("Loss - Player chose Paper and CPU chose Scissors.")
    } else if (playerSelection == "SCISSORS" && computerSelection == "PAPER") {
        playerScore++;
        return("Win - Player chose Scissors and CPU chose Paper.")
    } else if (playerSelection == "SCISSORS" && computerSelection == "SCISSORS") {
        return("Tie - Player chose Scissors and CPU chose Scissors.")
    } else {
        return("Invalid input. Try again.")
    }
}

//playerGuess will store the guess the user makes
let playerGuess;

//function game() will create 5 rounds of RPS, and displays the score after each round.
//this function also contains the code to obtain the user input, as playerGuess

function game() {
    for (i = 0; i < 5; i ++){
        //We call the function computerPlay() so the cpuGuess is set.
        computerPlay();

        console.log("Player score: ", playerScore);
        console.log("CPU score: ", cpuScore);

        //The following line gathers the player's guess.
        playerGuess = prompt("Welcome to Rock Paper Scissors. Type your choice:");
        //To ensure case-insensitivity of user-input, we force playerGuess .toUpperCase()
        playerGuess = playerGuess.toUpperCase();

        console.log(playRound(playerGuess, cpuGuess));
    }
}

//calling game() starts the game.
game();

//The following conditionals will announce the overall winner of all 5 rounds of RPS.
if (playerScore >> cpuScore) {
    alert("You won.");
} else if (playerScore << cpuScore) {
    alert("You died.");
} else if (playerScore == cpuScore) {
    alert("Tie.");
}