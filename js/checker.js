

class Checker {
  constructor(row, column, color) {
    this.row = row;
    this.column = column;
    this.color = color;
  }

  generateChecker (callback) {
    const elementDiv = document.createElement('div');
    elementDiv.classList.add(this.color);
    elementDiv.classList.add('checker');
    elementDiv.addEventListener('click', () => callback
    ({row: this.row, column: this.column, color: this.color}), false);
    return elementDiv;
  }


}

