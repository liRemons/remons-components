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
var SizeInput_exports = {};
__export(SizeInput_exports, {
  default: () => SizeInput_default
});
module.exports = __toCommonJS(SizeInput_exports);
var import_react = __toESM(require("react"));
var import_antd = require("antd");
var SizeInput = ({
  count = 3,
  placeholder = ["\u957F", "\u5BBD", "\u9AD8"],
  value = [],
  defaultValue = [],
  numberInputProps = {},
  onChange,
  unit = ["m", "cm", "mm"],
  connectSymbol = "-"
}) => {
  const handleChange = (val, index) => {
    let newValue = [...value];
    newValue[index] = val;
    onChange == null ? void 0 : onChange(newValue);
  };
  return /* @__PURE__ */ import_react.default.createElement("div", null, [...Array(count)].map((item, index) => /* @__PURE__ */ import_react.default.createElement("span", {
    key: index
  }, /* @__PURE__ */ import_react.default.createElement(import_antd.InputNumber, __spreadValues({
    formatter: (value2) => `${value2}${unit[index]}`,
    parser: (value2) => value2.replace(`${unit[index]}`, ""),
    onChange: (val) => handleChange(val, index),
    value: value[index],
    defaultValue: defaultValue[index],
    placeholder: placeholder[index]
  }, numberInputProps)), index < count - 1 ? ` ${connectSymbol} ` : "")));
};
var SizeInput_default = SizeInput;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
