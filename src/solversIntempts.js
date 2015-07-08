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
  var board = new Board({n:n});
  var len = board.rows().length;
  var rows = board.rows();
  // loop through len (i)
  for (var i = 0; i < len; i++) {
    for (var j = 0; j < len; j++) {
      var piece = rows[i][j];
      if (piece === 0) {
        // toggle
        board.togglePiece(i, j);
        // if conflict
        if (board.hasAnyRooksConflicts()) {
          // untoggle
          board.togglePiece(i, j);
        }
      }
    };
  };
  return board.rows();
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other

window.countNRooksSolutions = function(n) {

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

/* Jeff's solution
window.countNRooksSolutions = function(n) {
  var solutionCount = 0;
  var solutionCatcher = []; //undefined
  var countRooks = 0;
  var board = new Board({n:n});
  var len = board.rows().length;
  var rows = board.rows();

  var checkBoard = function() {
    // loop through rows
    for (var row = 0; row < len; row++) {
      // loop through the columns
      for (var col = 0; col < len; col++) {
        if (rows[row][col] === 0) {
          // toggle piece if empty spot
          board.togglePiece(row, col);
          //if conflict, untoggle contradiction
          if(board.hasAnyRooksConflicts()) {
            board.togglePiece(row,col);
          } else {
            //if we've added a piece, and it doesn't cause a conflict
            countRooks++;
            if(countRooks>=n) {
              solutionCount++;

              solutionCatcher.push(jQuery.extend(true, {}, rows));
              board.togglePiece(row,col);
              countRooks--;
            }else {
              checkBoard();
              board.togglePiece(row,col);//we need to untoggle after
              countRooks--;              
            }

          }
        }
      }
    }
  };

  checkBoard();

  console.log(isEquivalent({}, {}));

  }
*/

/* Marine's attempt
window.countNRooksSolutions = function(n) {
  var board = new Board({n:n});
  var solutions = [board];
  var len = board.rows().length;
  for (var num = 0; num < solutions.length; num++) {

    for (var row = 0; row < len; row++) { // loop through rows

      for (var col = 0; col < len; col++) { // loop through columns !!!BEAWARE CONFLICT METHOD MIGHT NOT WORK
        // if no conflict
        if(!solutions[num].hasAnyRooksConflicts()) {
          // toggle
          var newBoard = solutions[num].togglePiece(i, j);
          // push in solutions
          solutions.push(newBoard);
          // untoggle
          solutions[num].togglePiece(i, j);
        } 
      }
      // remove incomplete solution that have been completed one step further

      solutions.shift();

      // loop through the beggining of the solutions array
      n--;
      // exit (do I need it);
      break;
    }
  }
  // console.log(solutions);
  var solutionCount = solutions.length;
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};
*/



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined;
  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

/*
Jeff solution (attempted)
window.findNQueensSolution = function(n) {
 var solution = undefined;
  var board = new Board({n:n});
  var counter = 0;

  var checkRow = function(row) {
    for (var col = 0; col < n; col++) {
      board.togglePiece(row, col);
      if (board.hasAnyQueensConflicts()) {
        board.togglePiece(row, col);
      } else {
        //when no conflict
        counter++;
        if (counter === n) {
          solution = jQuery.extend(true, {}, )
        }
        if(row<n) {
          checkRow(row+1);
          board.togglePiece(row,col);
          counter--;          
        }
      }
    }
  };
  
  for (var row = 0; row < n; row++) {
    checkRow(row);
  }

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));

  return solution;
  
};
*/
/* Marine's attempt
  var solution = undefined;
  var board = new Board({n:n});
  var len = n;
  var queenCount = 0;
  var start = 0;
  // var rows = board.rows();

  while (start < n) {
    for (var row = 0; row < len; row++) {
      for (var col = start; col < len; col++) {
        //toggle only if spot available
        if (board.rows[row][col]) {
          board.togglePiece(row, col);
        }
        // if board has conflicts, untoggle
        if(board.hasAnyQueensConflicts()) {
          board.togglePiece(row, col);
        } else { // else increment queencount
          queenCount++;
        }
      }
    }

    if (queenCount === n) {
      solution = board.rows()
      return solution;
    } else {
      start++;
    }
  }
  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return 0;
  */

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) { //need to take track of how many queens in the board
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
