## FormItem

基于 antd form 封装的简洁表单

##### component 字段默认提供了以下表单

| 元素            | 对应 antd 组件  |
| --------------- | --------------- |
| input           | Input           |
| inputPassword   | Input.Password  |
| inputNumber     | InputNumber     |
| textarea        | TextArea        |
| datePicker      | DatePicker      |
| rangePicker     | RangePicker     |
| timePicker      | TimePicker      |
| rangeTimePicker | RangeTimePicker |
| select          | Select          |
| radio           | Radio           |
| radioGroup      | RadioGroup      |
| checkbox        | Checkbox        |
| checkboxGroup   | CheckboxGroup   |
| rate            | Rate            |
| slider          | Slider          |
| upload          | Upload          |
| treeSelect      | TreeSelect      |
| cascader        | Cascader        |
| transfer        | Transfer        |
| switch          | Switch          |
| mentions        | Mentions        |

此外，为使用方便，还扩展了以下组件

| 元素       | 对应组件   |
| ---------- | ---------- |
| rangeInput | RangeInput |
| size       | SizeInput  |

##### 使用方式示例

```tsx
import React from 'react';
import { Form, Upload } from 'antd';
import { FormItem } from 'remons-components';
import { PlusOutlined } from '@ant-design/icons';

const radioOptions = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange' },
];

const treeData = [
  {
    title: 'Node1',
    value: '0-0',
    children: [
      {
        title: 'Child Node1',
        value: '0-0-1',
      },
      {
        title: 'Child Node2',
        value: '0-0-2',
      },
    ],
  },
  {
    title: 'Node2',
    value: '0-1',
  },
];

const cascaderOptions = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];

const mockTransferData = Array.from({
  length: 20,
}).map((_, i) => ({
  key: i.toString(),
  title: `content${i + 1}`,
  description: `description of content${i + 1}`,
}));

const mentionsOptions = [
  { value: 'test1', label: 'test1' },
  { value: 'test2', label: 'test2' },
  { value: 'test3', label: 'test3' },
];

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 20 },
};

const items = [
  {
    label: 'upload',
    component: 'upload',
    valuePropName: 'fileList',
    name: 'fileList',
    componentProps: {
      listType: 'picture-card',
      children: (
        <div>
          <PlusOutlined />
        </div>
      ),
    },
  },
  { label: 'input', component: 'input' },
  { label: 'inputPassword', component: 'inputPassword' },
  { label: 'inputNumber', component: 'inputNumber', componentProps: { min: 0 } },
  { label: 'textarea', component: 'textarea' },
  {
    label: 'select',
    component: 'select',
    componentProps: {
      options: [{ label: '测试', value: 'test' }],
    },
  },
  { label: 'datePicker', component: 'datePicker' },
  { label: 'rangePicker', component: 'rangePicker' },
  { label: 'timePicker', component: 'timePicker' },
  { label: 'rangeTimePicker', component: 'rangeTimePicker' },
  { label: 'radio', component: 'radio', componentProps: { children: '测试' } },
  { label: 'radioGroup', component: 'radioGroup', componentProps: { options: radioOptions } },
  { label: 'checkbox', component: 'checkbox', componentProps: { children: '测试' } },
  {
    label: 'checkboxGroup',
    component: 'checkboxGroup',
    componentProps: {
      options: ['Apple', 'Pear', 'Orange'],
    },
  },
  { label: 'rate', component: 'rate' },
  { label: 'slider', component: 'slider' },
  { label: 'treeSelect', component: 'treeSelect', componentProps: { treeData } },
  { label: 'cascader', component: 'cascader', componentProps: { options: cascaderOptions } },
  {
    label: 'transfer',
    component: 'transfer',
    componentProps: {
      dataSource: mockTransferData,
      titles: ['Source', 'Target'],
      render: (item) => item.title,
    },
  },
  { label: 'switch', component: 'switch' },
  { label: 'size', component: 'size' },
  { label: 'rangeInput', component: 'rangeInput' },
  { label: 'mentions', component: 'mentions', componentProps: { options: mentionsOptions } },
];

export default () => (
  <Form {...layout}>
    {items.map((item) => (
      <FormItem key={item.label} {...item} />
    ))}
  </Form>
);
```

<Alert type="info">
  继承自 antd Form.Item API, 支持传入 Form.Item API
</Alert>

<API exports='["IPropsOption"]'></API>
