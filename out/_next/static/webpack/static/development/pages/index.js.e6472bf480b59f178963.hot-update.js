webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/layout/Header/index.tsx":
/*!*************************************!*\
  !*** ./src/layout/Header/index.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_row_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/row/style/css */ "./node_modules/antd/lib/row/style/css.js");
/* harmony import */ var antd_lib_row_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/row */ "./node_modules/antd/lib/row/index.js");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_col_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/col/style/css */ "./node_modules/antd/lib/col/style/css.js");
/* harmony import */ var antd_lib_col_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col_style_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/col */ "./node_modules/antd/lib/col/index.js");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_button_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/button/style/css */ "./node_modules/antd/lib/button/style/css.js");
/* harmony import */ var antd_lib_button_style_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/button */ "./node_modules/antd/lib/button/index.js");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_menu_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/menu/style/css */ "./node_modules/antd/lib/menu/style/css.js");
/* harmony import */ var antd_lib_menu_style_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_menu_style_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/menu */ "./node_modules/antd/lib/menu/index.js");
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_menu__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var antd_lib_input_style_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/lib/input/style/css */ "./node_modules/antd/lib/input/style/css.js");
/* harmony import */ var antd_lib_input_style_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input_style_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/lib/input */ "./node_modules/antd/lib/input/index.js");
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var antd_lib_layout_style_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! antd/lib/layout/style/css */ "./node_modules/antd/lib/layout/style/css.js");
/* harmony import */ var antd_lib_layout_style_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout_style_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! antd/lib/layout */ "./node_modules/antd/lib/layout/index.js");
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_selectors_game_selector__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../redux/selectors/game.selector */ "./src/redux/selectors/game.selector.ts");
/* harmony import */ var _redux_actions_game_action__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../redux/actions/game.action */ "./src/redux/actions/game.action.ts");
/* harmony import */ var _services_game_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../services/game.service */ "./src/services/game.service.ts");














var _jsxFileName = "/Users/tianxianggao/Desktop/2048/src/layout/Header/index.tsx";







var FixedHeader = Object(styled_components__WEBPACK_IMPORTED_MODULE_15__["default"])(antd_lib_layout__WEBPACK_IMPORTED_MODULE_13___default.a.Header).withConfig({
  displayName: "Header__FixedHeader",
  componentId: "noh5uo-0"
})(["position:fixed;z-index:1;width:100%;"]);

var Header = function Header() {
  var game = Object(react_redux__WEBPACK_IMPORTED_MODULE_16__["useSelector"])(_redux_selectors_game_selector__WEBPACK_IMPORTED_MODULE_17__["$game"]);
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_16__["useDispatch"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_14__["useState"])(game.width),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_11__["default"])(_useState, 2),
      width = _useState2[0],
      setWidth = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_14__["useState"])(game.height),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_11__["default"])(_useState3, 2),
      height = _useState4[0],
      setHeight = _useState4[1];

  function onHeightChange(e) {
    var newHeight = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_10___default()(e.target.value, 10);

    if (!isNaN(newHeight)) {
      setHeight(newHeight);
    }
  }

  function onWidthChange(e) {
    var newWidth = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_10___default()(e.target.value, 10);

    if (!isNaN(newWidth)) {
      setWidth(newWidth);
    }
  }

  function restart() {
    var newBoard = Object(_services_game_service__WEBPACK_IMPORTED_MODULE_19__["generateEmptyBoard"])(width, height);
    Object(_services_game_service__WEBPACK_IMPORTED_MODULE_19__["addRandomCell"])(newBoard, 2);
    dispatch(_redux_actions_game_action__WEBPACK_IMPORTED_MODULE_18__["default"].initialize({
      board: newBoard,
      width: width,
      height: height
    }));
  }

  return react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(FixedHeader, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 24,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_7___default.a, {
    theme: "dark",
    mode: "horizontal",
    defaultSelectedKeys: ['2'],
    style: {
      lineHeight: '64px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_7___default.a.Item, {
    key: "1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(antd_lib_input__WEBPACK_IMPORTED_MODULE_9___default.a, {
    min: 1,
    max: 10,
    value: height,
    onChange: onHeightChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_7___default.a.Item, {
    key: "2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(antd_lib_input__WEBPACK_IMPORTED_MODULE_9___default.a, {
    type: "number",
    min: 1,
    max: 10,
    value: width,
    onChange: onWidthChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_7___default.a.Item, {
    key: "3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_5___default.a, {
    onClick: restart,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, "Restart"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=index.js.e6472bf480b59f178963.hot-update.js.map