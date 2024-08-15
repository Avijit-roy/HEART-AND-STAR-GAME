const cells = document.querySelectorAll(".tic-tac-toe-cell");
let currentPlayer = "X";
let heart = [];
let star = [];
let gameWon = false;
let matches = {
  one: ["cell-1", "cell-2", "cell-3"],
  two: ["cell-4", "cell-5", "cell-6"],
  three: ["cell-7", "cell-8", "cell-9"],
  four: ["cell-1", "cell-4", "cell-7"],
  five: ["cell-2", "cell-5", "cell-8"],
  six: ["cell-3", "cell-6", "cell-9"],
  seven: ["cell-1", "cell-5", "cell-9"],
  eight: ["cell-3", "cell-5", "cell-7"],
};

function checkWin(playerMoves) {
  for (let key in matches) {
    if (matches[key].every((cell) => playerMoves.includes(cell))) {
      highlightWinningCells(matches[key]);
      return true;
    }
  }
  return false;
}

function resetGame() {
  cells.forEach((cell) => {
    cell.innerHTML = "";
    cell.style.border = "none";
  });
  currentPlayer = "X";
  heart = [];
  star = [];
  gameWon = false;
}

function highlightWinningCells(cells) {
  cells.forEach((cellId) => {
    const cell = document.getElementById(cellId);
    cell.style.border = "2px solid #46cebe";
    cell.innerHTML = `<lord-icon
                src="https://cdn.lordicon.com/nqtddedc.json"
                trigger="hover"
                state="hover-cross-2"
                colors="primary:#46cebe"
                style="width:250px;height:100px">
            </lord-icon>`;
  });
}

cells.forEach((cell) => {
  cell.addEventListener("click", () => {
    if (gameWon || heart.includes(cell.id) || star.includes(cell.id)) {
      return; // Stop the function execution if the game is won or cell is already clicked
    }

    if (!(heart.includes(cell.id) || star.includes(cell.id))) {
      if (currentPlayer === "X") {
        cell.innerHTML = `<lord-icon src="https://cdn.lordicon.com/jjoolpwc.json" trigger="morph" state="morph-heart-broken"
                colors="primary:#000000,secondary:#30e8bd" style="width:250px;height:100px">
            </lord-icon>`;
        currentPlayer = "O";
        heart.push(cell.id);
        console.log(heart);
        if (checkWin(heart)) {
          console.log("Heart wins!");
          gameWon = true;
        }
      } else {
        cell.innerHTML = `<lord-icon src="https://cdn.lordicon.com/vcuhguff.json" trigger="hover" state="hover-wink"
                colors="primary:#000000,secondary:#30e8bd" style="width:250px;height:100px">
            </lord-icon>`;
        currentPlayer = "X";
        star.push(cell.id);
        console.log(star);
        if (checkWin(star)) {
          console.log("Star wins!");
          gameWon = true;
        }
      }
    }
  });
});
