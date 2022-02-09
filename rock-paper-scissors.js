//Variable to store player score after each best of three. Initializes to zero.
let playerScore = 0;

//Variable to store cpu score after each best of three. Initializes to zero.
let cpuScore = 0;

//Variable to store cpu score after each round. Initializes to zero.
let playerTotalScore = 0;

//Variable to store cpu score after each round. Initializes to zero.
let cpuTotalScore = 0;

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

//function bestOfThree() will create 3 rounds of RPS, and displays the total score after each 3 rounds.
//this function also contains the code to obtain the user input, then updates playerGuess

function bestOfThree() {
    for (i = 0; i < 3; i++){
        //We call the function computerPlay() so the cpuGuess is set.
        computerPlay();

        console.log("Player score this best-of-three: ", playerScore);
        console.log("CPU score this best-of-three: ", cpuScore);

        //The following line gathers the player's guess.
        playerGuess = prompt("Welcome to Rock Paper Scissors. Type your choice:");
        //To ensure case-insensitivity of user-input, we force playerGuess .toUpperCase()
        playerGuess = playerGuess.toUpperCase();

        console.log(playRound(playerGuess, cpuGuess));
    }

    //The following code will display the score after the best of three rounds, and update the total score
    if (playerScore >> cpuScore) {
        playerTotalScore++;
        alert("You won this round.\nPlayer Total Score: " + playerTotalScore + "\nCPU Total Score: " + cpuTotalScore);
    } else if (playerScore << cpuScore) {
        cpuTotalScore++;
        alert("You lost this round.\nPlayer Total Score: " + playerTotalScore + "\nCPU Total Score: " + cpuTotalScore);
    } else if (playerScore == cpuScore) {
        alert("You tied this round.\nPlayer Total Score: " + playerTotalScore + "\nCPU Total Score: " + cpuTotalScore);
    } else {
        alert("You tied this round.\nPlayer Total Score: " + playerTotalScore + "\nCPU Total Score: " + cpuTotalScore);
    }
}

//function game() will call bestOfThree five times, and calling this function will run 5 rounds of bestOfThree
function game() {
    for (n = 0; n < 5; n++){
        //We need to reinitialize the score after each best-of-three
        playerScore = 0;
        cpuScore = 0;
        bestOfThree();
    }
}

//Calling game() begins the game of RPS. There are 5 rounds, each round is best-of-three.
game();

//The following code will display the winner at the end of the game.
if (playerTotalScore > cpuTotalScore){
    alert("You won the game.");
} else if(playerTotalScore == cpuTotalScore){
    alert("The game ended in a tie.");
} else{
    alert("You lost the game.");
}