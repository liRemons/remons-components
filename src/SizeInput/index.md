## SizeInput

输入尺寸

#### 使用示例

```tsx
import React, { useState } from 'react';
import { SizeInput } from 'remons-components';

export default () => {
  const [val, setVal] = useState([1, 2, 3]);

  const handleChange = (val) => {
    setVal(val);
  };

  return (
    <SizeInput
      defaultValue={val}
      onChange={handleChange}
      value={val}
      numberInputProps={{ min: 0, step: 0.5 }}
    />
  );
};
```

<API></API>
