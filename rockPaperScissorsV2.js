const hands = ['rock', 'paper', 'scissors'];
function getHand() {
    return hands[parseInt(Math.random() * 10) % 3]
};

let player1 = {
    name: 'Player 1',
    getHand: getHand(),
    wins: 0,
};


let player2 = {
    name: 'Player 2',
    getHand: getHand(),
    wins: 0,
};

let player3 = {
    name: 'Player 3',
    getHand: getHand(),
    wins: 0,
};

let player4 = {
    name: 'Player 4',
    getHand: getHand(),
    wins: 0,
};

function playRound(player1, player2) {
    player1.getHand = getHand();
    player2.getHand = getHand();

    if (player1.getHand == player2.getHand) {
        console.log(`${player1.name}:${player1.wins} played ${player1.getHand}`)
        console.log(`${player2.name}:${player2.wins} played ${player2.getHand}`)
        console.log("It's a tie!\n")
        return null
    }
    else if ((player1.getHand == 'rock' && player2.getHand == 'scissors') || (player1.getHand == 'paper' && player2.getHand == 'rock') || (player1.getHand == 'scissors' && player2.getHand == 'paper')) {
        player1.wins++
        console.log(`${player1.name}:${player1.wins} played ${player1.getHand}`)
        console.log(`${player2.name}:${player2.wins} played ${player2.getHand}`)
        console.log(`${player1.name} wins!\n`)
        return player1
    }
    else {
        player2.wins++
        console.log(`${player1.name}:${player1.wins} played ${player1.getHand}`)
        console.log(`${player2.name}:${player2.wins} played ${player2.getHand}`)
        console.log(`${player2.name} wins!\n`)
        return player2
    }
}
player1.name = 'Hampter Bampter';
player2.name = 'Glam Sally';
player3.name = 'Sweeaboo';
player4.name = 'Monito';
// let numberOfWins = 3 
// let playUntil = 3
// while (player1.wins < numberOfWins && player2.wins < numberOfWins) {
//     playRound(player1, player2);
// }
    function playGame(player1, player2, playUntil){
        while (player1.wins < playUntil && player2.wins < playUntil) {
                 playRound(player1, player2);
        }       
        if (player1.wins > player2.wins){
            return player1;
        }
        else{
            return player2;
        }
}
    
    
 function playTournament(player1, player2, player3, player4, playUntil){
    let game1 = playGame(player1, player2, playUntil);
    let game2 = playGame(player3, player4, playUntil);
    let game3 = playGame(game1, game2, playUntil);
    console.log(`${game3.name} is the world champion!`)
 }
 playTournament(player1, player2, player3, player4, 5)






