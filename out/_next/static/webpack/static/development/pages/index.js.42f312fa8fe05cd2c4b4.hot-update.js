webpackHotUpdate("static/development/pages/index.js",{

/***/ "./node_modules/antd/lib/modal/ActionButton.js":
/*!*****************************************************!*\
  !*** ./node_modules/antd/lib/modal/ActionButton.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var ReactDOM = _interopRequireWildcard(__webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js"));

var _button = _interopRequireDefault(__webpack_require__(/*! ../button */ "./node_modules/antd/lib/button/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ActionButton =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ActionButton, _React$Component);

  function ActionButton(props) {
    var _this;

    _classCallCheck(this, ActionButton);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ActionButton).call(this, props));

    _this.onClick = function () {
      var _this$props = _this.props,
          actionFn = _this$props.actionFn,
          closeModal = _this$props.closeModal;

      if (actionFn) {
        var ret;

        if (actionFn.length) {
          ret = actionFn(closeModal);
        } else {
          ret = actionFn();

          if (!ret) {
            closeModal();
          }
        }

        if (ret && ret.then) {
          _this.setState({
            loading: true
          });

          ret.then(function () {
            // It's unnecessary to set loading=false, for the Modal will be unmounted after close.
            // this.setState({ loading: false });
            closeModal.apply(void 0, arguments);
          }, function (e) {
            // Emit error when catch promise reject
            console.error(e); // See: https://github.com/ant-design/ant-design/issues/6183

            _this.setState({
              loading: false
            });
          });
        }
      } else {
        closeModal();
      }
    };

    _this.state = {
      loading: false
    };
    return _this;
  }

  _createClass(ActionButton, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.autoFocus) {
        var $this = ReactDOM.findDOMNode(this);
        this.timeoutId = setTimeout(function () {
          return $this.focus();
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearTimeout(this.timeoutId);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          type = _this$props2.type,
          children = _this$props2.children,
          buttonProps = _this$props2.buttonProps;
      var loading = this.state.loading;
      return React.createElement(_button["default"], _extends({
        type: type,
        onClick: this.onClick,
        loading: loading
      }, buttonProps), children);
    }
  }]);

  return ActionButton;
}(React.Component);

exports["default"] = ActionButton;
//# sourceMappingURL=ActionButton.js.map


/***/ }),

/***/ "./node_modules/antd/lib/modal/Modal.js":
/*!**********************************************!*\
  !*** ./node_modules/antd/lib/modal/Modal.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.destroyFns = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _rcDialog = _interopRequireDefault(__webpack_require__(/*! rc-dialog */ "./node_modules/rc-dialog/es/DialogWrap.js"));

var PropTypes = _interopRequireWildcard(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _addEventListener = _interopRequireDefault(__webpack_require__(/*! rc-util/lib/Dom/addEventListener */ "./node_modules/rc-util/lib/Dom/addEventListener.js"));

var _locale = __webpack_require__(/*! ./locale */ "./node_modules/antd/lib/modal/locale.js");

var _icon = _interopRequireDefault(__webpack_require__(/*! ../icon */ "./node_modules/antd/lib/icon/index.js"));

var _button = _interopRequireDefault(__webpack_require__(/*! ../button */ "./node_modules/antd/lib/button/index.js"));

var _LocaleReceiver = _interopRequireDefault(__webpack_require__(/*! ../locale-provider/LocaleReceiver */ "./node_modules/antd/lib/locale-provider/LocaleReceiver.js"));

var _configProvider = __webpack_require__(/*! ../config-provider */ "./node_modules/antd/lib/config-provider/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

var mousePosition;
var destroyFns = []; // ref: https://github.com/ant-design/ant-design/issues/15795

exports.destroyFns = destroyFns;

var getClickPosition = function getClickPosition(e) {
  mousePosition = {
    x: e.pageX,
    y: e.pageY
  }; // 100ms 内发生过点击事件，则从点击位置动画展示
  // 否则直接 zoom 展示
  // 这样可以兼容非点击方式展开

  setTimeout(function () {
    return mousePosition = null;
  }, 100);
}; // 只有点击事件支持从鼠标位置动画展开


if ( true && window.document && window.document.documentElement) {
  (0, _addEventListener["default"])(document.documentElement, 'click', getClickPosition);
}

var Modal =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Modal, _React$Component);

  function Modal() {
    var _this;

    _classCallCheck(this, Modal);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Modal).apply(this, arguments));

    _this.handleCancel = function (e) {
      var onCancel = _this.props.onCancel;

      if (onCancel) {
        onCancel(e);
      }
    };

    _this.handleOk = function (e) {
      var onOk = _this.props.onOk;

      if (onOk) {
        onOk(e);
      }
    };

    _this.renderFooter = function (locale) {
      var _this$props = _this.props,
          okText = _this$props.okText,
          okType = _this$props.okType,
          cancelText = _this$props.cancelText,
          confirmLoading = _this$props.confirmLoading;
      return React.createElement("div", null, React.createElement(_button["default"], _extends({
        onClick: _this.handleCancel
      }, _this.props.cancelButtonProps), cancelText || locale.cancelText), React.createElement(_button["default"], _extends({
        type: okType,
        loading: confirmLoading,
        onClick: _this.handleOk
      }, _this.props.okButtonProps), okText || locale.okText));
    };

    _this.renderModal = function (_ref) {
      var getContextPopupContainer = _ref.getPopupContainer,
          getPrefixCls = _ref.getPrefixCls;

      var _a = _this.props,
          customizePrefixCls = _a.prefixCls,
          footer = _a.footer,
          visible = _a.visible,
          wrapClassName = _a.wrapClassName,
          centered = _a.centered,
          getContainer = _a.getContainer,
          restProps = __rest(_a, ["prefixCls", "footer", "visible", "wrapClassName", "centered", "getContainer"]);

      var prefixCls = getPrefixCls('modal', customizePrefixCls);
      var defaultFooter = React.createElement(_LocaleReceiver["default"], {
        componentName: "Modal",
        defaultLocale: (0, _locale.getConfirmLocale)()
      }, _this.renderFooter);
      var closeIcon = React.createElement("span", {
        className: "".concat(prefixCls, "-close-x")
      }, React.createElement(_icon["default"], {
        className: "".concat(prefixCls, "-close-icon"),
        type: "close"
      }));
      return React.createElement(_rcDialog["default"], _extends({}, restProps, {
        getContainer: getContainer === undefined ? getContextPopupContainer : getContainer,
        prefixCls: prefixCls,
        wrapClassName: (0, _classnames["default"])(_defineProperty({}, "".concat(prefixCls, "-centered"), !!centered), wrapClassName),
        footer: footer === undefined ? defaultFooter : footer,
        visible: visible,
        mousePosition: mousePosition,
        onClose: _this.handleCancel,
        closeIcon: closeIcon
      }));
    };

    return _this;
  }

  _createClass(Modal, [{
    key: "render",
    value: function render() {
      return React.createElement(_configProvider.ConfigConsumer, null, this.renderModal);
    }
  }]);

  return Modal;
}(React.Component);

