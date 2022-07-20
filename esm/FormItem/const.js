import { Input, InputNumber, DatePicker, Select, Radio, Checkbox, Rate, Slider, TimePicker, Upload, TreeSelect, Cascader, Transfer, Switch } from 'antd';
import SizeInput from "../SizeInput";
import RangeInput from "../RangeInput";
import Mentions from "../Mentions";
var TextArea = Input.TextArea;
var RadioGroup = Radio.Group;
var CheckboxGroup = Checkbox.Group;
var RangePicker = DatePicker.RangePicker;
var RangeTimePicker = TimePicker.RangePicker;
export var Com = {
  input: Input,
  inputPassword: Input.Password,
  textarea: TextArea,
  inputNumber: InputNumber,
  datePicker: DatePicker,
  rangePicker: RangePicker,
  timePicker: TimePicker,
  rangeTimePicker: RangeTimePicker,
  select: Select,
  radio: Radio,
  radioGroup: RadioGroup,
  checkbox: Checkbox,
  checkboxGroup: CheckboxGroup,
  rate: Rate,
  slider: Slider,
  upload: Upload,
  treeSelect: TreeSelect,
  cascader: Cascader,
  size: SizeInput,
  rangeInput: RangeInput,
  transfer: Transfer,
  switch: Switch,
  mentions: Mentions
};