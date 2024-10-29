const initialBoard = [
    1, 2, 3,
    4, 5, 6,
    7, 8, null
];

let puzzleBoard = [...initialBoard];
let moveCount = 0;

// Función para mezclar el tablero de manera aleatoria
function shuffleBoard() {
    for (let i = puzzleBoard.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [puzzleBoard[i], puzzleBoard[j]] = [puzzleBoard[j], puzzleBoard[i]];
    }
}

// Función para renderizar el tablero y actualizar el contador
function renderBoard() {
    const boardElement = document.getElementById("puzzle-board");
    boardElement.innerHTML = "";
    puzzleBoard.forEach((value, index) => {
        const piece = document.createElement("div");
        piece.className = value ? "puzzle-piece" : "puzzle-piece empty";
        if (value) {
            piece.style.backgroundImage = `url('./images/${value}.png')`;
        }
        piece.dataset.index = index;
        boardElement.appendChild(piece);
    });
    document.getElementById("move-counter").innerText = `Movimientos: ${moveCount}`;
}

// Función para resolver el puzzle con una secuencia de movimientos predefinida
function solvePuzzle() {
    const solutionSteps = [
        // Ejemplo de pasos de solución
        [1, 2, 3, 4, 5, 6, 7, null, 8],
        [1, 2, 3, 4, 5, 6, null, 7, 8],
        [1, 2, 3, 4, null, 6, 5, 7, 8],
        [1, 2, 3, null, 4, 6, 5, 7, 8],
        [1, 2, null, 3, 4, 6, 5, 7, 8],
        [1, null, 2, 3, 4, 6, 5, 7, 8],
        [null, 1, 2, 3, 4, 6, 5, 7, 8],
        [1, 2, 3, 4, 5, 6, 7, 8, null]
    ];

    let i = 0;
    const interval = setInterval(() => {
        if (i < solutionSteps.length) {
            puzzleBoard = solutionSteps[i];
            moveCount++;
            renderBoard();
            i++;
        } else {
            clearInterval(interval);
        }
    }, 500);
}

document.getElementById("solve-button").addEventListener("click", solvePuzzle);

// Inicializa el tablero con una disposición aleatoria y renderiza
shuffleBoard();
renderBoard();
