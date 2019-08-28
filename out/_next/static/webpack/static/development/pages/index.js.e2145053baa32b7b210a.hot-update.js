webpackHotUpdate("static/development/pages/index.js",{

/***/ "./node_modules/antd/lib/input/Group.js":
/*!**********************************************!*\
  !*** ./node_modules/antd/lib/input/Group.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _configProvider = __webpack_require__(/*! ../config-provider */ "./node_modules/antd/lib/config-provider/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Group = function Group(props) {
  return React.createElement(_configProvider.ConfigConsumer, null, function (_ref) {
    var _classNames;

    var getPrefixCls = _ref.getPrefixCls;
    var customizePrefixCls = props.prefixCls,
        _props$className = props.className,
        className = _props$className === void 0 ? '' : _props$className;
    var prefixCls = getPrefixCls('input-group', customizePrefixCls);
    var cls = (0, _classnames["default"])(prefixCls, (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-lg"), props.size === 'large'), _defineProperty(_classNames, "".concat(prefixCls, "-sm"), props.size === 'small'), _defineProperty(_classNames, "".concat(prefixCls, "-compact"), props.compact), _classNames), className);
    return React.createElement("span", {
      className: cls,
      style: props.style,
      onMouseEnter: props.onMouseEnter,
      onMouseLeave: props.onMouseLeave,
      onFocus: props.onFocus,
      onBlur: props.onBlur
    }, props.children);
  });
};

var _default = Group;
exports["default"] = _default;
//# sourceMappingURL=Group.js.map


/***/ }),

/***/ "./node_modules/antd/lib/input/Input.js":
/*!**********************************************!*\
  !*** ./node_modules/antd/lib/input/Input.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var PropTypes = _interopRequireWildcard(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _omit = _interopRequireDefault(__webpack_require__(/*! omit.js */ "./node_modules/omit.js/es/index.js"));

var _reactLifecyclesCompat = __webpack_require__(/*! react-lifecycles-compat */ "./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js");

var _configProvider = __webpack_require__(/*! ../config-provider */ "./node_modules/antd/lib/config-provider/index.js");

var _icon = _interopRequireDefault(__webpack_require__(/*! ../icon */ "./node_modules/antd/lib/icon/index.js"));

var _type = __webpack_require__(/*! ../_util/type */ "./node_modules/antd/lib/_util/type.js");

