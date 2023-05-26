import React from 'react';
import type { ActionType, IProps } from '../ActionList';
import ActionList from '../ActionList';
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
  /**
   * @description className
   */
  className?: string;
}

const ToolBar: React.FC<IPropsType> = ({
  rightActionList = [],
  leftActionList = [],
  bordered = true,
  className,
  ...others
}) => {
  const classNames = `${['toolbar', bordered ? 'border' : ''].join(' ')} ${className}`;
  return (
    <div className={classNames} {...others}>
      {[leftActionList, rightActionList].map((actions, index) => (
        <ActionList key={index} actions={actions} {...others} />
      ))}
    </div>
  );
};

export default ToolBar;
