import React from 'react';
import type { ButtonProps, FormProps } from 'antd';
import './index.css';
declare type SearchBtnProps = {
    /**
     * @description 按钮的文字
     */
    text?: string | React.ReactNode;
    /**
     * @description 是否展示
     */
    isShow?: Boolean;
};
declare type SearchButtonProps = SearchBtnProps & ButtonProps;
interface FoldProps {
    /**
     * @description 展开的文字
     */
    foldText?: string;
    /**
     * @description 收起的文字
     */
    unfoldText?: string;
}
export interface PropsTypes {
    /**
     * @description 查询按钮 props, 继承 antd Button 组件 API
     */
    submitProps?: SearchButtonProps;
    /**
     * @description 重置按钮 props, 继承 antd Button 组件 API
     */
    cancelProps?: SearchButtonProps;
    /**
     * @description 点击查询触发
     */
    onSearch?: FormProps['onFinish'];
    /**
     * @description 点击重置触发
     */
    onReset?: () => void;
    /**
     * @description 传递的组件，一般为 form item
     */
    children?: any;
    /**
     * @description 默认展开的行数（其余默认收起）
     */
    rows?: 2 | 3;
    /**
     * @description 默认每行展示的列数（一行的 FormItem 数量）
     */
    cols?: 2 | 3 | 4;
    /**
     * @description 展开收起 props
     */
    foldProps?: FoldProps;
    /**
     * @description 重置的字段
     */
    resetNames?: Array<string>;
    /**
     * @description 按钮位置
     */
    buttonAlign?: 'left' | 'center' | 'right';
}
declare type IProps = FormProps & PropsTypes;
/**
 * @description: 以下为导出 API
 */
export declare const IPropsOptions: (props: PropsTypes) => null;
export declare const SearchButtonProps: (props: SearchBtnProps) => null;
export declare const FoldProps: (props: FoldProps) => null;
/**
 * @description: 组件代码
 */
declare const SearchForm: React.FC<IProps>;
export default SearchForm;