var _warning = _interopRequireDefault(__webpack_require__(/*! ../_util/warning */ "./node_modules/antd/lib/_util/warning.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function fixControlledValue(value) {
  if (typeof value === 'undefined' || value === null) {
    return '';
  }

  return value;
}

function hasPrefixSuffix(props) {
  return !!('prefix' in props || props.suffix || props.allowClear);
}

var InputSizes = (0, _type.tuple)('small', 'default', 'large');

var Input =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Input, _React$Component);

  function Input(props) {
    var _this;

    _classCallCheck(this, Input);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Input).call(this, props));

    _this.handleKeyDown = function (e) {
      var _this$props = _this.props,
          onPressEnter = _this$props.onPressEnter,
          onKeyDown = _this$props.onKeyDown;

      if (e.keyCode === 13 && onPressEnter) {
        onPressEnter(e);
      }

      if (onKeyDown) {
        onKeyDown(e);
      }
    };

    _this.saveInput = function (node) {
      _this.input = node;
    };

    _this.handleReset = function (e) {
      _this.setValue('', e, function () {
        _this.focus();
      });
    };

    _this.handleChange = function (e) {
      _this.setValue(e.target.value, e);
    };

    _this.renderComponent = function (_ref) {
      var getPrefixCls = _ref.getPrefixCls;
      var customizePrefixCls = _this.props.prefixCls;
      var prefixCls = getPrefixCls('input', customizePrefixCls);
      return _this.renderLabeledInput(prefixCls, _this.renderInput(prefixCls));
    };

    var value = typeof props.value === 'undefined' ? props.defaultValue : props.value;
    _this.state = {
      value: value
    };
    return _this;
  }

  _createClass(Input, [{
    key: "getSnapshotBeforeUpdate",
    value: function getSnapshotBeforeUpdate(prevProps) {
      if (hasPrefixSuffix(prevProps) !== hasPrefixSuffix(this.props)) {
        (0, _warning["default"])(this.input !== document.activeElement, 'Input', "When Input is focused, dynamic add or remove prefix / suffix will make it lose focus caused by dom structure change. Read more: https://ant.design/components/input/#FAQ");
      }

      return null;
    } // Since polyfill `getSnapshotBeforeUpdate` need work with `componentDidUpdate`.
    // We keep an empty function here.

  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {}
  }, {
    key: "focus",
    value: function focus() {
      this.input.focus();
    }
  }, {
    key: "blur",
    value: function blur() {
      this.input.blur();
    }
  }, {
    key: "select",
    value: function select() {
      this.input.select();
    }
  }, {
    key: "getInputClassName",
    value: function getInputClassName(prefixCls) {
      var _classNames;

      var _this$props2 = this.props,
          size = _this$props2.size,
          disabled = _this$props2.disabled;
      return (0, _classnames["default"])(prefixCls, (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-sm"), size === 'small'), _defineProperty(_classNames, "".concat(prefixCls, "-lg"), size === 'large'), _defineProperty(_classNames, "".concat(prefixCls, "-disabled"), disabled), _classNames));
    }
  }, {
    key: "setValue",
    value: function setValue(value, e, callback) {
      if (!('value' in this.props)) {
        this.setState({
          value: value
        }, callback);
      }

      var onChange = this.props.onChange;

      if (onChange) {
        var event = e;

        if (e.type === 'click') {
          // click clear icon
          event = Object.create(e);
          event.target = this.input;
          event.currentTarget = this.input;
          var originalInputValue = this.input.value; // change input value cause e.target.value should be '' when clear input

          this.input.value = '';
          onChange(event); // reset input value

          this.input.value = originalInputValue;
          return;
        }

        onChange(event);
      }
    }
  }, {
    key: "renderClearIcon",
    value: function renderClearIcon(prefixCls) {
      var allowClear = this.props.allowClear;
      var value = this.state.value;

      if (!allowClear || value === undefined || value === null || value === '') {
        return null;
      }

      return React.createElement(_icon["default"], {
        type: "close-circle",
        theme: "filled",
        onClick: this.handleReset,
        className: "".concat(prefixCls, "-clear-icon"),
        role: "button"
      });
    }
  }, {
    key: "renderSuffix",
    value: function renderSuffix(prefixCls) {
      var _this$props3 = this.props,
          suffix = _this$props3.suffix,
          allowClear = _this$props3.allowClear;

      if (suffix || allowClear) {
        return React.createElement("span", {
          className: "".concat(prefixCls, "-suffix")
        }, this.renderClearIcon(prefixCls), suffix);
      }

      return null;
    }
  }, {
    key: "renderLabeledInput",
    value: function renderLabeledInput(prefixCls, children) {
      var _classNames3;

      var _this$props4 = this.props,
          addonBefore = _this$props4.addonBefore,
          addonAfter = _this$props4.addonAfter,
          style = _this$props4.style,
          size = _this$props4.size,
          className = _this$props4.className; // Not wrap when there is not addons

      if (!addonBefore && !addonAfter) {
        return children;
      }

      var wrapperClassName = "".concat(prefixCls, "-group");
      var addonClassName = "".concat(wrapperClassName, "-addon");
      var addonBeforeNode = addonBefore ? React.createElement("span", {
        className: addonClassName
      }, addonBefore) : null;
      var addonAfterNode = addonAfter ? React.createElement("span", {
        className: addonClassName
      }, addonAfter) : null;
      var mergedWrapperClassName = (0, _classnames["default"])("".concat(prefixCls, "-wrapper"), _defineProperty({}, wrapperClassName, addonBefore || addonAfter));
      var mergedGroupClassName = (0, _classnames["default"])(className, "".concat(prefixCls, "-group-wrapper"), (_classNames3 = {}, _defineProperty(_classNames3, "".concat(prefixCls, "-group-wrapper-sm"), size === 'small'), _defineProperty(_classNames3, "".concat(prefixCls, "-group-wrapper-lg"), size === 'large'), _classNames3)); // Need another wrapper for changing display:table to display:inline-block
      // and put style prop in wrapper

      return React.createElement("span", {
        className: mergedGroupClassName,
        style: style
      }, React.createElement("span", {
        className: mergedWrapperClassName
      }, addonBeforeNode, React.cloneElement(children, {
        style: null
      }), addonAfterNode));
    }
  }, {
    key: "renderLabeledIcon",
    value: function renderLabeledIcon(prefixCls, children) {
      var _classNames4;

      var props = this.props;
      var suffix = this.renderSuffix(prefixCls);

      if (!hasPrefixSuffix(props)) {
        return children;
      }

      var prefix = props.prefix ? React.createElement("span", {
        className: "".concat(prefixCls, "-prefix")
      }, props.prefix) : null;
      var affixWrapperCls = (0, _classnames["default"])(props.className, "".concat(prefixCls, "-affix-wrapper"), (_classNames4 = {}, _defineProperty(_classNames4, "".concat(prefixCls, "-affix-wrapper-sm"), props.size === 'small'), _defineProperty(_classNames4, "".concat(prefixCls, "-affix-wrapper-lg"), props.size === 'large'), _classNames4));
      return React.createElement("span", {
        className: affixWrapperCls,
        style: props.style
      }, prefix, React.cloneElement(children, {
        style: null,
        className: this.getInputClassName(prefixCls)
      }), suffix);
    }
  }, {
    key: "renderInput",
    value: function renderInput(prefixCls) {
      var _this$props5 = this.props,
          className = _this$props5.className,
          addonBefore = _this$props5.addonBefore,
          addonAfter = _this$props5.addonAfter;
      var value = this.state.value; // Fix https://fb.me/react-unknown-prop

      var otherProps = (0, _omit["default"])(this.props, ['prefixCls', 'onPressEnter', 'addonBefore', 'addonAfter', 'prefix', 'suffix', 'allowClear', // Input elements must be either controlled or uncontrolled,
      // specify either the value prop, or the defaultValue prop, but not both.
      'defaultValue']);
      return this.renderLabeledIcon(prefixCls, React.createElement("input", _extends({}, otherProps, {
        value: fixControlledValue(value),
        onChange: this.handleChange,
        className: (0, _classnames["default"])(this.getInputClassName(prefixCls), _defineProperty({}, className, className && !addonBefore && !addonAfter)),
        onKeyDown: this.handleKeyDown,
        ref: this.saveInput
      })));
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(_configProvider.ConfigConsumer, null, this.renderComponent);
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps) {
      if ('value' in nextProps) {
        return {
          value: nextProps.value
        };
      }

      return null;
    }
  }]);

  return Input;
}(React.Component);

Input.defaultProps = {
  type: 'text'
};
Input.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string,
  size: PropTypes.oneOf(InputSizes),
  maxLength: PropTypes.number,
  disabled: PropTypes.bool,
  value: PropTypes.any,
  defaultValue: PropTypes.any,
  className: PropTypes.string,
  addonBefore: PropTypes.node,
  addonAfter: PropTypes.node,
  prefixCls: PropTypes.string,
  onPressEnter: PropTypes.func,
  onKeyDown: PropTypes.func,
  onKeyUp: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  prefix: PropTypes.node,
  suffix: PropTypes.node,
  allowClear: PropTypes.bool
};
(0, _reactLifecyclesCompat.polyfill)(Input);
var _default = Input;
exports["default"] = _default;
//# sourceMappingURL=Input.js.map


