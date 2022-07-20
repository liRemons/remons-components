var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
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

// const.tsx
var const_exports = {};
__export(const_exports, {
  Com: () => Com
});
module.exports = __toCommonJS(const_exports);
var import_antd = require("antd");
var import_SizeInput = __toESM(require("../SizeInput"));
var import_RangeInput = __toESM(require("../RangeInput"));
var import_Mentions = __toESM(require("../Mentions"));
var { TextArea } = import_antd.Input;
var { Group: RadioGroup } = import_antd.Radio;
var { Group: CheckboxGroup } = import_antd.Checkbox;
var { RangePicker } = import_antd.DatePicker;
var { RangePicker: RangeTimePicker } = import_antd.TimePicker;
var Com = {
  input: import_antd.Input,
  inputPassword: import_antd.Input.Password,
  textarea: TextArea,
  inputNumber: import_antd.InputNumber,
  datePicker: import_antd.DatePicker,
  rangePicker: RangePicker,
  timePicker: import_antd.TimePicker,
  rangeTimePicker: RangeTimePicker,
  select: import_antd.Select,
  radio: import_antd.Radio,
  radioGroup: RadioGroup,
  checkbox: import_antd.Checkbox,
  checkboxGroup: CheckboxGroup,
  rate: import_antd.Rate,
  slider: import_antd.Slider,
  upload: import_antd.Upload,
  treeSelect: import_antd.TreeSelect,
  cascader: import_antd.Cascader,
  size: import_SizeInput.default,
  rangeInput: import_RangeInput.default,
  transfer: import_antd.Transfer,
  switch: import_antd.Switch,
  mentions: import_Mentions.default
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Com
});
