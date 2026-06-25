import {Gameboard} from "./gameboard"
import {Player} from "./player"
import {Ship} from "./ship"

let humanPlayer = Player('human');
let computerPlayer = Player('computer');



function generateHtmlBoard(boardType){
   
    let board = document.querySelector('#gameboards');
    let newBoard = document.createElement('div');
    if (boardType == 'A'){
        newBoard.id = `A-gameboard`;
    } else {
        newBoard.id = `B-gameboard`;
    }
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
    populateGameboards(humanPlayer, computerPlayer);
    displayShips(humanPlayer.myGameboard, 'A');
    displayShips(computerPlayer.myGameboard, 'B');
    boardEventListeners();
    
}

function gameEnd(winner){
    if (winner == 'computer'){
        alert(`The game is over, the winner is the ${winner}`);
        alert(`To start a new game, click on the "Start a new game button"`)
    } else {
        alert(`The game is over, you are the winner`);
        alert(`To start a new game, click on the "Start a new game button"`)
    }

    endGameActions();
    
}

function endGameActions(){
    let playerGameboard = document.querySelector(`#A-gameboard`);
    let computerGameboard = document.querySelector(`#B-gameboard`);

    let aBoardClasses = playerGameboard.classList;
    let bBoardClasses = computerGameboard.classList;
    

    aBoardClasses.add(`unselectable`);
    bBoardClasses.add(`unselectable`);
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

    placeComputerShips(computer);

    
}

function placeComputerShips(computer){

    let computerGameboard = computer.myGameboard;

    
    for (let i = 0; i <= 3; i++){
        let coord1 = Math.floor(Math.random() * 10);
        let coord2 = Math.floor(Math.random() * 10);
        let placeShip = computerGameboard.placeShip(1,coord1,coord2);
        if (typeof placeShip  == 'string'){
            i--;
        };
    }

    for (let i = 0; i <= 2; i++){
        let orientation = decideOrientation();
        let coord1 = Math.floor(Math.random() * 10);
        let coord2 = Math.floor(Math.random() * 10);
        let placeShip = computerGameboard.placeShip(2,coord1,coord2, orientation);
        if (typeof placeShip  == 'string'){
            i--;
        };
    }

    for (let i = 0; i <= 1; i++){
        let orientation = decideOrientation();
        let coord1 = Math.floor(Math.random() * 10);
        let coord2 = Math.floor(Math.random() * 10);
        let placeShip = computerGameboard.placeShip(3,coord1,coord2, orientation);
        if (typeof placeShip  == 'string'){
            i--;
        };
    }

    for (let i = 0; i < 1; i++){
        let orientation = decideOrientation();
        let coord1 = Math.floor(Math.random() * 10);
        let coord2 = Math.floor(Math.random() * 10);
        let placeShip = computerGameboard.placeShip(4,coord1,coord2, orientation);
        if (typeof placeShip  == 'string'){
            i--;
        };
    }

   

    function decideOrientation(){
        let decideOrientation = Math.floor(Math.random() * 2);
        if (decideOrientation == 0){
            decideOrientation = 'v';
        } else {
            decideOrientation = 'h'
        }

        return decideOrientation;
    }
    
}

let playerCanAttack = true;

function handleClick(event) {
    if (!playerCanAttack) return;
    let boardSquare = event.target;
    attackShip(boardSquare)
   
}

function attackShip(boardSquare){
    let computerBoard = computerPlayer.myGameboard;
    let targetClasses = boardSquare.classList;
    let coords = boardSquare.id;
    coords = coords.split('');
    let coord1 = coords[1];
    let coord2 = coords[2];
    coord1 = parseFloat(coord1);
    coord2 = parseFloat(coord2);

    if (targetClasses[1]){        
        computerBoard.receiveAttack(coord1, coord2)
        targetClasses.add(`ship`);
        let indicateHit = document.createElement('div');
        indicateHit.textContent = 'X';
        indicateHit.classList.add('hit');
        boardSquare.appendChild(indicateHit);
        boardSquare.style.pointerEvents = "none";
        let fleetState = computerBoard.isTheFleetSunk();
        if (fleetState){
            gameEnd('human');
        } else {
            gameTurns('human');
        }
    } else {
        let indicateHit = document.createElement('span');
        indicateHit.classList.add('nohit');
        boardSquare.appendChild(indicateHit);
        boardSquare.style.pointerEvents = "none";
        gameTurns('computer', 0);

    }
    
       
}

// The game is played against the computer, so make the ‘computer’ 
// players capable of making random plays. The computer does not have to 
// be smart, but it should know whether or not a given move is legal 
// (i.e. it shouldn’t shoot the same coordinate twice).

function computerTurn(){

}

function computerAttacks(){
    let humanBoard = humanPlayer.myGameboard;
    let coord1 = Math.floor(Math.random() * 10);
    let coord2 = Math.floor(Math.random() * 10);
    let attack = humanBoard.receiveAttack(coord1, coord2);
    
    if (attack != 'x'){
        let boardSquare = document.querySelector(`#A${coord1}${coord2}`);
        if (boardSquare.hasChildNodes()){
            computerAttacks();
            return;
        }
        let indicateHit = document.createElement('div');
        indicateHit.textContent = 'X';
        indicateHit.classList.add('hit');
        boardSquare.appendChild(indicateHit);
        let fleetState = humanBoard.isTheFleetSunk();
        if (fleetState){
            gameEnd('computer');
        } else {
            gameTurns('computer', 1, coord1, coord2);
        }
        // computerAttacksDelayed(1,coord1, coord2 );
    } else {
        let boardSquare = document.querySelector(`#A${coord1}${coord2}`);
        if (boardSquare.hasChildNodes()){
            computerAttacksDelayed(0);
            return;
        }
        let indicateHit = document.createElement('span');
        indicateHit.classList.add('nohit');
        boardSquare.appendChild(indicateHit);
        let fleetState = humanBoard.isTheFleetSunk();
        gameTurns('human');

    }
    
       
}

