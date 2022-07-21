## ActionList

行动点组

#### 使用示例

```tsx
import React from 'react';
import { ActionList } from 'remons-components';
import { DownloadOutlined } from '@ant-design/icons';

export default () => {
  const actions = [
    {
      label: '测试1',
      key: 'test1',
      type: 'primary',
      icon: <DownloadOutlined />,
    },
    {
      label: '测试2',
      key: 'test2',
      type: 'link',
    },
    {
      label: '测试3',
      key: 'test3',
      children: [
        {
          key: 'test3-1',
          label: '测试3-1',
        },
        {
          key: 'test3-2',
          label: '测试3-2',
        },
        {
          key: 'test3-3',
          label: '测试3-3',
        },
      ],
    },
  ];

  const onActionClick = (key, data) => {
    console.log(key, data);
  };
  return <ActionList onActionClick={onActionClick} actions={actions} />;
};
```

<API exports='["IProps","ActionType"]'></API>
