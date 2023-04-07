const hands = ['rock', 'paper', 'scissors'];
function getHand() {
    return hands[parseInt(Math.random() * 10) % 3]
};

let playerOne = {
    name: '',
    getHand: getHand(),
    wins: 0,
};


let playerTwo = {
    name: '',
    getHand: getHand(),
    wins: 0,
};

function playRound(playerOne, playerTwo) {
    playerOne.getHand = getHand();
    playerOne.getHand = getHand();

    if (playerOne.getHand == playerTwo.getHand) {
        console.log(`${playerOne.name}:${playerOne.wins} played ${playerOne.getHand}`)
        console.log(`${playerTwo.name}:${playerTwo.wins} played ${playerTwo.getHand}`)
        console.log("It's a tie!")
        return null
    }
    if ((playerOne.getHand == 'rock' && playerTwo.getHand == 'scissors')||(playerOne.getHand == 'paper' && playerTwo.getHand == 'rock')||(playerOne.getHand == 'scissors' && playerTwo.getHand == 'paper')){
        console.log(`${playerOne.name}:${playerOne.wins} played ${playerOne.getHand}`)
        console.log(`${playerTwo.name}:${playerTwo.wins} played ${playerTwo.getHand}`)
        console.log(`${playerOne.name} wins!`)
        playerOne.wins++
        return playerOne
    }
}
console.log(`${playerOne.name} replace text ${playerTwo.name} replace text`)

console.log(playerTwo.name = 'Hampter Bampter');
console.log(playerOne.name = 'Glam Sally');