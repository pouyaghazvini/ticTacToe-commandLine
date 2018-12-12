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

assignTurn = (player) => {
console.log('Turn: ' + player);
prompt.start();
prompt.get(['position'], function (err, result) {
    if (isValid(result.position) === true) {
        populateBoard(result.position, player);
        logBoard();
        if (checkWin(player) === true) {
            console.log('Winner Winner!');
            return;
        }
        if (checkTie() === true) {
            console.log('Tie Game');
            return;
        }
        if (player === 'X') {
            playTurn('O');
        } else {
            playTurn('X');
        }
    } else {
        console.log('incorrect input please try again...');
        playTurn(player);
    }
});
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

