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
var ButtonBar_exports = {};
__export(ButtonBar_exports, {
  default: () => ButtonBar_default
});
module.exports = __toCommonJS(ButtonBar_exports);
var import_react = __toESM(require("react"));
var import_antd = require("antd");
var import_index = require("./index.css");
var ButtonBar = ({
  children,
  affixProps = { offsetBottom: 0 },
  bordered = true,
  background = "#fff",
  align = "center"
}) => {
  return /* @__PURE__ */ import_react.default.createElement(import_antd.Affix, __spreadValues({}, affixProps), /* @__PURE__ */ import_react.default.createElement("div", {
    style: { background, textAlign: align },
    className: ["button-bar", bordered ? "border" : ""].join(" ")
  }, /* @__PURE__ */ import_react.default.createElement(import_antd.Space, null, children)));
};
var ButtonBar_default = ButtonBar;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
