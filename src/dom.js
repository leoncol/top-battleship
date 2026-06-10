import Gameboard from "./gameboard"
import {Player} from "./player"
import Ship from "./ship"

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

}

function eventListeners(){
    let newGameButton = document.querySelector('#new-game');

    newGameButton.addEventListener("click", () => {
        gameController();
    })
}
generateBoards();
eventListeners();
