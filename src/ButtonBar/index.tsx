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
}

const ButtonBar: React.FC<IProps> = ({
  children,
  affixProps = { offsetBottom: 0 },
  bordered = true,
  background = '#fff',
  align = 'center',
}) => {
  return (
    <Affix {...affixProps}>
      <div
        style={{ background, textAlign: align }}
        className={['button-bar', bordered ? 'border' : ''].join(' ')}
      >
        <Space>{children}</Space>
      </div>
    </Affix>
  );
};

export default ButtonBar;
