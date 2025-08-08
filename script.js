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

    // create result div
    const resContainer = document.querySelector("#res-container");
    const children = document.querySelectorAll(`#${resContainer.getAttribute("id")} div`);
    children.forEach(child => {
        child.remove();
    });
    console.log(children);

    // create each player output
    const playerPlayed = document.createElement("div");
    const compPlayed = document.createElement("div");
    const result = document.createElement("div");

    playerPlayed.textContent = "Player played " + humanChoice;
    compPlayed.textContent = "Computer played " + computerChoice;

    if (flag === 0) {
        result.textContent = "Draw!!";
    } else if (flag === 1) {
        result.textContent = "You Win!";
        humanScore++;
    } else if (flag === 2) {
        result.textContent = "You Lose!";
        computerScore++;
    }

    // append output to result container
    resContainer.append(playerPlayed);
    resContainer.append(compPlayed);
    resContainer.append(result);
}

function checkWinner() {
    const humanScoreDisplay = document.querySelector("#score #player");
    const computerScoreDisplay = document.querySelector("#score #computer");
    // console.log("Player Score: " + humanScore);
    // console.log("Computer Score: " + computerScore);

    if (humanScore === 5) {
        alert("You Win!");
        humanScore = 0;
        computerScore = 0;
    } else if (computerScore === 5) {
        alert("You Lose!");
        humanScore = 0;
        computerScore = 0;
    }
    humanScoreDisplay.textContent = "Player Score: " + humanScore;
    computerScoreDisplay.textContent = "Computer Score: " + computerScore;

}

function playRound(humanChoice, computerChoice) {
    // play humanChoice against computerChoice
    let humanMapped = mapChoice(humanChoice);
    let computerMapped = mapChoice(computerChoice);

    if (humanMapped === computerMapped) {
        handleWin(0, humanChoice, computerChoice);
    } else if ((humanMapped === 0 && computerMapped === 1) ||
        (humanMapped === 1 && computerMapped === 2) ||
        (humanMapped === 2 && computerMapped === 0)) {
        handleWin(2, humanChoice, computerChoice);
    } else if ((humanMapped === 0 && computerMapped === 2) ||
        (humanMapped === 1 && computerMapped === 0) ||
        (humanMapped === 2 && computerMapped === 1)) {
        handleWin(1, humanChoice, computerChoice);
    }

    checkWinner();
}

function playGame() {
    const container = document.querySelector("#btn-container");

    let choice = "";
    container.addEventListener("click", (event) => {
        switch (event.target.id) {
            case "rock-btn":
                choice = "ROCK";
                break;
            case "paper-btn":
                choice = "PAPER";
                break;
            case "scissor-btn":
                choice = "SCISSOR";
                break;
        }
        playRound(choice, getComputerChoice());
    });

}

playGame();