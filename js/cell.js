// 

class Cell {
  constructor(row, column, color) {
    this.row = row;
    this.column = column;
    this.color = color;
  }
  generateCell () {
    const elementDiv = document.createElement('div');
    elementDiv.classList.add(this.color);
    elementDiv.classList.add('cell');
    return elementDiv;
  }
}