function computerAttacksNearby(previousCoords1, previousCoords2){
    let humanBoard = humanPlayer.myGameboard;
    let newCoords1 = 0;
    let newCoords2 = 0;
    let decideOrientation = Math.floor(Math.random() * 2);
    if (decideOrientation == 0){ // vertical
        if (previousCoords1 == 0){
            newCoords1 = 1; // if the vertical coords are 0, we cannot go lower
            newCoords2 = previousCoords2;
        } else if (previousCoords1 == 9){
            newCoords1 = 8; // if the vertical coords are 9, we cannot go higher
            newCoords2 = previousCoords2;
        } else {
            let decideMovement = Math.floor(Math.random() * 2); // decide if the movement is forward or backward
            if (decideMovement == 0){
            newCoords1 = previousCoords1 - 1;
            newCoords2 = previousCoords2;
            } else {
            newCoords1 = previousCoords1 + 1;
            newCoords2 = previousCoords2;
            }
        }
    } else if (decideOrientation == 1){ // horizontal
        if (previousCoords2 == 0){
            newCoords2 = 1; // if the vertical coords are 0, we cannot go lower
            newCoords1 = previousCoords1;
        } else if (previousCoords2 == 9){
            newCoords2 = 8; // if the vertical coords are 9, we cannot go higher
            newCoords1 = previousCoords1;
        } else {
            let decideMovement = Math.floor(Math.random() * 2); // decide if the movement is forward or backward
            if (decideMovement == 0){
            newCoords2 = previousCoords2 - 1;
            newCoords1 = previousCoords1;
            } else {
            newCoords2 = previousCoords2 + 1;
            newCoords1 = previousCoords1;
            }
        }
    } 
   
    let attack = humanBoard.receiveAttack(newCoords1, newCoords2);
    
    
    if (attack != 'x'){
        let boardSquare = document.querySelector(`#A${newCoords1}${newCoords2}`);
        if (boardSquare.hasChildNodes()){
            computerAttacks();
            return;
        }
        let indicateHit = document.createElement('div');
        indicateHit.textContent = 'X';
        indicateHit.classList.add('hit');
        boardSquare.appendChild(indicateHit);
        let fleetState = humanBoard.isTheFleetSunk();
        if (fleetState){
            gameEnd('computer');
        } else {
            gameTurns('computer', 1, newCoords1, newCoords2);
        }
        // console.log(`Is the fleet sunk? ${fleetState}`);
        // computerAttacksDelayed(1,newCoords2, newCoords2 );
    } else {
        let boardSquare = document.querySelector(`#A${newCoords1}${newCoords2}`);
        
        if (boardSquare.hasChildNodes()){
            computerAttacksDelayed(1,newCoords2, newCoords2 );
            return;
        }
        let indicateHit = document.createElement('span');
        indicateHit.classList.add('nohit');
        boardSquare.appendChild(indicateHit);
        gameTurns('human');

    }
}

// 1. Create a reusable delay function
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

// 2. Use it inside an async function
async function computerAttacksDelayed(type, previousCoords1, previousCoords2) { // 0 = not continuous // 1 = continuous
  
  // Wait for 3000 milliseconds (3 seconds)
  await delay(0); 
  if (type == 0){
    computerAttacks();
    console.log(computerPlayer.myGameboard.newBoard);
  } else {
    computerAttacksNearby(previousCoords1, previousCoords2);
    console.log(computerPlayer.myGameboard.newBoard);
  }
  
}



function gameTurns(player, type, coord1, coord2){
    if (player == 'human'){
        playerCanAttack = true;
    } else if (player == 'computer' && type == 0) {
        playerCanAttack = false
        computerAttacksDelayed(0);
    } else {
        playerCanAttack = false;
        computerAttacksDelayed(1, coord1, coord2);
    }
}

function boardEventListeners(){
    const boardPositions = document.querySelectorAll(`.B-game-position`);
    boardPositions.forEach(position => {
        position.addEventListener('click', (event) => {
            handleClick(event);
        })
    });
}


function displayShips(newBoard, type){
    let ships = [];
    let board = newBoard.newBoard;
    let shipsIndexes = [];
    for (let i = 0; i <= 9; i++){
        for (let x = 0; x <= 9; x++){
            let shipPart = board[i][x];
            if (shipPart != 0){
            ships.push(shipPart);
            let yIndex = i;
            let xIndex = x;
            let shipIndex = [];
            shipIndex.push(yIndex,xIndex);
            shipsIndexes.push(shipIndex);
            

        }
        } 
    }
    colorBoard(shipsIndexes, type);

    
}

function colorBoard(shipIndexes, type){

    if (type == 'A'){
        for (let i = 0; i <= shipIndexes.length -1; i++){
            let id = shipIndexes[i];
            id = String(id[0])+String(id[1]);
            let shipPart = document.getElementById(`${type}${id}`);
            shipPart.classList.add(`ship`);
        }
    }
    
    if (type == 'B'){
        for (let i = 0; i <= shipIndexes.length -1; i++){
            let id = shipIndexes[i];
            id = String(id[0])+String(id[1]);
            let shipPart = document.getElementById(`${type}${id}`);
            // shipPart.classList.add(`computer-ship`); we're going to use the ship class just to make it visible temporarily
            shipPart.classList.add(`ship`);
        }
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
