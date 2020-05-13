//

export default class Cell {
  constructor(row, column, color, checker) {
    this.row = row;
    this.column = column;
    this.color = color;
    this.checker = checker;
  }
  generateCell() {
    const elementDiv = document.createElement("div");
    elementDiv.classList.add(this.color);
    elementDiv.classList.add("cell");
    return elementDiv;
  }
}
