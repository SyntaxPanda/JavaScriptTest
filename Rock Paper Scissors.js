
const choices = {
    1: "stone",
    2: "paper",
    3: "scissors",
}

let player1 = Math.round(Math.random() * 3)
let player2 = Math.round(Math.random() * 3)

if (player1 === 0) {
    player1 ++
} else if (player1 === 4) {
    player1 --
}

if (player2 === 0) {
    player2 ++
} else if (player2 === 4) {
    player2 --
}

player1 = choices[player1]
player2 = choices[player2]

function gameEngine(playerOne, playerTwo){
  if (playerOne === "stone"){
    if (playerTwo === "paper"){
      console.log(playerOne + " vs " + playerTwo + ": Gewinner ist Spieler 2!")
    } else if (playerTwo === "scissors") {
      console.log(playerOne + " vs " + playerTwo + ": Gewinner ist Spieler 1!")
    } else {
      console.log(playerOne + " vs " + playerTwo + ": Unentschieden!")
    }
  } else if (playerOne === "paper"){
    if (playerTwo === "paper"){
      console.log(playerOne + " vs " + playerTwo + ": Unentschieden!")
    } else if (playerTwo === "scissors") {
      console.log(playerOne + " vs " + playerTwo + ": Gewinner ist Spieler 2!")
    } else {
      console.log(playerOne + " vs " + playerTwo + ": Gewinner ist Spieler 1!")
    }
  } else {
    if (playerTwo === "paper"){
      console.log(playerOne + " vs " + playerTwo + ": Gewinner ist Spieler 1!")
    } else if (playerTwo === "scissors") {
      console.log(playerOne + " vs " + playerTwo + ": Unentschieden!")
    } else {
      console.log(playerOne + " vs " + playerTwo + ": Gewinner ist Spieler 2!")
    }
  }
}

console.log(player1)
console.log(player2)

gameEngine(player1, player2)
