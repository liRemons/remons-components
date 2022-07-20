function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import { Button, Dropdown, Menu, Space } from 'antd';
import { jsx as _jsx } from "react/jsx-runtime";

/**
 * @description: 为导出API，非业务代码
 */
export var ActionType = function ActionType(props) {
  return null;
};
export var IProps = function IProps(props) {
  return null;
};
/**
 * @description: 组件
 */

var ActionList = function ActionList(_ref) {
  var _ref$actions = _ref.actions,
      actions = _ref$actions === void 0 ? [] : _ref$actions,
      onActionClick = _ref.onActionClick,
      _ref$menuTrigger = _ref.menuTrigger,
      menuTrigger = _ref$menuTrigger === void 0 ? ['click'] : _ref$menuTrigger;

  var onMenuClick = function onMenuClick(_ref2, data) {
    var key = _ref2.key;
    onActionClick === null || onActionClick === void 0 ? void 0 : onActionClick(key, data);
  };
  /**
   * @description: 渲染 Dropdown.Button
   * @param {MenuProps} data 数据源
   * @param {ActionType} item 父级数据
   */


  var menu = function menu(data, item) {
    return /*#__PURE__*/_jsx(Menu, {
      onClick: function onClick(e) {
        return onMenuClick(e, item);
      },
      items: data
    });
  };

  return /*#__PURE__*/_jsx(Space, {
    children: actions.map(function (item) {
      var _item$children;

      if (!((_item$children = item.children) !== null && _item$children !== void 0 && _item$children.length)) {
        return /*#__PURE__*/_jsx(Button, _objectSpread(_objectSpread({
          onClick: function onClick() {
            return onMenuClick({
              key: item.key
            }, item);
          }
        }, item), {}, {
          children: item.label
        }));
      } else {
        return /*#__PURE__*/_jsx(Dropdown.Button, _objectSpread(_objectSpread({
          trigger: menuTrigger,
          overlay: menu(item.children, item)
        }, item), {}, {
          children: item.label
        }));
      }
    })
  });
};

export default ActionList;