exports["default"] = Modal;
Modal.defaultProps = {
  width: 520,
  transitionName: 'zoom',
  maskTransitionName: 'fade',
  confirmLoading: false,
  visible: false,
  okType: 'primary'
};
Modal.propTypes = {
  prefixCls: PropTypes.string,
  onOk: PropTypes.func,
  onCancel: PropTypes.func,
  okText: PropTypes.node,
  cancelText: PropTypes.node,
  centered: PropTypes.bool,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  confirmLoading: PropTypes.bool,
  visible: PropTypes.bool,
  footer: PropTypes.node,
  title: PropTypes.node,
  closable: PropTypes.bool
};
//# sourceMappingURL=Modal.js.map


/***/ }),

/***/ "./node_modules/antd/lib/modal/confirm.js":
/*!************************************************!*\
  !*** ./node_modules/antd/lib/modal/confirm.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = confirm;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var ReactDOM = _interopRequireWildcard(__webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _icon = _interopRequireDefault(__webpack_require__(/*! ../icon */ "./node_modules/antd/lib/icon/index.js"));

var _Modal = _interopRequireWildcard(__webpack_require__(/*! ./Modal */ "./node_modules/antd/lib/modal/Modal.js"));

var _ActionButton = _interopRequireDefault(__webpack_require__(/*! ./ActionButton */ "./node_modules/antd/lib/modal/ActionButton.js"));

var _locale = __webpack_require__(/*! ./locale */ "./node_modules/antd/lib/modal/locale.js");

var _warning = _interopRequireDefault(__webpack_require__(/*! ../_util/warning */ "./node_modules/antd/lib/_util/warning.js"));

var _this = void 0;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var IS_REACT_16 = !!ReactDOM.createPortal;

