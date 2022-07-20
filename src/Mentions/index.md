## Mentions

提及

基于 antd Mentions 封装

#### 使用示例

```tsx
import React from 'react';
import { Mentions } from 'remons-components';

const options = [
  { value: 'test1', label: 'test1' },
  { value: 'test2', label: 'test2' },
  { value: 'test3', label: 'test3' },
];

export default () => {
  return <Mentions options={options} />;
};
```

<Alert type="info">
  继承自 antd Mention API, 支持传入 Mention API
</Alert>

<API exports='["IPropsType", "MentionsItemTypes"]'></API>
