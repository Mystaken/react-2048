webpackHotUpdate("static/development/pages/index.js",{

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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var antd_lib_typography_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/typography/style/css */ "./node_modules/antd/lib/typography/style/css.js");
/* harmony import */ var antd_lib_typography_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_typography_style_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/typography */ "./node_modules/antd/lib/typography/index.js");
/* harmony import */ var antd_lib_typography__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_typography__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _core_hoc_WithoutTextSelection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/hoc/WithoutTextSelection */ "./src/components/core/hoc/WithoutTextSelection/index.tsx");
/* harmony import */ var _layout_Center__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../layout/Center */ "./src/layout/Center/index.tsx");
/* harmony import */ var _TileText__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../TileText */ "./src/components/game/tiles/TileText/index.tsx");




var _jsxFileName = "/Users/tianxianggao/Desktop/react-2048/src/components/game/tiles/Tile/index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;




var Title = antd_lib_typography__WEBPACK_IMPORTED_MODULE_3___default.a.Title;
var DefaultTile = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "Tile__DefaultTile",
  componentId: "njt9mx-0"
})(["height:100%;width:100%;text-align:center;"]);
var DarkTile = function DarkTile(_ref) {
  var cellNum = _ref.cellNum;
  var backgroundColor = 'white';

  if (cellNum >= 2048) {
    backgroundColor = 'black';
  } else if (cellNum >= 1024) {
    backgroundColor = '1a1a1a';
  } else if (cellNum >= 512) {
    backgroundColor = '333333';
  } else if (cellNum >= 256) {
    backgroundColor = '#4d4d4d';
  } else if (cellNum >= 128) {
    backgroundColor = '#808080';
  } else if (cellNum >= 64) {
    backgroundColor = '#8c8c8c';
  } else if (cellNum >= 32) {
    backgroundColor = '#a6a6a6';
  } else if (cellNum >= 16) {
    backgroundColor = '#b3b3b3';
  } else if (cellNum >= 8) {
    backgroundColor = '#cccccc';
  } else if (cellNum >= 4) {
    backgroundColor = '#d9d9d9';
  } else if (cellNum >= 2) {
    backgroundColor = '#f2f2f2';
  }

  var textColor = 'black';

  if (cellNum >= 128) {
    textColor = 'white';
  }

  var DarkTile = Object(styled_components__WEBPACK_IMPORTED_MODULE_5__["default"])(DefaultTile).withConfig({
    displayName: "Tile__DarkTile",
    componentId: "njt9mx-1"
  })(["background:", ";"], backgroundColor);
  var StyledTile = Object(_core_hoc_WithoutTextSelection__WEBPACK_IMPORTED_MODULE_6__["default"])(DarkTile);
  return __jsx(StyledTile, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx(_layout_Center__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, __jsx(_TileText__WEBPACK_IMPORTED_MODULE_8__["default"], {
    color: textColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, cellNum)));
};
var Tile = function Tile(_ref2) {
  var color = _ref2.color,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref2, ["color"]);

  switch (color) {
    case 'dark':
      return __jsx(DarkTile, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }));

    default:
  }

  var StyledTile = Object(_core_hoc_WithoutTextSelection__WEBPACK_IMPORTED_MODULE_6__["default"])(DefaultTile);
  return __jsx(StyledTile, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, __jsx(_layout_Center__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, __jsx(Title, {
    level: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, props.cellNum)));
};

/***/ })

})
//# sourceMappingURL=index.js.8bdba09233f8b61fd530.hot-update.js.map