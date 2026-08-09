import Gameboard from "./gameboard";
export { Player };

function Player(type) {
  let typeOfPlayer = "";

  if (type != "computer" && type != "human") {
    typeOfPlayer = "Invalid type";
  } else {
    typeOfPlayer = type;
  }

  let myGameboard = Gameboard();

  return { myGameboard, typeOfPlayer };
}
