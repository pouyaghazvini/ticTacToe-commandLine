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

