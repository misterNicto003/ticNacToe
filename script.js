const cells = document.querySelectorAll(".field");
const message = document.querySelector("#message");
const restartBtn = document.querySelector("#btn");

const winner = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let options = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";

initializeGame();

function initializeGame() {
  cells.forEach((cell) => cell.addEventListener("click", cellClicked));
  restartBtn.addEventListener("click", restartGame);
  message.textContent = `${currentPlayer} 's turn`;
}
function cellClicked() {
  const cellIndex = this.getAttribute("cellIndex");

  if (options[cellIndex] != "") {
    return;
  }

  updateCell(this, cellIndex);
  winnerPlayer();
}
function updateCell(cell, index) {
  options[index] = currentPlayer;
  cell.textContent = currentPlayer;

  console.log(index);
  console.log(cell);
}
function chancgePlayer() {
  currentPlayer = (currentPlayer = "X") ? "O" : "X";
}
function winnerPlayer() {}
function restartGame() {}
