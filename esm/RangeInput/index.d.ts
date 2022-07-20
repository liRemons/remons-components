import React from 'react';
import type { InputProps } from 'antd';
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
declare const RangeInput: React.FC<RangeInputProps>;
export default RangeInput;
