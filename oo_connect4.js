class game{
    constructor(height, width, p1, p2){
        this.height = height;
        this.width = width;
        this.players = [p1,p2]
        this.currPlayer = p1
        this.makeBoard();
        this.makeHtmlBoard();
        this.gameOver = false;
    }

    makeBoard() {
        this.board = []
        for (let y = 0; y < this.height; y++) {
          board.push(Array.from({ length: this.width }));
      
        }
        console.log(board)
      }

    makeHtmlBoard() {
        const board = document.getElementById('board');
        board.innerHTML = '';
        // make column tops (clickable area for adding a piece to that column)
        const top = document.createElement('tr');
        top.setAttribute('id', 'column-top');

        this.handleGameClick = this.handleClick.bind(this);

        top.addEventListener('click', this.handleGameClick);
      
        for (let x = 0; x < this.width; x++) {
          const headCell = document.createElement('td');
          headCell.setAttribute('id', x);
          top.append(headCell);
        }
      
        board.append(top);
      
        // make main part of board
        for (let y = 0; y < this.height; y++) {
          const row = document.createElement('tr');
      
          for (let x = 0; x < this.width; x++) {
            const cell = document.createElement('td');
            cell.setAttribute('id', `${y}-${x}`);
            row.append(cell);
          }
      
          board.append(row);
        }
      }
    findSpotForCol(x) {

        for (let y = this.height - 1; y >= 0; y--) {
          if (!board[y][x]) {
console.log(x,y)
            return y;
          }
        }
        return null;
      }
      
    placeInTable(y, x) {
        const piece = document.createElement('div');
        piece.classList.add('piece');
        piece.classList.add(`p${this.currPlayer}`);
        piece.style.top = -50 * (y + 2);
      
        const spot = document.getElementById(`${y}-${x}`);
        console.log(spot)
        spot.append(piece);

      }

    endGame(msg) {
        alert(msg);
        const top = document.querySelector('#column-top');
        top.removeEventListener('click', this.handleGameClick);
      }

    handleClick(evt) {
        // get x from ID of clicked cell
        const x = +evt.target.id;
      
        // get next spot in column (if none, ignore click)
        const y = this.findSpotForCol(x);
        if (y === null) {
          return;
        }
      
        // place piece in board and add to HTML table
        board[y][x] = this.currPlayer;
        console.log(y,x)
        this.placeInTable(y, x);
        
        // check for win
        if (this.checkForWin()) {
          this.gameOver = true;
          return this.endGame(`Player ${currPlayer} won!`);
        }
        
        // check for tie
        if (this.board.every(row => row.every(cell => cell))) {
          return this.endGame('Tie!');
        }
          
        // switch players
        this.currPlayer = this.currPlayer === this.players[0] ? this.players[1] : this.players[0];
      }
    
    checkForWin() {
        const _win = (cells) => {
          // Check four cells to see if they're all color of current player
          //  - cells: list of four (y, x) cells
          //  - returns true if all are legal coordinates & all match currPlayer
        cells.every(
            ([y, x]) =>
              y >= 0 &&
              y < this.height &&
              x >= 0 &&
              x < this.width &&
              this.board[y][x] === this.currPlayer
          );
            console.log(this.board[y][x])
        }
      
        for (let y = 0; y < this.height; y++) {
          for (let x = 0; x < this.width; x++) {
            // get "check list" of 4 cells (starting here) for each of the different
            // ways to win
            const horiz = [[y, x], [y, x + 1], [y, x + 2], [y, x + 3]];
            const vert = [[y, x], [y + 1, x], [y + 2, x], [y + 3, x]];
            const diagDR = [[y, x], [y + 1, x + 1], [y + 2, x + 2], [y + 3, x + 3]];
            const diagDL = [[y, x], [y + 1, x - 1], [y + 2, x - 2], [y + 3, x - 3]];
      
            // find winner (only checking each win-possibility as needed)
            if (_win(horiz) || _win(vert) || _win(diagDR) || _win(diagDL)) {
              return true;
            }
          }
        }
      }
}
class Player {
    constructor(color){
        this.color = color
    }
    }

  
new game(6,7)