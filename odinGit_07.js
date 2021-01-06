///////////////////////////////
// Rock Papaer Scissors Game //
///////////////////////////////

// declare player selection
let playerSelection; 
let computerSelection; 

// declare score keepers
let playerScore = 0;
let computerScore = 0;
let gameScore = 0; 
let gameRound = 0;
let roundOneResult;
let roundResult;
let gameMessage;

// prompt player to choose(type) 'Rock' || 'Paper' || 'Scissors'
function getPlayerSelection(){
playerSelection = prompt('Type: Rock, Paper, or Scissors to play');

console.log('You choose ' + playerSelection + ' !');
}

// computer plays randomly returns 'Rock','Paper', or 'Scissors'
const compArray = ['Rock', 'Paper', 'Scissors'];

function computerPlay(){
    let computerChoice = Math.floor(Math.random() * compArray.length);
    computerSelection = compArray[computerChoice];
    console.log('Computer chooses ' + computerSelection + ' !')
  }

// round one play takes two paramaters (player selection, computer selection)
// return 'Player One You Win!' || 'Player One You Loose' + 'rock beats scissors' || 'paper beats rock' || 'scissors beats paper'

function roundOne(){
  getPlayerSelection();
  computerPlay();
  if (playerSelection === computerSelection){
  roundOneResult = 'Tie Game!';
  }
  else if (
    (playerSelection === 'Rock' && computerSelection === 'Scissors') || 
    (playerSelection === 'Paper' && computerSelection === 'Rock') || 
    (playerSelection === 'Scissors' && computerSelection === 'Paper')
    ) {
    roundOneResult = 'You Win!';
    }
  else {
    roundOneResult = 'Try Again!';
    }
  }

// game score keeping

function addGameRound(){
    gameRound += 1;
    console.log('///////// Round ' + gameRound + ' ! ///////');
}

function getGameScore(){
  if (roundOneResult === 'Tie Game!'){
    gameScore = (playerScore) + ' to ' + (computerScore);
  }
  else if (roundOneResult === 'You Win!'){
    gameScore = (playerScore +=1) + ' to ' + (computerScore);
  }
  else if (roundOneResult === 'Try Again!'){
    gameScore = (playerScore) + ' to ' + (computerScore +=1);  
  }
  console.log(gameScore);
}


function gameComment(){
  if (roundOneResult === 'Tie Game!'){
    gameMessage = playerSelection + ' matches ' + computerSelection;
  }
  else if (roundOneResult === 'You Win!'){
    gameMessage = playerSelection + ' beats ' + computerSelection;
  }
  else if (roundOneResult === 'Try Again!'){
    gameMessage = computerSelection + ' beats ' + playerSelection;  
  }
  console.log(gameMessage);
}

function resetScore(){
  playerScore = 0;
  computerScore = 0;
  gameScore = 0; 
  gameRound = 0;
}

// first player to score 5 wins game 
// Use the previous function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.

function game(){
  addGameRound();
  roundOne();
  gameComment();
  console.log(roundOneResult);
  getGameScore();
  trackGameScore();
}

function trackGameScore(){
  if (playerScore > 4 || computerScore > 4){
    console.log('Game Over!');
    resetScore();
  }
  else if (playerScore < 5 && computerScore < 5){
    game();
  }
}


  // anounce round result
  // anounce game progress
  // announce game result
  // play new game




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
