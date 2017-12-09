//Get Square Elements, Reset Button from DOM, put in var
var squares = document.querySelectorAll(".squares");
var board = document.getElementById("board");
var playerName = document.getElementById("player");
var resetButton = document.getElementById("reset");
var name1;
var name2;


// Keep track of what squares have what letter. X array, O array.
// To be used for game winning?
// var squaresWithO = [];
// var squaresWithX = [];

//Keep track of # of turns
var turns = 0;


//Adds listener for tiles for the placepiece function to control the game. 
var pieceListeners = function() {
  for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener("click", placePiece);
  };
}

// Start New Game, sets turns to 0, shows who is up next
// grabs squares.length and passes it into clearBox that many times to clear board.
// readies game listener thru pieceListeners()
// readies reset listener thru resetGame()
var startNewGame = function() {
  
  name1 = prompt("What is player 1's name?");
  name2 = prompt("What is player 2's name?");
  turns = 0;
  playerName.textContent = name1 + "'s Turn";
  pieceListeners();
  resetGame();
};

// turns++ when called on square click then
// if p1 turn, on click insert "O", push to O array,
// if p2, onclick insert "x", push to X array
var placePiece = function() {
  turns++;
  if (turns % 2 === 1) {
    this.textContent = "O";
    this.style.color = "black";
    this.className = "O";
    console.log(this.class);
    // squaresWithO.push(this);
    this.removeEventListener("click", placePiece);
    playerName.textContent = name2 + "'s Turn";
    checkWin("O",name1);
  } else {
    this.textContent = "X";
    this.style.color = "red";
    this.className = "X";
    console.log(this.class);
    // squaresWithX.push(this);
    this.removeEventListener("click", placePiece);
    playerName.textContent = name1 + "s' Turn";
    checkWin("X", name2);
  }
};

// Adds event listener on reset button, on click starts new game
var resetGame = function() {
  resetButton.addEventListener("click", function() {
    window.location.reload();
  });
};

// combos to win
// 0,1,2...0,4,8...0,3,6...1,4,7...2,5,8...2,4,6...3,4,5...6,7,8...

var checkWin = function(winner, name) {
  //Check if square matched 3.
  if (squares[0].className === winner && squares[1].className === winner && squares[2].className === winner) {
    console.log(winner + " won");
    $(board).hide();
    $("#header").append(winner + " is the winner! Good job " + name + ".");
    $(playerName).remove();
  } else if (squares[0].className === winner && squares[4].className === winner && squares[8].className === winner) {
    console.log(winner + "won");
    $(board).hide();
    $("#header").append(winner + " is the winner!  Good job " + name + ".");
    $(playerName).remove();
  } else if (squares[0].className === winner && squares[3].className === winner && squares[6].className === winner) {
    console.log(winner + "won");
    $(board).hide();
    $("#header").append(winner + " is the winner!  Good job " + name + ".");
    $(playerName).remove();
  } else if (squares[1].className === winner && squares[4].className === winner && squares[7].className === winner) {
    console.log(winner + "won");
    $(board).hide();
    $("#header").append(winner + " is the winner!  Good job " + name + ".");
    $(playerName).remove();
  } else if (squares[2].className === winner && squares[5].className === winner && squares[8].className === winner) {
    console.log(winner + "won");
    $(board).hide();
    $("#header").append(winner + " is the winner!  Good job " + name + ".");
    $(playerName).remove();
  } else if (squares[2].className === winner && squares[4].className === winner && squares[6].className === winner) {
    console.log(winner + "won");
    $(board).hide();
    $("#header").append(winner + " is the winner!  Good job " + name + ".");
    $(playerName).remove();
  } else if (squares[3].className === winner && squares[4].className === winner && squares[5].className === winner) {
    console.log(winner + "won");
    $(board).hide();
    $("#header").append(winner + " is the winner!  Good job " + name + ".");
    $(playerName).remove();
  } else if (squares[6].className === winner && squares[7].className === winner && squares[8].className === winner) {
    console.log(winner + "won");
    $(board).hide();
    $("#header").append(winner + " is the winner!  Good job " + name + ".");
    $(playerName).remove();
  } else if (turns ===9){
    $(board).hide();
    $("#header").append("A draw has been had! Play again");
    $(playerName).remove();
  }
  //Check if X matched 3.
}


//StartNewGame on load initializes the game.
startNewGame();
