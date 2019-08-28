webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./src/services/game.service.ts":
/*!**************************************!*\
  !*** ./src/services/game.service.ts ***!
  \**************************************/
/*! exports provided: generateEmptyBoard, isValidBoard, propagateLine, getHeight, getWidth, propagateGrid, propagate, clone, addRandomCell, hasValue, canMove */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateEmptyBoard", function() { return generateEmptyBoard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidBoard", function() { return isValidBoard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "propagateLine", function() { return propagateLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHeight", function() { return getHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWidth", function() { return getWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "propagateGrid", function() { return propagateGrid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "propagate", function() { return propagate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clone", function() { return clone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addRandomCell", function() { return addRandomCell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasValue", function() { return hasValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canMove", function() { return canMove; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");

function generateEmptyBoard(width, height) {
  var value = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  return Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(Array(height)).map(function (_) {
    return new Array(width).fill(value);
  });
}
function isValidBoard(width, height, board) {
  var widthValid = board.length === width;
  var heightValid = board.every(function (r) {
    return r.length === height;
  });
  return widthValid && heightValid;
}

function merge(getPoint, setPoint, from, to) {
  setPoint(to, getPoint(from) + getPoint(to));
  setPoint(from, 0);
}

function mergeFirst(getPoint, setPoint, length) {
  for (var i = 0; i < length - 1; i++) {
    if (getPoint(i) !== 0 && getPoint(i) === getPoint(i + 1)) {
      merge(getPoint, setPoint, i, i + 1);
      return true;
    }
  }

  return false;
}

function push(getPoint, setPoint, length, startIdx) {
  var curr = startIdx + 1;
  if (curr >= length || getPoint(curr) !== 0) return false;

  while (curr < length - 1 && getPoint(curr + 1) === 0) {
    curr++;
  }

  merge(getPoint, setPoint, startIdx, curr);
  return true;
}

function propagateLine(getPoint, setPoint, length) {
  var moved = false;

  for (var i = length - 1; i >= 0; i--) {
    if (getPoint(i) !== 0) {
      moved = push(getPoint, setPoint, length, i) || moved;
    }
  }

  moved = mergeFirst(getPoint, setPoint, length) || moved;
  return moved;
}
function getHeight(board) {
  if (board.length === 0) {
    return 0;
  } else {
    return board[0].length;
  }
}
function getWidth(board) {
  return board.length;
}
function propagateGrid(getLine, setLine, numLines, lineLength) {
  var moved = false;

  for (var i = 0; i < numLines; i++) {
    moved = propagateLine(getLine(i), setLine(i), lineLength) || moved;
  }

  return moved;
}

function getPropagateLineFunc(board, shift) {
  var height = getHeight(board);
  var width = getWidth(board);

  switch (shift) {
    case 'up':
      return {
        getLine: function getLine(lineIdx) {
          return function (coord) {
            return board[height - coord - 1][lineIdx];
          };
        },
        setLine: function setLine(lineIdx) {
          return function (coord, value) {
            board[height - coord - 1][lineIdx] = value;
          };
        },
        numLines: width,
        lineLength: height
      };

    case 'down':
      return {
        getLine: function getLine(lineIdx) {
          return function (coord) {
            return board[coord][lineIdx];
          };
        },
        setLine: function setLine(lineIdx) {
          return function (coord, value) {
            board[coord][lineIdx] = value;
          };
        },
        numLines: width,
        lineLength: height
      };

    case 'left':
      return {
        getLine: function getLine(lineIdx) {
          return function (coord) {
            return board[lineIdx][width - coord - 1];
          };
        },
        setLine: function setLine(lineIdx) {
          return function (coord, value) {
            board[lineIdx][width - coord - 1] = value;
          };
        },
        numLines: height,
        lineLength: width
      };

    case 'right':
      return {
        getLine: function getLine(lineIdx) {
          return function (coord) {
            return board[lineIdx][coord];
          };
        },
        setLine: function setLine(lineIdx) {
          return function (coord, value) {
            board[lineIdx][coord] = value;
          };
        },
        numLines: height,
        lineLength: width
      };
  }
}

function propagate(board, shift) {
  var boardFuncs = getPropagateLineFunc(board, shift);
  return propagateGrid(boardFuncs.getLine, boardFuncs.setLine, boardFuncs.numLines, boardFuncs.lineLength);
}
function clone(board) {
  return board.map(function (row) {
    return Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(row);
  });
}
function addRandomCell(board, value) {
  var freeCells = [];
  var height = getHeight(board);
  var width = getWidth(board);

  for (var i = 0; i < width; i++) {
    for (var j = 0; j < height; j++) {
      if (board[i][j] === 0) {
        freeCells.push([i, j]);
      }
    }
  }

  if (freeCells.length === 0) return null;
  var randPoint = freeCells[Math.floor(Math.random() * freeCells.length)];
  board[randPoint[0]][randPoint[1]] = value;
  return [randPoint[0], randPoint[1]];
}
function hasValue(board, fn) {
  return board.some(function (row) {
    return row.some(function (cell) {
      return fn(cell);
    });
  });
}
function canMove(board) {
  var cloneBoard = clone(board);
  var shifts = ['up', 'down', 'left', 'right'];
  console.log(board);

  for (var _i = 0, _shifts = shifts; _i < _shifts.length; _i++) {
    var shift = _shifts[_i];

    if (!propagate(cloneBoard, shift)) {
      return true;
    }
  }

  return hasValue(cloneBoard, function (value) {
    return value === 0;
  });
}

/***/ })

})
//# sourceMappingURL=_app.js.cb05ff443934add906b7.hot-update.js.map