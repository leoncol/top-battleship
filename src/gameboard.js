import Ship from "./ship";
export default Gameboard;

function Gameboard() {
    
    let createBoard = function(){
        const board = [];
        for (let i = 0; i < 10; i++){
            let newRow = [];
            for (let x = 0; x < 10; x++){
                newRow.push(0);
            }
            board.push(newRow);
        }
    
        return board;
    }

    let newBoard = createBoard();

    let myFleet = [];

    let hitShipsCoords = [];

    let isTheFleetSunk = function(fleet = myFleet){
        let sunk = 0;
        let afloat = 0;

        for (let i = 0; i <= fleet.length -1; i++){
            let isItSunk = fleet[i][0].isSunk();
            if (isItSunk == true){
                sunk += 1;
            } else {
                afloat += 1;
            }
        }

        if (sunk > afloat && afloat == 0){
            return true;
        } else {
            return false;
        }
}

    let reportHitShips = function(coords = hitShipsCoords){
        return coords;
    }

    let createShip = function(size){
        let newShip = Ship(size);
        return newShip;
    }

    let receiveAttack = function(coord1,coord2){
        if (coord1 > 9|| coord2 > 9 ){
            return 'Invalid coords'
        } else {
            let attack = 'x';
            let ship = newBoard[coord1][coord2];
            if (ship === 0){
                newBoard[coord1][coord2] = attack;
                return attack;
            } else {
                ship.increaseHit();
                let numberOfHits = ship.returnNumberOfHits();

                let hitCoords = [coord1,coord2]
                hitShipsCoords.push(hitCoords);
                return numberOfHits
            }
        }
       
    }

    let reportMissedHits = function(gameboard){
        let hits = [];
        gameboard = newBoard;
        for (const axisY of gameboard) {
            let coord1 = 0;
            let coord2 = 0;
            let coords = [];
            for (const axisX of axisY) {
                if (axisX == 'x'){
                    coord1 = gameboard.indexOf(axisY);
                    coord2 = axisY.indexOf(axisX);
                    coords.push(coord1);
                    coords.push(coord2);
                    hits.push(coords);
                }
            }
        }

        return hits;
    }
 

    let isInBounds = function(length, coord1, coord2, orientation){ // Check if the subsequent vertical or horizontal slots are in bounds
        if (length == 1){
            return true;
        } else if (length == 2 && orientation == 'h' && newBoard[coord1][coord2+1] !== undefined){
            return true; // check size 2 horizontally
        } else if (length == 2 && orientation == 'v' && newBoard[coord1+1] !== undefined){
            return true; // check size 2 vertically
        } else if (length == 3 && orientation == 'h' && newBoard[coord1][coord2+1] !== undefined && newBoard[coord1][coord2+2] !== undefined ){
            return true; //check size 3 horizontally
        } else if (length == 3 && orientation == 'v' && newBoard[coord1+1] !== undefined && newBoard[coord1+2] !== undefined ){
            return true; //check size 3 vertically
        } else if (length == 4 && orientation == 'h' && newBoard[coord1][coord2+1] !== undefined && newBoard[coord1][coord2+2] !== undefined && newBoard[coord1][coord2+3]  !== undefined){
            return true; //check size 4 horizontally    
        } else if (length == 4 && orientation == 'v' && newBoard[coord1+1] !== undefined && newBoard[coord1+2] !== undefined && newBoard[coord1+3] !== undefined){
            return true; //check size 4 vertically    
        } else {
            return false;
        }
    }

    let isFree = function (size, coord1, coord2, orientation){
        switch (size) {
            case 1:
                if (newBoard[coord1][coord2] === 0){
                    return true;
                } else {
                    return false;
                }
            case 2:
                if (orientation == 'h'){
                    if (newBoard[coord1][coord2] === 0 && newBoard[coord1][coord2+1] === 0){
                        return true;
                    } else {
                        return false;
                    }
                } else if (orientation == 'v'){
                    if (newBoard[coord1][coord2] === 0 && newBoard[coord1+1][coord2] === 0){
                        return true;
                    } else {
                        return false;
                    }
                }
            case 3:
                if (orientation == 'h'){
                    if (newBoard[coord1][coord2] === 0 && newBoard[coord1][coord2+1] === 0
                        && newBoard[coord1][coord2+2] === 0){
                        return true;
                    } else {
                        return false;
                    }
                } else if (orientation == 'v'){
                    if (newBoard[coord1][coord2] === 0 && newBoard[coord1+1][coord2] === 0 
                        && newBoard[coord1+2][coord2] === 0){
                        return true;
                    } else {
                        return false;
                    }
                }
            case 4:
                if (orientation == 'h'){
                    if (newBoard[coord1][coord2] === 0 && newBoard[coord1][coord2+1] === 0 
                        && newBoard[coord1][coord2+2] === 0 && newBoard[coord1][coord2+3] === 0){
                        return true;
                    } else {
                        return false;
                    }
                } else if (orientation == 'v'){
                    if (newBoard[coord1][coord2] === 0 && newBoard[coord1+1][coord2] === 0
                        && newBoard[coord1+2][coord2] === 0 && newBoard[coord1+3][coord2] === 0){
                        return true;
                    } else {
                        return false;
                    }
                }    
            }
        }


    let placeShip = function(size, coord1, coord2, orientation){
        if ((coord1 > 9|| coord2 > 9) ||(coord1 < 0|| coord2 < 0) ){
            return 'Invalid coords';
        } else if (size > 4){
            return 'Invalid size';
        } else if (size != 1 && orientation != 'h' && orientation != 'v'){
            return 'Invalid orientation'; // test orientation --  evaluate when ship is out of bounds;
        } else if (isInBounds(size, coord1, coord2, orientation) == false){
            return 'Invalid placement. Ship out of bounds.';
        } else if (isFree(size, coord1, coord2, orientation) == false){
            return 'Invalid placement. Position taken'; 
        } else {
            let newShip = createShip(size);
            let fullShip = [];
            if (newShip.returnLength() == 1){
                newBoard[coord1][coord2] = newShip;
                fullShip.push(newBoard[coord1][coord2]);
                myFleet.push(fullShip);
                return fullShip;
            } else if (newShip.returnLength() == 2 && orientation == 'h'){
                newBoard[coord1][coord2] = newShip;
                newBoard[coord1][coord2+1] = newShip;
                fullShip.push(newBoard[coord1][coord2],newBoard[coord1][coord2+1]);
                myFleet.push(fullShip);
                return fullShip;
            } else if (newShip.returnLength() == 2 && orientation == 'v'){
                newBoard[coord1][coord2] = newShip;
                newBoard[coord1+1][coord2] = newShip;
                fullShip.push(newBoard[coord1][coord2],newBoard[coord1+1][coord2]);
                myFleet.push(fullShip);
                return fullShip;
            } else if (newShip.returnLength() == 3 && orientation == 'h'){
                newBoard[coord1][coord2] = newShip;
                newBoard[coord1][coord2+1] = newShip;
                newBoard[coord1][coord2+2] = newShip;
                fullShip.push(newBoard[coord1][coord2], newBoard[coord1][coord2+1], newBoard[coord1][coord2+2]);
                myFleet.push(fullShip);
                return fullShip;
            } else if (newShip.returnLength() == 3 && orientation == 'v' ){
                newBoard[coord1][coord2] = newShip;
                newBoard[coord1+1][coord2] = newShip;
                newBoard[coord1+2][coord2] = newShip;
                fullShip.push(newBoard[coord1][coord2], newBoard[coord1+1][coord2], newBoard[coord1+2][coord2]);
                myFleet.push(fullShip);
                return fullShip;
            }  else if (newShip.returnLength() == 4 && orientation == 'h' ){
                newBoard[coord1][coord2] = newShip;
                newBoard[coord1][coord2+1] = newShip;
                newBoard[coord1][coord2+2] = newShip;
                newBoard[coord1][coord2+3] = newShip;
                fullShip.push(newBoard[coord1][coord2], newBoard[coord1][coord2+1], newBoard[coord1][coord2+2],newBoard[coord1][coord2+3]);
                myFleet.push(fullShip);
                return fullShip;
            }   else if (newShip.returnLength() == 4 && orientation == 'v' ){
                newBoard[coord1][coord2] = newShip;
                newBoard[coord1+1][coord2] = newShip;
                newBoard[coord1+2][coord2] = newShip;
                newBoard[coord1+3][coord2] = newShip;
                fullShip.push(newBoard[coord1][coord2], newBoard[coord1+1][coord2], newBoard[coord1+2][coord2],newBoard[coord1+3][coord2]);
                myFleet.push(fullShip);
                return fullShip;
            }
        }
    }



    return {placeShip, receiveAttack, reportMissedHits, isTheFleetSunk, reportHitShips}
    }
   
 module.exports = Gameboard;

