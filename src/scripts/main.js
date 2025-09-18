'use strict';

// const Game = require('../modules/Game.class');

class Game {
  constructor() {
    this.matrix = [
      [2, 4, 0, 0],
      [0, 4, 0, 2],
      [2, 0, 2, 0],
      [0, 2, 0, 4]
    ];

    this.score = 0;
  }

  shiftRowLeft(row) {
    let newRow = row.filter(num => num !== 0);

    for (let i = 0; i < newRow.length - 1; i++) {
      if (newRow[i] === newRow[i + 1]) {
        newRow[i] *= 2;
        newRow[i + 1] = 0;
        i++;
      }
    }

    newRow = newRow.filter(num => num !== 0);

    while (newRow.length < 4) {
      newRow.push(0);
    }

    return newRow;
  }

  shiftRowRight(row) {
    let newRow = row.filter(num => num !== 0);

    for (let i = newRow.length - 1; i > 0; i--) {
      if (newRow[i] === newRow[i - 1]) {
        newRow[i] *= 2;
        newRow[i - 1] = 0;
        i--;
      }
    }

    newRow = newRow.filter(num => num !== 0);

    while(newRow.length < 4) {
      newRow.unshift(0);
    }

    return newRow;
  }

  shiftRowUp(matrix) {
    let newRow = [];
    let newMatrix = matrix;
    let resultMatrix = [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ];

    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        newRow.push(newMatrix[j][i]);

        if (newRow.length === 4) {
          newRow = newRow.filter(num => num !== 0);
          console.log(newRow);

          for (let n = 0; n < newRow.length - 1; n++) {
            if (newRow[n] === newRow[n + 1]) {
              newRow[n] *= 2;
              newRow[n + 1] = 0;
              n++;
            }
          }

          newRow = newRow.filter(num => num !== 0);

          while (newRow.length < 4) {
            newRow.push(0);
          }

          for (let z = 0; z < 4; z++) {
            resultMatrix[z][i] = newRow[z];
          }

          newRow = [];
        }
      }
    }
    return resultMatrix;
  }

  shiftRowDown(matrix) {
    let newRow = [];
    let newMatrix = matrix;
    let resultMatrix = [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ];

    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        newRow.push(newMatrix[j][i]);

        if (newRow.length === 4) {
          newRow = newRow.filter(num => num !== 0);
          console.log(newRow);

          for (let n = newRow.length - 1; n > 0; n--) {
            if (newRow[n] === newRow[n - 1]) {
              newRow[n] *= 2;
              newRow[n - 1] = 0;
              n--;
            }
          }

          newRow = newRow.filter(num => num !== 0);

          while (newRow.length < 4) {
            newRow.unshift(0);
          }

          for (let z = 0; z < 4; z++) {
            resultMatrix[z][i] = newRow[z];
          }

          newRow = [];
        }
      }
    }
    return resultMatrix;
  }

  moveLeft() {
    this.matrix = this.matrix.map(row => this.shiftRowLeft(row));
    console.log(this.matrix);
  }

  moveRight() {
    this.matrix = this.matrix.map(row => this.shiftRowRight(row));
    console.log(this.matrix);
  }

  moveUp() {
    this.matrix = this.shiftRowUp(this.matrix);
    console.log(this.matrix);
  }

  moveDown() {
    this.matrix = this.shiftRowDown(this.matrix);
    console.log(this.matrix);
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
