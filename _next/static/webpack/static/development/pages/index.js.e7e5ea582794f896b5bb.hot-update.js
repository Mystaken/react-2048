webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/game/tiles/TileText/index.tsx":
/*!******************************************************!*\
  !*** ./src/components/game/tiles/TileText/index.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var antd_lib_typography_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/typography/style/css */ "./node_modules/antd/lib/typography/style/css.js");
/* harmony import */ var antd_lib_typography_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_typography_style_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/typography */ "./node_modules/antd/lib/typography/index.js");
/* harmony import */ var antd_lib_typography__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_typography__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");




var _jsxFileName = "/Users/tianxianggao/Desktop/react-2048/src/components/game/tiles/TileText/index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;

var Title = antd_lib_typography__WEBPACK_IMPORTED_MODULE_3___default.a.Title;

var TileText = function TileText(_ref) {
  var color = _ref.color,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["color"]);

  var htmlColor = '';

  switch (color) {
    case 'white':
      htmlColor = 'white';
      break;

    case 'red':
      htmlColor = 'red';
      break;

    case 'black':
      htmlColor = 'black';
      break;

    case 'blue':
      htmlColor = 'blue';
      break;
  }

  var StyledTitle = Object(styled_components__WEBPACK_IMPORTED_MODULE_5__["default"])(Title).withConfig({
    displayName: "TileText__StyledTitle",
    componentId: "sc-6fyt8a-0"
  })(["color:", " !important;"], htmlColor);
  return __jsx(StyledTitle, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    level: 1
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (TileText);

/***/ })

})
//# sourceMappingURL=index.js.e7e5ea582794f896b5bb.hot-update.js.map