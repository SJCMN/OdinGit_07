
let playerSelection; // declare player selection

//prompt player to choose(type) 'Rock' || 'Paper' || 'Scissors'
function getPlayerSelection () {
playerSelection = prompt('Type: Rock, Paper, or Scissors to play');
console.log(playerSelection);
}

let computerSelection;

const gameResult = ['Rock Crushes Scissors', 'Scissors Cuts Paper', 'Paper Covers Rock'];
const gameMessage = ['You Win!' , 'Try Again!'];
const gameScore = [];


//computer plays randomly returns 'Rock','Paper', or 'Scissors'

const compArray = ['Rock', 'Paper', 'Scissors'];

function computerPlay() {
    let computerChoice = Math.floor(Math.random() * compArray.length);
    computerSelection = compArray[computerChoice];
  }

//round one play takes two paramaters(player selection, computer selection)
//return 'Player One You Win!' || 'Player One You Loose' + 'rock beats scissors' || 'paper beats rock' || 'scissors beats paper'

function roundOne() {
  computerPlay();
  getPlayerSelection();
  if (playerSelection === computerSelection) {
    return ('Tie Game');
  }
  else if (
          (playerSelection === 'Rock' && computerSelection === 'Scissors') || 
          (playerSelection === 'Paper' && computerSelection === 'Rock') || 
          (playerSelection === 'Scissors' && computerSelection === 'Paper')
          ) {
  return ('You Win!'); 
  }
  else {
    return ('Try Again!'); 
    }
  }

      

//eval code 
/*

function generateMessage(winningChoice) {
  let message = "";
  switch (winningChoice) {
    case "rock":
      message = "Rock smashes scissors.";
      break;
    case "paper":
      message = "Paper covers rock.";
      break;
    case "scissors":
      message = "Scissors cuts papper.";
  }
  return message;
}

//eval code
*/

//plays best of 3 or best of 5 rounds 
//Use the previous function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.
  
//  function playRound(playerSelection, computerSelection);