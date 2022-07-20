var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
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
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
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
var SearchForm_exports = {};
__export(SearchForm_exports, {
  FoldProps: () => FoldProps,
  IPropsOptions: () => IPropsOptions,
  SearchButtonProps: () => SearchButtonProps,
  default: () => SearchForm_default
});
module.exports = __toCommonJS(SearchForm_exports);
var import_react = __toESM(require("react"));
var import_antd = require("antd");
var import_icons = require("@ant-design/icons");
var import_index = require("./index.css");
var IPropsOptions = (props) => null;
var SearchButtonProps = (props) => null;
var FoldProps = (props) => null;
var SearchForm = ({
  onSearch,
  onReset,
  children = [],
  cols = 3,
  rows = 2,
  submitProps = {},
  cancelProps = {},
  foldProps = {},
  resetNames,
  buttonAlign = "center"
}) => {
  const [form] = import_antd.Form.useForm();
  const [fold, setFold] = (0, import_react.useState)(true);
  const colSpan = 24 / cols;
  const childrenFold = children.slice(0, cols * rows);
  const renderFold = () => {
    return children.length > cols * rows && /* @__PURE__ */ import_react.default.createElement("div", {
      className: "searchForm-fold"
    }, /* @__PURE__ */ import_react.default.createElement(import_antd.Button, {
      type: "link",
      onClick: () => setFold(!fold)
    }, fold ? (foldProps == null ? void 0 : foldProps.foldText) || "\u663E\u793A\u66F4\u591A" : (foldProps == null ? void 0 : foldProps.unfoldText) || "\u6536\u8D77", fold ? /* @__PURE__ */ import_react.default.createElement(import_icons.DownOutlined, null) : /* @__PURE__ */ import_react.default.createElement(import_icons.UpOutlined, null)));
  };
  const renderSearchBtn = () => {
    return /* @__PURE__ */ import_react.default.createElement("div", {
      className: "searchForm-button",
      style: { textAlign: buttonAlign }
    }, /* @__PURE__ */ import_react.default.createElement(import_antd.Space, null, (submitProps == null ? void 0 : submitProps.isShow) !== false && /* @__PURE__ */ import_react.default.createElement(import_antd.Button, __spreadValues({
      type: "primary",
      htmlType: "submit"
    }, submitProps), (submitProps == null ? void 0 : submitProps.text) || "\u67E5\u8BE2"), (cancelProps == null ? void 0 : cancelProps.isShow) !== false && /* @__PURE__ */ import_react.default.createElement(import_antd.Button, __spreadProps(__spreadValues({
      htmlType: "button"
    }, cancelProps), {
      onClick: () => {
        form.resetFields(resetNames);
        onReset == null ? void 0 : onReset();
      }
    }), (cancelProps == null ? void 0 : cancelProps.text) || "\u91CD\u7F6E")));
  };
  return /* @__PURE__ */ import_react.default.createElement(import_antd.Form, {
    form,
    onFinish: onSearch
  }, /* @__PURE__ */ import_react.default.createElement(import_antd.Row, {
    gutter: 24
  }, (fold ? childrenFold : children).map((child, index) => /* @__PURE__ */ import_react.default.createElement(import_antd.Col, {
    key: index,
    span: colSpan
  }, child))), renderFold(), renderSearchBtn());
};
var SearchForm_default = SearchForm;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  FoldProps,
  IPropsOptions,
  SearchButtonProps
});
