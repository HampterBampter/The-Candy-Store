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

    let scoreP1 = document.getElementById('scoreP1');
    let scoreP2 = document.getElementById('scoreP2');
    let scoreP3 = document.getElementById('scoreP3');
    let scoreP4 = document.getElementById('scoreP4');
    let scoreTog = scoreP1 + scoreP2 

    if (player1.getHand == player2.getHand) {
        scoreP1.innerHTML = (`Games Won:${player1.wins} played ${player1.getHand}`)
        scoreP2.innerHTML = (`Games Won:${player2.wins} played ${player2.getHand}`)
        scoreTog.innerHTML = ("It's a tie!\n")
        return null
    }
    else if ((player1.getHand == 'rock' && player2.getHand == 'scissors') || (player1.getHand == 'paper' && player2.getHand == 'rock') || (player1.getHand == 'scissors' && player2.getHand == 'paper')) {
        player1.wins++
        scoreP1.innerHTML = (`Games Won:${player1.wins} played ${player1.getHand}`)
        scoreP2.innerHTML = (`Games Won:${player2.wins} played ${player2.getHand}`)
        scoreTog.innerHTML = (`${player1.name} wins!\n`)
        return player1
    }
    else {
        player2.wins++
        scoreP1.innerHTML = (`Games Won:${player1.wins} played ${player1.getHand}`)
        scoreP2.innerHTML = (`Games Won:${player2.wins} played ${player2.getHand}`)
        scoreTog.innerHTML = (`${player2.name} wins!\n`)
        return player2
    }
}

let scoreP1 = document.getElementById('scoreP1');
let scoreP2 = document.getElementById('scoreP2');

function playGame(player1, player2, playUntil) {
    player1.wins = 0;
    player2.wins = 0;
    while (player1.wins < playUntil && player2.wins < playUntil) {
        playRound(player1, player2);
    }
    if (player1.wins > player2.wins) {
        return player1; 
    }
    else {
        return player2;
    }
}

function playTournament(player1, player2, player3, player4, playUntil) {
    let game1 = playGame(player1, player2, playUntil);
    let game2 = playGame(player3, player4, playUntil);
    let game3 = playGame(game1, game2, playUntil);
    let worldChamp = document.getElementById('worldChamp');
    worldChamp.innerHTML = (`${game3.name} is the world champion!`)

}

player1.name = 'Hampter Bampter';
player2.name = 'Glam Sally';
player3.name = 'Sweeaboo';
player4.name = 'Monito';

let buttonPlay = document.getElementById('buttonPlay');
buttonPlay.style.height = '35px';
buttonPlay.style.width = '125px';
buttonPlay.addEventListener('click', playTournament(player1, player2, player3, player4, 5));

// playTournament(player1, player2, player3, player4, 5)

