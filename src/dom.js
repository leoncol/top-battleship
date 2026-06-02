import Gameboard from "./gameboard"
import Player from "./player"
import Ship from "./ship"

function generateHtmlBoard(){
    
    let board = document.querySelector('#gameboard');
        for (let i = 0; i < 100; i++){
           let square = document.createElement('div');
           square.className = 'game-position';
           square.id = `position-${i}`;
           board.appendChild(square);
        }
    
        
    
}


export { 
    generateHtmlBoard};