import {
  Input,
  InputNumber,
  DatePicker,
  Select,
  Radio,
  Checkbox,
  Rate,
  Slider,
  TimePicker,
  Upload,
  TreeSelect,
  Cascader,
  Transfer,
  Switch,
} from 'antd';
import SizeInput from '../SizeInput';
import RangeInput from '../RangeInput';
import Mentions from '../Mentions';
import { ReactElement } from 'react';
const { TextArea } = Input;
const { Group: RadioGroup } = Radio;
const { Group: CheckboxGroup } = Checkbox;
const { RangePicker } = DatePicker;
const { RangePicker: RangeTimePicker } = TimePicker;

interface ComType {
  [propName: string]: React.ReactNode & ReactElement & any;
}

export const Com: ComType = {
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
