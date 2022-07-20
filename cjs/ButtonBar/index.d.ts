import React from 'react';
import type { AffixProps } from 'antd';
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
declare const ButtonBar: React.FC<IProps>;
export default ButtonBar;
