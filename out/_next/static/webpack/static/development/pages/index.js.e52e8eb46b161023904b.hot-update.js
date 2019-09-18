webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/game/tiles/Tile/index.tsx":
/*!**************************************************!*\
  !*** ./src/components/game/tiles/Tile/index.tsx ***!
  \**************************************************/
/*! exports provided: Tile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tile", function() { return Tile; });
/* harmony import */ var antd_lib_typography_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/typography/style/css */ "./node_modules/antd/lib/typography/style/css.js");
/* harmony import */ var antd_lib_typography_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_typography_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_typography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/typography */ "./node_modules/antd/lib/typography/index.js");
/* harmony import */ var antd_lib_typography__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_typography__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _core_hoc_WithoutTextSelection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/hoc/WithoutTextSelection */ "./src/components/core/hoc/WithoutTextSelection/index.tsx");
/* harmony import */ var _layout_Center__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../layout/Center */ "./src/layout/Center/index.tsx");


var _jsxFileName = "/Users/tianxianggao/Desktop/react-2048/src/components/game/tiles/Tile/index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



var Title = antd_lib_typography__WEBPACK_IMPORTED_MODULE_1___default.a.Title;
var DefaultTile = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Tile__DefaultTile",
  componentId: "njt9mx-0"
})(["height:100%;width:100%;text-align:center;"]);
var DarkTile = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(DefaultTile).withConfig({
  displayName: "Tile__DarkTile",
  componentId: "njt9mx-1"
})(["background:grey;"]);
var Tile = function Tile(_ref) {
  var color = _ref.color,
      children = _ref.children;
  var tile = DefaultTile;

  switch (color) {
    case 'dark':
      tile = DarkTile;
      break;
  }

  var StyledTile = Object(_core_hoc_WithoutTextSelection__WEBPACK_IMPORTED_MODULE_4__["default"])(tile);
  return __jsx(StyledTile, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx(_layout_Center__WEBPACK_IMPORTED_MODULE_5__["default"], {
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
  }, children)));
};

/***/ })

})
//# sourceMappingURL=index.js.e52e8eb46b161023904b.hot-update.js.map