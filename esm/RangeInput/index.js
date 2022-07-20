function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React from 'react';
import { Input } from 'antd';
import "./index.css";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

/**
 * @description: 组件代码
 */
var RangeInput = function RangeInput(_ref) {
  var _ref$value = _ref.value,
      value = _ref$value === void 0 ? [] : _ref$value,
      _ref$defaultValue = _ref.defaultValue,
      defaultValue = _ref$defaultValue === void 0 ? [] : _ref$defaultValue,
      onChange = _ref.onChange,
      _ref$startInputProps = _ref.startInputProps,
      startInputProps = _ref$startInputProps === void 0 ? {} : _ref$startInputProps,
      _ref$endInputProps = _ref.endInputProps,
      endInputProps = _ref$endInputProps === void 0 ? {} : _ref$endInputProps,
      _ref$placeholder = _ref.placeholder,
      placeholder = _ref$placeholder === void 0 ? ['开始值', '结束值'] : _ref$placeholder,
      _ref$connectSymbol = _ref.connectSymbol,
      connectSymbol = _ref$connectSymbol === void 0 ? '-' : _ref$connectSymbol;

  var _value = _slicedToArray(value, 2),
      startVal = _value[0],
      endVal = _value[1];

  var _defaultValue = _slicedToArray(defaultValue, 2),
      startDefaultValue = _defaultValue[0],
      endDefaultValue = _defaultValue[1];

  var _placeholder = _slicedToArray(placeholder, 2),
      startPlaceholder = _placeholder[0],
      endPlaceholder = _placeholder[1];
  /**
   * @description: 初始值改变触发
   * @param {any} e
   */


  var changeStart = function changeStart(e) {
    e.persist();
    onChange === null || onChange === void 0 ? void 0 : onChange([e.target.value, endVal]);
  };
  /**
   * @description: 结束值改变触发
   * @param {any} e
   */


  var changeEnd = function changeEnd(e) {
    onChange === null || onChange === void 0 ? void 0 : onChange([startVal, e.target.value]);
  };

  return /*#__PURE__*/_jsxs("div", {
    className: "range-input",
    children: [/*#__PURE__*/_jsx(Input, _objectSpread({
      placeholder: startPlaceholder,
      defaultValue: startDefaultValue,
      value: startVal,
      onChange: changeStart
    }, startInputProps)), " ".concat(connectSymbol, " "), /*#__PURE__*/_jsx(Input, _objectSpread({
      placeholder: endPlaceholder,
      defaultValue: endDefaultValue,
      value: endVal,
      onChange: changeEnd
    }, endInputProps))]
  });
};

export default RangeInput;