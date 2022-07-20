function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React, { useState } from 'react';
import { Form, Button, Row, Col, Space } from 'antd';
import { UpOutlined, DownOutlined } from '@ant-design/icons';
import "./index.css";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

/**
 * @description: 以下为导出 API
 */
export var IPropsOptions = function IPropsOptions(props) {
  return null;
};
export var SearchButtonProps = function SearchButtonProps(props) {
  return null;
};
export var FoldProps = function FoldProps(props) {
  return null;
};
/**
 * @description: 组件代码
 */

var SearchForm = function SearchForm(_ref) {
  var onSearch = _ref.onSearch,
      onReset = _ref.onReset,
      _ref$children = _ref.children,
      children = _ref$children === void 0 ? [] : _ref$children,
      _ref$cols = _ref.cols,
      cols = _ref$cols === void 0 ? 3 : _ref$cols,
      _ref$rows = _ref.rows,
      rows = _ref$rows === void 0 ? 2 : _ref$rows,
      _ref$submitProps = _ref.submitProps,
      submitProps = _ref$submitProps === void 0 ? {} : _ref$submitProps,
      _ref$cancelProps = _ref.cancelProps,
      cancelProps = _ref$cancelProps === void 0 ? {} : _ref$cancelProps,
      _ref$foldProps = _ref.foldProps,
      foldProps = _ref$foldProps === void 0 ? {} : _ref$foldProps,
      resetNames = _ref.resetNames,
      _ref$buttonAlign = _ref.buttonAlign,
      buttonAlign = _ref$buttonAlign === void 0 ? 'center' : _ref$buttonAlign;

  var _Form$useForm = Form.useForm(),
      _Form$useForm2 = _slicedToArray(_Form$useForm, 1),
      form = _Form$useForm2[0];

  var _useState = useState(true),
      _useState2 = _slicedToArray(_useState, 2),
      fold = _useState2[0],
      setFold = _useState2[1];

  var colSpan = 24 / cols;
  var childrenFold = children.slice(0, cols * rows);
  /**
   * @description: 渲染展开、收起
   */

  var renderFold = function renderFold() {
    return children.length > cols * rows && /*#__PURE__*/_jsx("div", {
      className: "searchForm-fold",
      children: /*#__PURE__*/_jsxs(Button, {
        type: "link",
        onClick: function onClick() {
          return setFold(!fold);
        },
        children: [fold ? (foldProps === null || foldProps === void 0 ? void 0 : foldProps.foldText) || '显示更多' : (foldProps === null || foldProps === void 0 ? void 0 : foldProps.unfoldText) || '收起', fold ? /*#__PURE__*/_jsx(DownOutlined, {}) : /*#__PURE__*/_jsx(UpOutlined, {})]
      })
    });
  };
  /**
   * @description: 渲染查询重置按钮
   */


  var renderSearchBtn = function renderSearchBtn() {
    return /*#__PURE__*/_jsx("div", {
      className: "searchForm-button",
      style: {
        textAlign: buttonAlign
      },
      children: /*#__PURE__*/_jsxs(Space, {
        children: [(submitProps === null || submitProps === void 0 ? void 0 : submitProps.isShow) !== false && /*#__PURE__*/_jsx(Button, _objectSpread(_objectSpread({
          type: "primary",
          htmlType: "submit"
        }, submitProps), {}, {
          children: (submitProps === null || submitProps === void 0 ? void 0 : submitProps.text) || '查询'
        })), (cancelProps === null || cancelProps === void 0 ? void 0 : cancelProps.isShow) !== false && /*#__PURE__*/_jsx(Button, _objectSpread(_objectSpread({
          htmlType: "button"
        }, cancelProps), {}, {
          onClick: function onClick() {
            form.resetFields(resetNames);
            onReset === null || onReset === void 0 ? void 0 : onReset();
          },
          children: (cancelProps === null || cancelProps === void 0 ? void 0 : cancelProps.text) || '重置'
        }))]
      })
    });
  };

  return /*#__PURE__*/_jsxs(Form, {
    form: form,
    onFinish: onSearch,
    children: [/*#__PURE__*/_jsx(Row, {
      gutter: 24,
      children: (fold ? childrenFold : children).map(function (child, index) {
        return /*#__PURE__*/_jsx(Col, {
          span: colSpan,
          children: child
        }, index);
      })
    }), renderFold(), renderSearchBtn()]
  });
};

export default SearchForm;