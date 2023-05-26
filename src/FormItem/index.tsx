import React from 'react';
import type { FormItemProps } from 'antd';
import { Form } from 'antd';
import { Com } from './const';

const { Item } = Form;

interface IPropsOption {
  /**
   * @description 所支持的组件类型
   */
  component?:
    | 'input'
    | 'inputPassword'
    | 'textarea'
    | 'inputNumber'
    | 'datePicker'
    | 'rangePicker'
    | 'timePicker'
    | 'rangeTimePicker'
    | 'select'
    | 'radio'
    | 'radioGroup'
    | 'checkbox'
    | 'checkboxGroup'
    | 'rate'
    | 'slider'
    | 'upload'
    | 'treeSelect'
    | 'cascader'
    | 'size'
    | 'rangeInput'
    | 'radioGroup'
    | 'switch'
    | 'transfer'
    | 'mentions'
    | any;
  /**
   * @description 透传到 FormItem 使用组件的参数
   */
  componentProps?: object;

  /**
   * @description 是否必填，透传至 rule
   */
  required?: boolean;
  /**
   * @description placeholder
   */
  placeholder?: string;
}

export const IPropsOption = (props: IPropsOption) => null;

type IProps = IPropsOption & FormItemProps;

const FormItem: React.FC<IProps> = ({
  component,
  required,
  componentProps,
  placeholder,
  children,
  ...others
}) => {
  let ReCompont = null;
  if (component) {
    if (typeof component === 'string') {
      ReCompont = Com[component];
    } else {
      ReCompont = component;
    }
  }

  let props = {
    ...(required
      ? {
          required,
          rules: [
            {
              required,
            },
            ...(others.rules || []),
          ],
        }
      : {}),
  };
  return (
    <Form.Item {...props} {...others}>
      {ReCompont ? <ReCompont {...{ componentProps, placeholder }}></ReCompont> : children}
    </Form.Item>
  );
};

Object.assign(FormItem, Item);
export default FormItem;
