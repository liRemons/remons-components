import React, { useState } from 'react';
import { Form, Button, ButtonProps, FormProps, Row, Col } from 'antd';
import { UpOutlined, DownOutlined } from '@ant-design/icons';
import './index.less';

type SearchButtonProps = {
  text?: string;
  isShow?: Boolean;
} & ButtonProps;

type FoldProps = {
  foldText?: string;
  unfoldText?: string;
};

interface IProps extends FormProps {
  submitProps?: SearchButtonProps;
  cancelProps?: SearchButtonProps;
  onSearch?: FormProps['onFinish'];
  onReset?: () => void;
  children?: any;
  rows?: 2 | 3;
  cols?: 2 | 3 | 4;
  foldProps?: FoldProps;
}

const SearchForm: React.FC<IProps> = ({
  onSearch,
  onReset,
  children = [],
  cols = 3,
  rows = 2,
  submitProps,
  cancelProps,
  foldProps = {},
}) => {
  const [fold, setFold] = useState<boolean>(true);
  const colSpan = 24 / cols;
  const childrenFold = children.slice(0, cols * rows);

  const renderFold = () => {
    return (
      children.length > cols * rows && (
        <div>
          {fold ? (
            <span onClick={() => setFold(false)}>
              {foldProps?.foldText || '显示更多'}
              <DownOutlined />
            </span>
          ) : (
            <span onClick={() => setFold(true)}>
              {foldProps?.unfoldText || '收起'} <UpOutlined />
            </span>
          )}
        </div>
      )
    );
  };

  return (
    <Form onFinish={onSearch} onReset={onReset}>
      <Row gutter={24}>
        {(fold ? childrenFold : children).map((child: JSX.Element, index: number) => (
          <Col key={index} span={colSpan}>
            {child}
          </Col>
        ))}
      </Row>
      {renderFold()}
      <div className="searchForm-button">
        <Button type="primary" htmlType="submit" {...(submitProps || {})}>
          {submitProps?.text || '查询'}
        </Button>
        <Button htmlType="button" {...(cancelProps || {})}>
          {cancelProps?.text || '重置'}
        </Button>
      </div>
    </Form>
  );
};

export default SearchForm;