var ConfirmDialog = function ConfirmDialog(props) {
  var onCancel = props.onCancel,
      onOk = props.onOk,
      close = props.close,
      zIndex = props.zIndex,
      afterClose = props.afterClose,
      visible = props.visible,
      keyboard = props.keyboard,
      centered = props.centered,
      getContainer = props.getContainer,
      maskStyle = props.maskStyle,
      okButtonProps = props.okButtonProps,
      cancelButtonProps = props.cancelButtonProps,
      _props$iconType = props.iconType,
      iconType = _props$iconType === void 0 ? 'question-circle' : _props$iconType;
  (0, _warning["default"])(!('iconType' in props), 'Modal', "The property 'iconType' is deprecated. Use the property 'icon' instead."); // 支持传入{ icon: null }来隐藏`Modal.confirm`默认的Icon

  var icon = props.icon === undefined ? iconType : props.icon;
  var okType = props.okType || 'primary';
  var prefixCls = props.prefixCls || 'ant-modal';
  var contentPrefixCls = "".concat(prefixCls, "-confirm"); // 默认为 true，保持向下兼容

  var okCancel = 'okCancel' in props ? props.okCancel : true;
  var width = props.width || 416;
  var style = props.style || {};
  var mask = props.mask === undefined ? true : props.mask; // 默认为 false，保持旧版默认行为

  var maskClosable = props.maskClosable === undefined ? false : props.maskClosable;
  var runtimeLocale = (0, _locale.getConfirmLocale)();
  var okText = props.okText || (okCancel ? runtimeLocale.okText : runtimeLocale.justOkText);
  var cancelText = props.cancelText || runtimeLocale.cancelText;
  var autoFocusButton = props.autoFocusButton === null ? false : props.autoFocusButton || 'ok';
  var transitionName = props.transitionName || 'zoom';
  var maskTransitionName = props.maskTransitionName || 'fade';
  var classString = (0, _classnames["default"])(contentPrefixCls, "".concat(contentPrefixCls, "-").concat(props.type), props.className);
  var cancelButton = okCancel && React.createElement(_ActionButton["default"], {
    actionFn: onCancel,
    closeModal: close,
    autoFocus: autoFocusButton === 'cancel',
    buttonProps: cancelButtonProps
  }, cancelText);
  var iconNode = typeof icon === 'string' ? React.createElement(_icon["default"], {
    type: icon
  }) : icon;
  return React.createElement(_Modal["default"], {
    prefixCls: prefixCls,
    className: classString,
    wrapClassName: (0, _classnames["default"])(_defineProperty({}, "".concat(contentPrefixCls, "-centered"), !!props.centered)),
    onCancel: close.bind(_this, {
      triggerCancel: true
    }),
    visible: visible,
    title: "",
    transitionName: transitionName,
    footer: "",
    maskTransitionName: maskTransitionName,
    mask: mask,
    maskClosable: maskClosable,
    maskStyle: maskStyle,
    style: style,
    width: width,
    zIndex: zIndex,
    afterClose: afterClose,
    keyboard: keyboard,
    centered: centered,
    getContainer: getContainer
  }, React.createElement("div", {
    className: "".concat(contentPrefixCls, "-body-wrapper")
  }, React.createElement("div", {
    className: "".concat(contentPrefixCls, "-body")
  }, iconNode, React.createElement("span", {
    className: "".concat(contentPrefixCls, "-title")
  }, props.title), React.createElement("div", {
    className: "".concat(contentPrefixCls, "-content")
  }, props.content)), React.createElement("div", {
    className: "".concat(contentPrefixCls, "-btns")
  }, cancelButton, React.createElement(_ActionButton["default"], {
    type: okType,
    actionFn: onOk,
    closeModal: close,
    autoFocus: autoFocusButton === 'ok',
    buttonProps: okButtonProps
  }, okText))));
};

function confirm(config) {
  var div = document.createElement('div');
  document.body.appendChild(div);

  var currentConfig = _extends({}, config, {
    close: close,
    visible: true
  });

  function close() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    currentConfig = _extends({}, currentConfig, {
      visible: false,
      afterClose: destroy.bind.apply(destroy, [this].concat(args))
    });

    if (IS_REACT_16) {
      render(currentConfig);
    } else {
      destroy.apply(void 0, args);
    }
  }

  function update(newConfig) {
    currentConfig = _extends({}, currentConfig, newConfig);
    render(currentConfig);
  }

  function destroy() {
    var unmountResult = ReactDOM.unmountComponentAtNode(div);

    if (unmountResult && div.parentNode) {
      div.parentNode.removeChild(div);
    }

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    var triggerCancel = args.some(function (param) {
      return param && param.triggerCancel;
    });

    if (config.onCancel && triggerCancel) {
      config.onCancel.apply(config, args);
    }

    for (var i = 0; i < _Modal.destroyFns.length; i++) {
      var fn = _Modal.destroyFns[i];

      if (fn === close) {
        _Modal.destroyFns.splice(i, 1);

        break;
      }
    }
  }

  function render(props) {
    ReactDOM.render(React.createElement(ConfirmDialog, _extends({}, props, {
      getContainer: false
    })), div);
  }

  render(currentConfig);

  _Modal.destroyFns.push(close);

  return {
    destroy: close,
    update: update
  };
}
//# sourceMappingURL=confirm.js.map


/***/ }),

/***/ "./node_modules/antd/lib/modal/index.js":
/*!**********************************************!*\
  !*** ./node_modules/antd/lib/modal/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _Modal = _interopRequireWildcard(__webpack_require__(/*! ./Modal */ "./node_modules/antd/lib/modal/Modal.js"));

var _confirm = _interopRequireDefault(__webpack_require__(/*! ./confirm */ "./node_modules/antd/lib/modal/confirm.js"));

