import React from 'react';
import type { ActionType, IProps } from '../ActionList';
import './index.css';
interface IPropsType extends Omit<IProps, 'actions'> {
    /**
     * @description 同 ActionList
     */
    rightActionList?: Array<ActionType>;
    /**
     * @description 同 ActionList
     */
    leftActionList?: Array<ActionType>;
    /**
     * @description 是否显示下边框
     */
    bordered?: boolean;
}
declare const ToolBar: React.FC<IPropsType>;
export default ToolBar;
