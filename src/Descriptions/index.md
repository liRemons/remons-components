## Descriptions

描述列表

基于 antd Descriptions 封装，可以指定数据源和字段名，组件会自动解析

<Alert type="info">
  支持解析链式字段，例如 a.b.c
</Alert>

#### 使用示例

```tsx
import React from 'react';
import { Descriptions } from 'remons-components';

const dataSource = {
  username: 'Zhou Maomao',
  tel: 1810000000,
  live: 'Hangzhou, Zhejiang',
  remark: 'empty',
  address: 'No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China',
  month: 1658217401814,
  others: {
    nickName: 'remons',
  },
};

const columns = [
  { label: '用户名', name: 'username' },
  { label: '联系方式', name: 'tel' },
  { label: '居住地', name: 'live' },
  { label: '昵称', name: 'others.nickName' },
  { label: '地址', name: 'address', span: 2 },
  {
    label: '当前月份',
    name: 'month',
    render: (name, value, record) => new Date(value).getMonth() + 1,
  },
];

export default () => {
  return <Descriptions bordered title="测试" dataSource={dataSource} columns={columns} />;
};
```

<Alert type="info">
  继承自 antd Descriptions API, 支持传入 Descriptions API
</Alert>

<API exports='["IPropsOptions", "DescriptionsItemType"]'></API>
