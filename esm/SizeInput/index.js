function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

import React from 'react';
import { InputNumber } from 'antd';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

/**
 * @description: 组件代码
 */
var SizeInput = function SizeInput(_ref) {
  var _ref$count = _ref.count,
      count = _ref$count === void 0 ? 3 : _ref$count,
      _ref$placeholder = _ref.placeholder,
      placeholder = _ref$placeholder === void 0 ? ['长', '宽', '高'] : _ref$placeholder,
      _ref$value = _ref.value,
      value = _ref$value === void 0 ? [] : _ref$value,
      _ref$defaultValue = _ref.defaultValue,
      defaultValue = _ref$defaultValue === void 0 ? [] : _ref$defaultValue,
      _ref$numberInputProps = _ref.numberInputProps,
      numberInputProps = _ref$numberInputProps === void 0 ? {} : _ref$numberInputProps,
      onChange = _ref.onChange,
      _ref$unit = _ref.unit,
      unit = _ref$unit === void 0 ? ['m', 'cm', 'mm'] : _ref$unit,
      _ref$connectSymbol = _ref.connectSymbol,
      connectSymbol = _ref$connectSymbol === void 0 ? '-' : _ref$connectSymbol;

  /**
   * @description: 数据改变触发
   * @param {any} val 值
   * @param {number} index 当前组件索引
   */
  var handleChange = function handleChange(val, index) {
    var newValue = _toConsumableArray(value);

    newValue[index] = val;
    onChange === null || onChange === void 0 ? void 0 : onChange(newValue);
  };

  return /*#__PURE__*/_jsx("div", {
    children: _toConsumableArray(Array(count)).map(function (item, index) {
      return /*#__PURE__*/_jsxs("span", {
        children: [/*#__PURE__*/_jsx(InputNumber, _objectSpread({
          formatter: function formatter(value) {
            return "".concat(value).concat(unit[index]);
          },
          parser: function parser(value) {
            return value.replace("".concat(unit[index]), '');
          },
          onChange: function onChange(val) {
            return handleChange(val, index);
          },
          value: value[index],
          defaultValue: defaultValue[index],
          placeholder: placeholder[index]
        }, numberInputProps)), index < count - 1 ? " ".concat(connectSymbol, " ") : '']
      }, index);
    })
  });
};

export default SizeInput;