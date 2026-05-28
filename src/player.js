import Gameboard from "./gameboard";

// There will be two types of players in the game, ‘real’ players and ‘computer’ players.
// Each player object should contain its own gameboard.

function Player(type){

    if (type != 'computer' || type != 'human'){
        return 'Invalid type'
    } else {
        let typeOfPlayer = type;
    }
    

    let myGameboard = Gameboard();




    return {myGameboard, typeOfPlayer}
}