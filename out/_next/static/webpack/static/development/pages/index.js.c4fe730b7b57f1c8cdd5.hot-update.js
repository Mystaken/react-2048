webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/game/Board/index.tsx":
/*!*********************************************!*\
  !*** ./src/components/game/Board/index.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_col_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/col/style/css */ "./node_modules/antd/lib/col/style/css.js");
/* harmony import */ var antd_lib_col_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/col */ "./node_modules/antd/lib/col/index.js");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_row_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/row/style/css */ "./node_modules/antd/lib/row/style/css.js");
/* harmony import */ var antd_lib_row_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row_style_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/row */ "./node_modules/antd/lib/row/index.js");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var antd_lib_typography_style_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/typography/style/css */ "./node_modules/antd/lib/typography/style/css.js");
/* harmony import */ var antd_lib_typography_style_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_typography_style_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var antd_lib_typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/lib/typography */ "./node_modules/antd/lib/typography/index.js");
/* harmony import */ var antd_lib_typography__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(antd_lib_typography__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _core_Anime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../core/Anime */ "./src/components/core/Anime/index.tsx");
/* harmony import */ var _core_Square__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../core/Square */ "./src/components/core/Square/index.tsx");
/* harmony import */ var _tiles_Tile__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../tiles/Tile */ "./src/components/game/tiles/Tile/index.tsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_selectors_game_selector__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../redux/selectors/game.selector */ "./src/redux/selectors/game.selector.ts");









var _jsxFileName = "/Users/tianxianggao/Desktop/2048/src/components/game/Board/index.tsx";







var Title = antd_lib_typography__WEBPACK_IMPORTED_MODULE_8___default.a.Title;

var Board = function Board(_ref) {
  var shift = _ref.shift,
      onShiftEnd = _ref.onShiftEnd;
  var game = Object(react_redux__WEBPACK_IMPORTED_MODULE_13__["useSelector"])(_redux_selectors_game_selector__WEBPACK_IMPORTED_MODULE_14__["$game"]);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])({
    shift: null,
    completed: false
  }),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_6__["default"])(_useState, 2),
      groupShift = _useState2[0],
      setGroupShift = _useState2[1];

  function handleShiftComplete(a) {
    if (a.completed && !groupShift.completed) {
      onShiftEnd && shift && onShiftEnd(shift);
      setGroupShift(function (gs) {
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_5__["default"])({}, gs, {
          completed: true
        });
      });
      groupShift.completed = true;
    }
  }

  Object(react__WEBPACK_IMPORTED_MODULE_9__["useEffect"])(function () {
    if (shift && groupShift.completed) {
      setGroupShift({
        shift: shift,
        completed: false
      });
    }
  }, [shift]);

  function generateAnimeProps(shift, x, y) {
    if (!shift || y === 0 && shift === 'up' || y === 3 && shift === 'down' || x === 0 && shift === 'left' || x === 3 && shift === 'right') {
      return {
        restart: true
      };
    }

    var translate = {};

    switch (shift) {
      case 'up':
        translate = {
          translateY: '-100%'
        };
        break;

      case 'down':
        translate = {
          translateY: '100%'
        };
        break;

      case 'right':
        translate = {
          translateX: '100%'
        };
        break;

      case 'left':
        translate = {
          translateX: '-100%'
        };
        break;
    }

    return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_5__["default"])({}, translate, {
      easing: 'easeInOutCirc',
      zIndex: 3,
      duration: 200
    });
  }

  return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_1___default.a, {
    xs: 24,
    sm: 24,
    md: 20,
    lg: 16,
    xl: 12,
    xxl: 8,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, game.board.map(function (row, y) {
    return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_3___default.a, {
      gutter: 0,
      type: "flex",
      justify: "space-around",
      key: y,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }, row.map(function (cell, x) {
      var animeProps = generateAnimeProps(shift, x, y);
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_core_Square__WEBPACK_IMPORTED_MODULE_11__["default"], {
        key: x,
        style: {
          border: '1px solid black',
          width: "".concat(100 / game.width, "%")
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_core_Anime__WEBPACK_IMPORTED_MODULE_10__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__["default"])({
        complete: handleShiftComplete
      }, animeProps, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tiles_Tile__WEBPACK_IMPORTED_MODULE_12__["Tile"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(Title, {
        level: 1,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, cell))));
    }));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Board);

/***/ })

})
//# sourceMappingURL=index.js.c4fe730b7b57f1c8cdd5.hot-update.js.map