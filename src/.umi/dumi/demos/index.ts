// @ts-nocheck
import React from 'react';
import { dynamic } from 'dumi';

export default {
  'FormItem-demo': {
    component: function DumiDemo() {
  var _interopRequireDefault = require("E:/job/project/remons-components/node_modules/@babel/runtime/helpers/interopRequireDefault.js")["default"];

  var _react = _interopRequireDefault(require("react"));

  var _antd = require("antd");

  var _remonsComponents = require("remons-components");

  var layout = {
    labelCol: {
      span: 4
    },
    wrapperCol: {
      span: 20
    }
  };
  var items = [{
    label: '输入',
    component: 'input'
  }, {
    label: '数字',
    component: 'inputNumber'
  }, {
    label: '下拉选择',
    component: 'select',
    componentProps: {
      options: [{
        label: '测试',
        value: 'test'
      }]
    }
  }];

  var _default = function _default() {
    return /*#__PURE__*/_react["default"].createElement(_antd.Form, layout, items.map(function (item) {
      return /*#__PURE__*/_react["default"].createElement(_remonsComponents.FormItem, item);
    }));
  };

  return _react["default"].createElement(_default);
},
    previewerProps: {"sources":{"_":{"tsx":"import React from 'react';\nimport { Form } from 'antd'\nimport { FormItem } from 'remons-components';\n\nconst layout = {\n  labelCol: { span: 4 },\n  wrapperCol: { span: 20 },\n};\n\nconst items = [\n  { label: '输入', component: 'input' },\n  { label: '数字', component: 'inputNumber' },\n  { \n    label: '下拉选择', \n    component: 'select', \n    componentProps: { \n      options: [{ label: '测试', value: 'test' }]\n    }\n  }\n]\n\nexport default () => <Form {...layout}>\n  {\n    items.map(item =>  <FormItem {...item} />)\n  }\n</Form>;"}},"dependencies":{"react":{"version":">=16.9.0"},"antd":{"version":"4.21.6","css":"antd/dist/antd.css"},"remons-components":{"version":"1.0.0"},"react-dom":{"version":">=16.9.0"}},"componentName":"FormItem","identifier":"FormItem-demo"},
  },
};
