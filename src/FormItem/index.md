## FormItem

基于 antd form 封装的简洁表单

##### component 字段默认提供了以下表单

| 元素          | 对应 antd 组件 |
| ------------- | -------------- |
| input         | Input          |
| inputPassword | Input.Password |
| inputNumber   | InputNumber    |
| textarea      | TextArea       |
| datePicker    | DatePicker     |
| select        | Select         |
| radio         | Radio          |
| checkbox      | Checkbox       |
| rate          | Rate           |
| slider        | Slider         |
| timePicker    | TimePicker     |
| upload        | Upload         |
| treeSelect    | TreeSelect     |
| cascader      | Cascader       |

此外，为使用方便，还扩展了以下组件

| 元素       | 对应组件   |
| ---------- | ---------- |
| rangeInput | RangeInput |
| size       | SizeInput  |

##### 使用方式示例

```tsx
import React from 'react';
import { Form } from 'antd';
import { FormItem } from 'remons-components';

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 20 },
};

const items = [
  { label: '输入', component: 'input' },
  { label: '数字', component: 'inputNumber', componentProps: { min: 0 } },
  {
    label: '下拉选择',
    component: 'select',
    componentProps: {
      options: [{ label: '测试', value: 'test' }],
    },
  },
];

export default () => (
  <Form {...layout}>
    {items.map((item) => (
      <FormItem key={item.label} {...item} />
    ))}
  </Form>
);
```

<API exports='["IPropsOption"]'></API>

<Alert type="info">
  其余字段请参考 antd Form.Item
</Alert>
