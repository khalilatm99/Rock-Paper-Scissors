var computerscore = 0;
var playerscore = 0;
function getComputerChoice(){
    let listeofchoice = new Array("rock","paper","scissors");
    let choice = Math.floor(Math.random() * 3);
    return listeofchoice[choice];
}

function playRound(computerSelection,playerSelection){
    if((computerSelection == "rock" && playerSelection == "scissors") ||
    (computerSelection == "scissors" && playerSelection == "paper") ||
    (computerSelection == "paper" && playerSelection == "rock")){
        computerscore++;
        return "you lose!" + computerSelection + " beats " + playerSelection;
    }
    else if(computerSelection == playerSelection) return "its a tie";
    else {
        playerscore++;
        return "you win!" + playerSelection + " beats " + computerSelection}
}

function Game(playerSelection){
    let counter = 5;
    let computerSelection;
    while (counter > 0){
      computerSelection = getComputerChoice();
      console.log(playRound(playerSelection, computerSelection));
        counter--;
    }
}

const playerSelection = "rock";
console.log(Game(playerSelection));

if(computerscore > playerscore) {
    console.log("computer win " + " \n"+  " computer "+  + computerscore+ "player "   + playerscore);
}

else if(playerscore > computerscore ){
    console.log("player win "  + "\n" + " computer "+ computerscore + "  " + "player "+playerscore);
}


else{console.log("its tie " +"\n" + "computer " + computerscore + "  " + "player " + playerscore);
}

