## ToolBar

工具栏，基于 ActionList

#### 使用示例

```tsx
import React from 'react';
import { ToolBar } from 'remons-components';
import { DownloadOutlined } from '@ant-design/icons';

const leftActionList = [
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
    type: 'primary',
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

const rightActionList = [
  {
    label: '导出',
    key: 'export',
    type: 'link',
    icon: <DownloadOutlined />,
  },
];

const onActionClick = (key, data) => {
  console.log({ key, data });
};

export default () => {
  return (
    <ToolBar
      onActionClick={onActionClick}
      leftActionList={leftActionList}
      rightActionList={rightActionList}
    />
  );
};
```

<API></API>
