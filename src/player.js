import Gameboard from "./gameboard";
export {Player};

// There will be two types of players in the game, ‘real’ players and ‘computer’ players.
// Each player object should contain its own gameboard.

function Player(type){
    let typeOfPlayer = '';

    if (type != 'computer' && type != 'human'){
        typeOfPlayer = 'Invalid type'
    } else {
        typeOfPlayer = type;
    }
    

    let myGameboard = Gameboard();




    return {myGameboard, typeOfPlayer}
}

// module.exports = Player;
