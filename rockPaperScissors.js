const hands = ['rock', 'paper', 'scissors'];
function getHand() {
    return hands[parseInt(Math.random() * 10) % 3]
};

let playerOne = {
    name: 'Player 1',
    getHand: getHand(),
    wins: 0,
};


let playerTwo = {
    name: 'Player 2',
    getHand: getHand(),
    wins: 0,
};

function playRound(playerOne, playerTwo) {
    playerOne.getHand = getHand();
    playerTwo.getHand = getHand();

    if (playerOne.getHand == playerTwo.getHand) {
        console.log(`${playerOne.name}:${playerOne.wins} played ${playerOne.getHand}`)
        console.log(`${playerTwo.name}:${playerTwo.wins} played ${playerTwo.getHand}`)
        console.log("It's a tie!\n")
        return null
    }
    else if ((playerOne.getHand == 'rock' && playerTwo.getHand == 'scissors') || (playerOne.getHand == 'paper' && playerTwo.getHand == 'rock') || (playerOne.getHand == 'scissors' && playerTwo.getHand == 'paper')) {
        playerOne.wins++
        console.log(`${playerOne.name}:${playerOne.wins} played ${playerOne.getHand}`)
        console.log(`${playerTwo.name}:${playerTwo.wins} played ${playerTwo.getHand}`)
        console.log(`${playerOne.name} wins!\n`)
        return playerOne
    }
    else {
        playerTwo.wins++
        console.log(`${playerOne.name}:${playerOne.wins} played ${playerOne.getHand}`)
        console.log(`${playerTwo.name}:${playerTwo.wins} played ${playerTwo.getHand}`)
        console.log(`${playerTwo.name} wins!\n`)
        return playerTwo
    }
}
playerTwo.name = 'Hampter Bampter';
playerOne.name = 'Glam Sally';
let numberOfWins = 3

while (playerOne.wins < numberOfWins && playerTwo.wins < numberOfWins) {
    playRound(playerOne, playerTwo);
}