var _icon = _interopRequireDefault(__webpack_require__(/*! ../icon */ "./node_modules/antd/lib/icon/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

_Modal["default"].info = function (props) {
  var config = _extends({
    type: 'info',
    icon: React.createElement(_icon["default"], {
      type: "info-circle"
    }),
    okCancel: false
  }, props);

  return (0, _confirm["default"])(config);
};

_Modal["default"].success = function (props) {
  var config = _extends({
    type: 'success',
    icon: React.createElement(_icon["default"], {
      type: "check-circle"
    }),
    okCancel: false
  }, props);

  return (0, _confirm["default"])(config);
};

_Modal["default"].error = function (props) {
  var config = _extends({
    type: 'error',
    icon: React.createElement(_icon["default"], {
      type: "close-circle"
    }),
    okCancel: false
  }, props);

  return (0, _confirm["default"])(config);
};

_Modal["default"].warning = _Modal["default"].warn = function (props) {
  var config = _extends({
    type: 'warning',
    icon: React.createElement(_icon["default"], {
      type: "exclamation-circle"
    }),
    okCancel: false
  }, props);

  return (0, _confirm["default"])(config);
};

_Modal["default"].confirm = function (props) {
  var config = _extends({
    type: 'confirm',
    okCancel: true
  }, props);

  return (0, _confirm["default"])(config);
};

_Modal["default"].destroyAll = function () {
  while (_Modal.destroyFns.length) {
    var close = _Modal.destroyFns.pop();

    if (close) {
      close();
    }
  }
};

var _default = _Modal["default"];
exports["default"] = _default;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./node_modules/antd/lib/modal/locale.js":
/*!***********************************************!*\
  !*** ./node_modules/antd/lib/modal/locale.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.changeConfirmLocale = changeConfirmLocale;
exports.getConfirmLocale = getConfirmLocale;

var _default = _interopRequireDefault(__webpack_require__(/*! ../locale-provider/default */ "./node_modules/antd/lib/locale-provider/default.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var runtimeLocale = _extends({}, _default["default"].Modal);

function changeConfirmLocale(newLocale) {
  if (newLocale) {
    runtimeLocale = _extends({}, runtimeLocale, newLocale);
  } else {
    runtimeLocale = _extends({}, _default["default"].Modal);
  }
}

function getConfirmLocale() {
  return runtimeLocale;
}
//# sourceMappingURL=locale.js.map


/***/ }),

/***/ "./node_modules/antd/lib/modal/style/css.js":
/*!**************************************************!*\
  !*** ./node_modules/antd/lib/modal/style/css.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../../style/index.css */ "./node_modules/antd/lib/style/index.css");

__webpack_require__(/*! ./index.css */ "./node_modules/antd/lib/modal/style/index.css");

__webpack_require__(/*! ../../button/style/css */ "./node_modules/antd/lib/button/style/css.js");
//# sourceMappingURL=css.js.map


/***/ }),

/***/ "./node_modules/rc-dialog/es/Dialog.js":
/*!*********************************************!*\
  !*** ./node_modules/rc-dialog/es/Dialog.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rc-util/es/KeyCode */ "./node_modules/rc-util/es/KeyCode.js");
/* harmony import */ var rc_util_es_Dom_contains__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rc-util/es/Dom/contains */ "./node_modules/rc-util/es/Dom/contains.js");
/* harmony import */ var rc_util_es_switchScrollingEffect__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rc-util/es/switchScrollingEffect */ "./node_modules/rc-util/es/switchScrollingEffect.js");
/* harmony import */ var rc_animate__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rc-animate */ "./node_modules/rc-animate/es/Animate.js");
/* harmony import */ var _LazyRenderBox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./LazyRenderBox */ "./node_modules/rc-dialog/es/LazyRenderBox.js");











var uuid = 0;
/* eslint react/no-is-mounted:0 */
function getScroll(w, top) {
    var ret = w['page' + (top ? 'Y' : 'X') + 'Offset'];
    var method = 'scroll' + (top ? 'Top' : 'Left');
    if (typeof ret !== 'number') {
        var d = w.document;
        ret = d.documentElement[method];
        if (typeof ret !== 'number') {
            ret = d.body[method];
        }
    }
    return ret;
}
function setTransformOrigin(node, value) {
    var style = node.style;
    ['Webkit', 'Moz', 'Ms', 'ms'].forEach(function (prefix) {
        style[prefix + 'TransformOrigin'] = value;
    });
    style['transformOrigin'] = value;
}
function offset(el) {
    var rect = el.getBoundingClientRect();
    var pos = {
        left: rect.left,
        top: rect.top
    };
    var doc = el.ownerDocument;
    var w = doc.defaultView || doc.parentWindow;
    pos.left += getScroll(w);
    pos.top += getScroll(w, true);
    return pos;
}

