## SearchForm

#### 使用示例

```tsx
import React from 'react';
import { SearchForm, FormItem } from 'remons-components';

const items = [
  { name: 'test1', component: 'input', label: '测试字段1' },
  { name: 'test2', component: 'input', label: '测试字段2' },
  { name: 'test3', component: 'input', label: '测试字段3' },
  { name: 'test4', component: 'input', label: '测试字段4' },
  { name: 'test5', component: 'input', label: '测试字段5' },
  { name: 'test6', component: 'input', label: '测试字段6' },
  { name: 'test7', component: 'input', label: '测试字段7' },
  { name: 'test8', component: 'input', label: '测试字段8' },
  { name: 'test9', component: 'input', label: '测试字段9' },
  { name: 'test10', component: 'input', label: '测试字段10' },
];

export default () => {
  const onSearch = (values) => {
    console.log(values);
  };
  return (
    <SearchForm cols={2} onSearch={onSearch}>
      {items.map((item) => (
        <FormItem {...item} key={item.name} />
      ))}
    </SearchForm>
  );
};
```
