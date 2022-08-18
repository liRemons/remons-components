import React, { useState } from 'react';
import type { ButtonProps, FormProps } from 'antd';
import { Form, Button, Row, Col, Space } from 'antd';
import { UpOutlined, DownOutlined } from '@ant-design/icons';
import './index.css';

type SearchBtnProps = {
  /**
   * @description 按钮的文字
   */
  text?: string | React.ReactNode;
  /**
   * @description 是否展示
   */
  isShow?: Boolean;
};

type SearchButtonProps = SearchBtnProps & ButtonProps;

interface FoldProps {
  /**
   * @description 展开的文字
   */
  foldText?: string;
  /**
   * @description 收起的文字
   */
  unfoldText?: string;
}

export interface PropsTypes {
  /**
   * @description 查询按钮 props, 继承 antd Button 组件 API
   */
  submitProps?: SearchButtonProps;
  /**
   * @description 重置按钮 props, 继承 antd Button 组件 API
   */
  cancelProps?: SearchButtonProps;
  /**
   * @description 点击查询触发
   */
  onSearch?: FormProps['onFinish'];
  /**
   * @description 点击重置触发
   */
  onReset?: () => void;
  /**
   * @description 传递的组件，一般为 form item
   */
  children?: any;
  /**
   * @description 默认展开的行数（其余默认收起）
   */
  rows?: 2 | 3;
  /**
   * @description 默认每行展示的列数（一行的 FormItem 数量）
   */
  cols?: 2 | 3 | 4;
  /**
   * @description 展开收起 props
   */
  foldProps?: FoldProps;
  /**
   * @description 重置的字段
   */
  resetNames?: Array<string>;
  /**
   * @description 按钮位置
   */
  buttonAlign?: 'left' | 'center' | 'right';
}

type IProps = FormProps & PropsTypes;

/**
 * @description: 以下为导出 API
 */

export const IPropsOptions = (props: PropsTypes) => null;
export const SearchButtonProps = (props: SearchBtnProps) => null;
export const FoldProps = (props: FoldProps) => null;

/**
 * @description: 组件代码
 */
const SearchForm: React.FC<IProps> = ({
  onSearch,
  onReset,
  children = [],
  cols = 3,
  rows = 2,
  submitProps = {},
  cancelProps = {},
  foldProps = {},
  resetNames,
  buttonAlign = 'center',
  ...others
}) => {
  const [form] = Form.useForm();
  const [fold, setFold] = useState<boolean>(true);
  const colSpan = 24 / cols;
  const childrenFold = children.slice(0, cols * rows);

  /**
   * @description: 渲染展开、收起
   */
  const renderFold = () => {
    return (
      children.length > cols * rows && (
        <div className="searchForm-fold">
          <Button type="link" onClick={() => setFold(!fold)}>
            {fold ? foldProps?.foldText || '显示更多' : foldProps?.unfoldText || '收起'}
            {fold ? <DownOutlined /> : <UpOutlined />}
          </Button>
        </div>
      )
    );
  };

  /**
   * @description: 渲染查询重置按钮
   */
  const renderSearchBtn = () => {
    return (
      <div className="searchForm-button" style={{ textAlign: buttonAlign }}>
        <Space>
          {submitProps?.isShow !== false && (
            <Button type="primary" htmlType="submit" {...submitProps}>
              {submitProps?.text || '查询'}
            </Button>
          )}
          {cancelProps?.isShow !== false && (
            <Button
              htmlType="button"
              {...cancelProps}
              onClick={() => {
                form.resetFields(resetNames);
                onReset?.();
              }}
            >
              {cancelProps?.text || '重置'}
            </Button>
          )}
        </Space>
      </div>
    );
  };

  return (
    <Form {...others} form={form} onFinish={onSearch}>
      <Row gutter={24}>
        {(fold ? childrenFold : children).map((child: JSX.Element, index: number) => (
          <Col key={index} span={colSpan}>
            {child}
          </Col>
        ))}
      </Row>
      {renderFold()}
      {renderSearchBtn()}
    </Form>
  );
};

export default SearchForm;
