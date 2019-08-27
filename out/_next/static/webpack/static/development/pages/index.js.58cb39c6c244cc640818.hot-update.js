webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/redux/actions/game.action.ts":
/*!******************************************!*\
  !*** ./src/redux/actions/game.action.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reducers_game_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../reducers/game.reducer */ "./src/redux/reducers/game.reducer.ts");
/* harmony import */ var _services_game_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/game.service */ "./src/services/game.service.ts");



function shiftBoard(board, shift) {
  var newBoard = Object(_services_game_service__WEBPACK_IMPORTED_MODULE_1__["clone"])(board);
  Object(_services_game_service__WEBPACK_IMPORTED_MODULE_1__["propagate"])(newBoard, shift);
  return {
    type: _reducers_game_reducer__WEBPACK_IMPORTED_MODULE_0__["ACTIONS"].SET_BOARD,
    body: {
      board: newBoard,
      newCell: null
    }
  };
}

function generateRandomCell(board, val) {
  var newBoard = Object(_services_game_service__WEBPACK_IMPORTED_MODULE_1__["clone"])(board);
  var newCells = Object(_services_game_service__WEBPACK_IMPORTED_MODULE_1__["addRandomCell"])(newBoard, val);
  return {
    type: _reducers_game_reducer__WEBPACK_IMPORTED_MODULE_0__["ACTIONS"].SET_BOARD,
    body: {
      board: newBoard,
      newCell: newCells
    }
  };
}

function resetBoard() {
  return {
    type: _reducers_game_reducer__WEBPACK_IMPORTED_MODULE_0__["ACTIONS"].RESET_BOARD
  };
}

function initialize(game) {
  return {
    type: _reducers_game_reducer__WEBPACK_IMPORTED_MODULE_0__["ACTIONS"].INITIALIZE,
    body: game
  };
}

/* harmony default export */ __webpack_exports__["default"] = ({
  shiftBoard: shiftBoard,
  generateRandomCell: generateRandomCell,
  resetBoard: resetBoard,
  initialize: initialize
});

/***/ })

})
//# sourceMappingURL=index.js.58cb39c6c244cc640818.hot-update.js.map