/***/ }),

/***/ "./node_modules/antd/lib/input/Password.js":
/*!*************************************************!*\
  !*** ./node_modules/antd/lib/input/Password.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _Input = _interopRequireDefault(__webpack_require__(/*! ./Input */ "./node_modules/antd/lib/input/Input.js"));

var _icon = _interopRequireDefault(__webpack_require__(/*! ../icon */ "./node_modules/antd/lib/icon/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

var ActionMap = {
  click: 'onClick',
  hover: 'onMouseOver'
};

var Password =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Password, _React$Component);

  function Password() {
    var _this;

    _classCallCheck(this, Password);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Password).apply(this, arguments));
    _this.state = {
      visible: false
    };

    _this.onChange = function () {
      _this.setState({
        visible: !_this.state.visible
      });
    };

    return _this;
  }

  _createClass(Password, [{
    key: "getIcon",
    value: function getIcon() {
      var _iconProps;

      var _this$props = this.props,
          prefixCls = _this$props.prefixCls,
          action = _this$props.action;
      var iconTrigger = ActionMap[action] || '';
      var iconProps = (_iconProps = {}, _defineProperty(_iconProps, iconTrigger, this.onChange), _defineProperty(_iconProps, "className", "".concat(prefixCls, "-icon")), _defineProperty(_iconProps, "type", this.state.visible ? 'eye' : 'eye-invisible'), _defineProperty(_iconProps, "key", 'passwordIcon'), _defineProperty(_iconProps, "onMouseDown", function onMouseDown(e) {
        // Prevent focused state lost
        // https://github.com/ant-design/ant-design/issues/15173
        e.preventDefault();
      }), _iconProps);
      return React.createElement(_icon["default"], iconProps);
    }
  }, {
    key: "render",
    value: function render() {
      var _a = this.props,
          className = _a.className,
          prefixCls = _a.prefixCls,
          inputPrefixCls = _a.inputPrefixCls,
          size = _a.size,
          suffix = _a.suffix,
          visibilityToggle = _a.visibilityToggle,
          restProps = __rest(_a, ["className", "prefixCls", "inputPrefixCls", "size", "suffix", "visibilityToggle"]);

      var suffixIcon = visibilityToggle && this.getIcon();
      var inputClassName = (0, _classnames["default"])(prefixCls, className, _defineProperty({}, "".concat(prefixCls, "-").concat(size), !!size));
      return React.createElement(_Input["default"], _extends({}, restProps, {
        type: this.state.visible ? 'text' : 'password',
        size: size,
        className: inputClassName,
        prefixCls: inputPrefixCls,
        suffix: suffixIcon
      }));
    }
  }]);

  return Password;
}(React.Component);

