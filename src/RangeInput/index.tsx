import React from 'react';
import type { InputProps } from 'antd';
import { Input } from 'antd';
import './index.css';

export interface RangeInputProps {
  /**
   * @description value
   */
  value?: Array<any>;
  /**
   * @description 默认值
   */
  defaultValue?: Array<any>;
  /**
   * @description 输入框值发生变化触发
   */
  onChange?: (val?: Array<any>) => void;
  /**
   * @description 透传给开始值的参数：参考 antd InputNumber API
   */
  startInputProps?: InputProps;
  /**
   * @description 透传给结束值的参数：参考 antd InputNumber API
   */
  endInputProps?: InputProps;
  /**
   * @description placeholder
   */
  placeholder?: Array<string>;
  /**
   * @description 连接符号
   */
  connectSymbol?: string;
}

/**
 * @description: 组件代码
 */
const RangeInput: React.FC<RangeInputProps> = ({
  value = [],
  defaultValue = [],
  onChange,
  startInputProps = {},
  endInputProps = {},
  placeholder = ['开始值', '结束值'],
  connectSymbol = '-',
}) => {
  const [startVal, endVal] = value;
  const [startDefaultValue, endDefaultValue] = defaultValue;
  const [startPlaceholder, endPlaceholder] = placeholder;

  /**
   * @description: 初始值改变触发
   * @param {any} e
   */
  const changeStart = (e: any) => {
    e.persist();
    onChange?.([e.target.value, endVal]);
  };

  /**
   * @description: 结束值改变触发
   * @param {any} e
   */
  const changeEnd = (e: any) => {
    onChange?.([startVal, e.target.value]);
  };

  return (
    <div className="range-input">
      <Input
        placeholder={startPlaceholder}
        defaultValue={startDefaultValue}
        value={startVal}
        onChange={changeStart}
        {...startInputProps}
      />
      &nbsp;{` ${connectSymbol} `}&nbsp;
      <Input
        placeholder={endPlaceholder}
        defaultValue={endDefaultValue}
        value={endVal}
        onChange={changeEnd}
        {...endInputProps}
      />
    </div>
  );
};

export default RangeInput;
