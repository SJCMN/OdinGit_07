///////////////////////////////
// Rock Papaer Scissors Game //
///////////////////////////////

// type 'game()' into console to play! //

let playerSelection; 
let computerSelection; 

let playerScore = 0;
let computerScore = 0;
let gameScore = 0; 
let gameRound = 0;

let roundOneResult;
let roundResult;
let gameMessage;

function getPlayerSelection(){
playerSelection = prompt('Type: Rock, Paper, or Scissors to play');
console.log('You choose ' + playerSelection + ' !');
}

const compArray = ['Rock', 'Paper', 'Scissors'];

function computerPlay(){
    let computerChoice = Math.floor(Math.random() * compArray.length);
    computerSelection = compArray[computerChoice];
    console.log('Computer chooses ' + computerSelection + ' !')
  }

function roundOne(){
  getPlayerSelection();
  computerPlay();
  playerSelection = playerSelection.toUpperCase();
  computerSelection = computerSelection.toUpperCase();
  if (playerSelection === computerSelection){
  roundOneResult = 'Tie Game!';
  }
  else if (
    (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') || 
    (playerSelection === 'PAPER' && computerSelection === 'ROCK') || 
    (playerSelection === 'SCISSORS' && computerSelection === 'PAPER')
    ) {
    roundOneResult = 'You Win!';
    }
  else {
    roundOneResult = 'Try Again!';
    }
  }

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
