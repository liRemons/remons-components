// @ts-nocheck
import React from 'react';
import { dynamic } from 'dumi';

export default {
  'FormItem-demo': {
    component: dynamic({
  loader: async function () {
    var _interopRequireDefault = (await import("E:/job/project/remons-components/node_modules/@babel/runtime/helpers/interopRequireDefault.js"))["default"];

    var _extends2 = _interopRequireDefault(await import("E:/job/project/remons-components/node_modules/@babel/runtime/helpers/esm/extends.js"));

    var _react = _interopRequireDefault(await import("react"));

    var _antd = await import("antd");

    var _remonsComponents = await import("remons-components");

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
      component: 'inputNumber',
      componentProps: {
        min: 0
      }
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
        return /*#__PURE__*/_react["default"].createElement(_remonsComponents.FormItem, (0, _extends2["default"])({
          key: item.label
        }, item));
      }));
    };

    return _default;
  },
  loading: () => null
}),
    previewerProps: {"sources":{"_":{"tsx":"import React from 'react';\nimport { Form } from 'antd';\nimport { FormItem } from 'remons-components';\n\nconst layout = {\n  labelCol: { span: 4 },\n  wrapperCol: { span: 20 },\n};\n\nconst items = [\n  { label: '输入', component: 'input' },\n  { label: '数字', component: 'inputNumber', componentProps: { min: 0 } },\n  {\n    label: '下拉选择',\n    component: 'select',\n    componentProps: {\n      options: [{ label: '测试', value: 'test' }],\n    },\n  },\n];\n\nexport default () => (\n  <Form {...layout}>\n    {items.map((item) => (\n      <FormItem key={item.label} {...item} />\n    ))}\n  </Form>\n);"}},"dependencies":{"react":{"version":">=16.9.0"},"antd":{"version":"4.21.6","css":"antd/dist/antd.css"},"remons-components":{"version":"0.0.1-beta"},"react-dom":{"version":">=16.9.0"}},"componentName":"FormItem","identifier":"FormItem-demo"},
  },
  'SearchForm-demo': {
    component: dynamic({
  loader: async function () {
    var _interopRequireDefault = (await import("E:/job/project/remons-components/node_modules/@babel/runtime/helpers/interopRequireDefault.js"))["default"];

    var _extends2 = _interopRequireDefault(await import("E:/job/project/remons-components/node_modules/@babel/runtime/helpers/esm/extends.js"));

    var _react = _interopRequireDefault(await import("react"));

    var _remonsComponents = await import("remons-components");

    var items = [{
      name: 'test1',
      component: 'input',
      label: '测试字段1'
    }, {
      name: 'test2',
      component: 'input',
      label: '测试字段2'
    }, {
      name: 'test3',
      component: 'input',
      label: '测试字段3'
    }, {
      name: 'test4',
      component: 'input',
      label: '测试字段4'
    }, {
      name: 'test5',
      component: 'input',
      label: '测试字段5'
    }, {
      name: 'test6',
      component: 'input',
      label: '测试字段6'
    }, {
      name: 'test7',
      component: 'input',
      label: '测试字段7'
    }, {
      name: 'test8',
      component: 'input',
      label: '测试字段8'
    }, {
      name: 'test9',
      component: 'input',
      label: '测试字段9'
    }, {
      name: 'test10',
      component: 'input',
      label: '测试字段10'
    }];

    var _default = function _default() {
      var onSearch = function onSearch(values) {
        console.log(values);
      };

      return /*#__PURE__*/_react["default"].createElement(_remonsComponents.SearchForm, {
        cols: 2,
        onSearch: onSearch
      }, items.map(function (item) {
        return /*#__PURE__*/_react["default"].createElement(_remonsComponents.FormItem, (0, _extends2["default"])({}, item, {
          key: item.name
        }));
      }));
    };

    return _default;
  },
  loading: () => null
}),
    previewerProps: {"sources":{"_":{"tsx":"import React from 'react';\nimport { SearchForm, FormItem } from 'remons-components';\n\nconst items = [\n  { name: 'test1', component: 'input', label: '测试字段1' },\n  { name: 'test2', component: 'input', label: '测试字段2' },\n  { name: 'test3', component: 'input', label: '测试字段3' },\n  { name: 'test4', component: 'input', label: '测试字段4' },\n  { name: 'test5', component: 'input', label: '测试字段5' },\n  { name: 'test6', component: 'input', label: '测试字段6' },\n  { name: 'test7', component: 'input', label: '测试字段7' },\n  { name: 'test8', component: 'input', label: '测试字段8' },\n  { name: 'test9', component: 'input', label: '测试字段9' },\n  { name: 'test10', component: 'input', label: '测试字段10' },\n];\n\nexport default () => {\n  const onSearch = (values) => {\n    console.log(values);\n  };\n  return (\n    <SearchForm cols={2} onSearch={onSearch}>\n      {items.map((item) => (\n        <FormItem {...item} key={item.name} />\n      ))}\n    </SearchForm>\n  );\n};"}},"dependencies":{"react":{"version":"18.2.0"},"remons-components":{"version":"0.0.1-beta"}},"componentName":"SearchForm","identifier":"SearchForm-demo"},
  },
};
