

class Checker {
  constructor(row, column, color) {
    this.row = row;
    this.column = column;
    this.color = color;
  }

  generateChecker () {
    const elementDiv = document.createElement('div');
    elementDiv.classList.add(this.color);
    elementDiv.classList.add('checker');
    return elementDiv;
  }
}