var Dialog = function (_React$Component) {
    babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(Dialog, _React$Component);

    function Dialog() {
        babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Dialog);

        var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _React$Component.apply(this, arguments));

        _this.onAnimateLeave = function () {
            var afterClose = _this.props.afterClose;
            // need demo?
            // https://github.com/react-component/dialog/pull/28

            if (_this.wrap) {
                _this.wrap.style.display = 'none';
            }
            _this.inTransition = false;
            _this.removeScrollingEffect();
            if (afterClose) {
                afterClose();
            }
        };
        _this.onDialogMouseDown = function () {
            _this.dialogMouseDown = true;
        };
        _this.onMaskMouseUp = function () {
            if (_this.dialogMouseDown) {
                _this.timeoutId = setTimeout(function () {
                    _this.dialogMouseDown = false;
                }, 0);
            }
        };
        _this.onMaskClick = function (e) {
            // android trigger click on open (fastclick??)
            if (Date.now() - _this.openTime < 300) {
                return;
            }
            if (e.target === e.currentTarget && !_this.dialogMouseDown) {
                _this.close(e);
            }
        };
        _this.onKeyDown = function (e) {
            var props = _this.props;
            if (props.keyboard && e.keyCode === rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_6__["default"].ESC) {
                e.stopPropagation();
                _this.close(e);
                return;
            }
            // keep focus inside dialog
            if (props.visible) {
                if (e.keyCode === rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_6__["default"].TAB) {
                    var activeElement = document.activeElement;
                    var sentinelStart = _this.sentinelStart;
                    if (e.shiftKey) {
                        if (activeElement === sentinelStart) {
                            _this.sentinelEnd.focus();
                        }
                    } else if (activeElement === _this.sentinelEnd) {
                        sentinelStart.focus();
                    }
                }
            }
        };
        _this.getDialogElement = function () {
            var props = _this.props;
            var closable = props.closable;
            var prefixCls = props.prefixCls;
            var dest = {};
            if (props.width !== undefined) {
                dest.width = props.width;
            }
            if (props.height !== undefined) {
                dest.height = props.height;
            }
            var footer = void 0;
            if (props.footer) {
                footer = react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", { className: prefixCls + '-footer', ref: _this.saveRef('footer') }, props.footer);
            }
            var header = void 0;
            if (props.title) {
                header = react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", { className: prefixCls + '-header', ref: _this.saveRef('header') }, react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", { className: prefixCls + '-title', id: _this.titleId }, props.title));
            }
            var closer = void 0;
            if (closable) {
                closer = react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("button", { type: "button", onClick: _this.close, "aria-label": "Close", className: prefixCls + '-close' }, props.closeIcon || react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("span", { className: prefixCls + '-close-x' }));
            }
            var style = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props.style, dest);
            var sentinelStyle = { width: 0, height: 0, overflow: 'hidden' };
            var transitionName = _this.getTransitionName();
            var dialogElement = react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_LazyRenderBox__WEBPACK_IMPORTED_MODULE_10__["default"], { key: "dialog-element", role: "document", ref: _this.saveRef('dialog'), style: style, className: prefixCls + ' ' + (props.className || ''), visible: props.visible, onMouseDown: _this.onDialogMouseDown }, react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", { tabIndex: 0, ref: _this.saveRef('sentinelStart'), style: sentinelStyle, "aria-hidden": "true" }), react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", { className: prefixCls + '-content' }, closer, header, react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({ className: prefixCls + '-body', style: props.bodyStyle, ref: _this.saveRef('body') }, props.bodyProps), props.children), footer), react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", { tabIndex: 0, ref: _this.saveRef('sentinelEnd'), style: sentinelStyle, "aria-hidden": "true" }));
            return react__WEBPACK_IMPORTED_MODULE_4__["createElement"](rc_animate__WEBPACK_IMPORTED_MODULE_9__["default"], { key: "dialog", showProp: "visible", onLeave: _this.onAnimateLeave, transitionName: transitionName, component: "", transitionAppear: true }, props.visible || !props.destroyOnClose ? dialogElement : null);
        };
        _this.getZIndexStyle = function () {
            var style = {};
            var props = _this.props;
            if (props.zIndex !== undefined) {
                style.zIndex = props.zIndex;
            }
            return style;
        };
        _this.getWrapStyle = function () {
            return babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, _this.getZIndexStyle(), _this.props.wrapStyle);
        };
        _this.getMaskStyle = function () {
            return babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, _this.getZIndexStyle(), _this.props.maskStyle);
        };
        _this.getMaskElement = function () {
            var props = _this.props;
            var maskElement = void 0;
            if (props.mask) {
                var maskTransition = _this.getMaskTransitionName();
                maskElement = react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_LazyRenderBox__WEBPACK_IMPORTED_MODULE_10__["default"], babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({ style: _this.getMaskStyle(), key: "mask", className: props.prefixCls + '-mask', hiddenClassName: props.prefixCls + '-mask-hidden', visible: props.visible }, props.maskProps));
                if (maskTransition) {
                    maskElement = react__WEBPACK_IMPORTED_MODULE_4__["createElement"](rc_animate__WEBPACK_IMPORTED_MODULE_9__["default"], { key: "mask", showProp: "visible", transitionAppear: true, component: "", transitionName: maskTransition }, maskElement);
                }
            }
            return maskElement;
        };
        _this.getMaskTransitionName = function () {
            var props = _this.props;
            var transitionName = props.maskTransitionName;
            var animation = props.maskAnimation;
            if (!transitionName && animation) {
                transitionName = props.prefixCls + '-' + animation;
            }
            return transitionName;
        };
        _this.getTransitionName = function () {
            var props = _this.props;
            var transitionName = props.transitionName;
            var animation = props.animation;
            if (!transitionName && animation) {
                transitionName = props.prefixCls + '-' + animation;
            }
            return transitionName;
        };
        _this.addScrollingEffect = function () {
            var getOpenCount = _this.props.getOpenCount;

            var openCount = getOpenCount();
            if (openCount !== 1) {
                return;
            }
            Object(rc_util_es_switchScrollingEffect__WEBPACK_IMPORTED_MODULE_8__["default"])();
            document.body.style.overflow = 'hidden';
        };
        _this.removeScrollingEffect = function () {
            var getOpenCount = _this.props.getOpenCount;

            var openCount = getOpenCount();
            if (openCount !== 0) {
                return;
            }
            document.body.style.overflow = '';
            Object(rc_util_es_switchScrollingEffect__WEBPACK_IMPORTED_MODULE_8__["default"])(true);
        };
        _this.close = function (e) {
            var onClose = _this.props.onClose;

            if (onClose) {
                onClose(e);
            }
        };
        _this.saveRef = function (name) {
            return function (node) {
                _this[name] = node;
            };
        };
        return _this;
    }

    Dialog.prototype.componentWillMount = function componentWillMount() {
        this.inTransition = false;
        this.titleId = 'rcDialogTitle' + uuid++;
    };

    Dialog.prototype.componentDidMount = function componentDidMount() {
        this.componentDidUpdate({});
        // if forceRender is true, set element style display to be none;
        if (this.props.forceRender && this.wrap) {
            this.wrap.style.display = 'none';
        }
    };

    Dialog.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
        var props = this.props;
        var mousePosition = this.props.mousePosition;
        if (props.visible) {
            // first show
            if (!prevProps.visible) {
                this.openTime = Date.now();
                this.addScrollingEffect();
                this.tryFocus();
                var dialogNode = react_dom__WEBPACK_IMPORTED_MODULE_5__["findDOMNode"](this.dialog);
                if (mousePosition) {
                    var elOffset = offset(dialogNode);
                    setTransformOrigin(dialogNode, mousePosition.x - elOffset.left + 'px ' + (mousePosition.y - elOffset.top) + 'px');
                } else {
                    setTransformOrigin(dialogNode, '');
                }
            }
        } else if (prevProps.visible) {
            this.inTransition = true;
            if (props.mask && this.lastOutSideFocusNode) {
                try {
                    this.lastOutSideFocusNode.focus();
                } catch (e) {
                    this.lastOutSideFocusNode = null;
                }
                this.lastOutSideFocusNode = null;
            }
        }
    };

    Dialog.prototype.componentWillUnmount = function componentWillUnmount() {
        var _props = this.props,
            visible = _props.visible,
            getOpenCount = _props.getOpenCount;

        if ((visible || this.inTransition) && !getOpenCount()) {
            this.removeScrollingEffect();
        }
        clearTimeout(this.timeoutId);
    };

    Dialog.prototype.tryFocus = function tryFocus() {
        if (!Object(rc_util_es_Dom_contains__WEBPACK_IMPORTED_MODULE_7__["default"])(this.wrap, document.activeElement)) {
            this.lastOutSideFocusNode = document.activeElement;
            this.sentinelStart.focus();
        }
    };

    Dialog.prototype.render = function render() {
        var props = this.props;
        var prefixCls = props.prefixCls,
            maskClosable = props.maskClosable;

        var style = this.getWrapStyle();
        // clear hide display
        // and only set display after async anim, not here for hide
        if (props.visible) {
            style.display = null;
        }
        return react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", null, this.getMaskElement(), react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({ tabIndex: -1, onKeyDown: this.onKeyDown, className: prefixCls + '-wrap ' + (props.wrapClassName || ''), ref: this.saveRef('wrap'), onClick: maskClosable ? this.onMaskClick : null, onMouseUp: maskClosable ? this.onMaskMouseUp : null, role: "dialog", "aria-labelledby": props.title ? this.titleId : null, style: style }, props.wrapProps), this.getDialogElement()));
    };

    return Dialog;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Dialog);

