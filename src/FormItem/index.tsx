import React from 'react';
import 'antd/dist/antd.css';
import { Form, FormItemProps } from 'antd';
import { Com } from './const';

interface IProps extends FormItemProps {
  component?:
    | 'input'
    | 'inputPassword'
    | 'textarea'
    | 'inputNumber'
    | 'datePicker'
    | 'select'
    | 'radio'
    | 'checkbox'
    | 'rate'
    | 'slider'
    | 'timePicker'
    | 'upload'
    | 'treeSelect'
    | 'cascader'
    | any;
  componentProps?: object;
}

const MyForm: React.FC<IProps> = ({ component, componentProps, children, ...others }) => {
  let ReCompont = null;
  if (component) {
    if (typeof component === 'string') {
      ReCompont = Com[component];
    } else {
      ReCompont = component;
    }
  }

  return (
    <Form.Item {...others}>
      {ReCompont ? <ReCompont {...componentProps}></ReCompont> : children}
    </Form.Item>
  );
};

export default MyForm;
