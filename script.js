let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
const cells = document.getElementsByClassName('cell');

function makeMove(index) {
  if (board[index] === '' && !checkWin() && !checkDraw()) {
    board[index] = currentPlayer;
    cells[index].textContent = currentPlayer;
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';

    if (checkWin()) {
      highlightWinner();
      setTimeout(() => {
        alert(`Player ${currentPlayer === 'X' ? 'O' : 'X'} wins!`);
        resetBoard();
      }, 1000);
    } else if (checkDraw()) {
      setTimeout(() => {
        alert("It's a draw!");
        resetBoard();
      }, 1000);
    }
  }
}

function checkWin() {
  const winCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], 
    [0, 3, 6], [1, 4, 7], [2, 5, 8], 
    [0, 4, 8], [2, 4, 6] 
  ];

  for (let combination of winCombinations) {
    const [a, b, c] = combination;
    if (board[a] && board[a] === board[b] && board[b] === board[c]) {
      return true;
    }
  }

  return false;
}

function checkDraw() {
  return board.every((cell) => cell !== '');
}

function resetBoard() {
  board = ['', '', '', '', '', '', '', '', ''];
  currentPlayer = 'X';
  Array.from(cells).forEach((cell) => {
    cell.textContent = '';
    cell.style.backgroundColor = '';
  });
  document.body.style.backgroundColor = '';
}

function highlightWinner() {
  const winCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], 
    [0, 3, 6], [1, 4, 7], [2, 5, 8], 
    [0, 4, 8], [2, 4, 6] 
  ];

  for (let combination of winCombinations) {
    const [a, b, c] = combination;
    if (board[a] && board[a] === board[b] && board[b] === board[c]) {
      Array.from(cells).forEach(cell => {
        cell.style.backgroundColor = 'yellow';
      });
      break;
    }
  }
}
