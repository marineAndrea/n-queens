
/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/
*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

window.findNRooksSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {

  var solutionCount = 0;
  var board = new Board({n:n});

  var checkRow = function(row) {

    // base case
    if (row === n) {
      // increment solutionCount
      solutionCount++;
      return;
    }

    // algorithm and recursion

    // loop through the columns in the row
    for (var col = 0; col < n; col++) {
      // place the piece
      board.togglePiece(row, col);
      // ask if conflict
      if (board.hasAnyRooksConflicts()) {
      // if there is a conflict
        // remove piece
        board.togglePiece(row, col);
        // if there is not a conflict
      } else {
        // call checkRow with row+1
        checkRow(row+1);
        // remove piece
        board.togglePiece(row, col);
      }
    }
  }

  checkRow(0);

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined;
  
  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = 0;
  var arr = [];

  var board = new Board({n:n});

  var checkRow = function(row) {

    // base case
    if (row === n) {
      // increment solutionCount
      solutionCount++;
      arr = board.rows().map(function(row){
        return row.slice();
      });
      return;
    }

    // algorithm and recursion

    // loop through the columns in the row
    for (var col = 0; col < n; col++) {
      // place the piece
      board.togglePiece(row, col);
      // ask if conflict
      if (board.hasAnyQueensConflicts()) {
      // if there is a conflict
        // remove piece
        board.togglePiece(row, col);
        // if there is not a conflict
      } else {
        // call checkRow with row+1
        checkRow(row+1);
        // remove piece
        board.togglePiece(row, col);
      }
    }
  }

  checkRow(0);

  // console.log(arr);
  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};