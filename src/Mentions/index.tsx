import React from "react";
import type { MentionProps } from 'antd'
import { Mentions } from 'antd';
const { Option } = Mentions;


interface MentionsItemTypes {
  /**
   * @description label
   */
  label: string | React.ReactNode,
  /**
   * @description value
   */
  value: string
}

interface IPropsType {
  /**
   * @description 数据源
   */
  options?: Array<MentionsItemTypes>
}

type IProps = MentionProps & IPropsType;


/**
 * @description: 用于生成 API
 */
export const IPropsType = (props: IPropsType) => null;
export const MentionsItemTypes = (props: MentionsItemTypes) => null;

/**
 * @description: 组件代码
 */
const MyMentions: React.FC<IProps> = ({ options = [], children, ...others }) => {
  return <Mentions {...others}>
    {
      options.map(item => <Option key={item.value} value={item.value}>{item.label}</Option>)
    }
    {children}
  </Mentions>
}

export default MyMentions;
