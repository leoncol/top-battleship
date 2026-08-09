import Ship from "./ship";
export default Gameboard;

function Gameboard() {
  let createBoard = function () {
    const board = [];
    for (let i = 0; i < 10; i++) {
      let newRow = [];
      for (let x = 0; x < 10; x++) {
        newRow.push(0);
      }
      board.push(newRow);
    }

    return board;
  };

  let newBoard = createBoard();

  let myFleet = [];

  let hitShipsCoords = [];

  let isTheFleetSunk = function (fleet = returnMyFleet()) {
    let sunk = 0;
    let afloat = 0;

    for (let i = 0; i <= fleet.length - 1; i++) {
      let isItSunk = fleet[i][0].isSunk();
      if (isItSunk == true) {
        sunk += 1;
      } else {
        afloat += 1;
      }
    }

    if (sunk > afloat && afloat == 0) {
      return true;
    } else {
      return false;
    }
  };

  let reportHitShips = function (coords = returnHitShipCoords()) {
    return coords;
  };

  let createShip = function (size) {
    let newShip = Ship(size);
    return newShip;
  };

  let receiveAttack = function (coord1, coord2) {
    if (coord1 > 9 || coord2 > 9) {
      return "Invalid coords";
    } else {
      let attack = "x";
      let ship = newBoard[coord1][coord2];
      if (ship === 0 || ship == "x") {
        newBoard[coord1][coord2] = attack;
        return attack;
      } else {
        ship.increaseHit();
        let numberOfHits = ship.returnNumberOfHits();

        let hitCoords = [coord1, coord2];
        let hitShipsCoords = returnHitShipCoords();
        hitShipsCoords.push(hitCoords);
        newBoard[coord1][coord2] = attack;
        return numberOfHits;
      }
    }
  };

  let reportMissedHits = function (gameboard) {
    let hits = [];
    gameboard = newBoard;
    for (const axisY of gameboard) {
      let coord1 = 0;
      let coord2 = 0;
      let coords = [];
      for (const axisX of axisY) {
        if (axisX == "x") {
          coord1 = gameboard.indexOf(axisY);
          coord2 = axisY.indexOf(axisX);
          coords.push(coord1);
          coords.push(coord2);
          hits.push(coords);
        }
      }
    }

    return hits;
  };

  let isInBounds = function (arrayOfCoords) {
    for (let i = 0; i < arrayOfCoords.length; i++) {
      let coords = arrayOfCoords[i];
      let coords1 = coords[0];
      let coords2 = coords[1];
      if (coords1 < 0 || coords1 > 9 || coords2 < 0 || coords2 > 9) {
        return false;
      }
    }

    return true;
  };

  let isFreeAround = function (arrayOfCoords) {
    for (let i = 0; i <= arrayOfCoords.length - 1; i++) {
      let coords = arrayOfCoords[i];
      let coords1 = coords[0];
      let coords2 = coords[1];
      for (let colOffSet = -1; colOffSet <= 1; colOffSet++) {
        for (let rowOffSet = -1; rowOffSet <= 1; rowOffSet++) {
          let realBoardPosition1 = coords1 + colOffSet;
          let realBoardPosition2 = coords2 + rowOffSet;
          let realBoardFullCoords =
            newBoard[realBoardPosition1]?.[realBoardPosition2];
          if (realBoardFullCoords != 0 && realBoardFullCoords != undefined) {
            return false;
          }
        }
      }
    }

    return true;
  };

  let placeShip = function (size, coord1, coord2, orientation) {
    let newShip = createShip(size);
    let fullShip = [];
    if (newShip.returnLength() == 1) {
      newBoard[coord1][coord2] = newShip;
      fullShip.push(newBoard[coord1][coord2]);
      myFleet.push(fullShip);
      return fullShip;
    } else if (newShip.returnLength() == 2 && orientation == "h") {
      newBoard[coord1][coord2] = newShip;
      newBoard[coord1][coord2 + 1] = newShip;
      fullShip.push(newBoard[coord1][coord2], newBoard[coord1][coord2 + 1]);
      myFleet.push(fullShip);
      return fullShip;
    } else if (newShip.returnLength() == 2 && orientation == "v") {
      newBoard[coord1][coord2] = newShip;
      newBoard[coord1 + 1][coord2] = newShip;
      fullShip.push(newBoard[coord1][coord2], newBoard[coord1 + 1][coord2]);
      myFleet.push(fullShip);
      return fullShip;
    } else if (newShip.returnLength() == 3 && orientation == "h") {
      newBoard[coord1][coord2] = newShip;
      newBoard[coord1][coord2 + 1] = newShip;
      newBoard[coord1][coord2 + 2] = newShip;
      fullShip.push(
        newBoard[coord1][coord2],
        newBoard[coord1][coord2 + 1],
        newBoard[coord1][coord2 + 2],
      );
      myFleet.push(fullShip);
      return fullShip;
    } else if (newShip.returnLength() == 3 && orientation == "v") {
      newBoard[coord1][coord2] = newShip;
      newBoard[coord1 + 1][coord2] = newShip;
      newBoard[coord1 + 2][coord2] = newShip;
      fullShip.push(
        newBoard[coord1][coord2],
        newBoard[coord1 + 1][coord2],
        newBoard[coord1 + 2][coord2],
      );
      myFleet.push(fullShip);
      return fullShip;
    } else if (newShip.returnLength() == 4 && orientation == "h") {
      newBoard[coord1][coord2] = newShip;
      newBoard[coord1][coord2 + 1] = newShip;
      newBoard[coord1][coord2 + 2] = newShip;
      newBoard[coord1][coord2 + 3] = newShip;
      fullShip.push(
        newBoard[coord1][coord2],
        newBoard[coord1][coord2 + 1],
        newBoard[coord1][coord2 + 2],
        newBoard[coord1][coord2 + 3],
      );
      myFleet.push(fullShip);
      return fullShip;
    } else if (newShip.returnLength() == 4 && orientation == "v") {
      newBoard[coord1][coord2] = newShip;
      newBoard[coord1 + 1][coord2] = newShip;
      newBoard[coord1 + 2][coord2] = newShip;
      newBoard[coord1 + 3][coord2] = newShip;
      fullShip.push(
        newBoard[coord1][coord2],
        newBoard[coord1 + 1][coord2],
        newBoard[coord1 + 2][coord2],
        newBoard[coord1 + 3][coord2],
      );
      myFleet.push(fullShip);
      return fullShip;
    }
  };

  let getShipCoords = function (size, coord1, coord2, orientation) {
    let newArray = [];
    if (orientation == "v") {
      for (let i = 0; i < size; i++) {
        let coords = [];
        coords.push(coord1 + i, coord2);
        newArray.push(coords);
      }
    } else if (orientation == "h") {
      for (let i = 0; i < size; i++) {
        let coords = [];
        coords.push(coord1, coord2 + i);
        newArray.push(coords);
      }
    } else {
      let coords = [];
      coords.push(coord1, coord2);
      newArray.push(coords);
    }

    return newArray;
  };

  let generateShipCoords = function () {
    for (let i = 0; i <= 3; i++) {
      let coord1 = Math.floor(Math.random() * 10);
      let coord2 = Math.floor(Math.random() * 10);
      let newCoords = getShipCoords(1, coord1, coord2);
      if (isInBounds(newCoords) == false || isFreeAround(newCoords) == false) {
        i--;
      } else {
        let placeThisShip = placeShip(1, coord1, coord2);

        if (typeof placeThisShip == "string") {
          i--;
        }
      }
    }

    for (let i = 0; i <= 2; i++) {
      let orientation = decideOrientation();
      let coord1 = Math.floor(Math.random() * 10);
      let coord2 = Math.floor(Math.random() * 10);
      let newCoords = getShipCoords(2, coord1, coord2, orientation);
      if (isInBounds(newCoords) == false || isFreeAround(newCoords) == false) {
        i--;
      } else {
        let placeThisShip = placeShip(2, coord1, coord2, orientation);
        if (typeof placeThisShip == "string") {
          i--;
        }
      }
    }

    for (let i = 0; i <= 1; i++) {
      let orientation = decideOrientation();
      let coord1 = Math.floor(Math.random() * 10);
      let coord2 = Math.floor(Math.random() * 10);
      let newCoords = getShipCoords(3, coord1, coord2, orientation);
      if (isInBounds(newCoords) == false || isFreeAround(newCoords) == false) {
        i--;
      } else {
        let placeThisShip = placeShip(3, coord1, coord2, orientation);
        if (typeof placeThisShip == "string") {
          i--;
        }
      }
    }

    for (let i = 0; i < 1; i++) {
      let orientation = decideOrientation();
      let coord1 = Math.floor(Math.random() * 10);
      let coord2 = Math.floor(Math.random() * 10);
      let newCoords = getShipCoords(4, coord1, coord2, orientation);
      if (isInBounds(newCoords) == false || isFreeAround(newCoords) == false) {
        i--;
      } else {
        let placeThisShip = placeShip(4, coord1, coord2, orientation);
        if (typeof placeThisShip == "string") {
          i--;
        }
      }
    }

    function decideOrientation() {
      let decideOrientation = Math.floor(Math.random() * 2);
      if (decideOrientation == 0) {
        decideOrientation = "v";
      } else {
        decideOrientation = "h";
      }

      return decideOrientation;
    }
  };

  function cleanBoard() {
    newBoard = createBoard();
    myFleet = [];
    hitShipsCoords = [];
  }

  function returnMyFleet() {
    return myFleet;
  }

  function returnHitShipCoords() {
    return hitShipsCoords;
  }

  function returnBoard() {
    return newBoard;
  }

  return {
    placeShip,
    receiveAttack,
    reportMissedHits,
    isTheFleetSunk,
    reportHitShips,
    isFreeAround,
    generateShipCoords,
    cleanBoard,
    returnBoard,
  };
}
