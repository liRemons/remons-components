import React from 'react';
import 'antd/dist/antd.css';
import type { FormItemProps } from 'antd';
interface IPropsOption {
    /**
     * @description 所支持的组件类型
     */
    component?: 'input' | 'inputPassword' | 'textarea' | 'inputNumber' | 'datePicker' | 'rangePicker' | 'timePicker' | 'rangeTimePicker' | 'select' | 'radio' | 'radioGroup' | 'checkbox' | 'checkboxGroup' | 'rate' | 'slider' | 'upload' | 'treeSelect' | 'cascader' | 'size' | 'rangeInput' | 'radioGroup' | 'switch' | 'transfer' | 'mentions' | any;
    /**
     * @description 透传到 FormItem 使用组件的参数
     */
    componentProps?: object;
}
export declare const IPropsOption: (props: IPropsOption) => null;
declare type IProps = IPropsOption & FormItemProps;
declare const MyForm: React.FC<IProps>;
export default MyForm;