Dialog.defaultProps = {
    className: '',
    mask: true,
    visible: false,
    keyboard: true,
    closable: true,
    maskClosable: true,
    destroyOnClose: false,
    prefixCls: 'rc-dialog'
};

/***/ }),

/***/ "./node_modules/rc-dialog/es/DialogWrap.js":
/*!*************************************************!*\
  !*** ./node_modules/rc-dialog/es/DialogWrap.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Dialog */ "./node_modules/rc-dialog/es/Dialog.js");
/* harmony import */ var rc_util_es_PortalWrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rc-util/es/PortalWrapper */ "./node_modules/rc-util/es/PortalWrapper.js");




// fix issue #10656
/*
* getContainer remarks
* Custom container should not be return, because in the Portal component, it will remove the
* return container element here, if the custom container is the only child of it's component,
* like issue #10656, It will has a conflict with removeChild method in react-dom.
* So here should add a child (div element) to custom container.
* */
/* harmony default export */ __webpack_exports__["default"] = (function (props) {
    var visible = props.visible,
        getContainer = props.getContainer,
        forceRender = props.forceRender;
    // 渲染在当前 dom 里；

    if (getContainer === false) {
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Dialog__WEBPACK_IMPORTED_MODULE_2__["default"], babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, { getOpenCount: function getOpenCount() {
                return 2;
            } }));
    }
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](rc_util_es_PortalWrapper__WEBPACK_IMPORTED_MODULE_3__["default"], { visible: visible, forceRender: forceRender, getContainer: getContainer }, function (childProps) {
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Dialog__WEBPACK_IMPORTED_MODULE_2__["default"], babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, childProps));
    });
});

/***/ }),

/***/ "./node_modules/rc-dialog/es/LazyRenderBox.js":
/*!****************************************************!*\
  !*** ./node_modules/rc-dialog/es/LazyRenderBox.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);






var LazyRenderBox = function (_React$Component) {
    babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(LazyRenderBox, _React$Component);

    function LazyRenderBox() {
        babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, LazyRenderBox);

        return babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _React$Component.apply(this, arguments));
    }

    LazyRenderBox.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
        return !!nextProps.hiddenClassName || !!nextProps.visible;
    };

    LazyRenderBox.prototype.render = function render() {
        var className = this.props.className;
        if (!!this.props.hiddenClassName && !this.props.visible) {
            className += " " + this.props.hiddenClassName;
        }
        var props = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, this.props);
        delete props.hiddenClassName;
        delete props.visible;
        props.className = className;
        return react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props));
    };

    return LazyRenderBox;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (LazyRenderBox);

/***/ }),

