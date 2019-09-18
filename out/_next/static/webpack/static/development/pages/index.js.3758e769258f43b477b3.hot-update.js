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




var _jsxFileName = "/Users/tianxianggao/Desktop/react-2048/src/components/game/tiles/Tile/index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;



var Title = antd_lib_typography__WEBPACK_IMPORTED_MODULE_3___default.a.Title;
var DefaultTile = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "Tile__DefaultTile",
  componentId: "njt9mx-0"
})(["height:100%;width:100%;text-align:center;"]);
var DarkTile = function DarkTile(_ref) {
  var cellNum = _ref.cellNum;
  var DarkTile = Object(styled_components__WEBPACK_IMPORTED_MODULE_5__["default"])(DefaultTile).withConfig({
    displayName: "Tile__DarkTile",
    componentId: "njt9mx-1"
  })(["background:#18202b;"]);
  var StyledTile = Object(_core_hoc_WithoutTextSelection__WEBPACK_IMPORTED_MODULE_6__["default"])(DarkTile);
  return __jsx(StyledTile, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx(_layout_Center__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx(Title, {
    level: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
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
          lineNumber: 32
        },
        __self: this
      }));

    default:
  }

  var StyledTile = Object(_core_hoc_WithoutTextSelection__WEBPACK_IMPORTED_MODULE_6__["default"])(DefaultTile);
  return __jsx(StyledTile, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx(_layout_Center__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx(Title, {
    level: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, props.cellNum)));
};

/***/ })

})
//# sourceMappingURL=index.js.3758e769258f43b477b3.hot-update.js.map