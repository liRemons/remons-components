var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// index.tsx
var ActionList_exports = {};
__export(ActionList_exports, {
  ActionType: () => ActionType,
  IProps: () => IProps,
  default: () => ActionList_default
});
module.exports = __toCommonJS(ActionList_exports);
var import_react = __toESM(require("react"));
var import_antd = require("antd");
var ActionType = (props) => null;
var IProps = (props) => null;
var ActionList = ({ actions = [], onActionClick, menuTrigger = ["click"] }) => {
  const onMenuClick = ({ key }, data) => {
    onActionClick == null ? void 0 : onActionClick(key, data);
  };
  const menu = (data, item) => /* @__PURE__ */ import_react.default.createElement(import_antd.Menu, {
    onClick: (e) => onMenuClick(e, item),
    items: data
  });
  return /* @__PURE__ */ import_react.default.createElement(import_antd.Space, null, actions.map((item) => {
    var _a;
    if (!((_a = item.children) == null ? void 0 : _a.length)) {
      return /* @__PURE__ */ import_react.default.createElement(import_antd.Button, __spreadValues({
        onClick: () => onMenuClick({ key: item.key }, item)
      }, item), item.label);
    } else {
      return /* @__PURE__ */ import_react.default.createElement(import_antd.Dropdown.Button, __spreadValues({
        trigger: menuTrigger,
        overlay: menu(item.children, item)
      }, item), item.label);
    }
  }));
};
var ActionList_default = ActionList;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ActionType,
  IProps
});
