import React from 'react';
import type { InputNumberProps } from 'antd';
import { InputNumber } from 'antd';

interface IProps {
  /**
   * @description 受控值
   */
  value?: Array<number>;
  /**
   * @description 默认值
   */
  defaultValue?: Array<number>;
  /**
   * @description 输入框个数
   */
  count?: 2 | 3 | 4;
  /**
   * @description 透传给输入框的属性集，继承自 antd InputNumber API
   */
  numberInputProps?: InputNumberProps;
  /**
   * @description 输入提示
   */
  placeholder?: Array<string>;
  /**
   * @description 输入框改变时触发
   */
  onChange?: (val: any) => void;
  /**
   * @description 单位，可选
   */
  unit?: Array<string>;
  /**
   * @description 连接符号
   */
  connectSymbol?: string;
}

/**
 * @description: 组件代码
 */
const SizeInput: React.FC<IProps> = ({
  count = 3,
  placeholder = ['长', '宽', '高'],
  value = [],
  defaultValue = [],
  numberInputProps = {},
  onChange,
  unit = ['m', 'cm', 'mm'],
  connectSymbol = '-',
}) => {
  /**
   * @description: 数据改变触发
   * @param {any} val 值
   * @param {number} index 当前组件索引
   */
  const handleChange = (val: any, index: number) => {
    let newValue = [...value];
    newValue[index] = val;
    onChange?.(newValue);
  };
  return (
    <div>
      {[...Array(count)].map((item: any, index: number) => (
        <span key={index}>
          <InputNumber
            formatter={(value) => `${value}${unit[index]}`}
            parser={(value) => value!.replace(`${unit[index]}`, '')}
            onChange={(val) => handleChange(val, index)}
            value={value[index]}
            defaultValue={defaultValue[index]}
            placeholder={placeholder[index]}
            {...numberInputProps}
          />
          {index < count - 1 ? ` ${connectSymbol} ` : ''}
        </span>
      ))}
    </div>
  );
};

export default SizeInput;
