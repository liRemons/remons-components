import React from 'react';
import type { FormProps } from 'antd';
import { Form, Row, Col } from 'antd';

interface IProps {
  /**
   * @description 是否预览态
   */
  isPreview?: boolean;

  /**
   * @description 每行显示数量
   */
  cols?: 2 | 3 | 4;
  children?: React.ReactNode | any;
}

type IPropsType = IProps & FormProps;

export const IProps = (props: IProps) => null;

const MyForm: React.FC<IPropsType> = ({ children, isPreview = false, cols, ...others }) => {
  const Child = React.Children.map(children, (child) =>
    React.cloneElement(child, {
      componentProps: {
        bordered: !isPreview,
        disabled: isPreview,
        ...(child?.props?.componentProps || {}),
      },
    }),
  );

  return (
    <Form {...others}>
      {cols ? (
        <Row gutter={24}>
          {Child.map((child: JSX.Element, index: number) => (
            <Col key={index} span={24 / cols}>
              {child}
            </Col>
          ))}
        </Row>
      ) : (
        Child
      )}
    </Form>
  );
};

Object.assign(MyForm, Form);
export default MyForm;
