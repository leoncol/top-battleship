import Ship from "./ship";

function Gameboard() {
    
    let createBoard = function(){
        const board = [];
        for (let i = 0; i < 10; i++){
            let newRow = [];
            for (let x = 0; x < 10; x++){
                newRow.push(null);
            }
            board.push(newRow);
        }
    
        return board;
    }

    newBoard = createBoard();

    let createShip = function(size){
        let newShip = Ship(size);
        return newShip;
    }

    let isInBounds = function(length, coord1, coord2, orientation){ // Check if the subsequent vertical or horizontal slots are in bounds
        if (length == 2 && orientation == 'h' && newBoard[coord1][coord2+1] === null){
            return true; // check size 2 horizontally
        } else if (length == 2 && orientation == 'v' && newBoard[coord1+1] !== undefined){
            return true; // check size 2 vertically
        } else if (length == 3 && orientation == 'h' && newBoard[coord1][coord2+1] === null && newBoard[coord1][coord2+2] === null ){
            return true; //check size 3 horizontally
        } else if (length == 3 && orientation == 'v' && newBoard[coord1+1] !== undefined && newBoard[coord1+2] !== undefined ){
            return true; //check size 3 vertically
        } else if (length == 4 && orientation == 'h' && newBoard[coord1][coord2+1] === null && newBoard[coord1][coord2+2] === null && newBoard[coord1][coord2+3]  === null){
            return true; //check size 4 horizontally    
        } else if (length == 4 && orientation == 'v' && newBoard[coord1+1] !== undefined && newBoard[coord1+2] !== undefined && newBoard[coord1+3] !== undefined){
            return true; //check size 4 vertically    
        } else {
            return false;
        }
    }


    let placeShip = function(size, coord1, coord2, orientation){
        if (coord1 > 9|| coord2 > 9 ){
            return 'Invalid coords'
        } else if (size > 4){
            return 'Invalid size'
        } else if (size != 1 && orientation != 'h' && orientation != 'v'){
            return 'Invalid orientation' // test orientation --  evaluate when ship is out of bounds
        } else {
            let newShip = createShip(size);
            if (newShip.returnLength() == 1){
                newBoard[coord1][coord2] = newShip;
                return newBoard[coord1][coord2];
            } else if (newShip.returnLength() == 2 && orientation == 'h' && isInBounds(size, coord1, coord2, orientation)){
                newBoard[coord1][coord2] = newShip;
                newBoard[coord1][coord2+1] = newShip;
                return [newBoard[coord1][coord2],newBoard[coord1][coord2+1]];
            } else if (newShip.returnLength() == 2 && orientation == 'v' && isInBounds(size, coord1, coord2, orientation) == true){
                newBoard[coord1][coord2] = newShip;
                newBoard[coord1+1][coord2] = newShip;
                return [newBoard[coord1][coord2],newBoard[coord1+1][coord2]];
            } else if (newShip.returnLength() == 3 && orientation == 'h' && isInBounds(size, coord1, coord2, orientation) == true){
                newBoard[coord1][coord2] = newShip;
                newBoard[coord1][coord2+1] = newShip;
                newBoard[coord1][coord2+2] = newShip;
                return [newBoard[coord1][coord2], newBoard[coord1][coord2+1], newBoard[coord1][coord2+2]];
            } else if (newShip.returnLength() == 3 && orientation == 'v' && isInBounds(size, coord1, coord2, orientation) == true){
                newBoard[coord1][coord2] = newShip;
                newBoard[coord1+1][coord2] = newShip;
                newBoard[coord1+2][coord2] = newShip;
                return [newBoard[coord1][coord2], newBoard[coord1+1][coord2], newBoard[coord1+2][coord2]];
            }  else if (newShip.returnLength() == 4 && orientation == 'h' && isInBounds(size, coord1, coord2, orientation) == true){
                newBoard[coord1][coord2] = newShip;
                newBoard[coord1][coord2+1] = newShip;
                newBoard[coord1][coord2+2] = newShip;
                newBoard[coord1][coord2+3] = newShip;
                return [newBoard[coord1][coord2], newBoard[coord1][coord2+1], newBoard[coord1][coord2+2],newBoard[coord1][coord2+3]];
            }   else if (newShip.returnLength() == 4 && orientation == 'v' && isInBounds(size, coord1, coord2, orientation) == true){
                newBoard[coord1][coord2] = newShip;
                newBoard[coord1+1][coord2] = newShip;
                newBoard[coord1+2][coord2] = newShip;
                newBoard[coord1+3][coord2] = newShip;
                return [newBoard[coord1][coord2], newBoard[coord1+1][coord2], newBoard[coord1+2][coord2],newBoard[coord1+3][coord2] ];
            } else {
                return 'Invalid placement. Ship out of bounds.'
            }
        }
    }


    return {placeShip}
    }
   
   module.exports = Gameboard;

