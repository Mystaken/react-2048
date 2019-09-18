webpackHotUpdate("static/development/pages/index.js",{

/***/ "./node_modules/antd/lib/_util/resizeObserver.js":
false,

/***/ "./node_modules/antd/lib/_util/styleChecker.js":
false,

/***/ "./node_modules/antd/lib/_util/transButton.js":
false,

/***/ "./node_modules/antd/lib/input/TextArea.js":
false,

/***/ "./node_modules/antd/lib/input/calculateNodeHeight.js":
false,

/***/ "./node_modules/antd/lib/input/style/css.js":
false,

/***/ "./node_modules/antd/lib/tooltip/index.js":
false,

/***/ "./node_modules/antd/lib/tooltip/placements.js":
false,

/***/ "./node_modules/antd/lib/tooltip/style/css.js":
false,

/***/ "./node_modules/antd/lib/typography/Base.js":
false,

/***/ "./node_modules/antd/lib/typography/Editable.js":
false,

/***/ "./node_modules/antd/lib/typography/Paragraph.js":
false,

/***/ "./node_modules/antd/lib/typography/Text.js":
false,

/***/ "./node_modules/antd/lib/typography/Title.js":
false,

/***/ "./node_modules/antd/lib/typography/Typography.js":
false,

/***/ "./node_modules/antd/lib/typography/index.js":
false,

/***/ "./node_modules/antd/lib/typography/style/css.js":
false,

/***/ "./node_modules/antd/lib/typography/util.js":
false,

/***/ "./node_modules/copy-to-clipboard/index.js":
false,

/***/ "./node_modules/dom-align/dist-web/index.js":
false,

/***/ "./node_modules/rc-align/es/Align.js":
false,

/***/ "./node_modules/rc-align/es/index.js":
false,

/***/ "./node_modules/rc-align/es/util.js":
false,

/***/ "./node_modules/rc-tooltip/es/Content.js":
false,

/***/ "./node_modules/rc-tooltip/es/Tooltip.js":
false,

/***/ "./node_modules/rc-tooltip/es/index.js":
false,

/***/ "./node_modules/rc-tooltip/es/placements.js":
false,

/***/ "./node_modules/rc-tooltip/lib/placements.js":
false,

/***/ "./node_modules/rc-trigger/es/LazyRenderBox.js":
false,

/***/ "./node_modules/rc-trigger/es/Popup.js":
false,

/***/ "./node_modules/rc-trigger/es/PopupInner.js":
false,

/***/ "./node_modules/rc-trigger/es/index.js":
false,

/***/ "./node_modules/rc-trigger/es/utils.js":
false,

/***/ "./node_modules/rc-util/es/Dom/addEventListener.js":
false,

/***/ "./node_modules/rc-util/lib/Children/toArray.js":
false,

/***/ "./node_modules/rc-util/lib/KeyCode.js":
false,

/***/ "./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js":
false,

/***/ "./node_modules/toggle-selection/index.js":
false,

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
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, cell)));
    }));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Board);

/***/ })

})
//# sourceMappingURL=index.js.2beaefb5cf00c81d0811.hot-update.js.map