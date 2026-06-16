import {Gameboard} from "./gameboard"
import {Player} from "./player"
import {Ship} from "./ship"



function generateHtmlBoard(boardType){
   
    let board = document.querySelector('#gameboards');
    let newBoard = document.createElement('div');
    newBoard.id = `gameboard`;
        for (let i = 0; i <= 9; i++){
            for (let x = 0; x <= 9; x++){
                let square = document.createElement('div');
                square.className = `${boardType}-game-position`;
                square.id = `${boardType}${i}${x}`;
                newBoard.appendChild(square);
            }
        }
    board.appendChild(newBoard);
    
        
    
}


export { 
    generateHtmlBoard};

function generateBoards(){
    // create both gameboards
    generateHtmlBoard('A');
    generateHtmlBoard('B');
    // Set up a new game by creating Players. For now just populate each player’s Gameboard with 
    // predetermined coordinates. 
    // You are going to implement a system for allowing players to place their ships later.
    

}

function gameController(){
    let humanPlayer = Player('human');
    let computerPlayer = Player('computer');
    populateGameboards(humanPlayer, computerPlayer);
    displayShips(humanPlayer.myGameboard, 'A');
    displayShips(computerPlayer.myGameboard, 'B');
    turnController(humanPlayer.typeOfPlayer, computerPlayer.typeOfPlayer);
    
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

function turnController(humanPlayer, computerPlayer){
    activateListeners(humanPlayer);
    activateListeners(computerPlayer);

}

function activateListeners(player){
    if (player == 'human'){
        boardAEventListeners('A');
    } else {
        boardAEventListeners('B');
    }
}

let playerCanAttack = true;
let computerCanAttack = false;

function handleClick(event) {
    if (!playerCanAttack && computerCanAttack){
        console.log(event.target);
        console.log('this is computer turn, next one is human');
        gameTurns('human')
        return
    } 
    
    if (!computerCanAttack && playerCanAttack){
        console.log(event.target);
        console.log('this is human turn, next one is computer');
        gameTurns('computer')
        return
    };
    
    
}

function gameTurns(player){
    if (player == 'human'){
        computerCanAttack = false;
        playerCanAttack = true;
    } else {
        playerCanAttack = false
        computerCanAttack = true;
    }
}

function boardAEventListeners(board){
    const boardPositions = document.querySelectorAll(`.${board}-game-position`);
    boardPositions.forEach(position => {
        position.addEventListener('click', (event) => {
            handleClick(event);
        })
    })
}

// // 1. Select all elements with the class ".my-button"
// const buttons = document.querySelectorAll('.my-button');

// // 2. Loop through the NodeList and attach the listener to each
// buttons.forEach(button => {
//   button.addEventListener('click', (event) => {
//     // "event.target" refers to the specific button that was clicked
//     console.log('Clicked element text:', event.target.textContent);
//   });
// });

function boardBEventListeners(){}

function displayShips(newBoard, type){
    let ships = [];
    let board = newBoard.newBoard;
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
    colorBoard(shipsIndexes, type);

    
}

function colorBoard(shipIndexes, type){

for (let i = 0; i <= shipIndexes.length -1; i++){
    let id = shipIndexes[i];
    id = String(id[0])+String(id[1]);
    let shipPart = document.getElementById(`${type}${id}`);
    shipPart.classList.add(`ship`);
}
    
}    



function eventListeners(){
    let newGameButton = document.querySelector('#new-game');

    newGameButton.addEventListener("click", () => {
        gameController();
    })


}
generateBoards();
eventListeners();
