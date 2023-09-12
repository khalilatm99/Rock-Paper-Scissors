const boardcontainer = document.querySelector(".board");
const userButtons = document.querySelectorAll('.playerselection');
const computerscorecontainer = document.getElementById('computerscore');
const playerscorecontainer = document.getElementById('playerscore');
const divresult = document.getElementById("result");

let playerscore = 0;
let computerscore = 0;  

function getComputerChoice() {
  const listOfChoices = ["rock", "paper", "scissors"];
  const choice = Math.floor(Math.random() * 3);
  return listOfChoices[choice];
}

function playRound() {

  userButtons.forEach((button) => {
    button.addEventListener('click', () => {
      let playerSelection = button.innerHTML;
      let computerSelection = getComputerChoice();
      evaluateResult(playerSelection, computerSelection);
    });
  });
}

function evaluateResult(playerSelection, computerSelection) {
  if (
    (computerSelection === "rock" && playerSelection === "scissors") ||
    (computerSelection === "scissors" && playerSelection === "paper") ||
    (computerSelection === "paper" && playerSelection === "rock")
  ) {
    divresult.textContent = "You lose! " + computerSelection + " beats " + playerSelection;
    computerscore++;
    computerscorecontainer.textContent = "computerscore"  + " " + computerscore;
  } else if (computerSelection === playerSelection) {
    divresult.textContent = "It's a tie";
  } else {
    divresult.textContent = "You win! " + playerSelection + " beats " + computerSelection;
    playerscore++;
    playerscorecontainer.textContent = "playerscore"  + " " + playerscore;
  }
  if(computerscore === 5) {
    boardcontainer.textContent ="computer wins" ;
  }
   else if(playerscore === 5){
    boardcontainer.textContent ="player wins" ;
   }
}

playRound();
