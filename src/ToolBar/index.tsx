import React from 'react';
import type { ActionType, IProps } from '../ActionList';
import ActionList from '../ActionList';
import './index.less';

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

const ToolBar: React.FC<IPropsType> = ({
  rightActionList = [],
  leftActionList = [],
  bordered = true,
  ...others
}) => {
  return (
    <div className={['toolbar', bordered ? 'border' : ''].join(' ')}>
      {[leftActionList, rightActionList].map((actions, index) => (
        <ActionList key={index} actions={actions} {...others} />
      ))}
    </div>
  );
};

export default ToolBar;
