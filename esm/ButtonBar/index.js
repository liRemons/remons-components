function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import { Space, Affix } from 'antd';
import "./index.css";
import { jsx as _jsx } from "react/jsx-runtime";

var ButtonBar = function ButtonBar(_ref) {
  var children = _ref.children,
      _ref$affixProps = _ref.affixProps,
      affixProps = _ref$affixProps === void 0 ? {
    offsetBottom: 0
  } : _ref$affixProps,
      _ref$bordered = _ref.bordered,
      bordered = _ref$bordered === void 0 ? true : _ref$bordered,
      _ref$background = _ref.background,
      background = _ref$background === void 0 ? '#fff' : _ref$background,
      _ref$align = _ref.align,
      align = _ref$align === void 0 ? 'center' : _ref$align;
  return /*#__PURE__*/_jsx(Affix, _objectSpread(_objectSpread({}, affixProps), {}, {
    children: /*#__PURE__*/_jsx("div", {
      style: {
        background: background,
        textAlign: align
      },
      className: ['button-bar', bordered ? 'border' : ''].join(' '),
      children: /*#__PURE__*/_jsx(Space, {
        children: children
      })
    })
  }));
};

export default ButtonBar;