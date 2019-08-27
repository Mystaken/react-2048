webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./src/redux/reducers/game.reducer.ts":
/*!********************************************!*\
  !*** ./src/redux/reducers/game.reducer.ts ***!
  \********************************************/
/*! exports provided: ACTIONS, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACTIONS", function() { return ACTIONS; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _services_game_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/game.service */ "./src/services/game.service.ts");


var ACTIONS = {
  SET_BOARD: 'SET_BOARD',
  RESET_BOARD: 'RESET_BOARD',
  INITIALIZE: 'INITIALIZE'
};
var initialState = {
  game: {
    height: 4,
    width: 4,
    board: Object(_services_game_service__WEBPACK_IMPORTED_MODULE_1__["generateEmptyBoard"])(4, 4)
  },
  newCell: null
};

var gameReducer = function gameReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case ACTIONS.SET_BOARD:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        game: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state.game, {
          board: action.body.board
        }),
        newCell: action.body.newCell || state.newCell
      });

    case ACTIONS.RESET_BOARD:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, initialState);

    case ACTIONS.INITIALIZE:
      return {
        game: action.body,
        newCell: null
      };

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (gameReducer);

/***/ })

})
//# sourceMappingURL=_app.js.994b277223d019084e2e.hot-update.js.map