exports["default"] = Password;
Password.defaultProps = {
  inputPrefixCls: 'ant-input',
  prefixCls: 'ant-input-password',
  action: 'click',
  visibilityToggle: true
};
//# sourceMappingURL=Password.js.map


/***/ }),

/***/ "./node_modules/antd/lib/input/Search.js":
/*!***********************************************!*\
  !*** ./node_modules/antd/lib/input/Search.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _Input = _interopRequireDefault(__webpack_require__(/*! ./Input */ "./node_modules/antd/lib/input/Input.js"));

var _icon = _interopRequireDefault(__webpack_require__(/*! ../icon */ "./node_modules/antd/lib/icon/index.js"));

var _button = _interopRequireDefault(__webpack_require__(/*! ../button */ "./node_modules/antd/lib/button/index.js"));

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

var Search =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Search, _React$Component);

  function Search() {
    var _this;

    _classCallCheck(this, Search);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Search).apply(this, arguments));

    _this.onSearch = function (e) {
      var onSearch = _this.props.onSearch;

      if (onSearch) {
        onSearch(_this.input.input.value, e);
      }

      _this.input.focus();
    };

    _this.saveInput = function (node) {
      _this.input = node;
    };

    _this.renderSuffix = function (prefixCls) {
      var _this$props = _this.props,
          suffix = _this$props.suffix,
          enterButton = _this$props.enterButton;
      if (enterButton) return suffix;
      var node = React.createElement(_icon["default"], {
        className: "".concat(prefixCls, "-icon"),
        type: "search",
        key: "searchIcon",
        onClick: _this.onSearch
      });

      if (suffix) {
        var cloneSuffix = suffix;

        if (React.isValidElement(cloneSuffix) && !cloneSuffix.key) {
          cloneSuffix = React.cloneElement(cloneSuffix, {
            key: 'originSuffix'
          });
        }

        return [cloneSuffix, node];
      }

      return node;
    };

    _this.renderAddonAfter = function (prefixCls) {
      var _this$props2 = _this.props,
          enterButton = _this$props2.enterButton,
          size = _this$props2.size,
          disabled = _this$props2.disabled,
          addonAfter = _this$props2.addonAfter;
      if (!enterButton) return addonAfter;
      var btnClassName = "".concat(prefixCls, "-button");
      var button;
      var enterButtonAsElement = enterButton;

      if (enterButtonAsElement.type === _button["default"] || enterButtonAsElement.type === 'button') {
        button = React.cloneElement(enterButtonAsElement, _extends({
          onClick: _this.onSearch,
          key: 'enterButton'
        }, enterButtonAsElement.type === _button["default"] ? {
          className: btnClassName,
          size: size
        } : {}));
      } else {
        button = React.createElement(_button["default"], {
          className: btnClassName,
          type: "primary",
          size: size,
          disabled: disabled,
          key: "enterButton",
          onClick: _this.onSearch
        }, enterButton === true ? React.createElement(_icon["default"], {
          type: "search"
        }) : enterButton);
      }

      if (addonAfter) {
        return [button, addonAfter];
      }

      return button;
    };

    _this.renderSearch = function (_ref) {
      var getPrefixCls = _ref.getPrefixCls;

      var _a = _this.props,
          customizePrefixCls = _a.prefixCls,
          customizeInputPrefixCls = _a.inputPrefixCls,
          size = _a.size,
          enterButton = _a.enterButton,
          className = _a.className,
          restProps = __rest(_a, ["prefixCls", "inputPrefixCls", "size", "enterButton", "className"]);

      delete restProps.onSearch;
      var prefixCls = getPrefixCls('input-search', customizePrefixCls);
      var inputPrefixCls = getPrefixCls('input', customizeInputPrefixCls);
      var inputClassName;

      if (enterButton) {
        var _classNames;

        inputClassName = (0, _classnames["default"])(prefixCls, className, (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-enter-button"), !!enterButton), _defineProperty(_classNames, "".concat(prefixCls, "-").concat(size), !!size), _classNames));
      } else {
        inputClassName = (0, _classnames["default"])(prefixCls, className);
      }

      return React.createElement(_Input["default"], _extends({
        onPressEnter: _this.onSearch
      }, restProps, {
        size: size,
        prefixCls: inputPrefixCls,
        addonAfter: _this.renderAddonAfter(prefixCls),
        suffix: _this.renderSuffix(prefixCls),
        ref: _this.saveInput,
        className: inputClassName
      }));
    };

    return _this;
  }

  _createClass(Search, [{
    key: "focus",
    value: function focus() {
      this.input.focus();
    }
  }, {
    key: "blur",
    value: function blur() {
      this.input.blur();
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(_configProvider.ConfigConsumer, null, this.renderSearch);
    }
  }]);

  return Search;
}(React.Component);

