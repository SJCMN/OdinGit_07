//computer plays randomly returns 'Rock','Paper', or 'Scissors'
function computerPlay();

//round one play takes two paramaters(player selection, computer selection)
//return 'Player One You Win!' || 'Player One You Loose' + 'rock beats scissors' || 'paper beats rock' || 'scissors beats paper'
//prompt player to choose(type) 'Rock' || 'Paper' || 'Scissors'

const playerSelection = prompt('Type rock, paper, or scissors to play');
const computerSelection = computerPlay();

function roundOne(playerSelection, computerSelection) {

    console.log(playRound(playerSelection, computerSelection));

}


//plays best of 3 or best of 5 rounds 
//Use the previous function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.


function game() {

    roundOne(playerSelection, computerSelection);
    console.log(game());
}

