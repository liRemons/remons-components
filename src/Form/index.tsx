import React from 'react';
import type { FormProps } from 'antd';
import { Form } from 'antd';

interface IProps {
  /**
   * @description 是否预览态
   */
  isPreview?: boolean;
  children?: React.ReactNode | any;
}

type IPropsType = IProps & FormProps;

export const IProps = (props: IProps) => null;

const MyForm: React.FC<IPropsType> = ({ children, isPreview = false, ...others }) => {
  const Child = React.Children.map(children, (child) =>
    React.cloneElement(child, {
      componentProps: {
        bordered: !isPreview,
        disabled: isPreview,
        ...child.props.componentProps,
      },
    }),
  );

  return <Form {...others}>{Child}</Form>;
};

Object.assign(MyForm, Form);
export default MyForm;
