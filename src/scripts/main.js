'use strict';

// const Game = require('../modules/Game.class');

class Game {
  constructor() {
    this.matrix = [
      [0, 2, 0, 2],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ];

    this.score = 0;
  }

  moveLeft() {
    console.log('hi');
    function shiftRowLeft(matrix) {
      for (let i of matrix) {
        for (let j of i) {
          if (j ===)
        }
      }
    }
  }

  moveRight() {
    console.log('hi');
  }

  moveUp() {
    console.log('hi');
  }

  moveDown() {
    console.log('hi');
  }

  // getState() {

  // }

  // getScore() {

  // }

  // getStatus() {

  // }

  // start() {

  // }

  // restart() {

  // }
}

const game = new Game();


// document.addEventListener('keydown', event => console.log(event.key));
document.addEventListener('keydown', event => {
  switch (event.key) {
    case 'ArrowUp':
      game.moveUp();
      break;
    case 'ArrowDown':
      game.moveDown();
      break;
    case 'ArrowLeft':
      game.moveLeft();
      break;
    case 'ArrowRight':
      game.moveRight();
      break;
  }
});
