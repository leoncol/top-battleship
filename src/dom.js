import {Gameboard} from "./gameboard"
import {Player} from "./player"
import {Ship} from "./ship"

function generateHtmlBoard(){
    
    let board = document.querySelector('#gameboards');
    let newBoard = document.createElement('div');
    newBoard.id = `gameboard`;
        for (let i = 0; i < 100; i++){
           let square = document.createElement('div');
           square.className = 'game-position';
           square.id = `position-${i}`;
           newBoard.appendChild(square);
        }
    board.appendChild(newBoard);
    
        
    
}


export { 
    generateHtmlBoard};

function generateBoards(){
    // create both gameboards
    generateHtmlBoard();
    generateHtmlBoard();
    // Set up a new game by creating Players. For now just populate each player’s Gameboard with 
    // predetermined coordinates. 
    // You are going to implement a system for allowing players to place their ships later.
    

}

function gameController(){
    let humanPlayer = Player('human');
    let computerPlayer = Player('computer');
    populateGameboards(humanPlayer, computerPlayer);
    displayShips(humanPlayer.myGameboard,computerPlayer.myGameboard);
}

//4 1-square ships, 3 2-squares ships (1 h, 2 v), 2 3-squares ship (2 h), 1 4-squares ship (1 v)

function populateGameboards(human, computer){
    let humanGameboard = human.myGameboard;
    humanGameboard.placeShip(1,0,0);
    humanGameboard.placeShip(1,9,9);
    humanGameboard.placeShip(1,5,5);
    humanGameboard.placeShip(1,0,9);
    humanGameboard.placeShip(2,3,0,'v');
    humanGameboard.placeShip(2,3,9,'v');
    humanGameboard.placeShip(2,9,0,'h');
    humanGameboard.placeShip(3,7,7,'h');
    humanGameboard.placeShip(3,2,3,'h');
    humanGameboard.placeShip(4,0,7,'v');

    let computerGameboard = computer.myGameboard;
    computerGameboard.placeShip(1,0,0);
    computerGameboard.placeShip(1,9,9);
    computerGameboard.placeShip(1,5,5);
    computerGameboard.placeShip(1,0,9);
    computerGameboard.placeShip(2,3,0,'v');
    computerGameboard.placeShip(2,3,9,'v');
    computerGameboard.placeShip(2,9,0,'h');
    computerGameboard.placeShip(3,7,7,'h');
    computerGameboard.placeShip(3,2,3,'h');
    computerGameboard.placeShip(4,0,7,'v');

}

let ships = [];

function displayShips(humanBoard, computerBoard){
    
    let board = humanBoard.newBoard;
    let shipsIndexes = [];
    for (let i = 0; i <= 9; i++){
        for (let x = 0; x <= 9; x++){
            let shipPart = board[i][x];
            if (shipPart != 0){
            ships.push(shipPart);
            let yIndex = board.indexOf(board[i]);
            let xIndex = board[i];
            xIndex = xIndex.indexOf(xIndex[x]);
            let shipIndex = [];
            shipIndex.push(yIndex,xIndex);
            shipsIndexes.push(shipIndex);
            

        }
        } // fix this loop, it shouldn't go up to 99
    }
    return shipsIndexes;

    
}

// function colorBoard(shipIndexes){

//     for (let i = 0; i <= shipIndexes.length -1; i++){
//         switch (shipIndexes[]) {
//             case 1:
//                 if (newBoard[coord1][coord2] === 0){
//                     return true;
//                 } else {
//                     return false;
//                 }
//             case 2:
//                 if (orientation == 'h'){
//                     if (newBoard[coord1][coord2] === 0 && newBoard[coord1][coord2+1] === 0){
//                         return true;
//                     } else {
//                         return false;
//                     }
//                 } else if (orientation == 'v'){
//                     if (newBoard[coord1][coord2] === 0 && newBoard[coord1+1][coord2] === 0){
//                         return true;
//                     } else {
//                         return false;
//                     }
//                 }
//             case 3:
//                 if (orientation == 'h'){
//                     if (newBoard[coord1][coord2] === 0 && newBoard[coord1][coord2+1] === 0
//                         && newBoard[coord1][coord2+2] === 0){
//                         return true;
//                     } else {
//                         return false;
//                     }
//                 } else if (orientation == 'v'){
//                     if (newBoard[coord1][coord2] === 0 && newBoard[coord1+1][coord2] === 0 
//                         && newBoard[coord1+2][coord2] === 0){
//                         return true;
//                     } else {
//                         return false;
//                     }
//                 }
//             case 4:
//                 if (orientation == 'h'){
//                     if (newBoard[coord1][coord2] === 0 && newBoard[coord1][coord2+1] === 0 
//                         && newBoard[coord1][coord2+2] === 0 && newBoard[coord1][coord2+3] === 0){
//                         return true;
//                     } else {
//                         return false;
//                     }
//                 } else if (orientation == 'v'){
//                     if (newBoard[coord1][coord2] === 0 && newBoard[coord1+1][coord2] === 0
//                         && newBoard[coord1+2][coord2] === 0 && newBoard[coord1+3][coord2] === 0){
//                         return true;
//                     } else {
//                         return false;
//                     }
//                 }    
//             }
//     }    

// }

function eventListeners(){
    let newGameButton = document.querySelector('#new-game');

    newGameButton.addEventListener("click", () => {
        gameController();
    })
}
generateBoards();
eventListeners();
