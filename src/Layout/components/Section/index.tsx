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
  /**
   * @description class
   */
  className?: string;

  children?: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({
  shape = 'panel',
  title = '',
  className = '',
  subTitle = '',
  children,
}) => {
  return (
    <div className={`${shape} section ${className}`}>
      {title && (
        <div className="title">
          {title}
          {subTitle && <span className="subTitle">{subTitle}</span>}
        </div>
      )}
      {children && <div className="main">{children}</div>}
    </div>
  );
};

export default Section;
