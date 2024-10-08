import React from 'react';
import type { DescriptionsProps } from 'antd';
import { Descriptions } from 'antd';
import get from 'lodash.get';

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
  /**
   * @description 是否隐藏为空的数据（span有且 为 1 时有效）
   */
  hideEmptyValue?: boolean;
}

/**
 * @description: 用来生成 API
 */
export const IPropsOptions = (props: IPropsOptions) => null;
export const DescriptionsItemType = (props: DescriptionsItemType) => null;

type IProps = IPropsOptions & DescriptionsProps;

/**
 * @description: 组件代码
 */
const MyDescriptions: React.FC<IProps> = ({ dataSource, columns, hideEmptyValue, ...others }) => {
  return (
    <Descriptions {...others}>
      {columns.map((item: DescriptionsItemType) => {
        const { label, name, render, ...itemOther } = item;
        const value = render ? render(name, dataSource[name], dataSource) : get(dataSource, name);
        const { span } = itemOther;
        if ((!span || span === 1) && !value) {
          return null;
        }
        return (
          <Descriptions.Item label={label} key={name} {...itemOther}>
            {value}
          </Descriptions.Item>
        );
      })}
    </Descriptions>
  );
};

export default MyDescriptions;
