var prompt = require('prompt');

var board = {
  1: ' ',
  2: ' ',
  3: ' ',
  4: ' ',
  5: ' ',
  6: ' ',
  7: ' ',
  8: ' ',
  9: ' '
};

populateBoard = (position, letter) => {
  board[position] = letter.toUpperCase();
}

logBoard = () => {
  console.log('\n' +
        ' ' + board[1] + ' | ' + board[2] + ' | ' + board[3] + '\n' +
        ' ---------\n' +
        ' ' + board[4] + ' | ' + board[5] + ' | ' + board[6] + '\n' +
        ' ---------\n' +
        ' ' + board[7] + ' | ' + board[8] + ' | ' + board[9] + '\n');
}


const allWinningCombinations = [
  [1, 2, 3], [4, 5, 6], [7, 8, 9], 
  [1, 4, 7], [2, 5, 8], [3, 6, 9], 
  [1, 5, 9], [3, 5, 7]
];

checkSquare = (value) => {
  let x;
  if(isNaN(value)) {
    return false;
  }
  x = parseFloat(value);
  return (x | 0) === x;
}

isValid = (position) => {
  return(checkSquare(position) && board[position] === ' ');
}

checkForTie = () => {
  for(let i = 0; i <= Object.keys(board).length; i++) {
    if(board[i] === ' ') {
      return false;
    }
  } 
  return true;
}

checkForWin = (player) => {
  for(let i = 0; i < allWinningCombinations.length; i++) {
    let count = 0;
    for(j = 0; j < allWinningCombinations[i].length; j++) {
      if(board[allWinningCombinations[i][j]] === player) {
        count++
      }
      if(count === 3) {
        return true;
      }
    }
    return false;
  }
}

assignTurn = (player) => {
  console.log('Turn: ' + player);
  prompt.start();
  prompt.get(['position'], function (err, result) {
    if (isValid(result.position) === true) {
        populateBoard(result.position, player);
        logBoard();
        if (checkForWin(player) === true) {
            console.log(`${player} is the Winner!`);
            return;
        }
        if (checkForTie() === true) {
            console.log('Tie Game ... ties are lame');
            return;
        }
        if (player === 'X') {
            assignTurn('O');
        } else {
            assignTurn('X');
        }
    } else {
        console.log('Input is invalid');
        assignTurn(player);
    }
  });
}

console.log('Game started: \n' +
    ' 1 | 2 | 3 \n' +
    ' --------- \n' +
    ' 4 | 5 | 6 \n' +
    ' --------- \n' +
    ' 7 | 8 | 9 \n');

assignTurn('X');