/** Connect Four
 *
 * Player 1 and 2 alternate turns. On each turn, a piece is dropped down a
 * column until a player gets four-in-a-row (horiz, vert, or diag) or until
 * board fills (tie)
 */

const WIDTH = 7;
const HEIGHT = 6;

let currPlayer = 1; // active player: 1 or 2
let board = []; // array of rows, each row is array of cells  (board[y][x])

/** makeBoard: create in-JS board structure:
 *   board = array of rows, each row is array of cells  (board[y][x])
 */



/** makeHtmlBoard: make HTML table and row of column tops. */


/** findSpotForCol: given column x, return top empty y (null if filled) */


/** placeInTable: update DOM to place piece into HTML table of board */



/** endGame: announce game end */



/** handleClick: handle click of column top to play piece */



/** checkForWin: check board cell-by-cell for "does a win start here?" */



// makeBoard();
// makeHtmlBoard();
