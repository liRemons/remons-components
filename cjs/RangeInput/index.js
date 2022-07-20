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
var RangeInput_exports = {};
__export(RangeInput_exports, {
  default: () => RangeInput_default
});
module.exports = __toCommonJS(RangeInput_exports);
var import_react = __toESM(require("react"));
var import_antd = require("antd");
var import_index = require("./index.css");
var RangeInput = ({
  value = [],
  defaultValue = [],
  onChange,
  startInputProps = {},
  endInputProps = {},
  placeholder = ["\u5F00\u59CB\u503C", "\u7ED3\u675F\u503C"],
  connectSymbol = "-"
}) => {
  const [startVal, endVal] = value;
  const [startDefaultValue, endDefaultValue] = defaultValue;
  const [startPlaceholder, endPlaceholder] = placeholder;
  const changeStart = (e) => {
    e.persist();
    onChange == null ? void 0 : onChange([e.target.value, endVal]);
  };
  const changeEnd = (e) => {
    onChange == null ? void 0 : onChange([startVal, e.target.value]);
  };
  return /* @__PURE__ */ import_react.default.createElement("div", {
    className: "range-input"
  }, /* @__PURE__ */ import_react.default.createElement(import_antd.Input, __spreadValues({
    placeholder: startPlaceholder,
    defaultValue: startDefaultValue,
    value: startVal,
    onChange: changeStart
  }, startInputProps)), ` ${connectSymbol} `, /* @__PURE__ */ import_react.default.createElement(import_antd.Input, __spreadValues({
    placeholder: endPlaceholder,
    defaultValue: endDefaultValue,
    value: endVal,
    onChange: changeEnd
  }, endInputProps)));
};
var RangeInput_default = RangeInput;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
