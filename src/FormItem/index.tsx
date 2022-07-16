import React from 'react';
import 'antd/dist/antd.css';
import { Form, FormItemProps } from 'antd';
import { Com } from './const';

interface IProps extends FormItemProps {
  component:
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
    | 'cascader';
  componentProps?: object;
}

const MyForm: React.FC<IProps> = (props) => {
  const { component, componentProps, ...others } = props;
  const ReCompont = Com[component];
  return (
    <Form.Item {...others}>
      <ReCompont {...componentProps}></ReCompont>
    </Form.Item>
  );
};

export default MyForm;
