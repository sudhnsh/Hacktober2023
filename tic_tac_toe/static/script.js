let currentPlayer = 'X';
let winner = null;
const cells = document.querySelectorAll('.cell');
const winnerDisplay = document.getElementById('winner');

function makeMove(cell) {
    if (!cell.textContent && !winner) {
        cell.textContent = currentPlayer;
        checkWinner();
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
}

function checkWinner() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6] // Diagonals
    ];

    for (let pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (cells[a].textContent && cells[a].textContent === cells[b].textContent && cells[a].textContent === cells[c].textContent) {
            winner = cells[a].textContent;
            winnerDisplay.textContent = `Player ${winner} wins!`;
        }
    }

    if (!winner && [...cells].every(cell => cell.textContent !== '')) {
        winnerDisplay.textContent = "It's a draw!";
    }
}

for (let cell of cells) {
    cell.addEventListener('click', () => makeMove(cell));
}

