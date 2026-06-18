import {Gameboard} from "./gameboard"
import {Player} from "./player"
import {Ship} from "./ship"

let humanPlayer = Player('human');
let computerPlayer = Player('computer');



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
    populateGameboards(humanPlayer, computerPlayer);
    displayShips(humanPlayer.myGameboard, 'A');
    displayShips(computerPlayer.myGameboard, 'B');
    boardEventListeners();
    
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
        let fleetState = computerBoard.isTheFleetSunk();
        console.log(`Is the fleet sunk? ${fleetState}`);
        gameTurns('human');
    } else {
        let indicateHit = document.createElement('span');
        indicateHit.classList.add('nohit');
        boardSquare.appendChild(indicateHit);
        let fleetState = computerBoard.isTheFleetSunk();
        console.log(`Is the fleet sunk? ${fleetState}`);
        gameTurns('computer');

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
    console.log(attack);
    
    if (attack != 'x'){
        let boardSquare = document.querySelector(`#A${coord1}${coord2}`);
        let previousHit = document.querySelector('.hit');
        if (boardSquare.contains(previousHit)){
            computerAttacks();
        }
        let indicateHit = document.createElement('div');
        indicateHit.textContent = 'X';
        indicateHit.classList.add('hit');
        boardSquare.appendChild(indicateHit);
        let fleetState = humanBoard.isTheFleetSunk();
        console.log(`Is the fleet sunk? ${fleetState}`);
        computerAttacksDelayed();
    } else {
        let boardSquare = document.querySelector(`#A${coord1}${coord2}`);
        if (boardSquare.hasChildNodes()){
            computerAttacks();
        }
        let indicateHit = document.createElement('span');
        indicateHit.classList.add('nohit');
        boardSquare.appendChild(indicateHit);
        let fleetState = humanBoard.isTheFleetSunk();
        console.log(`Is the fleet sunk? ${fleetState}`);
        gameTurns('human');

    }
    
       
}

// 1. Create a reusable delay function
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

// 2. Use it inside an async function
async function computerAttacksDelayed() {
  console.log("Thinking...");
  
  // Wait for 3000 milliseconds (3 seconds)
  await delay(0); 
  
  computerAttacks();
}



function gameTurns(player){
    if (player == 'human'){
        playerCanAttack = true;
    } else {
        playerCanAttack = false
        computerAttacksDelayed();
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
            shipPart.classList.add(`computer-ship`);
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
