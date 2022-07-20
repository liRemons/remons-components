import React from 'react';
import type { InputNumberProps } from 'antd';
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
declare const SizeInput: React.FC<IProps>;
export default SizeInput;
