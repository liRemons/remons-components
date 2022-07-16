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
} from 'antd';
import { ReactElement } from 'react';
const { TextArea } = Input;

interface ComType {
  [propName: string]: React.ReactNode & ReactElement & any;
}

export const Com: ComType = {
  input: Input,
  inputPassword: Input.Password,
  textarea: TextArea,
  inputNumber: InputNumber,
  datePicker: DatePicker,
  select: Select,
  radio: Radio,
  checkbox: Checkbox,
  rate: Rate,
  slider: Slider,
  timePicker: TimePicker,
  upload: Upload,
  treeSelect: TreeSelect,
  cascader: Cascader,
};
