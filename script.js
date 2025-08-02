let computerScore = 0;
let humanScore = 0;

function getComputerChoice() {
    // get random number between 0 -  2;
    // { 0: rock, 1: paper, 2: scissor }
    const selector = Math.floor(Math.random() * 3);

    let choice = "";
    if (selector === 0) {
        choice = "ROCK";
    } else if (selector === 1) {
        choice = "PAPER";
    } else if (selector === 2) {
        choice = "SCISSOR";
    }
    return choice;
}

function getHumanChoice() {
    const input = prompt("Choose Rock, Paper, or Scissor (case-insensitive): ");

    let choice = input.toUpperCase();
    return choice;
}

function mapChoice(choice) {
    choice = choice.toUpperCase();

    let mapped;
    if (choice === "ROCK") {
        mapped = 0;
    } else if (choice === "PAPER") {
        mapped = 1;
    } else if (choice === "SCISSOR") {
        mapped = 2;
    }
    return mapped;
}

function handleWin(flag, humanChoice, computerChoice) {
    // flag 0 = draw
    // flag 1 = human
    // flag 2 = computer
    console.log("Player played " + humanChoice);
    console.log("Computer played " + computerChoice);

    if (flag === 0) {
        console.log("Draw!!");
    } else if (flag === 1) {
        console.log("You Win!");
        humanScore++;
    } else if (flag === 2) {
        console.log("You Lose!");
        computerScore++;
    }
}

function playRound(humanChoice, computerChoice) {
    // play humanChoice against computerChoice
    let humanMapped = mapChoice(humanChoice);
    let computerMapped = mapChoice(computerChoice);

    if (humanMapped === computerMapped) {
        handleWin(0, humanChoice, computerChoice);
    } else if (humanMapped === 0 && computerMapped === 1) {
        handleWin(2, humanChoice, computerChoice);
    } else if (humanMapped === 0 && computerMapped === 2) {
        handleWin(1, humanChoice, computerChoice);
    } else if (humanMapped === 1 && computerMapped === 0) {
        handleWin(1, humanChoice, computerChoice);
    } else if (humanMapped === 1 && computerMapped === 2) {
        handleWin(2, humanChoice, computerChoice);
    } else if (humanMapped === 2 && computerMapped === 0) {
        handleWin(2, humanChoice, computerChoice);
    } else if (humanMapped === 2 && computerMapped === 1) {
        handleWin(1, humanChoice, computerChoice);
    }
}

function playGame(numPlay) {
    for (let i = 0; i < numPlay; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }

    console.log("Player Score: " + humanScore);
    console.log("Computer Score: " + computerScore);

    if (humanScore === computerScore) {
        console.log("Draw!");
    } else if (humanScore > computerScore) {
        console.log("Player Win!!");
    } else if (humanScore < computerScore) {
        console.log("Computer Win!!");
    }
}

playGame(5);