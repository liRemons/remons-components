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
   * @description 按钮位置
   */
  align?: 'left' | 'center' | 'right';
  /**
   * @description 是否固定粘性定位
   */
  isAffix?: boolean;
  /**
   * @description className
   */
  className?: string;
}

const ButtonBar: React.FC<IProps> = ({
  children,
  affixProps = { offsetBottom: 0 },
  bordered = true,
  align = 'center',
  isAffix = true,
  className,
  ...others
}) => {
  const renderChildren = () => {
    const classNames = `${['button-bar', bordered ? 'border' : ''].join(' ')} ${className}`;
    return (
      <div style={{ textAlign: align }} className={classNames} {...others}>
        <Space>{children}</Space>
      </div>
    );
  };

  return isAffix ? <Affix {...affixProps}>{renderChildren()}</Affix> : renderChildren();
};

export default ButtonBar;
