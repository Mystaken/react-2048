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
/* harmony import */ var antd_lib_typography_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/typography/style/css */ "./node_modules/antd/lib/typography/style/css.js");
/* harmony import */ var antd_lib_typography_style_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_typography_style_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_lib_typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/typography */ "./node_modules/antd/lib/typography/index.js");
/* harmony import */ var antd_lib_typography__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_typography__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _core_Anime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/Anime */ "./src/components/core/Anime/index.tsx");
/* harmony import */ var _core_Square__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../core/Square */ "./src/components/core/Square/index.tsx");
/* harmony import */ var _tiles_Tile__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../tiles/Tile */ "./src/components/game/tiles/Tile/index.tsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_selectors_game_selector__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../redux/selectors/game.selector */ "./src/redux/selectors/game.selector.ts");








var _jsxFileName = "/Users/tianxianggao/Desktop/react-2048/src/components/game/Board/index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;






var Title = antd_lib_typography__WEBPACK_IMPORTED_MODULE_7___default.a.Title;

var Board = function Board(_ref) {
  var shift = _ref.shift,
      onShiftEnd = _ref.onShiftEnd;
  var game = Object(react_redux__WEBPACK_IMPORTED_MODULE_12__["useSelector"])(_redux_selectors_game_selector__WEBPACK_IMPORTED_MODULE_13__["$game"]);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])({
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

  Object(react__WEBPACK_IMPORTED_MODULE_8__["useEffect"])(function () {
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
      lineNumber: 76
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
        lineNumber: 78
      },
      __self: this
    }, row.map(function (cell, x) {
      var animeProps = generateAnimeProps(shift, x, y);
      return __jsx(_core_Square__WEBPACK_IMPORTED_MODULE_10__["default"], {
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
      }, __jsx(_core_Anime__WEBPACK_IMPORTED_MODULE_9__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__["default"])({
        complete: handleShiftComplete
      }, animeProps, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }), __jsx(_tiles_Tile__WEBPACK_IMPORTED_MODULE_11__["Tile"], {
        color: "dark",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, __jsx(Title, {
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

/***/ }),

/***/ "./src/components/game/tiles/Tile/index.tsx":
/*!**************************************************!*\
  !*** ./src/components/game/tiles/Tile/index.tsx ***!
  \**************************************************/
/*! exports provided: Tile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tile", function() { return Tile; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _core_hoc_WithoutTextSelection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/hoc/WithoutTextSelection */ "./src/components/core/hoc/WithoutTextSelection/index.tsx");
/* harmony import */ var _layout_Center__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../layout/Center */ "./src/layout/Center/index.tsx");
var _jsxFileName = "/Users/tianxianggao/Desktop/react-2048/src/components/game/tiles/Tile/index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var DefaultTile = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Tile__DefaultTile",
  componentId: "njt9mx-0"
})(["height:100%;width:100%;text-align:center;"]);
var DarkTile = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(DefaultTile).withConfig({
  displayName: "Tile__DarkTile",
  componentId: "njt9mx-1"
})(["background:black;"]);
var Tile = function Tile(_ref) {
  var color = _ref.color,
      children = _ref.children;
  var tile = DefaultTile;

  switch (color) {
    case 'dark':
      tile = DarkTile;
      break;
  }

  var StyledTile = Object(_core_hoc_WithoutTextSelection__WEBPACK_IMPORTED_MODULE_2__["default"])(tile);
  return __jsx(StyledTile, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx(_layout_Center__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, children));
};

/***/ })

})
//# sourceMappingURL=index.js.607f0ebecd92e54ba9d2.hot-update.js.map