## FormItem

基于 antd from 封装的简洁表单

##### 默认提供了以下表单

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
  { label: '数字', component: 'inputNumber' },
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
      <FormItem {...item} />
    ))}
  </Form>
);
```

##### API

- 如需在表单项设置私有属性，请传入到 componentProps，具体属性参考 antd 各表单 API

| 参数           | 说明             | 类型   | 默认值 |
| -------------- | ---------------- | ------ | ------ |
| component      | 表单类型         | string | /      |
| componentProps | 透传到表单 props | object | /      |

- 其余字段继承 antd `Form.Item`，请参考 antd Form.Item API
