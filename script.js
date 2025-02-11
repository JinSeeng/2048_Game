const boardSize = 4;
let board;
let score;

document.addEventListener('DOMContentLoaded', () => {
    initializeGame();
    document.getElementById('reset').addEventListener('click', initializeGame);
    document.addEventListener('keydown', handleKeyPress);
    document.getElementById('playAgain').addEventListener('click', () => {
        hideGameOverModal();
        initializeGame();
    });

    const themeToggle = document.getElementById('themeToggle');
    themeToggle.addEventListener('click', toggleTheme);
});

function initializeGame() {
    board = Array.from({ length: boardSize }, () => Array(boardSize).fill(0));
    score = 0;
    updateScore();
    addRandomTile();
    addRandomTile();
    renderBoard();
}

function renderBoard() {
    const boardElement = document.getElementById('board');
    boardElement.innerHTML = '';
    for (let row = 0; row < boardSize; row++) {
        for (let col = 0; col < boardSize; col++) {
            const tileValue = board[row][col];
            const tile = document.createElement('div');
            tile.classList.add('tile');
            if (tileValue !== 0) {
                tile.classList.add(`tile-${tileValue}`);
                tile.textContent = tileValue;
            }
            boardElement.appendChild(tile);
        }
    }
}

function addRandomTile() {
    const emptyTiles = [];
    for (let row = 0; row < boardSize; row++) {
        for (let col = 0; col < boardSize; col++) {
            if (board[row][col] === 0) {
                emptyTiles.push({ row, col });
            }
        }
    }
    if (emptyTiles.length > 0) {
        const { row, col } = emptyTiles[Math.floor(Math.random() * emptyTiles.length)];
        board[row][col] = Math.random() < 0.9 ? 2 : 4;
    }
}

function updateScore() {
    document.getElementById('score').textContent = score;
}

function handleKeyPress(event) {
    const key = event.key;
    let moved = false;

    if (key === 'ArrowUp') {
        moved = moveUp();
    } else if (key === 'ArrowDown') {
        moved = moveDown();
    } else if (key === 'ArrowLeft') {
        moved = moveLeft();
    } else if (key === 'ArrowRight') {
        moved = moveRight();
    }

    if (moved) {
        addRandomTile();
        renderBoard();
        if (isGameOver()) {
            showGameOverModal();
        }
    }
}

function moveUp() {
    let moved = false;
    for (let col = 0; col < boardSize; col++) {
        for (let row = 1; row < boardSize; row++) {
            if (board[row][col] !== 0) {
                let currentRow = row;
                while (currentRow > 0 && board[currentRow - 1][col] === 0) {
                    board[currentRow - 1][col] = board[currentRow][col];
                    board[currentRow][col] = 0;
                    currentRow--;
                    moved = true;
                }
                if (currentRow > 0 && board[currentRow - 1][col] === board[currentRow][col]) {
                    board[currentRow - 1][col] *= 2;
                    score += board[currentRow - 1][col];
                    board[currentRow][col] = 0;
                    moved = true;
                    updateScore();
                }
            }
        }
    }
    return moved;
}

function moveDown() {
    let moved = false;
    for (let col = 0; col < boardSize; col++) {
        for (let row = boardSize - 2; row >= 0; row--) {
            if (board[row][col] !== 0) {
                let currentRow = row;
                while (currentRow < boardSize - 1 && board[currentRow + 1][col] === 0) {
                    board[currentRow + 1][col] = board[currentRow][col];
                    board[currentRow][col] = 0;
                    currentRow++;
                    moved = true;
                }
                if (currentRow < boardSize - 1 && board[currentRow + 1][col] === board[currentRow][col]) {
                    board[currentRow + 1][col] *= 2;
                    score += board[currentRow + 1][col];
                    board[currentRow][col] = 0;
                    moved = true;
                    updateScore();
                }
            }
        }
    }
    return moved;
}

function moveLeft() {
    let moved = false;
    for (let row = 0; row < boardSize; row++) {
        for (let col = 1; col < boardSize; col++) {
            if (board[row][col] !== 0) {
                let currentCol = col;
                while (currentCol > 0 && board[row][currentCol - 1] === 0) {
                    board[row][currentCol - 1] = board[row][currentCol];
                    board[row][currentCol] = 0;
                    currentCol--;
                    moved = true;
                }
                if (currentCol > 0 && board[row][currentCol - 1] === board[row][currentCol]) {
                    board[row][currentCol - 1] *= 2;
                    score += board[row][currentCol - 1];
                    board[row][currentCol] = 0;
                    moved = true;
                    updateScore();
                }
            }
        }
    }
    return moved;
}

function moveRight() {
    let moved = false;
    for (let row = 0; row < boardSize; row++) {
        for (let col = boardSize - 2; col >= 0; col--) {
            if (board[row][col] !== 0) {
                let currentCol = col;
                while (currentCol < boardSize - 1 && board[row][currentCol + 1] === 0) {
                    board[row][currentCol + 1] = board[row][currentCol];
                    board[row][currentCol] = 0;
                    currentCol++;
                    moved = true;
                }
                if (currentCol < boardSize - 1 && board[row][currentCol + 1] === board[row][currentCol]) {
                    board[row][currentCol + 1] *= 2;
                    score += board[row][currentCol + 1];
                    board[row][currentCol] = 0;
                    moved = true;
                    updateScore();
                }
            }
        }
    }
    return moved;
}

function isGameOver() {
    for (let row = 0; row < boardSize; row++) {
        for (let col = 0; col < boardSize; col++) {
            if (board[row][col] === 0) {
                return false;
            }
            if (row < boardSize - 1 && board[row][col] === board[row + 1][col]) {
                return false;
            }
            if (col < boardSize - 1 && board[row][col] === board[row][col + 1]) {
                return false;
            }
        }
    }
    return true;
}

function showGameOverModal() {
    const modal = document.getElementById('gameOverModal');
    const finalScore = document.getElementById('finalScore');
    finalScore.textContent = score;
    modal.style.display = 'flex';
}

function hideGameOverModal() {
    const modal = document.getElementById('gameOverModal');
    modal.style.display = 'none';
}

// Fonction pour switcher thème clair/sombre
function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-theme');
    const themeToggle = document.getElementById('themeToggle');
    if (body.classList.contains('dark-theme')) {
        themeToggle.textContent = 'Thème Clair';
    } else {
        themeToggle.textContent = 'Thème Sombre';
    }
}