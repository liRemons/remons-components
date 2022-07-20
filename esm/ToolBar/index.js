var _excluded = ["rightActionList", "leftActionList", "bordered"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import ActionList from "../ActionList";
import "./index.css";
import { jsx as _jsx } from "react/jsx-runtime";

var ToolBar = function ToolBar(_ref) {
  var _ref$rightActionList = _ref.rightActionList,
      rightActionList = _ref$rightActionList === void 0 ? [] : _ref$rightActionList,
      _ref$leftActionList = _ref.leftActionList,
      leftActionList = _ref$leftActionList === void 0 ? [] : _ref$leftActionList,
      _ref$bordered = _ref.bordered,
      bordered = _ref$bordered === void 0 ? true : _ref$bordered,
      others = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/_jsx("div", {
    className: ['toolbar', bordered ? 'border' : ''].join(' '),
    children: [leftActionList, rightActionList].map(function (actions, index) {
      return /*#__PURE__*/_jsx(ActionList, _objectSpread({
        actions: actions
      }, others), index);
    })
  });
};

export default ToolBar;