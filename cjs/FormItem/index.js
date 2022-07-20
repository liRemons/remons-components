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
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
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
var FormItem_exports = {};
__export(FormItem_exports, {
  IPropsOption: () => IPropsOption,
  default: () => FormItem_default
});
module.exports = __toCommonJS(FormItem_exports);
var import_react = __toESM(require("react"));
var import_antd = require("antd/dist/antd.css");
var import_antd2 = require("antd");
var import_const = require("./const");
var IPropsOption = (props) => null;
var MyForm = (_a) => {
  var _b = _a, { component, componentProps, children } = _b, others = __objRest(_b, ["component", "componentProps", "children"]);
  let ReCompont = null;
  if (component) {
    if (typeof component === "string") {
      ReCompont = import_const.Com[component];
    } else {
      ReCompont = component;
    }
  }
  return /* @__PURE__ */ import_react.default.createElement(import_antd2.Form.Item, __spreadValues({}, others), ReCompont ? /* @__PURE__ */ import_react.default.createElement(ReCompont, __spreadValues({}, componentProps)) : children);
};
var FormItem_default = MyForm;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  IPropsOption
});
