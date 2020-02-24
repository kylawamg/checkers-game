

const newBoard = new Board('board');


const player1 = new Player('Player1', 'white');
const player2 = new Player('Player2', 'brown');

const game = new Game (newBoard, player1, player2);
game.startGame();



