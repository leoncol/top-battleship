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

    let placeShip = function(size, coord1, coord2){
        if (coord1 > 9|| coord2 > 9 ){
            return 'Invalid coords'
        } else if (size > 4){
            return 'Invalid size'
        }{
            let newShip = createShip(size);
            if (newShip.returnLength() == 1){
                newBoard[coord1][coord2] = newShip;
                return newBoard[coord1][coord2];
            } else if (newShip.returnLength() == 2){
                newBoard[coord1][coord2] = newShip;
                newBoard[coord1][coord2+1] = newShip;
                return [newBoard[coord1][coord2],newBoard[coord1][coord2+1]];
            } else if (newShip.returnLength() == 3){
                newBoard[coord1][coord2] = newShip;
                newBoard[coord1+1][coord2] = newShip;
                newBoard[coord1+2][coord2] = newShip;
                return [newBoard[coord1][coord2], newBoard[coord1+1][coord2], newBoard[coord1+2][coord2]]
            }
            
        }
    }


    return {placeShip}
    }
   
   module.exports = Gameboard;

