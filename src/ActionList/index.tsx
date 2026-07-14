import React from 'react';
import type { ButtonProps, MenuProps, DropdownProps } from 'antd';
import { Button, Dropdown, Menu, Space } from 'antd';
import { EllipsisOutlined } from '@ant-design/icons';

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
  /**
  * @description placement
  */
  placement?: DropdownProps['placement']
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
  menuTrigger?: DropdownProps['trigger'];
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
}: IProps) => {
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
            <Space.Compact>
              <Button onClick={() => onActionClick?.(item.key, item)}>{item.label}</Button>
              <Dropdown menu={{
                items: item.children,
                onClick: (e) => onActionClick?.(e.key, item)
              }} placement={item.placement}>
                <Button icon={<EllipsisOutlined />} />
              </Dropdown>
            </Space.Compact>
          )
        }
      })}
    </Space>
  );
};

export default ActionList;
