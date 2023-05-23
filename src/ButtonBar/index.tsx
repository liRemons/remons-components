import React from 'react';
import type { AffixProps } from 'antd';
import { Space, Affix } from 'antd';
import './index.css';

interface IProps {
  /**
   * @description 子元素
   */
  children?: React.ReactNode;
  /**
   * @description 透传到 antd Affix，继承自 antd Affix API
   */
  affixProps?: AffixProps;
  /**
   * @description 是否显示边框
   */
  bordered?: boolean;
  /**
   * @description 背景色
   */
  background?: string;
  /**
   * @description 按钮位置
   */
  align?: 'left' | 'center' | 'right';
  /**
   * @description 是否固定粘性定位
   */
  isAffix?: boolean;
}

const ButtonBar: React.FC<IProps> = ({
  children,
  affixProps = { offsetBottom: 0 },
  bordered = true,
  background = '#fff',
  align = 'center',
  isAffix = true,
}) => {
  const renderChildren = () => {
    return (
      <div
        style={{ background, textAlign: align }}
        className={['button-bar', bordered ? 'border' : ''].join(' ')}
      >
        <Space>{children}</Space>
      </div>
    );
  };

  return isAffix ? <Affix {...affixProps}>{renderChildren()}</Affix> : renderChildren();
};

export default ButtonBar;
