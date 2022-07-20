import React from 'react';
import type { DescriptionsProps } from 'antd';
interface DescriptionsItemType {
    /**
     * @description 描述标题
     */
    label: string;
    /**
     * @description 字段名
     */
    name: string;
    /**
     * @description 自定义渲染函数
     */
    render?: (name: string, value: any, record: object) => string;
    /**
     * @description 内容样式
     */
    contentStyle?: React.CSSProperties;
    /**
     * @description label 样式
     */
    labelStyle?: React.CSSProperties;
    /**
     * @description 列的数量
     */
    span?: number;
}
interface IPropsOptions {
    /**
     * @description 数据源
     */
    dataSource: object | any;
    /**
     * @description 解析的数据
     */
    columns: Array<DescriptionsItemType>;
}
/**
 * @description: 用来生成 API
 */
export declare const IPropsOptions: (props: IPropsOptions) => null;
export declare const DescriptionsItemType: (props: DescriptionsItemType) => null;
declare type IProps = IPropsOptions & DescriptionsProps;
/**
 * @description: 组件代码
 */
declare const MyDescriptions: React.FC<IProps>;
export default MyDescriptions;