exports["default"] = Search;
Search.defaultProps = {
  enterButton: false
};
//# sourceMappingURL=Search.js.map


/***/ }),

/***/ "./node_modules/antd/lib/input/index.js":
/*!**********************************************!*\
  !*** ./node_modules/antd/lib/input/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Input = _interopRequireDefault(__webpack_require__(/*! ./Input */ "./node_modules/antd/lib/input/Input.js"));

var _Group = _interopRequireDefault(__webpack_require__(/*! ./Group */ "./node_modules/antd/lib/input/Group.js"));

var _Search = _interopRequireDefault(__webpack_require__(/*! ./Search */ "./node_modules/antd/lib/input/Search.js"));

var _TextArea = _interopRequireDefault(__webpack_require__(/*! ./TextArea */ "./node_modules/antd/lib/input/TextArea.js"));

var _Password = _interopRequireDefault(__webpack_require__(/*! ./Password */ "./node_modules/antd/lib/input/Password.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_Input["default"].Group = _Group["default"];
_Input["default"].Search = _Search["default"];
_Input["default"].TextArea = _TextArea["default"];
_Input["default"].Password = _Password["default"];
var _default = _Input["default"];
exports["default"] = _default;
//# sourceMappingURL=index.js.map


/***/ }),

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
/* harmony import */ var antd_lib_input_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/input/style/css */ "./node_modules/antd/lib/input/style/css.js");
/* harmony import */ var antd_lib_input_style_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input_style_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/input */ "./node_modules/antd/lib/input/index.js");
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var antd_lib_menu_style_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/lib/menu/style/css */ "./node_modules/antd/lib/menu/style/css.js");
/* harmony import */ var antd_lib_menu_style_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(antd_lib_menu_style_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/lib/menu */ "./node_modules/antd/lib/menu/index.js");
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antd_lib_menu__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var antd_lib_input_number_style_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd/lib/input-number/style/css */ "./node_modules/antd/lib/input-number/style/css.js");
/* harmony import */ var antd_lib_input_number_style_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input_number_style_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var antd_lib_input_number__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! antd/lib/input-number */ "./node_modules/antd/lib/input-number/index.js");
/* harmony import */ var antd_lib_input_number__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input_number__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var antd_lib_layout_style_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! antd/lib/layout/style/css */ "./node_modules/antd/lib/layout/style/css.js");
/* harmony import */ var antd_lib_layout_style_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout_style_css__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! antd/lib/layout */ "./node_modules/antd/lib/layout/index.js");
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_selectors_game_selector__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../redux/selectors/game.selector */ "./src/redux/selectors/game.selector.ts");
/* harmony import */ var _redux_actions_game_action__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../redux/actions/game.action */ "./src/redux/actions/game.action.ts");
/* harmony import */ var _services_game_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../services/game.service */ "./src/services/game.service.ts");















