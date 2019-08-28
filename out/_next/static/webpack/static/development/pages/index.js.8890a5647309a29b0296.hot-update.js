webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/game/Game/index.tsx":
/*!********************************************!*\
  !*** ./src/components/game/Game/index.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layout_Center__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../layout/Center */ "./src/layout/Center/index.tsx");
/* harmony import */ var _Board__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Board */ "./src/components/game/Board/index.tsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_actions_game_action__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../redux/actions/game.action */ "./src/redux/actions/game.action.ts");
/* harmony import */ var _redux_selectors_game_selector__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../redux/selectors/game.selector */ "./src/redux/selectors/game.selector.ts");

var _jsxFileName = "/Users/tianxianggao/Desktop/2048/src/components/game/Game/index.tsx";







 // import { Modal } from 'antd';

var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "Game__Wrapper",
  componentId: "n7ip3s-0"
})(["{padding-bottom:10vh;height:100%;}"]);
var MOUSE_DIST_THRESHOLD = 50;

var Game = function Game() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      shift = _useState2[0],
      setShift = _useState2[1];

  var board = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(_redux_selectors_game_selector__WEBPACK_IMPORTED_MODULE_7__["$board"]); // const lost = useSelector($lost);
  // const won = useSelector($won);

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useDispatch"])();
  var mouseStart = {
    x: 0,
    y: 0
  };

  function onKeyDown(e) {
    if (!shift) {
      switch (e.key) {
        case 'ArrowUp':
          setShift('up');
          break;

        case 'ArrowDown':
          setShift('down');
          break;

        case 'ArrowLeft':
          setShift('left');
          break;

        case 'ArrowRight':
          setShift('right');
          break;
      }
    }
  }

  function onMouseUp(e) {
    var diffX = e.screenX - mouseStart.x;
    var diffY = e.screenY - mouseStart.y;
    if (shift) return;

    if (Math.abs(diffY) * 1.3 > Math.abs(diffX)) {
      if (diffY > MOUSE_DIST_THRESHOLD) {
        setShift('down');
      } else if (diffY < -MOUSE_DIST_THRESHOLD) {
        setShift('up');
      }
    } else {
      if (diffX > MOUSE_DIST_THRESHOLD) {
        setShift('right');
      } else if (diffX < 0) {
        setShift('left');
      }
    }
  }

  function onMouseDown(e) {
    mouseStart = {
      x: e.screenX,
      y: e.screenY
    };
  }

  function onShiftEnd(shift) {
    setShift(null);
    var shiftAction = _redux_actions_game_action__WEBPACK_IMPORTED_MODULE_6__["default"].shiftBoard(board, shift);
    dispatch(shiftAction);
    dispatch(_redux_actions_game_action__WEBPACK_IMPORTED_MODULE_6__["default"].generateRandomCell(shiftAction.body.board, 2));
  } // useEffect(() => {
  //   if (won) {
  //     Modal.success({
  //       title: 'You won!'
  //     });
  //   }
  // }, [won]);
  // useEffect(() => {
  //   if (lost) {
  //     Modal.error({
  //       title: 'You lost!'
  //     });
  //   }
  // }, [lost]);


  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Wrapper, {
    onKeyDown: onKeyDown,
    onMouseDown: onMouseDown,
    onMouseUp: onMouseUp,
    tabIndex: 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_layout_Center__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Board__WEBPACK_IMPORTED_MODULE_3__["default"], {
    shift: shift,
    onShiftEnd: onShiftEnd,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Game);

/***/ })

})
//# sourceMappingURL=index.js.8890a5647309a29b0296.hot-update.js.map