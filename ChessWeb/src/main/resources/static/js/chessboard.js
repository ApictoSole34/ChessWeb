document.addEventListener("DOMContentLoaded", function() {
    const chessboard = document.getElementById("chess-board");

    for (let row = 0; row < 8; row++) {
        const rowElement = document.createElement("div");
        rowElement.className = "row";

        for (let col = 0; col < 8; col++) {
            const cell = document.createElement("div");
            cell.className = (row + col) % 2 === 0 ? "white" : "black";
            rowElement.appendChild(cell);
        }

        chessboard.appendChild(rowElement);
    }
});