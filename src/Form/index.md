### Form

基于 antd Form 封装

<Alert type="error">
 特别注意⚠️：目前仅支持使用组件内 FormItem 标签，请使用 FormItem 组件（替代 antd Form.Item）
</Alert>

#### 示例

```tsx
import React, { useEffect } from 'react';
import { Form, FormItem } from 'remons-components';

export default () => {
  const [form] = Form.useForm();
  useEffect(() => {
    form.setFieldsValue({ test: 1 });
  }, []);

  const items = [
    { label: '测试', name: 'test', component: 'input' },
    { label: '测试1', name: 'test1', component: 'input' },
    { label: '测试2', name: 'test2', component: 'input' },
    { label: '测试3', name: 'test3', component: 'input' },
    { label: '测试4', name: 'test4', component: 'input' },
  ];

  const formLayout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };

  return (
    <Form {...formLayout} cols={3} isPreview form={form} labelAlign="right" size="small">
      {items.map((item) => (
        <FormItem key={item.name} {...item} />
      ))}
    </Form>
  );
};
```

<Alert type="info">
  继承自 antd Form API, 支持传入 Form API
</Alert>

<API exports='["IProps"]'></API>