/***/ "./node_modules/rc-util/es/PortalWrapper.js":
/*!**************************************************!*\
  !*** ./node_modules/rc-util/es/PortalWrapper.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/typeof */ "./node_modules/babel-runtime/helpers/typeof.js");
/* harmony import */ var babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_lifecycles_compat__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-lifecycles-compat */ "./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js");
/* harmony import */ var _ContainerRender__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ContainerRender */ "./node_modules/rc-util/es/ContainerRender.js");
/* harmony import */ var _Portal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Portal */ "./node_modules/rc-util/es/Portal.js");













var openCount = 0;
var windowIsUndefined = !( true && window.document && window.document.createElement);

var IS_REACT_16 = 'createPortal' in react_dom__WEBPACK_IMPORTED_MODULE_7___default.a;

var PortalWrapper = function (_React$Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(PortalWrapper, _React$Component);

  function PortalWrapper(props) {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, PortalWrapper);

    var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, (PortalWrapper.__proto__ || Object.getPrototypeOf(PortalWrapper)).call(this, props));

    _this.getParent = function () {
      var getContainer = _this.props.getContainer;

      if (getContainer) {
        if (typeof getContainer === 'string') {
          return document.querySelectorAll(getContainer)[0];
        }
        if (typeof getContainer === 'function') {
          return getContainer();
        }
        if ((typeof getContainer === 'undefined' ? 'undefined' : babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default()(getContainer)) === 'object' && getContainer instanceof window.HTMLElement) {
          return getContainer;
        }
      }
      return document.body;
    };

    _this.getContainer = function () {
      if (windowIsUndefined) {
        return null;
      }
      if (!_this.container) {
        _this.container = document.createElement('div');
        var parent = _this.getParent();
        parent.appendChild(_this.container);
      }
      _this.setWrapperClassName();
      return _this.container;
    };

    _this.setWrapperClassName = function () {
      var wrapperClassName = _this.props.wrapperClassName;

      if (_this.container && wrapperClassName && wrapperClassName !== _this.container.className) {
        _this.container.className = wrapperClassName;
      }
    };

    _this.savePortal = function (c) {
      _this._component = c;
    };

    var visible = props.visible;

    openCount = visible ? openCount + 1 : openCount;
    _this.state = {};
    return _this;
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(PortalWrapper, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.setWrapperClassName();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var visible = this.props.visible;

      this.container = null;
      this._component = null;
      // 离开时不会 render， 导到离开时数值不变，改用 func 。。
      openCount = visible && openCount ? openCount - 1 : openCount;
      if (!IS_REACT_16) {
        if (visible) {
          this.renderComponent({
            afterClose: this.removeContainer,
            onClose: function onClose() {},

            visible: false
          });
        } else {
          this.removeContainer();
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          children = _props.children,
          forceRender = _props.forceRender,
          visible = _props.visible;

      var portal = null;
      var childProps = {
        getOpenCount: function getOpenCount() {
          return openCount;
        },
        getContainer: this.getContainer
      };
      // suppport react15
      if (!IS_REACT_16) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
          _ContainerRender__WEBPACK_IMPORTED_MODULE_10__["default"],
          {
            parent: this,
            visible: visible,
            autoDestroy: false,
            getComponent: function getComponent() {
              var extra = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
              return children(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, extra, childProps, {
                ref: _this2.savePortal
              }));
            },
            getContainer: this.getContainer,
            forceRender: forceRender
          },
          function (_ref) {
            var renderComponent = _ref.renderComponent,
                removeContainer = _ref.removeContainer;

            _this2.renderComponent = renderComponent;
            _this2.removeContainer = removeContainer;
            return null;
          }
        );
      }
      if (forceRender || visible || this._component) {
        portal = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
          _Portal__WEBPACK_IMPORTED_MODULE_11__["default"],
          { getContainer: this.getContainer, ref: this.savePortal },
          children(childProps)
        );
      }
      return portal;
    }
  }], [{
    key: 'getDerivedStateFromProps',
    value: function getDerivedStateFromProps(props, _ref2) {
      var prevVisible = _ref2.visible;
      var visible = props.visible;

      if (prevVisible !== undefined && visible !== prevVisible) {
        openCount = visible && !prevVisible ? openCount + 1 : openCount - 1;
      }
      return {
        visible: visible
      };
    }
  }]);

  return PortalWrapper;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

PortalWrapper.propTypes = {
  wrapperClassName: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
  forceRender: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool,
  getContainer: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.any,
  children: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func,
  visible: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_lifecycles_compat__WEBPACK_IMPORTED_MODULE_9__["polyfill"])(PortalWrapper));

/***/ }),

