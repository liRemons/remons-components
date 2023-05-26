### Layout

基于 Layout 封装

#### 示例

```tsx
import React from 'react';
import { Layout } from 'remons-components';
const { Section } = Layout;
export default () => {
  const handleClick = () => {
    alert('test');
  };
  return (
    <Layout>
      <Section title="测试" subTitle="测试副标题">
        内容
        <Section title="测试1-1" onClick={handleClick} />
        <Section title="测试1-2" />
        <Section title="测试1-3" />
      </Section>
    </Layout>
  );
};
```

<API export="['MyLayoutType', 'SectionProps']"></API>
