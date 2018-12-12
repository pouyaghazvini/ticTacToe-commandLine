var board = {
  0: ' ',
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

const allPossibleCombinations = [
  [1, 2, 3], [4, 5, 6], [7, 8, 9], 
  [1, 4, 7], [2, 5, 8], [3, 6, 9], 
  [1, 5, 9], [3, 5, 7]
];