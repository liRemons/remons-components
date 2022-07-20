import React from 'react';
import type { ButtonProps, DropDownProps } from 'antd';
export declare type ActionTypeProps = {
    /**
     * @description 唯一键
     */
    key: string;
    /**
     * @description 名称
     */
    label: string;
    /**
     * @description children
     */
    children?: Array<any>;
};
export declare type ActionType = ActionTypeProps & ButtonProps;
export interface IProps {
    /**
     * @description 数据源，继承自 antd Button API
     */
    actions?: Array<ActionType>;
    /**
     * @description 点击按钮触发
     */
    onActionClick?: (key: string, data?: object) => void;
    /**
     * @description 触发方式
     */
    menuTrigger?: DropDownProps['trigger'];
}
/**
 * @description: 为导出API，非业务代码
 */
export declare const ActionType: (props: ActionTypeProps) => null;
export declare const IProps: (props: IProps) => null;
/**
 * @description: 组件
 */
declare const ActionList: React.FC<IProps>;
export default ActionList;
