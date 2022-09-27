import React from 'react';
import './index.css';

export interface SectionProps {
  /**
   * @description 布局类型
   */
  shape?: 'panel' | 'normal';
  /**
   * @description 标题
   */
  title?: React.ReactNode;
  /**
   * @description 副标题
   */
  subTitle?: React.ReactNode;
  children?: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({
  shape = 'panel',
  title = '',
  subTitle = '',
  children,
}) => {
  return (
    <div className={`${shape} section`}>
      <div className="title">
        {title}
        <span className="subTitle">{subTitle}</span>
      </div>
      {children && <div className="main">{children}</div>}
    </div>
  );
};

export default Section;
