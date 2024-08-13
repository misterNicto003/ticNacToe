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
running = false;


initializeGame(

);

function initializeGame() {
  cells.forEach((cell) => cell.addEventListener("click", cellClicked));
  
  restartBtn.addEventListener("click", restartGame);
  message.textContent = `${currentPlayer}'s turn`;
  running = true;
  console.log(options);
}

function cellClicked() {
  const cellIndex = this.getAttribute("cellIndex");

  if (options[cellIndex] != "" || !running) {
    return;
  }
  updateCell(this, cellIndex);
  checkWinner();
  console.log(this);
}
function updateCell(cell, index) {
  options[index] = currentPlayer;
  cell.textContent = currentPlayer;
}
function chancgePlayer() {
  currentPlayer = currentPlayer == "X" ? "O" : "X";
  message.textContent = `${currentPlayer} 's turn`;
}
function checkWinner() {
  let roundWon = false;

  for (let i = 0; i < winner.length; i++) {
    const condition = winner[i];
    const cellA = options[condition[0]];
    const cellB = options[condition[1]];
    const cellC = options[condition[2]];

    if (cellA == "" || cellB == "" || cellC == "") {
      continue;
    }
    if (cellA == cellB && cellB == cellC) {
      roundWon = true;
      break;
    }
  }

  if (roundWon) {
    message.textContent = `${currentPlayer} wins!`;
    running = false;
  } else if (!options.includes("")) {
    message.textContent = `draw`;
    running = false;
  } else {
    chancgePlayer();
  }
}
function restartGame() {
  currentPlayer = "X";
  options = ["", "", "", "", "", "", "", "", ""];
  message.textContent = `${currentPlayer} 's turn`;
  cells.forEach((cell) => (cell.textContent = ""));
  running = true;
}