var _jsxFileName = "/Users/tianxianggao/Desktop/2048/src/layout/Header/index.tsx";







var FixedHeader = Object(styled_components__WEBPACK_IMPORTED_MODULE_16__["default"])(antd_lib_layout__WEBPACK_IMPORTED_MODULE_14___default.a.Header).withConfig({
  displayName: "Header__FixedHeader",
  componentId: "noh5uo-0"
})(["position:fixed;z-index:1;width:100%;"]);

var Header = function Header() {
  var game = Object(react_redux__WEBPACK_IMPORTED_MODULE_17__["useSelector"])(_redux_selectors_game_selector__WEBPACK_IMPORTED_MODULE_18__["$game"]);
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_17__["useDispatch"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_15__["useState"])(game.width),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_12__["default"])(_useState, 2),
      width = _useState2[0],
      setWidth = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_15__["useState"])(game.height),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_12__["default"])(_useState3, 2),
      height = _useState4[0],
      setHeight = _useState4[1];

  function onHeightChange(newHeight) {
    if (newHeight) {
      setHeight(newHeight);
    }
  }

  function onWidthChange(newWidth) {
    if (newWidth) {
      setWidth(newWidth);
    }
  }

  function restart() {
    var newBoard = Object(_services_game_service__WEBPACK_IMPORTED_MODULE_20__["generateEmptyBoard"])(width, height);
    Object(_services_game_service__WEBPACK_IMPORTED_MODULE_20__["addRandomCell"])(newBoard, 2);
    dispatch(_redux_actions_game_action__WEBPACK_IMPORTED_MODULE_19__["default"].initialize({
      board: newBoard,
      width: width,
      height: height
    }));
  }

  return react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(FixedHeader, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 24,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_9___default.a, {
    theme: "dark",
    mode: "horizontal",
    defaultSelectedKeys: ['2'],
    style: {
      lineHeight: '64px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_9___default.a.Item, {
    key: "1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "Height:", react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(antd_lib_input_number__WEBPACK_IMPORTED_MODULE_11___default.a, {
    min: 1,
    max: 10,
    value: height,
    onChange: onHeightChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_9___default.a.Item, {
    key: "2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(antd_lib_input__WEBPACK_IMPORTED_MODULE_7___default.a.Group, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(antd_lib_input_number__WEBPACK_IMPORTED_MODULE_11___default.a, {
    min: 1,
    max: 10,
    value: width,
    onChange: onWidthChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_9___default.a.Item, {
    key: "3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_5___default.a, {
    onClick: restart,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, "Restart"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=index.js.e2145053baa32b7b210a.hot-update.js.map