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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _core_Anime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/Anime */ "./src/components/core/Anime/index.tsx");
/* harmony import */ var _core_Square__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/Square */ "./src/components/core/Square/index.tsx");
/* harmony import */ var _tiles_Tile__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../tiles/Tile */ "./src/components/game/tiles/Tile/index.tsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_selectors_game_selector__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../redux/selectors/game.selector */ "./src/redux/selectors/game.selector.ts");






var _jsxFileName = "/Users/tianxianggao/Desktop/react-2048/src/components/game/Board/index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;







var Board = function Board(_ref) {
  var shift = _ref.shift,
      onShiftEnd = _ref.onShiftEnd;
  var game = Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["useSelector"])(_redux_selectors_game_selector__WEBPACK_IMPORTED_MODULE_11__["$game"]);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])({
    shift: null,
    completed: false
  }),
      groupShift = _useState[0],
      setGroupShift = _useState[1];

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

  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(function () {
    if (shift && groupShift.completed) {
      setGroupShift({
        shift: shift,
        completed: false
      });
    }
  }, [shift]);

  function generateAnimeProps(shift, x, y) {
    if (!shift || y === 0 && shift === 'up' || y >= game.height - 1 && shift === 'down' || x === 0 && shift === 'left' || x >= game.width - 1 && shift === 'right') {
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

  return __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_1___default.a, {
    xs: 24,
    sm: 24,
    md: 20,
    lg: 16,
    xl: 12,
    xxl: 8,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, game.board.map(function (row, y) {
    return __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_3___default.a, {
      gutter: 0,
      type: "flex",
      justify: "space-around",
      key: y,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, row.map(function (cell, x) {
      var animeProps = generateAnimeProps(shift, x, y);
      return __jsx(_core_Square__WEBPACK_IMPORTED_MODULE_8__["default"], {
        key: x,
        style: {
          border: '1px solid black',
          width: "".concat(100 / game.width, "%")
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, __jsx(_core_Anime__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__["default"])({
        complete: handleShiftComplete
      }, animeProps, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }), __jsx(_tiles_Tile__WEBPACK_IMPORTED_MODULE_9__["Tile"], {
        color: "dark",
        cellNum: cell,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      })));
    }));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Board);

/***/ }),

/***/ "./src/components/game/tiles/Tile/index.tsx":
/*!**************************************************!*\
  !*** ./src/components/game/tiles/Tile/index.tsx ***!
  \**************************************************/
/*! exports provided: DarkTile, Tile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DarkTile", function() { return DarkTile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tile", function() { return Tile; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var antd_lib_typography_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/typography/style/css */ "./node_modules/antd/lib/typography/style/css.js");
/* harmony import */ var antd_lib_typography_style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_typography_style_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/typography */ "./node_modules/antd/lib/typography/index.js");
/* harmony import */ var antd_lib_typography__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_typography__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _core_hoc_WithoutTextSelection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/hoc/WithoutTextSelection */ "./src/components/core/hoc/WithoutTextSelection/index.tsx");
/* harmony import */ var _layout_Center__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../layout/Center */ "./src/layout/Center/index.tsx");



var _jsxFileName = "/Users/tianxianggao/Desktop/react-2048/src/components/game/tiles/Tile/index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;



var Title = antd_lib_typography__WEBPACK_IMPORTED_MODULE_2___default.a.Title;
var DefaultTile = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "Tile__DefaultTile",
  componentId: "njt9mx-0"
})(["height:100%;width:100%;text-align:center;"]);
var DarkTile = function DarkTile(_ref) {
  var cellNum = _ref.cellNum;
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  });
};
var Tile = function Tile(color) {
  for (var _len = arguments.length, props = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    props[_key - 1] = arguments[_key];
  }

  switch (color) {
    case 'dark':
      return __jsx(DarkTile, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }));

    default:
  }

  var StyledTile = Object(_core_hoc_WithoutTextSelection__WEBPACK_IMPORTED_MODULE_5__["default"])(DefaultTile);
  return __jsx(StyledTile, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx(_layout_Center__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx(Title, {
    level: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, props.cellNum)));
};

/***/ })

})
//# sourceMappingURL=index.js.df18462b70c11a57f407.hot-update.js.map