/***/ "./node_modules/rc-util/es/getScrollBarSize.js":
/*!*****************************************************!*\
  !*** ./node_modules/rc-util/es/getScrollBarSize.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getScrollBarSize; });
var cached = void 0;

function getScrollBarSize(fresh) {
  if (fresh || cached === undefined) {
    var inner = document.createElement('div');
    inner.style.width = '100%';
    inner.style.height = '200px';

    var outer = document.createElement('div');
    var outerStyle = outer.style;

    outerStyle.position = 'absolute';
    outerStyle.top = 0;
    outerStyle.left = 0;
    outerStyle.pointerEvents = 'none';
    outerStyle.visibility = 'hidden';
    outerStyle.width = '200px';
    outerStyle.height = '150px';
    outerStyle.overflow = 'hidden';

    outer.appendChild(inner);

    document.body.appendChild(outer);

    var widthContained = inner.offsetWidth;
    outer.style.overflow = 'scroll';
    var widthScroll = inner.offsetWidth;

    if (widthContained === widthScroll) {
      widthScroll = outer.clientWidth;
    }

    document.body.removeChild(outer);

    cached = widthContained - widthScroll;
  }
  return cached;
}

/***/ }),

/***/ "./node_modules/rc-util/es/switchScrollingEffect.js":
/*!**********************************************************!*\
  !*** ./node_modules/rc-util/es/switchScrollingEffect.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getScrollBarSize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getScrollBarSize */ "./node_modules/rc-util/es/getScrollBarSize.js");


/* harmony default export */ __webpack_exports__["default"] = (function (close) {
  var bodyIsOverflowing = document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight) && window.innerWidth > document.body.offsetWidth;
  if (!bodyIsOverflowing) {
    return;
  }
  if (close) {
    document.body.style.position = '';
    document.body.style.width = '';
    return;
  }
  var scrollBarSize = Object(_getScrollBarSize__WEBPACK_IMPORTED_MODULE_0__["default"])();
  if (scrollBarSize) {
    document.body.style.position = 'relative';
    document.body.style.width = 'calc(100% - ' + scrollBarSize + 'px)';
  }
});

/***/ }),

/***/ "./node_modules/rc-util/lib/Dom/addEventListener.js":
/*!**********************************************************!*\
  !*** ./node_modules/rc-util/lib/Dom/addEventListener.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = addEventListenerWrap;

var _addDomEventListener = __webpack_require__(/*! add-dom-event-listener */ "./node_modules/add-dom-event-listener/lib/index.js");

var _addDomEventListener2 = _interopRequireDefault(_addDomEventListener);

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function addEventListenerWrap(target, eventType, cb, option) {
  /* eslint camelcase: 2 */
  var callback = _reactDom2['default'].unstable_batchedUpdates ? function run(e) {
    _reactDom2['default'].unstable_batchedUpdates(cb, e);
  } : cb;
  return (0, _addDomEventListener2['default'])(target, eventType, callback, option);
}
module.exports = exports['default'];

/***/ }),

/***/ "./src/components/game/Game/index.tsx":
/*!********************************************!*\
  !*** ./src/components/game/Game/index.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_modal_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/modal/style/css */ "./node_modules/antd/lib/modal/style/css.js");
/* harmony import */ var antd_lib_modal_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_modal_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/modal */ "./node_modules/antd/lib/modal/index.js");
/* harmony import */ var antd_lib_modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _layout_Center__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../layout/Center */ "./src/layout/Center/index.tsx");
/* harmony import */ var _Board__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Board */ "./src/components/game/Board/index.tsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_actions_game_action__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../redux/actions/game.action */ "./src/redux/actions/game.action.ts");
/* harmony import */ var _redux_selectors_game_selector__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../redux/selectors/game.selector */ "./src/redux/selectors/game.selector.ts");



var _jsxFileName = "/Users/tianxianggao/Desktop/2048/src/components/game/Game/index.tsx";








var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "Game__Wrapper",
  componentId: "n7ip3s-0"
})(["{padding-bottom:10vh;height:100%;}"]);
var MOUSE_DIST_THRESHOLD = 50;

var Game = function Game() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      shift = _useState2[0],
      setShift = _useState2[1];

  var board = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"])(_redux_selectors_game_selector__WEBPACK_IMPORTED_MODULE_9__["$board"]);
  var lost = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"])(_redux_selectors_game_selector__WEBPACK_IMPORTED_MODULE_9__["$lost"]);
  var won = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"])(_redux_selectors_game_selector__WEBPACK_IMPORTED_MODULE_9__["$won"]);
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useDispatch"])();
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
    var shiftAction = _redux_actions_game_action__WEBPACK_IMPORTED_MODULE_8__["default"].shiftBoard(board, shift);
    dispatch(shiftAction);
    dispatch(_redux_actions_game_action__WEBPACK_IMPORTED_MODULE_8__["default"].generateRandomCell(shiftAction.body.board, 2));
  }

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (won) {
      antd_lib_modal__WEBPACK_IMPORTED_MODULE_1___default.a.success({
        title: 'You won!'
      });
    }
  }, [won]);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (lost) {
      antd_lib_modal__WEBPACK_IMPORTED_MODULE_1___default.a.error({
        title: 'You lost!'
      });
    }
  }, [lost]);
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Wrapper, {
    onKeyDown: onKeyDown,
    onMouseDown: onMouseDown,
    onMouseUp: onMouseUp,
    tabIndex: 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_layout_Center__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Board__WEBPACK_IMPORTED_MODULE_5__["default"], {
    shift: shift,
    onShiftEnd: onShiftEnd,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Game);

/***/ })

})
//# sourceMappingURL=index.js.42f312fa8fe05cd2c4b4.hot-update.js.map