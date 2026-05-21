function ship(size) {
    let length = size;
    let numberOfHits = 0;
    let isSunk = function(){
        if (numberOfHits >= length){
            return true
        } else {
            return false
        }
    }

    let returnLength = function(){
        return length;
    }

    let increaseHit = function(){
        numberOfHits += 1;
    }

    let returnNumberOfHits = function(){
        return numberOfHits;
    }
    return {isSunk, returnLength, increaseHit, returnNumberOfHits}
    }
   
   module.exports = ship;

