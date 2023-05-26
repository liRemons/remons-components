import React from 'react';
import type { ButtonProps, MenuProps, DropDownProps } from 'antd';
import { Button, Dropdown, Menu, Space } from 'antd';

export type ActionTypeProps = {
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

export type ActionType = ActionTypeProps & ButtonProps;

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
export const ActionType = (props: ActionTypeProps) => null;
export const IProps = (props: IProps) => null;

/**
 * @description: 组件
 */
const ActionList: React.FC<IProps> = ({
  actions = [],
  onActionClick,
  menuTrigger = ['click'],
  ...others
}) => {
  const onMenuClick: any = ({ key }: any, data: object) => {
    onActionClick?.(key, data);
  };

  /**
   * @description: 渲染 Dropdown.Button
   * @param {MenuProps} data 数据源
   * @param {ActionType} item 父级数据
   */
  const menu = (data: MenuProps['items'], item: ActionType) => (
    <Menu onClick={(e) => onMenuClick(e, item)} items={data} />
  );
  return (
    <Space {...others}>
      {actions.map((item: ActionType) => {
        if (!item.children?.length) {
          return (
            <Button onClick={() => onMenuClick({ key: item.key }, item)} {...item}>
              {item.label}
            </Button>
          );
        } else {
          return (
            <Dropdown.Button trigger={menuTrigger} overlay={menu(item.children, item)} {...item}>
              {item.label}
            </Dropdown.Button>
          );
        }
      })}
    </Space>
  );
};

export default ActionList;
