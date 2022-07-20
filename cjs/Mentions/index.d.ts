import React from "react";
import type { MentionProps } from 'antd';
interface MentionsItemTypes {
    /**
     * @description label
     */
    label: string | React.ReactNode;
    /**
     * @description value
     */
    value: string;
}
interface IPropsType {
    /**
     * @description 数据源
     */
    options?: Array<MentionsItemTypes>;
}
declare type IProps = MentionProps & IPropsType;
/**
 * @description: 用于生成 API
 */
export declare const IPropsType: (props: IPropsType) => null;
export declare const MentionsItemTypes: (props: MentionsItemTypes) => null;
/**
 * @description: 组件代码
 */
declare const MyMentions: React.FC<IProps>;
export default MyMentions;
