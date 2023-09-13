document.addEventListener("DOMContentLoaded", function() {
    const chessboard = document.getElementById("chess-board");
    const coordinates = document.createElement("div");
    coordinates.className = "coordinates";

    const emptyCell = document.createElement("div");
    emptyCell.className = "coordinate";
    emptyCell.textContent = "";
    coordinates.appendChild(emptyCell);

    for (let col = 0; col < 8; col++) {
        const coord = String.fromCharCode(97 + col);
        const coordElement = document.createElement("div");
        coordElement.className = "coordinate";
        coordElement.textContent = coord;
        coordinates.appendChild(coordElement);
    }

    chessboard.appendChild(coordinates);

    const pieceMapping = {
        "R": "Rook",
        "N": "Knight",
        "B": "Bishop",
        "Q": "Queen",
        "K": "King",
        "P": "Pawn",
        "r": "Rook",
        "n": "Knight",
        "b": "Bishop",
        "q": "Queen",
        "k": "King",
        "p": "Pawn"
    };

    const startingPosition = [
        "RNBQKBNR",
        "PPPPPPPP",
        "        ",
        "        ",
        "        ",
        "        ",
        "pppppppp",
        "rnbqkbnr"
    ];

    for (let row = 0; row < 8; row++) {
        const rowElement = document.createElement("div");
        rowElement.className = "row";

        const rowNumElement = document.createElement("div");
        rowNumElement.className = "coordinate";
        rowNumElement.textContent = 8 - row;
        rowElement.appendChild(rowNumElement);

        for (let col = 0; col < 8; col++) {
            const cell = document.createElement("div");
            cell.className = (row + col) % 2 === 0 ? "white" : "black";
            const pieceCode = startingPosition[row][col];
            if (pieceCode !== " ") {
                const pieceElement = document.createElement("img");
                const color = pieceCode === pieceCode.toUpperCase() ? "W" : "B";
                pieceElement.src = `/chessPieces/${color}${pieceMapping[pieceCode]}.png`;

                cell.appendChild(pieceElement);
            }
            rowElement.appendChild(cell);
        }

        chessboard.appendChild(rowElement);
    }
});
