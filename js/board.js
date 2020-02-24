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
        }  else if (i % 2 !== 0 && j % 2 !== 0) {
          color = 'white';
        }
        const checker = this.createChecker(i, j, color);
        const cell = new Cell(i, j, color);
        this.boardGrid[i][j] = cell;
        const cellElement = cell.generateCell();
        elementBoard.appendChild(cellElement);
        if (checker) {
          cellElement.appendChild(checker.generateChecker(this.moveChecker));
        }
      }
    }
  }

  moveChecker(event) { 
    const {row, column, color} = event;
    
  }
  createChecker(row, column, color) {
    let checker = null;
    if ((row === 0 || row === 1 || row === 2) && color === 'white') {
      checker = new Checker(row, column, 'white');
    } else if ((row === 7 || row === 6 || row === 5) && color === 'white') {
      checker = new Checker(row, column, 'brown');
    }
    return checker;
   }
}