webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/redux/selectors/game.selector.ts":
/*!**********************************************!*\
  !*** ./src/redux/selectors/game.selector.ts ***!
  \**********************************************/
/*! exports provided: $game, $board, $dimensions, $won, $lost */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$game", function() { return $game; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$board", function() { return $board; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$dimensions", function() { return $dimensions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$won", function() { return $won; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$lost", function() { return $lost; });
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reselect */ "./node_modules/reselect/lib/index.js");
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(reselect__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_game_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/game.service */ "./src/services/game.service.ts");


var $game = function $game(state) {
  return state.game.game;
};
var $board = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])($game, function (game) {
  return game.board;
});
var $dimensions = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])($game, function (_ref) {
  var height = _ref.height,
      width = _ref.width;
  return {
    height: height,
    width: width
  };
});
var $won = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])($board, function (board) {
  return Object(_services_game_service__WEBPACK_IMPORTED_MODULE_1__["hasValue"])(board, function (value) {
    return value >= 2048;
  });
});
var $lost = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])($board, function (board) {
  return !board;
} //!canMove(board)
);

/***/ })

})
//# sourceMappingURL=index.js.c1a247dfc4b5a8af925b.hot-update.js.map