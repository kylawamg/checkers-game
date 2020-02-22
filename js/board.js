//Board


class Board {
  constructor(boardId) {
    this.boardGrid = [];
    this.columns = 8;
    this.rows = 8;
    this.boardId = boardId;
  }

  generateBoard() {
    const elementBoard = document.getElementById(this.boardId);
    let color = '';
    for (let i = 0; i < this.rows; i++) {
      this.boardGrid[i] = []; 
      for (let j = 0; j < this.columns; j++) {
        if (i % 2 === 0 && j % 2 === 0) {
          color = 'white';
        } else if (i % 2 !== 0 && j % 2 === 0) {
          color = 'brown';
        } else if (i % 2 === 0 && j % 2 !== 0) {
          color = 'brown';
        } else if (i % 2 !== 0 && j % 2 === 0) {
          color = 'white';
        } else {
          color = 'white';
        }
        const cell = new Cell(i, j, color);
        this.boardGrid[i][j] = cell;
        elementBoard.appendChild(cell.generateCell());
      }
    }
    console.log(this.boardGrid);
  }
}