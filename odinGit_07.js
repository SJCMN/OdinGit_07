//computer plays randomly returns 'Rock','Paper', or 'Scissors'

const compArray = ["Rock", "Paper", "Scissors"];

function computerPlay() {
    let compChoice = Math.floor(Math.random() * compArray.length);
    return compArray[compChoice];
  }


//round one play takes two paramaters(player selection, computer selection)
//return 'Player One You Win!' || 'Player One You Loose' + 'rock beats scissors' || 'paper beats rock' || 'scissors beats paper'
//prompt player to choose(type) 'Rock' || 'Paper' || 'Scissors'

const playerSelection = prompt('Type rock, paper, or scissors to play');
const computerSelection = computerPlay();

function game() {
    roundOne(playerSelection, computerSelection);
    return(roundOne(playerSelection, computerSelection));
}

//plays best of 3 or best of 5 rounds 
//Use the previous function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.
  
  function playRound(playerSelection, computerSelection) {
    computerSelection = computerPlay().toLowerCase();
    playerSelection = playerSelection.toLowerCase();
    if (computerSelection == playerSelection) {
      displayResults("Tie game!");
    } else if (
      (computerSelection == "rock" && playerSelection == "scissors") ||
      (computerSelection == "scissors" && playerSelection == "paper") ||
      (computerSelection == "paper" && playerSelection == "rock")
    ) {
      computerScore = ++computerScore;
      keepCpuScore();
      if (computerScore === 1) {
        displayResults(
          `Oh no! You lost.
          ${capitalize(computerSelection)} beats ${playerSelection}.`
        );
      } else if (computerScore === 2) {
        displayResults(
          `Arghh. ${capitalize(
            computerSelection
          )} beats ${playerSelection}. Give it another shot!`
        );
      } else if (computerScore === 3) {
        displayResults(
          `${capitalize(
            computerSelection
          )} beats ${playerSelection}. It's ok. You got this!!`
        );
      } else if (computerScore === 4) {
        displayResults(
          `Oh no. It's match point!! ${capitalize(
            computerSelection
          )} beats ${playerSelection}. Don't let us down!`
        );
      } else {
        displayResults(`${computerSelection} beats ${playerSelection}`);
      }
    } else {
      playerScore = ++playerScore;
      keepPlayerScore();
      if (playerScore === 1) {
        displayResults(
          `Lets go!!! You won.
          ${capitalize(playerSelection)} beats ${computerSelection}.`
        );
      } else if (playerScore === 2) {
        displayResults(
          `You're pretty good at this. ${capitalize(
            playerSelection
          )} beats ${computerSelection}.`
        );
      } else if (playerScore === 3) {
        displayResults(
          `${capitalize(
            playerSelection
          )} beats ${computerSelection}! Has mankind found its savior??`
        );
      } else if (playerScore === 4) {
        displayResults(
          `${capitalize(
            playerSelection
          )} beats ${computerSelection}. One more and you're a hero!`
        );
      } else {
        displayResults(`${playerSelection} beats ${computerSelection}`);
      }
    }
  }
  
