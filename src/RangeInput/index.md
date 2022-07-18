## RangeInput

输入区间

#### 使用示例

```tsx
import React, { useState } from 'react';
import { RangeInput } from 'remons-components';

export default () => {
  const [val, setVal] = useState([]);

  const handleChange = (val) => {
    setVal(val);
  };

  const startInputProps = {
    suffix: 'm',
    maxLength: 20,
  };

  return (
    <RangeInput startInputProps={startInputProps} value={val} onChange={handleChange}></RangeInput>
  );
};
```

<API></API>
