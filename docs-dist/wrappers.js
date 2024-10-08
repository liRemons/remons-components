(self['webpackChunkremons_components'] = self['webpackChunkremons_components'] || []).push([
  [275],
  {
    22231: function (e, t, n) {
      'use strict';
      n.d(t, {
        m: function () {
          return i.m;
        },
      });
      var i = n(9684);
      n(72255);
    },
    69775: function (e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, {
          default: function () {
            return c;
          },
        });
      var i = n(91896),
        r = n(67294),
        a = JSON.parse(
          '{"menus":{"zh-CN":{"*":[{"path":"/","title":"\u4ecb\u7ecd","meta":{"order":null}},{"title":"ActionList","path":"/action-list","meta":{},"children":[]},{"title":"ButtonBar","path":"/button-bar","meta":{},"children":[]},{"title":"Descriptions","path":"/descriptions","meta":{},"children":[]},{"title":"Form","path":"/form","meta":{},"children":[]},{"title":"FormItem","path":"/form-item","meta":{},"children":[]},{"title":"Layout","path":"/layout","meta":{},"children":[]},{"title":"Mentions","path":"/mentions","meta":{},"children":[]},{"title":"RangeInput","path":"/range-input","meta":{},"children":[]},{"title":"SearchForm","path":"/search-form","meta":{},"children":[]},{"title":"SizeInput","path":"/size-input","meta":{},"children":[]},{"title":"ToolBar","path":"/tool-bar","meta":{},"children":[]}]}},"locales":[{"name":"zh-CN","label":"\u4e2d\u6587"}],"navs":{},"title":"remons-components","logo":"https://liremons.github.io/remons-components/images/logo.png","mode":"doc","repository":{"url":"https://github.com/liRemons/remons-components","branch":"master"},"theme":{},"exportStatic":{}}',
        ),
        o = n(90636),
        d = n(3182),
        l = n(60535),
        s = {
          'ActionList-demo': {
            component: (0, l.D8)({
              loader: (function () {
                var e = (0, d.default)(
                  (0, o.default)().mark(function e() {
                    var t, i, r, a, d;
                    return (0, o.default)().wrap(function (e) {
                      while (1)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (t = n(42857).default),
                              (e.t0 = t),
                              (e.next = 4),
                              Promise.resolve().then(n.t.bind(n, 67294, 19))
                            );
                          case 4:
                            return (
                              (e.t1 = e.sent),
                              (i = (0, e.t0)(e.t1)),
                              (e.next = 8),
                              Promise.all([n.e(16), n.e(846), n.e(791), n.e(546)]).then(
                                n.bind(n, 69546),
                              )
                            );
                          case 8:
                            return (
                              (r = e.sent),
                              (e.next = 11),
                              Promise.all([n.e(846), n.e(273), n.e(647)]).then(n.bind(n, 2006))
                            );
                          case 11:
                            return (
                              (a = e.sent),
                              (d = function () {
                                var e = [
                                    {
                                      label: '\u6d4b\u8bd51',
                                      key: 'test1',
                                      type: 'primary',
                                      icon: i['default'].createElement(a.DownloadOutlined, null),
                                    },
                                    { label: '\u6d4b\u8bd52', key: 'test2', type: 'link' },
                                    {
                                      label: '\u6d4b\u8bd53',
                                      key: 'test3',
                                      children: [
                                        { key: 'test3-1', label: '\u6d4b\u8bd53-1' },
                                        { key: 'test3-2', label: '\u6d4b\u8bd53-2' },
                                        { key: 'test3-3', label: '\u6d4b\u8bd53-3' },
                                      ],
                                    },
                                  ],
                                  t = function (e, t) {
                                    console.log(e, t);
                                  };
                                return i['default'].createElement(r.ActionList, {
                                  onActionClick: t,
                                  actions: e,
                                });
                              }),
                              e.abrupt('return', d)
                            );
                          case 14:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  }),
                );
                function t() {
                  return e.apply(this, arguments);
                }
                return t;
              })(),
              loading: () => null,
            }),
            previewerProps: {
              sources: {
                _: {
                  tsx: "import React from 'react';\nimport { ActionList } from 'remons-components';\nimport { DownloadOutlined } from '@ant-design/icons';\n\nexport default () => {\n  const actions = [\n    {\n      label: '\u6d4b\u8bd51',\n      key: 'test1',\n      type: 'primary',\n      icon: <DownloadOutlined />,\n    },\n    {\n      label: '\u6d4b\u8bd52',\n      key: 'test2',\n      type: 'link',\n    },\n    {\n      label: '\u6d4b\u8bd53',\n      key: 'test3',\n      children: [\n        {\n          key: 'test3-1',\n          label: '\u6d4b\u8bd53-1',\n        },\n        {\n          key: 'test3-2',\n          label: '\u6d4b\u8bd53-2',\n        },\n        {\n          key: 'test3-3',\n          label: '\u6d4b\u8bd53-3',\n        },\n      ],\n    },\n  ];\n\n  const onActionClick = (key, data) => {\n    console.log(key, data);\n  };\n  return <ActionList onActionClick={onActionClick} actions={actions} />;\n};",
                },
              },
              dependencies: {
                react: { version: '>=16.0.0' },
                'remons-components': { version: '2.0.8' },
                '@ant-design/icons': { version: '5.1.4' },
                'react-dom': { version: '>=16.0.0' },
              },
              componentName: 'ActionList',
              identifier: 'ActionList-demo',
            },
          },
          'ButtonBar-demo': {
            component: (0, l.D8)({
              loader: (function () {
                var e = (0, d.default)(
                  (0, o.default)().mark(function e() {
                    var t, i, r, a, d;
                    return (0, o.default)().wrap(function (e) {
                      while (1)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (t = n(42857).default),
                              (e.t0 = t),
                              (e.next = 4),
                              Promise.resolve().then(n.t.bind(n, 67294, 19))
                            );
                          case 4:
                            return (
                              (e.t1 = e.sent),
                              (i = (0, e.t0)(e.t1)),
                              (e.next = 8),
                              Promise.all([n.e(16), n.e(846), n.e(791), n.e(273), n.e(871)]).then(
                                n.bind(n, 62871),
                              )
                            );
                          case 8:
                            return (
                              (r = e.sent),
                              (e.next = 11),
                              Promise.all([n.e(16), n.e(846), n.e(791), n.e(546)]).then(
                                n.bind(n, 69546),
                              )
                            );
                          case 11:
                            return (
                              (a = e.sent),
                              (d = function () {
                                return i['default'].createElement(
                                  a.ButtonBar,
                                  { isAffix: !0 },
                                  i['default'].createElement(
                                    r.Button,
                                    { type: 'primary' },
                                    '\u63d0\u4ea4',
                                  ),
                                  i['default'].createElement(r.Button, null, '\u53d6\u6d88'),
                                );
                              }),
                              e.abrupt('return', d)
                            );
                          case 14:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  }),
                );
                function t() {
                  return e.apply(this, arguments);
                }
                return t;
              })(),
              loading: () => null,
            }),
            previewerProps: {
              sources: {
                _: {
                  tsx: "import React from 'react';\nimport { Button } from 'antd';\nimport { ButtonBar } from 'remons-components';\n\nexport default () => {\n  return (\n    <ButtonBar isAffix>\n      <Button type=\"primary\">\u63d0\u4ea4</Button>\n      <Button>\u53d6\u6d88</Button>\n    </ButtonBar>\n  );\n};",
                },
              },
              dependencies: {
                react: { version: '>=16.9.0' },
                antd: { version: '5.5.2' },
                'remons-components': { version: '2.0.8' },
                'react-dom': { version: '>=16.9.0' },
              },
              componentName: 'ButtonBar',
              identifier: 'ButtonBar-demo',
            },
          },
          'Descriptions-demo': {
            component: (0, l.D8)({
              loader: (function () {
                var e = (0, d.default)(
                  (0, o.default)().mark(function e() {
                    var t, i, r, a, d, l;
                    return (0, o.default)().wrap(function (e) {
                      while (1)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (t = n(42857).default),
                              (e.t0 = t),
                              (e.next = 4),
                              Promise.resolve().then(n.t.bind(n, 67294, 19))
                            );
                          case 4:
                            return (
                              (e.t1 = e.sent),
                              (i = (0, e.t0)(e.t1)),
                              (e.next = 8),
                              Promise.all([n.e(16), n.e(846), n.e(791), n.e(546)]).then(
                                n.bind(n, 69546),
                              )
                            );
                          case 8:
                            return (
                              (r = e.sent),
                              (a = {
                                username: 'Zhou Maomao',
                                tel: 181e7,
                                live: 'Hangzhou, Zhejiang',
                                remark: 'empty',
                                address:
                                  'No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China',
                                month: 1658217401814,
                                others: { nickName: 'remons' },
                              }),
                              (d = [
                                { label: '\u7528\u6237\u540d', name: 'username' },
                                { label: '\u8054\u7cfb\u65b9\u5f0f', name: 'tel' },
                                { label: '\u5c45\u4f4f\u5730', name: 'live' },
                                { label: '\u6635\u79f0', name: 'others.nickName' },
                                { label: '\u5730\u5740', name: 'address', span: 2 },
                                {
                                  label: '\u5f53\u524d\u6708\u4efd',
                                  name: 'month',
                                  render: function (e, t, n) {
                                    return new Date(t).getMonth() + 1;
                                  },
                                },
                              ]),
                              (l = function () {
                                return i['default'].createElement(r.Descriptions, {
                                  bordered: !0,
                                  title: '\u6d4b\u8bd5',
                                  dataSource: a,
                                  columns: d,
                                });
                              }),
                              e.abrupt('return', l)
                            );
                          case 13:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  }),
                );
                function t() {
                  return e.apply(this, arguments);
                }
                return t;
              })(),
              loading: () => null,
            }),
            previewerProps: {
              sources: {
                _: {
                  tsx: "import React from 'react';\nimport { Descriptions } from 'remons-components';\n\nconst dataSource = {\n  username: 'Zhou Maomao',\n  tel: 1810000000,\n  live: 'Hangzhou, Zhejiang',\n  remark: 'empty',\n  address: 'No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China',\n  month: 1658217401814,\n  others: {\n    nickName: 'remons',\n  },\n};\n\nconst columns = [\n  { label: '\u7528\u6237\u540d', name: 'username' },\n  { label: '\u8054\u7cfb\u65b9\u5f0f', name: 'tel' },\n  { label: '\u5c45\u4f4f\u5730', name: 'live' },\n  { label: '\u6635\u79f0', name: 'others.nickName' },\n  { label: '\u5730\u5740', name: 'address', span: 2 },\n  {\n    label: '\u5f53\u524d\u6708\u4efd',\n    name: 'month',\n    render: (name, value, record) => new Date(value).getMonth() + 1,\n  },\n];\n\nexport default () => {\n  return <Descriptions bordered title=\"\u6d4b\u8bd5\" dataSource={dataSource} columns={columns} />;\n};",
                },
              },
              dependencies: {
                react: { version: '17.0.2' },
                'remons-components': { version: '2.0.8' },
              },
              componentName: 'Descriptions',
              identifier: 'Descriptions-demo',
            },
          },
          'Form-demo': {
            component: (0, l.D8)({
              loader: (function () {
                var e = (0, d.default)(
                  (0, o.default)().mark(function e() {
                    var t, i, r, a, d, l, s;
                    return (0, o.default)().wrap(function (e) {
                      while (1)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (t = n(44938).default),
                              (i = n(42857).default),
                              (e.t0 = i),
                              (e.next = 5),
                              Promise.resolve().then(n.bind(n, 91896))
                            );
                          case 5:
                            return (
                              (e.t1 = e.sent),
                              (r = (0, e.t0)(e.t1)),
                              (e.t2 = i),
                              (e.next = 10),
                              Promise.resolve().then(n.bind(n, 94657))
                            );
                          case 10:
                            return (
                              (e.t3 = e.sent),
                              (a = (0, e.t2)(e.t3)),
                              (e.t4 = t),
                              (e.next = 15),
                              Promise.resolve().then(n.t.bind(n, 67294, 19))
                            );
                          case 15:
                            return (
                              (e.t5 = e.sent),
                              (d = (0, e.t4)(e.t5)),
                              (e.next = 19),
                              Promise.all([n.e(16), n.e(846), n.e(791), n.e(546)]).then(
                                n.bind(n, 69546),
                              )
                            );
                          case 19:
                            return (
                              (l = e.sent),
                              (s = function () {
                                var e = l.Form.useForm(),
                                  t = (0, a['default'])(e, 1),
                                  n = t[0];
                                (0, d.useEffect)(function () {
                                  n.setFieldsValue({ test: 1 });
                                }, []);
                                var i = [
                                    { label: '\u6d4b\u8bd5', name: 'test', component: 'input' },
                                    { label: '\u6d4b\u8bd51', name: 'test1', component: 'input' },
                                    { label: '\u6d4b\u8bd52', name: 'test2', component: 'input' },
                                    { label: '\u6d4b\u8bd53', name: 'test3', component: 'input' },
                                    { label: '\u6d4b\u8bd54', name: 'test4', component: 'input' },
                                  ],
                                  o = { labelCol: { span: 8 }, wrapperCol: { span: 16 } };
                                return d['default'].createElement(
                                  l.Form,
                                  (0, r['default'])({}, o, {
                                    cols: 3,
                                    isPreview: !0,
                                    form: n,
                                    labelAlign: 'right',
                                    size: 'small',
                                  }),
                                  i.map(function (e) {
                                    return d['default'].createElement(
                                      l.FormItem,
                                      (0, r['default'])({ key: e.name }, e),
                                    );
                                  }),
                                );
                              }),
                              e.abrupt('return', s)
                            );
                          case 22:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  }),
                );
                function t() {
                  return e.apply(this, arguments);
                }
                return t;
              })(),
              loading: () => null,
            }),
            previewerProps: {
              sources: {
                _: {
                  tsx: "import React, { useEffect } from 'react';\nimport { Form, FormItem } from 'remons-components';\n\nexport default () => {\n  const [form] = Form.useForm();\n  useEffect(() => {\n    form.setFieldsValue({ test: 1 });\n  }, []);\n\n  const items = [\n    { label: '\u6d4b\u8bd5', name: 'test', component: 'input' },\n    { label: '\u6d4b\u8bd51', name: 'test1', component: 'input' },\n    { label: '\u6d4b\u8bd52', name: 'test2', component: 'input' },\n    { label: '\u6d4b\u8bd53', name: 'test3', component: 'input' },\n    { label: '\u6d4b\u8bd54', name: 'test4', component: 'input' },\n  ];\n\n  const formLayout = {\n    labelCol: {\n      span: 8,\n    },\n    wrapperCol: {\n      span: 16,\n    },\n  };\n\n  return (\n    <Form {...formLayout} cols={3} isPreview form={form} labelAlign=\"right\" size=\"small\">\n      {items.map((item) => (\n        <FormItem key={item.name} {...item} />\n      ))}\n    </Form>\n  );\n};",
                },
              },
              dependencies: {
                react: { version: '17.0.2' },
                'remons-components': { version: '2.0.8' },
              },
              componentName: 'Form',
              identifier: 'Form-demo',
            },
          },
          'FormItem-demo': {
            component: (0, l.D8)({
              loader: (function () {
                var e = (0, d.default)(
                  (0, o.default)().mark(function e() {
                    var t, i, r, a, d, l, s, p, m, c, u, f, y, E, h, H, v;
                    return (0, o.default)().wrap(function (e) {
                      while (1)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (t = n(42857).default),
                              (e.t0 = t),
                              (e.next = 4),
                              Promise.resolve().then(n.bind(n, 91896))
                            );
                          case 4:
                            return (
                              (e.t1 = e.sent),
                              (i = (0, e.t0)(e.t1)),
                              (e.t2 = t),
                              (e.next = 9),
                              Promise.resolve().then(n.bind(n, 90636))
                            );
                          case 9:
                            return (
                              (e.t3 = e.sent),
                              (r = (0, e.t2)(e.t3)),
                              (e.t4 = t),
                              (e.next = 14),
                              Promise.resolve().then(n.bind(n, 3182))
                            );
                          case 14:
                            return (
                              (e.t5 = e.sent),
                              (a = (0, e.t4)(e.t5)),
                              (e.t6 = t),
                              (e.next = 19),
                              Promise.resolve().then(n.bind(n, 94657))
                            );
                          case 19:
                            return (
                              (e.t7 = e.sent),
                              (d = (0, e.t6)(e.t7)),
                              (e.t8 = t),
                              (e.next = 24),
                              Promise.resolve().then(n.t.bind(n, 67294, 19))
                            );
                          case 24:
                            return (
                              (e.t9 = e.sent),
                              (l = (0, e.t8)(e.t9)),
                              (e.next = 28),
                              Promise.all([n.e(16), n.e(846), n.e(791), n.e(273), n.e(871)]).then(
                                n.bind(n, 62871),
                              )
                            );
                          case 28:
                            return (
                              (s = e.sent),
                              (e.next = 31),
                              Promise.all([n.e(16), n.e(846), n.e(791), n.e(546)]).then(
                                n.bind(n, 69546),
                              )
                            );
                          case 31:
                            return (
                              (p = e.sent),
                              (e.next = 34),
                              Promise.all([n.e(846), n.e(273), n.e(647)]).then(n.bind(n, 2006))
                            );
                          case 34:
                            return (
                              (m = e.sent),
                              (c = [
                                { label: 'Apple', value: 'Apple' },
                                { label: 'Pear', value: 'Pear' },
                                { label: 'Orange', value: 'Orange' },
                              ]),
                              (u = [
                                {
                                  title: 'Node1',
                                  value: '0-0',
                                  children: [
                                    { title: 'Child Node1', value: '0-0-1' },
                                    { title: 'Child Node2', value: '0-0-2' },
                                  ],
                                },
                                { title: 'Node2', value: '0-1' },
                              ]),
                              (f = [
                                {
                                  value: 'zhejiang',
                                  label: 'Zhejiang',
                                  children: [
                                    {
                                      value: 'hangzhou',
                                      label: 'Hangzhou',
                                      children: [{ value: 'xihu', label: 'West Lake' }],
                                    },
                                  ],
                                },
                                {
                                  value: 'jiangsu',
                                  label: 'Jiangsu',
                                  children: [
                                    {
                                      value: 'nanjing',
                                      label: 'Nanjing',
                                      children: [{ value: 'zhonghuamen', label: 'Zhong Hua Men' }],
                                    },
                                  ],
                                },
                              ]),
                              (y = Array.from({ length: 20 }).map(function (e, t) {
                                return {
                                  key: t.toString(),
                                  title: 'content'.concat(t + 1),
                                  description: 'description of content'.concat(t + 1),
                                };
                              })),
                              (E = [
                                { value: 'test1', label: 'test1' },
                                { value: 'test2', label: 'test2' },
                                { value: 'test3', label: 'test3' },
                              ]),
                              (h = { labelCol: { span: 4 }, wrapperCol: { span: 20 } }),
                              (H = [
                                {
                                  label: 'upload',
                                  component: 'upload',
                                  valuePropName: 'fileList',
                                  name: 'fileList',
                                  componentProps: {
                                    listType: 'picture-card',
                                    children: l['default'].createElement(
                                      'div',
                                      null,
                                      l['default'].createElement(m.PlusOutlined, null),
                                    ),
                                  },
                                },
                                { label: 'input', component: 'input', name: 'input', required: !0 },
                                { label: 'inputPassword', component: 'inputPassword' },
                                {
                                  label: 'inputNumber',
                                  component: 'inputNumber',
                                  componentProps: { min: 0 },
                                },
                                { label: 'textarea', component: 'textarea' },
                                {
                                  label: 'select',
                                  component: 'select',
                                  componentProps: {
                                    options: [{ label: '\u6d4b\u8bd5', value: 'test' }],
                                  },
                                },
                                { label: 'datePicker', component: 'datePicker' },
                                { label: 'rangePicker', component: 'rangePicker' },
                                { label: 'timePicker', component: 'timePicker' },
                                { label: 'rangeTimePicker', component: 'rangeTimePicker' },
                                {
                                  label: 'radio',
                                  component: 'radio',
                                  componentProps: { children: '\u6d4b\u8bd5' },
                                },
                                {
                                  label: 'radioGroup',
                                  component: 'radioGroup',
                                  componentProps: { options: c },
                                },
                                {
                                  label: 'checkbox',
                                  component: 'checkbox',
                                  componentProps: { children: '\u6d4b\u8bd5' },
                                },
                                {
                                  label: 'checkboxGroup',
                                  component: 'checkboxGroup',
                                  componentProps: { options: ['Apple', 'Pear', 'Orange'] },
                                },
                                { label: 'rate', component: 'rate' },
                                { label: 'slider', component: 'slider' },
                                {
                                  label: 'treeSelect',
                                  component: 'treeSelect',
                                  componentProps: { treeData: u },
                                },
                                {
                                  label: 'cascader',
                                  component: 'cascader',
                                  componentProps: { options: f },
                                },
                                {
                                  label: 'transfer',
                                  component: 'transfer',
                                  componentProps: {
                                    dataSource: y,
                                    titles: ['Source', 'Target'],
                                    render: function (e) {
                                      return e.title;
                                    },
                                  },
                                },
                                { label: 'switch', component: 'switch' },
                                { label: 'size', component: 'size' },
                                { label: 'rangeInput', component: 'rangeInput' },
                                {
                                  label: 'mentions',
                                  component: 'mentions',
                                  componentProps: { options: E },
                                },
                              ]),
                              (v = function () {
                                var e = s.Form.useForm(),
                                  t = (0, d['default'])(e, 1),
                                  n = t[0],
                                  o = (function () {
                                    var e = (0, a['default'])(
                                      (0, r['default'])().mark(function e() {
                                        var t;
                                        return (0, r['default'])().wrap(
                                          function (e) {
                                            while (1)
                                              switch ((e.prev = e.next)) {
                                                case 0:
                                                  return (
                                                    (e.prev = 0), (e.next = 3), n.validateFields()
                                                  );
                                                case 3:
                                                  (t = e.sent), console.log(t), (e.next = 10);
                                                  break;
                                                case 7:
                                                  (e.prev = 7),
                                                    (e.t0 = e['catch'](0)),
                                                    console.log(e.t0);
                                                case 10:
                                                case 'end':
                                                  return e.stop();
                                              }
                                          },
                                          e,
                                          null,
                                          [[0, 7]],
                                        );
                                      }),
                                    );
                                    return function () {
                                      return e.apply(this, arguments);
                                    };
                                  })();
                                return l['default'].createElement(
                                  s.Form,
                                  (0, i['default'])({}, h, { form: n }),
                                  H.map(function (e) {
                                    return l['default'].createElement(
                                      p.FormItem,
                                      (0, i['default'])({ key: e.label }, e),
                                    );
                                  }),
                                  l['default'].createElement(
                                    s.Button,
                                    { onClick: o },
                                    '\u63d0\u4ea4',
                                  ),
                                );
                              }),
                              e.abrupt('return', v)
                            );
                          case 44:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  }),
                );
                function t() {
                  return e.apply(this, arguments);
                }
                return t;
              })(),
              loading: () => null,
            }),
            previewerProps: {
              sources: {
                _: {
                  tsx: "import React from 'react';\nimport { Form, Upload, Button } from 'antd';\nimport { FormItem } from 'remons-components';\nimport { PlusOutlined } from '@ant-design/icons';\n\nconst radioOptions = [\n  { label: 'Apple', value: 'Apple' },\n  { label: 'Pear', value: 'Pear' },\n  { label: 'Orange', value: 'Orange' },\n];\n\nconst treeData = [\n  {\n    title: 'Node1',\n    value: '0-0',\n    children: [\n      {\n        title: 'Child Node1',\n        value: '0-0-1',\n      },\n      {\n        title: 'Child Node2',\n        value: '0-0-2',\n      },\n    ],\n  },\n  {\n    title: 'Node2',\n    value: '0-1',\n  },\n];\n\nconst cascaderOptions = [\n  {\n    value: 'zhejiang',\n    label: 'Zhejiang',\n    children: [\n      {\n        value: 'hangzhou',\n        label: 'Hangzhou',\n        children: [\n          {\n            value: 'xihu',\n            label: 'West Lake',\n          },\n        ],\n      },\n    ],\n  },\n  {\n    value: 'jiangsu',\n    label: 'Jiangsu',\n    children: [\n      {\n        value: 'nanjing',\n        label: 'Nanjing',\n        children: [\n          {\n            value: 'zhonghuamen',\n            label: 'Zhong Hua Men',\n          },\n        ],\n      },\n    ],\n  },\n];\n\nconst mockTransferData = Array.from({\n  length: 20,\n}).map((_, i) => ({\n  key: i.toString(),\n  title: `content${i + 1}`,\n  description: `description of content${i + 1}`,\n}));\n\nconst mentionsOptions = [\n  { value: 'test1', label: 'test1' },\n  { value: 'test2', label: 'test2' },\n  { value: 'test3', label: 'test3' },\n];\n\nconst layout = {\n  labelCol: { span: 4 },\n  wrapperCol: { span: 20 },\n};\n\nconst items = [\n  {\n    label: 'upload',\n    component: 'upload',\n    valuePropName: 'fileList',\n    name: 'fileList',\n    componentProps: {\n      listType: 'picture-card',\n      children: (\n        <div>\n          <PlusOutlined />\n        </div>\n      ),\n    },\n  },\n  { label: 'input', component: 'input', name: 'input', required: true },\n  { label: 'inputPassword', component: 'inputPassword' },\n  { label: 'inputNumber', component: 'inputNumber', componentProps: { min: 0 } },\n  { label: 'textarea', component: 'textarea' },\n  {\n    label: 'select',\n    component: 'select',\n    componentProps: {\n      options: [{ label: '\u6d4b\u8bd5', value: 'test' }],\n    },\n  },\n  { label: 'datePicker', component: 'datePicker' },\n  { label: 'rangePicker', component: 'rangePicker' },\n  { label: 'timePicker', component: 'timePicker' },\n  { label: 'rangeTimePicker', component: 'rangeTimePicker' },\n  { label: 'radio', component: 'radio', componentProps: { children: '\u6d4b\u8bd5' } },\n  { label: 'radioGroup', component: 'radioGroup', componentProps: { options: radioOptions } },\n  { label: 'checkbox', component: 'checkbox', componentProps: { children: '\u6d4b\u8bd5' } },\n  {\n    label: 'checkboxGroup',\n    component: 'checkboxGroup',\n    componentProps: {\n      options: ['Apple', 'Pear', 'Orange'],\n    },\n  },\n  { label: 'rate', component: 'rate' },\n  { label: 'slider', component: 'slider' },\n  { label: 'treeSelect', component: 'treeSelect', componentProps: { treeData } },\n  { label: 'cascader', component: 'cascader', componentProps: { options: cascaderOptions } },\n  {\n    label: 'transfer',\n    component: 'transfer',\n    componentProps: {\n      dataSource: mockTransferData,\n      titles: ['Source', 'Target'],\n      render: (item) => item.title,\n    },\n  },\n  { label: 'switch', component: 'switch' },\n  { label: 'size', component: 'size' },\n  { label: 'rangeInput', component: 'rangeInput' },\n  { label: 'mentions', component: 'mentions', componentProps: { options: mentionsOptions } },\n];\n\nexport default () => {\n  const [form] = Form.useForm();\n\n  const submit = async () => {\n    try {\n      const values = await form.validateFields();\n      console.log(values);\n    } catch (error) {\n      console.log(error);\n    }\n  };\n  return (\n    <Form {...layout} form={form}>\n      {items.map((item) => (\n        <FormItem key={item.label} {...item} />\n      ))}\n      <Button onClick={submit}>\u63d0\u4ea4</Button>\n    </Form>\n  );\n};",
                },
              },
              dependencies: {
                react: { version: '>=16.0.0' },
                antd: { version: '5.5.2' },
                'remons-components': { version: '2.0.8' },
                '@ant-design/icons': { version: '5.1.4' },
                'react-dom': { version: '>=16.0.0' },
              },
              componentName: 'FormItem',
              identifier: 'FormItem-demo',
            },
          },
          'Layout-demo': {
            component: (0, l.D8)({
              loader: (function () {
                var e = (0, d.default)(
                  (0, o.default)().mark(function e() {
                    var t, i, r, a, d;
                    return (0, o.default)().wrap(function (e) {
                      while (1)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (t = n(42857).default),
                              (e.t0 = t),
                              (e.next = 4),
                              Promise.resolve().then(n.t.bind(n, 67294, 19))
                            );
                          case 4:
                            return (
                              (e.t1 = e.sent),
                              (i = (0, e.t0)(e.t1)),
                              (e.next = 8),
                              Promise.all([n.e(16), n.e(846), n.e(791), n.e(546)]).then(
                                n.bind(n, 69546),
                              )
                            );
                          case 8:
                            return (
                              (r = e.sent),
                              (a = r.Layout.Section),
                              (d = function () {
                                var e = function () {
                                  alert('test');
                                };
                                return i['default'].createElement(
                                  r.Layout,
                                  null,
                                  i['default'].createElement(
                                    a,
                                    {
                                      title: '\u6d4b\u8bd5',
                                      subTitle: '\u6d4b\u8bd5\u526f\u6807\u9898',
                                    },
                                    '\u5185\u5bb9',
                                    i['default'].createElement(a, {
                                      title: '\u6d4b\u8bd51-1',
                                      onClick: e,
                                    }),
                                    i['default'].createElement(a, { title: '\u6d4b\u8bd51-2' }),
                                    i['default'].createElement(a, { title: '\u6d4b\u8bd51-3' }),
                                  ),
                                );
                              }),
                              e.abrupt('return', d)
                            );
                          case 12:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  }),
                );
                function t() {
                  return e.apply(this, arguments);
                }
                return t;
              })(),
              loading: () => null,
            }),
            previewerProps: {
              sources: {
                _: {
                  tsx: 'import React from \'react\';\nimport { Layout } from \'remons-components\';\nconst { Section } = Layout;\nexport default () => {\n  const handleClick = () => {\n    alert(\'test\');\n  };\n  return (\n    <Layout>\n      <Section title="\u6d4b\u8bd5" subTitle="\u6d4b\u8bd5\u526f\u6807\u9898">\n        \u5185\u5bb9\n        <Section title="\u6d4b\u8bd51-1" onClick={handleClick} />\n        <Section title="\u6d4b\u8bd51-2" />\n        <Section title="\u6d4b\u8bd51-3" />\n      </Section>\n    </Layout>\n  );\n};',
                },
              },
              dependencies: {
                react: { version: '17.0.2' },
                'remons-components': { version: '2.0.8' },
              },
              componentName: 'Layout',
              identifier: 'Layout-demo',
            },
          },
          'Mentions-demo': {
            component: (0, l.D8)({
              loader: (function () {
                var e = (0, d.default)(
                  (0, o.default)().mark(function e() {
                    var t, i, r, a, d;
                    return (0, o.default)().wrap(function (e) {
                      while (1)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (t = n(42857).default),
                              (e.t0 = t),
                              (e.next = 4),
                              Promise.resolve().then(n.t.bind(n, 67294, 19))
                            );
                          case 4:
                            return (
                              (e.t1 = e.sent),
                              (i = (0, e.t0)(e.t1)),
                              (e.next = 8),
                              Promise.all([n.e(16), n.e(846), n.e(791), n.e(546)]).then(
                                n.bind(n, 69546),
                              )
                            );
                          case 8:
                            return (
                              (r = e.sent),
                              (a = [
                                { value: 'test1', label: 'test1' },
                                { value: 'test2', label: 'test2' },
                                { value: 'test3', label: 'test3' },
                              ]),
                              (d = function () {
                                return i['default'].createElement(r.Mentions, { options: a });
                              }),
                              e.abrupt('return', d)
                            );
                          case 12:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  }),
                );
                function t() {
                  return e.apply(this, arguments);
                }
                return t;
              })(),
              loading: () => null,
            }),
            previewerProps: {
              sources: {
                _: {
                  tsx: "import React from 'react';\nimport { Mentions } from 'remons-components';\n\nconst options = [\n  { value: 'test1', label: 'test1' },\n  { value: 'test2', label: 'test2' },\n  { value: 'test3', label: 'test3' },\n];\n\nexport default () => {\n  return <Mentions options={options} />;\n};",
                },
              },
              dependencies: {
                react: { version: '17.0.2' },
                'remons-components': { version: '2.0.8' },
              },
              componentName: 'Mentions',
              identifier: 'Mentions-demo',
            },
          },
          'RangeInput-demo': {
            component: (0, l.D8)({
              loader: (function () {
                var e = (0, d.default)(
                  (0, o.default)().mark(function e() {
                    var t, i, r, a, d, l;
                    return (0, o.default)().wrap(function (e) {
                      while (1)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (t = n(44938).default),
                              (i = n(42857).default),
                              (e.t0 = i),
                              (e.next = 5),
                              Promise.resolve().then(n.bind(n, 94657))
                            );
                          case 5:
                            return (
                              (e.t1 = e.sent),
                              (r = (0, e.t0)(e.t1)),
                              (e.t2 = t),
                              (e.next = 10),
                              Promise.resolve().then(n.t.bind(n, 67294, 19))
                            );
                          case 10:
                            return (
                              (e.t3 = e.sent),
                              (a = (0, e.t2)(e.t3)),
                              (e.next = 14),
                              Promise.all([n.e(16), n.e(846), n.e(791), n.e(546)]).then(
                                n.bind(n, 69546),
                              )
                            );
                          case 14:
                            return (
                              (d = e.sent),
                              (l = function () {
                                var e = (0, a.useState)([]),
                                  t = (0, r['default'])(e, 2),
                                  n = t[0],
                                  i = t[1],
                                  o = function (e) {
                                    i(e);
                                  },
                                  l = { suffix: 'm', maxLength: 20 };
                                return a['default'].createElement(d.RangeInput, {
                                  startInputProps: l,
                                  value: n,
                                  onChange: o,
                                });
                              }),
                              e.abrupt('return', l)
                            );
                          case 17:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  }),
                );
                function t() {
                  return e.apply(this, arguments);
                }
                return t;
              })(),
              loading: () => null,
            }),
            previewerProps: {
              sources: {
                _: {
                  tsx: "import React, { useState } from 'react';\nimport { RangeInput } from 'remons-components';\n\nexport default () => {\n  const [val, setVal] = useState([]);\n\n  const handleChange = (val) => {\n    setVal(val);\n  };\n\n  const startInputProps = {\n    suffix: 'm',\n    maxLength: 20,\n  };\n\n  return (\n    <RangeInput startInputProps={startInputProps} value={val} onChange={handleChange}></RangeInput>\n  );\n};",
                },
              },
              dependencies: {
                react: { version: '17.0.2' },
                'remons-components': { version: '2.0.8' },
              },
              componentName: 'RangeInput',
              identifier: 'RangeInput-demo',
            },
          },
          'SearchForm-demo': {
            component: (0, l.D8)({
              loader: (function () {
                var e = (0, d.default)(
                  (0, o.default)().mark(function e() {
                    var t, i, r, a, d, l;
                    return (0, o.default)().wrap(function (e) {
                      while (1)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (t = n(42857).default),
                              (e.t0 = t),
                              (e.next = 4),
                              Promise.resolve().then(n.bind(n, 91896))
                            );
                          case 4:
                            return (
                              (e.t1 = e.sent),
                              (i = (0, e.t0)(e.t1)),
                              (e.t2 = t),
                              (e.next = 9),
                              Promise.resolve().then(n.t.bind(n, 67294, 19))
                            );
                          case 9:
                            return (
                              (e.t3 = e.sent),
                              (r = (0, e.t2)(e.t3)),
                              (e.next = 13),
                              Promise.all([n.e(16), n.e(846), n.e(791), n.e(546)]).then(
                                n.bind(n, 69546),
                              )
                            );
                          case 13:
                            return (
                              (a = e.sent),
                              (d = [
                                {
                                  name: 'test1',
                                  component: 'input',
                                  label: '\u6d4b\u8bd5\u5b57\u6bb51',
                                },
                                {
                                  name: 'test2',
                                  component: 'input',
                                  label: '\u6d4b\u8bd5\u5b57\u6bb52',
                                },
                                {
                                  name: 'test3',
                                  component: 'input',
                                  label: '\u6d4b\u8bd5\u5b57\u6bb53',
                                },
                                {
                                  name: 'test4',
                                  component: 'input',
                                  label: '\u6d4b\u8bd5\u5b57\u6bb54',
                                },
                                {
                                  name: 'test5',
                                  component: 'input',
                                  label: '\u6d4b\u8bd5\u5b57\u6bb55',
                                },
                                {
                                  name: 'test6',
                                  component: 'input',
                                  label: '\u6d4b\u8bd5\u5b57\u6bb56',
                                },
                                {
                                  name: 'test7',
                                  component: 'input',
                                  label: '\u6d4b\u8bd5\u5b57\u6bb57',
                                },
                                {
                                  name: 'test8',
                                  component: 'input',
                                  label: '\u6d4b\u8bd5\u5b57\u6bb58',
                                },
                                {
                                  name: 'test9',
                                  component: 'input',
                                  label: '\u6d4b\u8bd5\u5b57\u6bb59',
                                },
                                {
                                  name: 'test10',
                                  component: 'input',
                                  label: '\u6d4b\u8bd5\u5b57\u6bb510',
                                },
                              ]),
                              (l = function () {
                                var e = function (e) {
                                  console.log(e);
                                };
                                return r['default'].createElement(
                                  a.SearchForm,
                                  { size: 'small', cols: 4, rows: 2, onSearch: e },
                                  d.map(function (e) {
                                    return r['default'].createElement(
                                      a.FormItem,
                                      (0, i['default'])({}, e, { key: e.name }),
                                    );
                                  }),
                                );
                              }),
                              e.abrupt('return', l)
                            );
                          case 17:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  }),
                );
                function t() {
                  return e.apply(this, arguments);
                }
                return t;
              })(),
              loading: () => null,
            }),
            previewerProps: {
              sources: {
                _: {
                  tsx: "import React from 'react';\nimport { SearchForm, FormItem } from 'remons-components';\n\nconst items = [\n  { name: 'test1', component: 'input', label: '\u6d4b\u8bd5\u5b57\u6bb51' },\n  { name: 'test2', component: 'input', label: '\u6d4b\u8bd5\u5b57\u6bb52' },\n  { name: 'test3', component: 'input', label: '\u6d4b\u8bd5\u5b57\u6bb53' },\n  { name: 'test4', component: 'input', label: '\u6d4b\u8bd5\u5b57\u6bb54' },\n  { name: 'test5', component: 'input', label: '\u6d4b\u8bd5\u5b57\u6bb55' },\n  { name: 'test6', component: 'input', label: '\u6d4b\u8bd5\u5b57\u6bb56' },\n  { name: 'test7', component: 'input', label: '\u6d4b\u8bd5\u5b57\u6bb57' },\n  { name: 'test8', component: 'input', label: '\u6d4b\u8bd5\u5b57\u6bb58' },\n  { name: 'test9', component: 'input', label: '\u6d4b\u8bd5\u5b57\u6bb59' },\n  { name: 'test10', component: 'input', label: '\u6d4b\u8bd5\u5b57\u6bb510' },\n];\n\nexport default () => {\n  const onSearch = (values) => {\n    console.log(values);\n  };\n  return (\n    <SearchForm size=\"small\" cols={4} rows={2} onSearch={onSearch}>\n      {items.map((item) => (\n        <FormItem {...item} key={item.name} />\n      ))}\n    </SearchForm>\n  );\n};",
                },
              },
              dependencies: {
                react: { version: '17.0.2' },
                'remons-components': { version: '2.0.8' },
              },
              componentName: 'SearchForm',
              identifier: 'SearchForm-demo',
            },
          },
          'SizeInput-demo': {
            component: (0, l.D8)({
              loader: (function () {
                var e = (0, d.default)(
                  (0, o.default)().mark(function e() {
                    var t, i, r, a, d, l;
                    return (0, o.default)().wrap(function (e) {
                      while (1)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (t = n(44938).default),
                              (i = n(42857).default),
                              (e.t0 = i),
                              (e.next = 5),
                              Promise.resolve().then(n.bind(n, 94657))
                            );
                          case 5:
                            return (
                              (e.t1 = e.sent),
                              (r = (0, e.t0)(e.t1)),
                              (e.t2 = t),
                              (e.next = 10),
                              Promise.resolve().then(n.t.bind(n, 67294, 19))
                            );
                          case 10:
                            return (
                              (e.t3 = e.sent),
                              (a = (0, e.t2)(e.t3)),
                              (e.next = 14),
                              Promise.all([n.e(16), n.e(846), n.e(791), n.e(546)]).then(
                                n.bind(n, 69546),
                              )
                            );
                          case 14:
                            return (
                              (d = e.sent),
                              (l = function () {
                                var e = (0, a.useState)([1, 2, 3]),
                                  t = (0, r['default'])(e, 2),
                                  n = t[0],
                                  i = t[1],
                                  o = function (e) {
                                    i(e);
                                  };
                                return a['default'].createElement(d.SizeInput, {
                                  defaultValue: n,
                                  onChange: o,
                                  value: n,
                                  unit: ['m', 'cm', 'mm'],
                                  numberInputProps: [{ min: 0, step: 0.5 }],
                                });
                              }),
                              e.abrupt('return', l)
                            );
                          case 17:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  }),
                );
                function t() {
                  return e.apply(this, arguments);
                }
                return t;
              })(),
              loading: () => null,
            }),
            previewerProps: {
              sources: {
                _: {
                  tsx: "import React, { useState } from 'react';\nimport { SizeInput } from 'remons-components';\n\nexport default () => {\n  const [val, setVal] = useState([1, 2, 3]);\n\n  const handleChange = (val) => {\n    setVal(val);\n  };\n\n  return (\n    <SizeInput\n      defaultValue={val}\n      onChange={handleChange}\n      value={val}\n      unit={['m', 'cm', 'mm']}\n      numberInputProps={[{ min: 0, step: 0.5 }]}\n    />\n  );\n};",
                },
              },
              dependencies: {
                react: { version: '17.0.2' },
                'remons-components': { version: '2.0.8' },
              },
              componentName: 'SizeInput',
              identifier: 'SizeInput-demo',
            },
          },
          'ToolBar-demo': {
            component: (0, l.D8)({
              loader: (function () {
                var e = (0, d.default)(
                  (0, o.default)().mark(function e() {
                    var t, i, r, a, d, l, s, p;
                    return (0, o.default)().wrap(function (e) {
                      while (1)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (t = n(42857).default),
                              (e.t0 = t),
                              (e.next = 4),
                              Promise.resolve().then(n.t.bind(n, 67294, 19))
                            );
                          case 4:
                            return (
                              (e.t1 = e.sent),
                              (i = (0, e.t0)(e.t1)),
                              (e.next = 8),
                              Promise.all([n.e(16), n.e(846), n.e(791), n.e(546)]).then(
                                n.bind(n, 69546),
                              )
                            );
                          case 8:
                            return (
                              (r = e.sent),
                              (e.next = 11),
                              Promise.all([n.e(846), n.e(273), n.e(647)]).then(n.bind(n, 2006))
                            );
                          case 11:
                            return (
                              (a = e.sent),
                              (d = [
                                {
                                  label: '\u6d4b\u8bd51',
                                  key: 'test1',
                                  type: 'primary',
                                  icon: i['default'].createElement(a.DownloadOutlined, null),
                                },
                                { label: '\u6d4b\u8bd52', key: 'test2', type: 'link' },
                                {
                                  label: '\u6d4b\u8bd53',
                                  key: 'test3',
                                  type: 'primary',
                                  children: [
                                    { key: 'test3-1', label: '\u6d4b\u8bd53-1' },
                                    { key: 'test3-2', label: '\u6d4b\u8bd53-2' },
                                    { key: 'test3-3', label: '\u6d4b\u8bd53-3' },
                                  ],
                                },
                              ]),
                              (l = [
                                {
                                  label: '\u5bfc\u51fa',
                                  key: 'export',
                                  type: 'link',
                                  icon: i['default'].createElement(a.DownloadOutlined, null),
                                },
                              ]),
                              (s = function (e, t) {
                                console.log({ key: e, data: t });
                              }),
                              (p = function () {
                                return i['default'].createElement(r.ToolBar, {
                                  onActionClick: s,
                                  leftActionList: d,
                                  rightActionList: l,
                                });
                              }),
                              e.abrupt('return', p)
                            );
                          case 17:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  }),
                );
                function t() {
                  return e.apply(this, arguments);
                }
                return t;
              })(),
              loading: () => null,
            }),
            previewerProps: {
              sources: {
                _: {
                  tsx: "import React from 'react';\nimport { ToolBar } from 'remons-components';\nimport { DownloadOutlined } from '@ant-design/icons';\n\nconst leftActionList = [\n  {\n    label: '\u6d4b\u8bd51',\n    key: 'test1',\n    type: 'primary',\n    icon: <DownloadOutlined />,\n  },\n  {\n    label: '\u6d4b\u8bd52',\n    key: 'test2',\n    type: 'link',\n  },\n  {\n    label: '\u6d4b\u8bd53',\n    key: 'test3',\n    type: 'primary',\n    children: [\n      {\n        key: 'test3-1',\n        label: '\u6d4b\u8bd53-1',\n      },\n      {\n        key: 'test3-2',\n        label: '\u6d4b\u8bd53-2',\n      },\n      {\n        key: 'test3-3',\n        label: '\u6d4b\u8bd53-3',\n      },\n    ],\n  },\n];\n\nconst rightActionList = [\n  {\n    label: '\u5bfc\u51fa',\n    key: 'export',\n    type: 'link',\n    icon: <DownloadOutlined />,\n  },\n];\n\nconst onActionClick = (key, data) => {\n  console.log({ key, data });\n};\n\nexport default () => {\n  return (\n    <ToolBar\n      onActionClick={onActionClick}\n      leftActionList={leftActionList}\n      rightActionList={rightActionList}\n    />\n  );\n};",
                },
              },
              dependencies: {
                react: { version: '>=16.0.0' },
                'remons-components': { version: '2.0.8' },
                '@ant-design/icons': { version: '5.1.4' },
                'react-dom': { version: '>=16.0.0' },
              },
              componentName: 'ToolBar',
              identifier: 'ToolBar-demo',
            },
          },
        },
        p = JSON.parse(
          '{"ActionList":{"default":[{"identifier":"actions","description":"\u6570\u636e\u6e90\uff0c\u7ee7\u627f\u81ea antd Button API","type":"ActionType[]","default":"[]"},{"identifier":"onActionClick","description":"\u70b9\u51fb\u6309\u94ae\u89e6\u53d1","type":"(key: string, data?: object) => void"},{"identifier":"menuTrigger","description":"\u89e6\u53d1\u65b9\u5f0f","type":"(\\"contextMenu\\" | \\"click\\" | \\"hover\\")[]","default":"[\'click\']"}],"ActionType":[{"identifier":"key","description":"\u552f\u4e00\u952e","type":"string","required":true},{"identifier":"label","description":"\u540d\u79f0","type":"string","required":true},{"identifier":"children","description":"children","type":"any[]"}],"IProps":[{"identifier":"actions","description":"\u6570\u636e\u6e90\uff0c\u7ee7\u627f\u81ea antd Button API","type":"ActionType[]","default":"[]"},{"identifier":"onActionClick","description":"\u70b9\u51fb\u6309\u94ae\u89e6\u53d1","type":"(key: string, data?: object) => void"},{"identifier":"menuTrigger","description":"\u89e6\u53d1\u65b9\u5f0f","type":"(\\"contextMenu\\" | \\"click\\" | \\"hover\\")[]","default":"[\'click\']"}]},"ButtonBar":{"default":[{"identifier":"children","description":"\u5b50\u5143\u7d20","type":"ReactNode"},{"identifier":"affixProps","description":"\u900f\u4f20\u5230 antd Affix\uff0c\u7ee7\u627f\u81ea antd Affix API","type":"AffixProps","default":"{ offsetBottom: 0 }"},{"identifier":"bordered","description":"\u662f\u5426\u663e\u793a\u8fb9\u6846","type":"boolean","default":"true"},{"identifier":"align","description":"\u6309\u94ae\u4f4d\u7f6e","type":"\\"left\\" | \\"center\\" | \\"right\\"","default":"center"},{"identifier":"isAffix","description":"\u662f\u5426\u56fa\u5b9a\u7c98\u6027\u5b9a\u4f4d","type":"boolean","default":"true"},{"identifier":"className","description":"className","type":"string"}]},"Descriptions":{"default":[{"identifier":"dataSource","description":"\u6570\u636e\u6e90","type":"any","required":true},{"identifier":"columns","description":"\u89e3\u6790\u7684\u6570\u636e","type":"DescriptionsItemType[]","required":true},{"identifier":"hideEmptyValue","description":"\u662f\u5426\u9690\u85cf\u4e3a\u7a7a\u7684\u6570\u636e\uff08span\u6709\u4e14 \u4e3a 1 \u65f6\u6709\u6548\uff09","type":"boolean"},{"identifier":"prefixCls","type":"string"},{"identifier":"className","type":"string"},{"identifier":"rootClassName","type":"string"},{"identifier":"style","type":"CSSProperties"},{"identifier":"bordered","type":"boolean"},{"identifier":"size","type":"\\"middle\\" | \\"small\\" | \\"default\\""},{"identifier":"title","type":"ReactNode"},{"identifier":"extra","type":"ReactNode"},{"identifier":"column","type":"number | Partial<Record<Breakpoint, number>>"},{"identifier":"layout","type":"\\"horizontal\\" | \\"vertical\\""},{"identifier":"colon","type":"boolean"},{"identifier":"labelStyle","type":"CSSProperties"},{"identifier":"contentStyle","type":"CSSProperties"}],"IPropsOptions":[{"identifier":"dataSource","description":"\u6570\u636e\u6e90","type":"any","required":true},{"identifier":"columns","description":"\u89e3\u6790\u7684\u6570\u636e","type":"DescriptionsItemType[]","required":true},{"identifier":"hideEmptyValue","description":"\u662f\u5426\u9690\u85cf\u4e3a\u7a7a\u7684\u6570\u636e\uff08span\u6709\u4e14 \u4e3a 1 \u65f6\u6709\u6548\uff09","type":"boolean"}],"DescriptionsItemType":[{"identifier":"label","description":"\u63cf\u8ff0\u6807\u9898","type":"string","required":true},{"identifier":"name","description":"\u5b57\u6bb5\u540d","type":"string","required":true},{"identifier":"render","description":"\u81ea\u5b9a\u4e49\u6e32\u67d3\u51fd\u6570","type":"(name: string, value: any, record: object) => string"},{"identifier":"contentStyle","description":"\u5185\u5bb9\u6837\u5f0f","type":"CSSProperties"},{"identifier":"labelStyle","description":"label \u6837\u5f0f","type":"CSSProperties"},{"identifier":"span","description":"\u5217\u7684\u6570\u91cf","type":"number"}]},"Form":{"default":[{"identifier":"isPreview","description":"\u662f\u5426\u9884\u89c8\u6001","type":"boolean","default":"false"},{"identifier":"cols","description":"\u6bcf\u884c\u663e\u793a\u6570\u91cf","type":"2 | 3 | 4"},{"identifier":"forwardedRef","description":"ref \u900f\u4f20","type":"any"},{"identifier":"prefixCls","type":"string"},{"identifier":"colon","type":"boolean"},{"identifier":"name","type":"string"},{"identifier":"layout","type":"FormLayout"},{"identifier":"labelAlign","type":"FormLabelAlign"},{"identifier":"labelWrap","type":"boolean"},{"identifier":"labelCol","type":"ColProps"},{"identifier":"wrapperCol","type":"ColProps"},{"identifier":"form","type":"FormInstance<any>"},{"identifier":"size","type":"SizeType"},{"identifier":"disabled","type":"boolean"},{"identifier":"scrollToFirstError","type":"boolean | Options<unknown>"},{"identifier":"requiredMark","type":"RequiredMark"},{"identifier":"hideRequiredMark","description":"@deprecated Will warning in future branch. Pls use `requiredMark` instead.","type":"boolean"},{"identifier":"rootClassName","type":"string"},{"identifier":"acceptCharset","type":"string"},{"identifier":"action","type":"string"},{"identifier":"autoComplete","type":"string"},{"identifier":"encType","type":"string"},{"identifier":"method","type":"string"},{"identifier":"noValidate","type":"boolean"},{"identifier":"target","type":"string"},{"identifier":"defaultChecked","type":"boolean"},{"identifier":"defaultValue","type":"string | number | readonly string[]"},{"identifier":"suppressContentEditableWarning","type":"boolean"},{"identifier":"suppressHydrationWarning","type":"boolean"},{"identifier":"accessKey","type":"string"},{"identifier":"autoFocus","type":"boolean"},{"identifier":"className","type":"string"},{"identifier":"contentEditable","type":"Booleanish | \\"inherit\\""},{"identifier":"contextMenu","type":"string"},{"identifier":"dir","type":"string"},{"identifier":"draggable","type":"Booleanish"},{"identifier":"hidden","type":"boolean"},{"identifier":"id","type":"string"},{"identifier":"lang","type":"string"},{"identifier":"nonce","type":"string"},{"identifier":"placeholder","type":"string"},{"identifier":"slot","type":"string"},{"identifier":"spellCheck","type":"Booleanish"},{"identifier":"style","type":"CSSProperties"},{"identifier":"tabIndex","type":"number"},{"identifier":"title","type":"string"},{"identifier":"translate","type":"\\"yes\\" | \\"no\\""},{"identifier":"radioGroup","type":"string"},{"identifier":"role","type":"AriaRole"},{"identifier":"about","type":"string"},{"identifier":"content","type":"string"},{"identifier":"datatype","type":"string"},{"identifier":"inlist","type":"any"},{"identifier":"prefix","type":"string"},{"identifier":"property","type":"string"},{"identifier":"rel","type":"string"},{"identifier":"resource","type":"string"},{"identifier":"rev","type":"string"},{"identifier":"typeof","type":"string"},{"identifier":"vocab","type":"string"},{"identifier":"autoCapitalize","type":"string"},{"identifier":"autoCorrect","type":"string"},{"identifier":"autoSave","type":"string"},{"identifier":"color","type":"string"},{"identifier":"itemProp","type":"string"},{"identifier":"itemScope","type":"boolean"},{"identifier":"itemType","type":"string"},{"identifier":"itemID","type":"string"},{"identifier":"itemRef","type":"string"},{"identifier":"results","type":"number"},{"identifier":"security","type":"string"},{"identifier":"unselectable","type":"\\"on\\" | \\"off\\""},{"identifier":"inputMode","description":"Hints at the type of data that might be entered by the user while editing the element or its contents\\n@see https://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-inputmode-attribute","type":"\\"none\\" | \\"search\\" | \\"text\\" | \\"tel\\" | \\"url\\" | \\"email\\" | \\"numeric\\" | \\"decimal\\""},{"identifier":"is","description":"Specify that a standard HTML element should behave like a defined custom built-in element\\n@see https://html.spec.whatwg.org/multipage/custom-elements.html#attr-is","type":"string"},{"identifier":"aria-activedescendant","description":"Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application.","type":"string"},{"identifier":"aria-atomic","description":"Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute.","type":"Booleanish"},{"identifier":"aria-autocomplete","description":"Indicates whether inputting text could trigger display of one or more predictions of the user\'s intended value for an input and specifies how predictions would be\\npresented if they are made.","type":"\\"inline\\" | \\"list\\" | \\"none\\" | \\"both\\""},{"identifier":"aria-busy","description":"Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user.","type":"Booleanish"},{"identifier":"aria-checked","description":"Indicates the current \\"checked\\" state of checkboxes, radio buttons, and other widgets.\\n@see aria-pressed\\n@see aria-selected.","type":"boolean | \\"true\\" | \\"false\\" | \\"mixed\\""},{"identifier":"aria-colcount","description":"Defines the total number of columns in a table, grid, or treegrid.\\n@see aria-colindex.","type":"number"},{"identifier":"aria-colindex","description":"Defines an element\'s column index or position with respect to the total number of columns within a table, grid, or treegrid.\\n@see aria-colcount\\n@see aria-colspan.","type":"number"},{"identifier":"aria-colspan","description":"Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.\\n@see aria-colindex\\n@see aria-rowspan.","type":"number"},{"identifier":"aria-controls","description":"Identifies the element (or elements) whose contents or presence are controlled by the current element.\\n@see aria-owns.","type":"string"},{"identifier":"aria-current","description":"Indicates the element that represents the current item within a container or set of related elements.","type":"boolean | \\"true\\" | \\"false\\" | \\"page\\" | \\"step\\" | \\"location\\" | \\"date\\" | \\"time\\""},{"identifier":"aria-describedby","description":"Identifies the element (or elements) that describes the object.\\n@see aria-labelledby","type":"string"},{"identifier":"aria-details","description":"Identifies the element that provides a detailed, extended description for the object.\\n@see aria-describedby.","type":"string"},{"identifier":"aria-disabled","description":"Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.\\n@see aria-hidden\\n@see aria-readonly.","type":"Booleanish"},{"identifier":"aria-dropeffect","description":"Indicates what functions can be performed when a dragged object is released on the drop target.\\n@deprecated in ARIA 1.1","type":"\\"link\\" | \\"none\\" | \\"copy\\" | \\"execute\\" | \\"move\\" | \\"popup\\""},{"identifier":"aria-errormessage","description":"Identifies the element that provides an error message for the object.\\n@see aria-invalid\\n@see aria-describedby.","type":"string"},{"identifier":"aria-expanded","description":"Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.","type":"Booleanish"},{"identifier":"aria-flowto","description":"Identifies the next element (or elements) in an alternate reading order of content which, at the user\'s discretion,\\nallows assistive technology to override the general default of reading in document source order.","type":"string"},{"identifier":"aria-grabbed","description":"Indicates an element\'s \\"grabbed\\" state in a drag-and-drop operation.\\n@deprecated in ARIA 1.1","type":"Booleanish"},{"identifier":"aria-haspopup","description":"Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.","type":"boolean | \\"true\\" | \\"false\\" | \\"dialog\\" | \\"grid\\" | \\"listbox\\" | \\"menu\\" | \\"tree\\""},{"identifier":"aria-hidden","description":"Indicates whether the element is exposed to an accessibility API.\\n@see aria-disabled.","type":"Booleanish"},{"identifier":"aria-invalid","description":"Indicates the entered value does not conform to the format expected by the application.\\n@see aria-errormessage.","type":"boolean | \\"true\\" | \\"false\\" | \\"grammar\\" | \\"spelling\\""},{"identifier":"aria-keyshortcuts","description":"Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.","type":"string"},{"identifier":"aria-label","description":"Defines a string value that labels the current element.\\n@see aria-labelledby.","type":"string"},{"identifier":"aria-labelledby","description":"Identifies the element (or elements) that labels the current element.\\n@see aria-describedby.","type":"string"},{"identifier":"aria-level","description":"Defines the hierarchical level of an element within a structure.","type":"number"},{"identifier":"aria-live","description":"Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.","type":"\\"off\\" | \\"assertive\\" | \\"polite\\""},{"identifier":"aria-modal","description":"Indicates whether an element is modal when displayed.","type":"Booleanish"},{"identifier":"aria-multiline","description":"Indicates whether a text box accepts multiple lines of input or only a single line.","type":"Booleanish"},{"identifier":"aria-multiselectable","description":"Indicates that the user may select more than one item from the current selectable descendants.","type":"Booleanish"},{"identifier":"aria-orientation","description":"Indicates whether the element\'s orientation is horizontal, vertical, or unknown/ambiguous.","type":"\\"horizontal\\" | \\"vertical\\""},{"identifier":"aria-owns","description":"Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship\\nbetween DOM elements where the DOM hierarchy cannot be used to represent the relationship.\\n@see aria-controls.","type":"string"},{"identifier":"aria-placeholder","description":"Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.\\nA hint could be a sample value or a brief description of the expected format.","type":"string"},{"identifier":"aria-posinset","description":"Defines an element\'s number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.\\n@see aria-setsize.","type":"number"},{"identifier":"aria-pressed","description":"Indicates the current \\"pressed\\" state of toggle buttons.\\n@see aria-checked\\n@see aria-selected.","type":"boolean | \\"true\\" | \\"false\\" | \\"mixed\\""},{"identifier":"aria-readonly","description":"Indicates that the element is not editable, but is otherwise operable.\\n@see aria-disabled.","type":"Booleanish"},{"identifier":"aria-relevant","description":"Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.\\n@see aria-atomic.","type":"\\"text\\" | \\"additions\\" | \\"additions removals\\" | \\"additions text\\" | \\"all\\" | \\"removals\\" | \\"removals additions\\" | \\"removals text\\" | \\"text additions\\" | \\"text removals\\""},{"identifier":"aria-required","description":"Indicates that user input is required on the element before a form may be submitted.","type":"Booleanish"},{"identifier":"aria-roledescription","description":"Defines a human-readable, author-localized description for the role of an element.","type":"string"},{"identifier":"aria-rowcount","description":"Defines the total number of rows in a table, grid, or treegrid.\\n@see aria-rowindex.","type":"number"},{"identifier":"aria-rowindex","description":"Defines an element\'s row index or position with respect to the total number of rows within a table, grid, or treegrid.\\n@see aria-rowcount\\n@see aria-rowspan.","type":"number"},{"identifier":"aria-rowspan","description":"Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.\\n@see aria-rowindex\\n@see aria-colspan.","type":"number"},{"identifier":"aria-selected","description":"Indicates the current \\"selected\\" state of various widgets.\\n@see aria-checked\\n@see aria-pressed.","type":"Booleanish"},{"identifier":"aria-setsize","description":"Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.\\n@see aria-posinset.","type":"number"},{"identifier":"aria-sort","description":"Indicates if items in a table or grid are sorted in ascending or descending order.","type":"\\"none\\" | \\"ascending\\" | \\"descending\\" | \\"other\\""},{"identifier":"aria-valuemax","description":"Defines the maximum allowed value for a range widget.","type":"number"},{"identifier":"aria-valuemin","description":"Defines the minimum allowed value for a range widget.","type":"number"},{"identifier":"aria-valuenow","description":"Defines the current value for a range widget.\\n@see aria-valuetext.","type":"number"},{"identifier":"aria-valuetext","description":"Defines the human readable text alternative of aria-valuenow for a range widget.","type":"string"},{"identifier":"dangerouslySetInnerHTML","type":"{ __html: string | TrustedHTML; }"},{"identifier":"onCopy","type":"ClipboardEventHandler<HTMLFormElement>"},{"identifier":"onCopyCapture","type":"ClipboardEventHandler<HTMLFormElement>"},{"identifier":"onCut","type":"ClipboardEventHandler<HTMLFormElement>"},{"identifier":"onCutCapture","type":"ClipboardEventHandler<HTMLFormElement>"},{"identifier":"onPaste","type":"ClipboardEventHandler<HTMLFormElement>"},{"identifier":"onPasteCapture","type":"ClipboardEventHandler<HTMLFormElement>"},{"identifier":"onCompositionEnd","type":"CompositionEventHandler<HTMLFormElement>"},{"identifier":"onCompositionEndCapture","type":"CompositionEventHandler<HTMLFormElement>"},{"identifier":"onCompositionStart","type":"CompositionEventHandler<HTMLFormElement>"},{"identifier":"onCompositionStartCapture","type":"CompositionEventHandler<HTMLFormElement>"},{"identifier":"onCompositionUpdate","type":"CompositionEventHandler<HTMLFormElement>"},{"identifier":"onCompositionUpdateCapture","type":"CompositionEventHandler<HTMLFormElement>"},{"identifier":"onFocus","type":"FocusEventHandler<HTMLFormElement>"},{"identifier":"onFocusCapture","type":"FocusEventHandler<HTMLFormElement>"},{"identifier":"onBlur","type":"FocusEventHandler<HTMLFormElement>"},{"identifier":"onBlurCapture","type":"FocusEventHandler<HTMLFormElement>"},{"identifier":"onChange","type":"FormEventHandler<HTMLFormElement>"},{"identifier":"onChangeCapture","type":"FormEventHandler<HTMLFormElement>"},{"identifier":"onBeforeInput","type":"FormEventHandler<HTMLFormElement>"},{"identifier":"onBeforeInputCapture","type":"FormEventHandler<HTMLFormElement>"},{"identifier":"onInput","type":"FormEventHandler<HTMLFormElement>"},{"identifier":"onInputCapture","type":"FormEventHandler<HTMLFormElement>"},{"identifier":"onReset","type":"FormEventHandler<HTMLFormElement>"},{"identifier":"onResetCapture","type":"FormEventHandler<HTMLFormElement>"},{"identifier":"onSubmitCapture","type":"FormEventHandler<HTMLFormElement>"},{"identifier":"onInvalid","type":"FormEventHandler<HTMLFormElement>"},{"identifier":"onInvalidCapture","type":"FormEventHandler<HTMLFormElement>"},{"identifier":"onLoad","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onLoadCapture","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onError","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onErrorCapture","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onKeyDown","type":"KeyboardEventHandler<HTMLFormElement>"},{"identifier":"onKeyDownCapture","type":"KeyboardEventHandler<HTMLFormElement>"},{"identifier":"onKeyPress","description":"@deprecated","type":"KeyboardEventHandler<HTMLFormElement>"},{"identifier":"onKeyPressCapture","description":"@deprecated","type":"KeyboardEventHandler<HTMLFormElement>"},{"identifier":"onKeyUp","type":"KeyboardEventHandler<HTMLFormElement>"},{"identifier":"onKeyUpCapture","type":"KeyboardEventHandler<HTMLFormElement>"},{"identifier":"onAbort","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onAbortCapture","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onCanPlay","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onCanPlayCapture","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onCanPlayThrough","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onCanPlayThroughCapture","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onDurationChange","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onDurationChangeCapture","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onEmptied","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onEmptiedCapture","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onEncrypted","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onEncryptedCapture","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onEnded","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onEndedCapture","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onLoadedData","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onLoadedDataCapture","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onLoadedMetadata","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onLoadedMetadataCapture","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onLoadStart","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onLoadStartCapture","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onPause","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onPauseCapture","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onPlay","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onPlayCapture","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onPlaying","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onPlayingCapture","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onProgress","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onProgressCapture","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onRateChange","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onRateChangeCapture","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onResize","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onResizeCapture","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onSeeked","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onSeekedCapture","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onSeeking","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onSeekingCapture","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onStalled","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onStalledCapture","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onSuspend","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onSuspendCapture","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onTimeUpdate","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onTimeUpdateCapture","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onVolumeChange","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onVolumeChangeCapture","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onWaiting","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onWaitingCapture","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onAuxClick","type":"MouseEventHandler<HTMLFormElement>"},{"identifier":"onAuxClickCapture","type":"MouseEventHandler<HTMLFormElement>"},{"identifier":"onClick","type":"MouseEventHandler<HTMLFormElement>"},{"identifier":"onClickCapture","type":"MouseEventHandler<HTMLFormElement>"},{"identifier":"onContextMenu","type":"MouseEventHandler<HTMLFormElement>"},{"identifier":"onContextMenuCapture","type":"MouseEventHandler<HTMLFormElement>"},{"identifier":"onDoubleClick","type":"MouseEventHandler<HTMLFormElement>"},{"identifier":"onDoubleClickCapture","type":"MouseEventHandler<HTMLFormElement>"},{"identifier":"onDrag","type":"DragEventHandler<HTMLFormElement>"},{"identifier":"onDragCapture","type":"DragEventHandler<HTMLFormElement>"},{"identifier":"onDragEnd","type":"DragEventHandler<HTMLFormElement>"},{"identifier":"onDragEndCapture","type":"DragEventHandler<HTMLFormElement>"},{"identifier":"onDragEnter","type":"DragEventHandler<HTMLFormElement>"},{"identifier":"onDragEnterCapture","type":"DragEventHandler<HTMLFormElement>"},{"identifier":"onDragExit","type":"DragEventHandler<HTMLFormElement>"},{"identifier":"onDragExitCapture","type":"DragEventHandler<HTMLFormElement>"},{"identifier":"onDragLeave","type":"DragEventHandler<HTMLFormElement>"},{"identifier":"onDragLeaveCapture","type":"DragEventHandler<HTMLFormElement>"},{"identifier":"onDragOver","type":"DragEventHandler<HTMLFormElement>"},{"identifier":"onDragOverCapture","type":"DragEventHandler<HTMLFormElement>"},{"identifier":"onDragStart","type":"DragEventHandler<HTMLFormElement>"},{"identifier":"onDragStartCapture","type":"DragEventHandler<HTMLFormElement>"},{"identifier":"onDrop","type":"DragEventHandler<HTMLFormElement>"},{"identifier":"onDropCapture","type":"DragEventHandler<HTMLFormElement>"},{"identifier":"onMouseDown","type":"MouseEventHandler<HTMLFormElement>"},{"identifier":"onMouseDownCapture","type":"MouseEventHandler<HTMLFormElement>"},{"identifier":"onMouseEnter","type":"MouseEventHandler<HTMLFormElement>"},{"identifier":"onMouseLeave","type":"MouseEventHandler<HTMLFormElement>"},{"identifier":"onMouseMove","type":"MouseEventHandler<HTMLFormElement>"},{"identifier":"onMouseMoveCapture","type":"MouseEventHandler<HTMLFormElement>"},{"identifier":"onMouseOut","type":"MouseEventHandler<HTMLFormElement>"},{"identifier":"onMouseOutCapture","type":"MouseEventHandler<HTMLFormElement>"},{"identifier":"onMouseOver","type":"MouseEventHandler<HTMLFormElement>"},{"identifier":"onMouseOverCapture","type":"MouseEventHandler<HTMLFormElement>"},{"identifier":"onMouseUp","type":"MouseEventHandler<HTMLFormElement>"},{"identifier":"onMouseUpCapture","type":"MouseEventHandler<HTMLFormElement>"},{"identifier":"onSelect","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onSelectCapture","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onTouchCancel","type":"TouchEventHandler<HTMLFormElement>"},{"identifier":"onTouchCancelCapture","type":"TouchEventHandler<HTMLFormElement>"},{"identifier":"onTouchEnd","type":"TouchEventHandler<HTMLFormElement>"},{"identifier":"onTouchEndCapture","type":"TouchEventHandler<HTMLFormElement>"},{"identifier":"onTouchMove","type":"TouchEventHandler<HTMLFormElement>"},{"identifier":"onTouchMoveCapture","type":"TouchEventHandler<HTMLFormElement>"},{"identifier":"onTouchStart","type":"TouchEventHandler<HTMLFormElement>"},{"identifier":"onTouchStartCapture","type":"TouchEventHandler<HTMLFormElement>"},{"identifier":"onPointerDown","type":"PointerEventHandler<HTMLFormElement>"},{"identifier":"onPointerDownCapture","type":"PointerEventHandler<HTMLFormElement>"},{"identifier":"onPointerMove","type":"PointerEventHandler<HTMLFormElement>"},{"identifier":"onPointerMoveCapture","type":"PointerEventHandler<HTMLFormElement>"},{"identifier":"onPointerUp","type":"PointerEventHandler<HTMLFormElement>"},{"identifier":"onPointerUpCapture","type":"PointerEventHandler<HTMLFormElement>"},{"identifier":"onPointerCancel","type":"PointerEventHandler<HTMLFormElement>"},{"identifier":"onPointerCancelCapture","type":"PointerEventHandler<HTMLFormElement>"},{"identifier":"onPointerEnter","type":"PointerEventHandler<HTMLFormElement>"},{"identifier":"onPointerEnterCapture","type":"PointerEventHandler<HTMLFormElement>"},{"identifier":"onPointerLeave","type":"PointerEventHandler<HTMLFormElement>"},{"identifier":"onPointerLeaveCapture","type":"PointerEventHandler<HTMLFormElement>"},{"identifier":"onPointerOver","type":"PointerEventHandler<HTMLFormElement>"},{"identifier":"onPointerOverCapture","type":"PointerEventHandler<HTMLFormElement>"},{"identifier":"onPointerOut","type":"PointerEventHandler<HTMLFormElement>"},{"identifier":"onPointerOutCapture","type":"PointerEventHandler<HTMLFormElement>"},{"identifier":"onGotPointerCapture","type":"PointerEventHandler<HTMLFormElement>"},{"identifier":"onGotPointerCaptureCapture","type":"PointerEventHandler<HTMLFormElement>"},{"identifier":"onLostPointerCapture","type":"PointerEventHandler<HTMLFormElement>"},{"identifier":"onLostPointerCaptureCapture","type":"PointerEventHandler<HTMLFormElement>"},{"identifier":"onScroll","type":"UIEventHandler<HTMLFormElement>"},{"identifier":"onScrollCapture","type":"UIEventHandler<HTMLFormElement>"},{"identifier":"onWheel","type":"WheelEventHandler<HTMLFormElement>"},{"identifier":"onWheelCapture","type":"WheelEventHandler<HTMLFormElement>"},{"identifier":"onAnimationStart","type":"AnimationEventHandler<HTMLFormElement>"},{"identifier":"onAnimationStartCapture","type":"AnimationEventHandler<HTMLFormElement>"},{"identifier":"onAnimationEnd","type":"AnimationEventHandler<HTMLFormElement>"},{"identifier":"onAnimationEndCapture","type":"AnimationEventHandler<HTMLFormElement>"},{"identifier":"onAnimationIteration","type":"AnimationEventHandler<HTMLFormElement>"},{"identifier":"onAnimationIterationCapture","type":"AnimationEventHandler<HTMLFormElement>"},{"identifier":"onTransitionEnd","type":"TransitionEventHandler<HTMLFormElement>"},{"identifier":"onTransitionEndCapture","type":"TransitionEventHandler<HTMLFormElement>"},{"identifier":"initialValues","type":"Store"},{"identifier":"component","type":"string | false | FC<any> | ComponentClass<any, any>"},{"identifier":"fields","type":"FieldData[]"},{"identifier":"validateMessages","type":"ValidateMessages"},{"identifier":"onValuesChange","type":"(changedValues: any, values: any) => void"},{"identifier":"onFieldsChange","type":"(changedFields: FieldData[], allFields: FieldData[]) => void"},{"identifier":"onFinish","type":"(values: any) => void"},{"identifier":"onFinishFailed","type":"(errorInfo: ValidateErrorEntity<any>) => void"},{"identifier":"validateTrigger","type":"string | false | string[]"},{"identifier":"preserve","type":"boolean"},{"identifier":"ref","type":"any"}],"IProps":[{"identifier":"isPreview","description":"\u662f\u5426\u9884\u89c8\u6001","type":"boolean","default":"false"},{"identifier":"cols","description":"\u6bcf\u884c\u663e\u793a\u6570\u91cf","type":"2 | 3 | 4"},{"identifier":"forwardedRef","description":"ref \u900f\u4f20","type":"any"}]},"FormItem":{"default":[{"identifier":"component","description":"\u6240\u652f\u6301\u7684\u7ec4\u4ef6\u7c7b\u578b","type":"any"},{"identifier":"componentProps","description":"\u900f\u4f20\u5230 FormItem \u4f7f\u7528\u7ec4\u4ef6\u7684\u53c2\u6570","type":"object"},{"identifier":"required","description":"\u662f\u5426\u5fc5\u586b\uff0c\u900f\u4f20\u81f3 rule","type":"boolean"},{"identifier":"placeholder","description":"placeholder","type":"string"},{"identifier":"prefixCls","type":"string"},{"identifier":"noStyle","type":"boolean"},{"identifier":"style","type":"CSSProperties"},{"identifier":"className","type":"string"},{"identifier":"rootClassName","type":"string"},{"identifier":"id","type":"string"},{"identifier":"hasFeedback","type":"boolean"},{"identifier":"validateStatus","type":"\\"\\" | \\"success\\" | \\"warning\\" | \\"error\\" | \\"validating\\""},{"identifier":"hidden","type":"boolean"},{"identifier":"initialValue","type":"any"},{"identifier":"messageVariables","type":"Record<string, string>"},{"identifier":"tooltip","type":"LabelTooltipType"},{"identifier":"fieldKey","description":"@deprecated No need anymore","type":"Key | Key[]"},{"identifier":"colon","type":"boolean"},{"identifier":"htmlFor","type":"string"},{"identifier":"label","type":"ReactNode"},{"identifier":"labelAlign","type":"FormLabelAlign"},{"identifier":"labelCol","type":"ColProps"},{"identifier":"wrapperCol","type":"ColProps"},{"identifier":"extra","type":"ReactNode"},{"identifier":"status","type":"\\"\\" | \\"success\\" | \\"warning\\" | \\"error\\" | \\"validating\\""},{"identifier":"help","type":"ReactNode"},{"identifier":"fieldId","type":"string"},{"identifier":"name","type":"NamePath"},{"identifier":"dependencies","description":"Set up `dependencies` field.\\nWhen dependencies field update and current field is touched,\\nwill trigger validate rules and render.","type":"NamePath[]"},{"identifier":"getValueFromEvent","type":"(...args: EventArgs) => any"},{"identifier":"normalize","type":"(value: any, prevValue: any, allValues: Store) => any"},{"identifier":"rules","type":"Rule[]"},{"identifier":"shouldUpdate","type":"ShouldUpdate<any>"},{"identifier":"trigger","type":"string"},{"identifier":"validateTrigger","type":"string | false | string[]"},{"identifier":"validateFirst","type":"boolean | \\"parallel\\""},{"identifier":"valuePropName","type":"string"},{"identifier":"getValueProps","type":"(value: any) => Record<string, unknown>"},{"identifier":"onReset","type":"() => void"},{"identifier":"onMetaChange","type":"(meta: Meta & { destroy?: boolean; }) => void"},{"identifier":"preserve","type":"boolean"},{"identifier":"isListField","description":"@private Passed by Form.List props. Do not use since it will break by path check.","type":"boolean"},{"identifier":"isList","description":"@private Passed by Form.List props. Do not use since it will break by path check.","type":"boolean"}],"IPropsOption":[{"identifier":"component","description":"\u6240\u652f\u6301\u7684\u7ec4\u4ef6\u7c7b\u578b","type":"any"},{"identifier":"componentProps","description":"\u900f\u4f20\u5230 FormItem \u4f7f\u7528\u7ec4\u4ef6\u7684\u53c2\u6570","type":"object"},{"identifier":"required","description":"\u662f\u5426\u5fc5\u586b\uff0c\u900f\u4f20\u81f3 rule","type":"boolean"},{"identifier":"placeholder","description":"placeholder","type":"string"}]},"Layout":{"MyLayoutType":[{"identifier":"Section","type":"FC<SectionProps>","required":true}],"SectionProps":[{"identifier":"shape","description":"\u5e03\u5c40\u7c7b\u578b","type":"\\"panel\\" | \\"normal\\""},{"identifier":"title","description":"\u6807\u9898","type":"ReactNode"},{"identifier":"subTitle","description":"\u526f\u6807\u9898","type":"ReactNode"},{"identifier":"className","description":"class","type":"string"}]},"Mentions":{"default":[{"identifier":"rootClassName","type":"string"},{"identifier":"loading","type":"boolean"},{"identifier":"status","type":"\\"\\" | \\"warning\\" | \\"error\\""},{"identifier":"options","description":"\u6570\u636e\u6e90","type":"DataDrivenOptionProps[] & MentionsItemTypes[]","default":"[]"},{"identifier":"popupClassName","type":"string"},{"identifier":"onResize","type":"(size: { width: number; height: number; }) => void"},{"identifier":"autoComplete","type":"string"},{"identifier":"cols","type":"number"},{"identifier":"dirName","type":"string"},{"identifier":"disabled","type":"boolean"},{"identifier":"form","type":"string"},{"identifier":"maxLength","type":"number"},{"identifier":"minLength","type":"number"},{"identifier":"name","type":"string"},{"identifier":"placeholder","type":"string"},{"identifier":"readOnly","type":"boolean"},{"identifier":"required","type":"boolean"},{"identifier":"rows","type":"number"},{"identifier":"value","type":"string"},{"identifier":"wrap","type":"string"},{"identifier":"onChange","type":"(text: string) => void"},{"identifier":"defaultChecked","type":"boolean"},{"identifier":"defaultValue","type":"string"},{"identifier":"suppressContentEditableWarning","type":"boolean"},{"identifier":"suppressHydrationWarning","type":"boolean"},{"identifier":"accessKey","type":"string"},{"identifier":"autoFocus","type":"boolean"},{"identifier":"className","type":"string"},{"identifier":"contentEditable","type":"Booleanish | \\"inherit\\""},{"identifier":"contextMenu","type":"string"},{"identifier":"dir","type":"string"},{"identifier":"draggable","type":"Booleanish"},{"identifier":"hidden","type":"boolean"},{"identifier":"id","type":"string"},{"identifier":"lang","type":"string"},{"identifier":"nonce","type":"string"},{"identifier":"slot","type":"string"},{"identifier":"spellCheck","type":"Booleanish"},{"identifier":"style","type":"CSSProperties"},{"identifier":"tabIndex","type":"number"},{"identifier":"title","type":"string"},{"identifier":"translate","type":"\\"yes\\" | \\"no\\""},{"identifier":"radioGroup","type":"string"},{"identifier":"role","type":"AriaRole"},{"identifier":"about","type":"string"},{"identifier":"content","type":"string"},{"identifier":"datatype","type":"string"},{"identifier":"inlist","type":"any"},{"identifier":"prefix","type":"string | string[]"},{"identifier":"property","type":"string"},{"identifier":"rel","type":"string"},{"identifier":"resource","type":"string"},{"identifier":"rev","type":"string"},{"identifier":"typeof","type":"string"},{"identifier":"vocab","type":"string"},{"identifier":"autoCapitalize","type":"string"},{"identifier":"autoCorrect","type":"string"},{"identifier":"autoSave","type":"string"},{"identifier":"color","type":"string"},{"identifier":"itemProp","type":"string"},{"identifier":"itemScope","type":"boolean"},{"identifier":"itemType","type":"string"},{"identifier":"itemID","type":"string"},{"identifier":"itemRef","type":"string"},{"identifier":"results","type":"number"},{"identifier":"security","type":"string"},{"identifier":"unselectable","type":"\\"on\\" | \\"off\\""},{"identifier":"inputMode","description":"Hints at the type of data that might be entered by the user while editing the element or its contents\\n@see https://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-inputmode-attribute","type":"\\"none\\" | \\"search\\" | \\"text\\" | \\"tel\\" | \\"url\\" | \\"email\\" | \\"numeric\\" | \\"decimal\\""},{"identifier":"is","description":"Specify that a standard HTML element should behave like a defined custom built-in element\\n@see https://html.spec.whatwg.org/multipage/custom-elements.html#attr-is","type":"string"},{"identifier":"aria-activedescendant","description":"Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application.","type":"string"},{"identifier":"aria-atomic","description":"Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute.","type":"Booleanish"},{"identifier":"aria-autocomplete","description":"Indicates whether inputting text could trigger display of one or more predictions of the user\'s intended value for an input and specifies how predictions would be\\npresented if they are made.","type":"\\"list\\" | \\"none\\" | \\"inline\\" | \\"both\\""},{"identifier":"aria-busy","description":"Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user.","type":"Booleanish"},{"identifier":"aria-checked","description":"Indicates the current \\"checked\\" state of checkboxes, radio buttons, and other widgets.\\n@see aria-pressed\\n@see aria-selected.","type":"boolean | \\"true\\" | \\"false\\" | \\"mixed\\""},{"identifier":"aria-colcount","description":"Defines the total number of columns in a table, grid, or treegrid.\\n@see aria-colindex.","type":"number"},{"identifier":"aria-colindex","description":"Defines an element\'s column index or position with respect to the total number of columns within a table, grid, or treegrid.\\n@see aria-colcount\\n@see aria-colspan.","type":"number"},{"identifier":"aria-colspan","description":"Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.\\n@see aria-colindex\\n@see aria-rowspan.","type":"number"},{"identifier":"aria-controls","description":"Identifies the element (or elements) whose contents or presence are controlled by the current element.\\n@see aria-owns.","type":"string"},{"identifier":"aria-current","description":"Indicates the element that represents the current item within a container or set of related elements.","type":"boolean | \\"true\\" | \\"false\\" | \\"page\\" | \\"step\\" | \\"location\\" | \\"date\\" | \\"time\\""},{"identifier":"aria-describedby","description":"Identifies the element (or elements) that describes the object.\\n@see aria-labelledby","type":"string"},{"identifier":"aria-details","description":"Identifies the element that provides a detailed, extended description for the object.\\n@see aria-describedby.","type":"string"},{"identifier":"aria-disabled","description":"Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.\\n@see aria-hidden\\n@see aria-readonly.","type":"Booleanish"},{"identifier":"aria-dropeffect","description":"Indicates what functions can be performed when a dragged object is released on the drop target.\\n@deprecated in ARIA 1.1","type":"\\"link\\" | \\"none\\" | \\"copy\\" | \\"execute\\" | \\"move\\" | \\"popup\\""},{"identifier":"aria-errormessage","description":"Identifies the element that provides an error message for the object.\\n@see aria-invalid\\n@see aria-describedby.","type":"string"},{"identifier":"aria-expanded","description":"Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.","type":"Booleanish"},{"identifier":"aria-flowto","description":"Identifies the next element (or elements) in an alternate reading order of content which, at the user\'s discretion,\\nallows assistive technology to override the general default of reading in document source order.","type":"string"},{"identifier":"aria-grabbed","description":"Indicates an element\'s \\"grabbed\\" state in a drag-and-drop operation.\\n@deprecated in ARIA 1.1","type":"Booleanish"},{"identifier":"aria-haspopup","description":"Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.","type":"boolean | \\"true\\" | \\"false\\" | \\"dialog\\" | \\"grid\\" | \\"listbox\\" | \\"menu\\" | \\"tree\\""},{"identifier":"aria-hidden","description":"Indicates whether the element is exposed to an accessibility API.\\n@see aria-disabled.","type":"Booleanish"},{"identifier":"aria-invalid","description":"Indicates the entered value does not conform to the format expected by the application.\\n@see aria-errormessage.","type":"boolean | \\"true\\" | \\"false\\" | \\"grammar\\" | \\"spelling\\""},{"identifier":"aria-keyshortcuts","description":"Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.","type":"string"},{"identifier":"aria-label","description":"Defines a string value that labels the current element.\\n@see aria-labelledby.","type":"string"},{"identifier":"aria-labelledby","description":"Identifies the element (or elements) that labels the current element.\\n@see aria-describedby.","type":"string"},{"identifier":"aria-level","description":"Defines the hierarchical level of an element within a structure.","type":"number"},{"identifier":"aria-live","description":"Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.","type":"\\"off\\" | \\"assertive\\" | \\"polite\\""},{"identifier":"aria-modal","description":"Indicates whether an element is modal when displayed.","type":"Booleanish"},{"identifier":"aria-multiline","description":"Indicates whether a text box accepts multiple lines of input or only a single line.","type":"Booleanish"},{"identifier":"aria-multiselectable","description":"Indicates that the user may select more than one item from the current selectable descendants.","type":"Booleanish"},{"identifier":"aria-orientation","description":"Indicates whether the element\'s orientation is horizontal, vertical, or unknown/ambiguous.","type":"\\"horizontal\\" | \\"vertical\\""},{"identifier":"aria-owns","description":"Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship\\nbetween DOM elements where the DOM hierarchy cannot be used to represent the relationship.\\n@see aria-controls.","type":"string"},{"identifier":"aria-placeholder","description":"Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.\\nA hint could be a sample value or a brief description of the expected format.","type":"string"},{"identifier":"aria-posinset","description":"Defines an element\'s number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.\\n@see aria-setsize.","type":"number"},{"identifier":"aria-pressed","description":"Indicates the current \\"pressed\\" state of toggle buttons.\\n@see aria-checked\\n@see aria-selected.","type":"boolean | \\"true\\" | \\"false\\" | \\"mixed\\""},{"identifier":"aria-readonly","description":"Indicates that the element is not editable, but is otherwise operable.\\n@see aria-disabled.","type":"Booleanish"},{"identifier":"aria-relevant","description":"Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.\\n@see aria-atomic.","type":"\\"text\\" | \\"additions\\" | \\"additions removals\\" | \\"additions text\\" | \\"all\\" | \\"removals\\" | \\"removals additions\\" | \\"removals text\\" | \\"text additions\\" | \\"text removals\\""},{"identifier":"aria-required","description":"Indicates that user input is required on the element before a form may be submitted.","type":"Booleanish"},{"identifier":"aria-roledescription","description":"Defines a human-readable, author-localized description for the role of an element.","type":"string"},{"identifier":"aria-rowcount","description":"Defines the total number of rows in a table, grid, or treegrid.\\n@see aria-rowindex.","type":"number"},{"identifier":"aria-rowindex","description":"Defines an element\'s row index or position with respect to the total number of rows within a table, grid, or treegrid.\\n@see aria-rowcount\\n@see aria-rowspan.","type":"number"},{"identifier":"aria-rowspan","description":"Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.\\n@see aria-rowindex\\n@see aria-colspan.","type":"number"},{"identifier":"aria-selected","description":"Indicates the current \\"selected\\" state of various widgets.\\n@see aria-checked\\n@see aria-pressed.","type":"Booleanish"},{"identifier":"aria-setsize","description":"Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.\\n@see aria-posinset.","type":"number"},{"identifier":"aria-sort","description":"Indicates if items in a table or grid are sorted in ascending or descending order.","type":"\\"none\\" | \\"ascending\\" | \\"descending\\" | \\"other\\""},{"identifier":"aria-valuemax","description":"Defines the maximum allowed value for a range widget.","type":"number"},{"identifier":"aria-valuemin","description":"Defines the minimum allowed value for a range widget.","type":"number"},{"identifier":"aria-valuenow","description":"Defines the current value for a range widget.\\n@see aria-valuetext.","type":"number"},{"identifier":"aria-valuetext","description":"Defines the human readable text alternative of aria-valuenow for a range widget.","type":"string"},{"identifier":"dangerouslySetInnerHTML","type":"{ __html: string | TrustedHTML; }"},{"identifier":"onCopy","type":"ClipboardEventHandler<HTMLTextAreaElement>"},{"identifier":"onCopyCapture","type":"ClipboardEventHandler<HTMLTextAreaElement>"},{"identifier":"onCut","type":"ClipboardEventHandler<HTMLTextAreaElement>"},{"identifier":"onCutCapture","type":"ClipboardEventHandler<HTMLTextAreaElement>"},{"identifier":"onPaste","type":"ClipboardEventHandler<HTMLTextAreaElement>"},{"identifier":"onPasteCapture","type":"ClipboardEventHandler<HTMLTextAreaElement>"},{"identifier":"onCompositionEnd","type":"CompositionEventHandler<HTMLTextAreaElement>"},{"identifier":"onCompositionEndCapture","type":"CompositionEventHandler<HTMLTextAreaElement>"},{"identifier":"onCompositionStart","type":"CompositionEventHandler<HTMLTextAreaElement>"},{"identifier":"onCompositionStartCapture","type":"CompositionEventHandler<HTMLTextAreaElement>"},{"identifier":"onCompositionUpdate","type":"CompositionEventHandler<HTMLTextAreaElement>"},{"identifier":"onCompositionUpdateCapture","type":"CompositionEventHandler<HTMLTextAreaElement>"},{"identifier":"onFocus","type":"FocusEventHandler<HTMLTextAreaElement>"},{"identifier":"onFocusCapture","type":"FocusEventHandler<HTMLTextAreaElement>"},{"identifier":"onBlur","type":"FocusEventHandler<HTMLTextAreaElement>"},{"identifier":"onBlurCapture","type":"FocusEventHandler<HTMLTextAreaElement>"},{"identifier":"onChangeCapture","type":"FormEventHandler<HTMLTextAreaElement>"},{"identifier":"onBeforeInput","type":"FormEventHandler<HTMLTextAreaElement>"},{"identifier":"onBeforeInputCapture","type":"FormEventHandler<HTMLTextAreaElement>"},{"identifier":"onInput","type":"FormEventHandler<HTMLTextAreaElement>"},{"identifier":"onInputCapture","type":"FormEventHandler<HTMLTextAreaElement>"},{"identifier":"onReset","type":"FormEventHandler<HTMLTextAreaElement>"},{"identifier":"onResetCapture","type":"FormEventHandler<HTMLTextAreaElement>"},{"identifier":"onSubmit","type":"FormEventHandler<HTMLTextAreaElement>"},{"identifier":"onSubmitCapture","type":"FormEventHandler<HTMLTextAreaElement>"},{"identifier":"onInvalid","type":"FormEventHandler<HTMLTextAreaElement>"},{"identifier":"onInvalidCapture","type":"FormEventHandler<HTMLTextAreaElement>"},{"identifier":"onLoad","type":"ReactEventHandler<HTMLTextAreaElement>"},{"identifier":"onLoadCapture","type":"ReactEventHandler<HTMLTextAreaElement>"},{"identifier":"onError","type":"ReactEventHandler<HTMLTextAreaElement>"},{"identifier":"onErrorCapture","type":"ReactEventHandler<HTMLTextAreaElement>"},{"identifier":"onKeyDown","type":"KeyboardEventHandler<HTMLTextAreaElement>"},{"identifier":"onKeyDownCapture","type":"KeyboardEventHandler<HTMLTextAreaElement>"},{"identifier":"onKeyPress","description":"@deprecated","type":"KeyboardEventHandler<HTMLTextAreaElement>"},{"identifier":"onKeyPressCapture","description":"@deprecated","type":"KeyboardEventHandler<HTMLTextAreaElement>"},{"identifier":"onKeyUp","type":"KeyboardEventHandler<HTMLTextAreaElement>"},{"identifier":"onKeyUpCapture","type":"KeyboardEventHandler<HTMLTextAreaElement>"},{"identifier":"onAbort","type":"ReactEventHandler<HTMLTextAreaElement>"},{"identifier":"onAbortCapture","type":"ReactEventHandler<HTMLTextAreaElement>"},{"identifier":"onCanPlay","type":"ReactEventHandler<HTMLTextAreaElement>"},{"identifier":"onCanPlayCapture","type":"ReactEventHandler<HTMLTextAreaElement>"},{"identifier":"onCanPlayThrough","type":"ReactEventHandler<HTMLTextAreaElement>"},{"identifier":"onCanPlayThroughCapture","type":"ReactEventHandler<HTMLTextAreaElement>"},{"identifier":"onDurationChange","type":"ReactEventHandler<HTMLTextAreaElement>"},{"identifier":"onDurationChangeCapture","type":"ReactEventHandler<HTMLTextAreaElement>"},{"identifier":"onEmptied","type":"ReactEventHandler<HTMLTextAreaElement>"},{"identifier":"onEmptiedCapture","type":"ReactEventHandler<HTMLTextAreaElement>"},{"identifier":"onEncrypted","type":"ReactEventHandler<HTMLTextAreaElement>"},{"identifier":"onEncryptedCapture","type":"ReactEventHandler<HTMLTextAreaElement>"},{"identifier":"onEnded","type":"ReactEventHandler<HTMLTextAreaElement>"},{"identifier":"onEndedCapture","type":"ReactEventHandler<HTMLTextAreaElement>"},{"identifier":"onLoadedData","type":"ReactEventHandler<HTMLTextAreaElement>"},{"identifier":"onLoadedDataCapture","type":"ReactEventHandler<HTMLTextAreaElement>"},{"identifier":"onLoadedMetadata","type":"ReactEventHandler<HTMLTextAreaElement>"},{"identifier":"onLoadedMetadataCapture","type":"ReactEventHandler<HTMLTextAreaElement>"},{"identifier":"onLoadStart","type":"ReactEventHandler<HTMLTextAreaElement>"},{"identifier":"onLoadStartCapture","type":"ReactEventHandler<HTMLTextAreaElement>"},{"identifier":"onPause","type":"ReactEventHandler<HTMLTextAreaElement>"},{"identifier":"onPauseCapture","type":"ReactEventHandler<HTMLTextAreaElement>"},{"identifier":"onPlay","type":"ReactEventHandler<HTMLTextAreaElement>"},{"identifier":"onPlayCapture","type":"ReactEventHandler<HTMLTextAreaElement>"},{"identifier":"onPlaying","type":"ReactEventHandler<HTMLTextAreaElement>"},{"identifier":"onPlayingCapture","type":"ReactEventHandler<HTMLTextAreaElement>"},{"identifier":"onProgress","type":"ReactEventHandler<HTMLTextAreaElement>"},{"identifier":"onProgressCapture","type":"ReactEventHandler<HTMLTextAreaElement>"},{"identifier":"onRateChange","type":"ReactEventHandler<HTMLTextAreaElement>"},{"identifier":"onRateChangeCapture","type":"ReactEventHandler<HTMLTextAreaElement>"},{"identifier":"onResizeCapture","type":"ReactEventHandler<HTMLTextAreaElement>"},{"identifier":"onSeeked","type":"ReactEventHandler<HTMLTextAreaElement>"},{"identifier":"onSeekedCapture","type":"ReactEventHandler<HTMLTextAreaElement>"},{"identifier":"onSeeking","type":"ReactEventHandler<HTMLTextAreaElement>"},{"identifier":"onSeekingCapture","type":"ReactEventHandler<HTMLTextAreaElement>"},{"identifier":"onStalled","type":"ReactEventHandler<HTMLTextAreaElement>"},{"identifier":"onStalledCapture","type":"ReactEventHandler<HTMLTextAreaElement>"},{"identifier":"onSuspend","type":"ReactEventHandler<HTMLTextAreaElement>"},{"identifier":"onSuspendCapture","type":"ReactEventHandler<HTMLTextAreaElement>"},{"identifier":"onTimeUpdate","type":"ReactEventHandler<HTMLTextAreaElement>"},{"identifier":"onTimeUpdateCapture","type":"ReactEventHandler<HTMLTextAreaElement>"},{"identifier":"onVolumeChange","type":"ReactEventHandler<HTMLTextAreaElement>"},{"identifier":"onVolumeChangeCapture","type":"ReactEventHandler<HTMLTextAreaElement>"},{"identifier":"onWaiting","type":"ReactEventHandler<HTMLTextAreaElement>"},{"identifier":"onWaitingCapture","type":"ReactEventHandler<HTMLTextAreaElement>"},{"identifier":"onAuxClick","type":"MouseEventHandler<HTMLTextAreaElement>"},{"identifier":"onAuxClickCapture","type":"MouseEventHandler<HTMLTextAreaElement>"},{"identifier":"onClick","type":"MouseEventHandler<HTMLTextAreaElement>"},{"identifier":"onClickCapture","type":"MouseEventHandler<HTMLTextAreaElement>"},{"identifier":"onContextMenu","type":"MouseEventHandler<HTMLTextAreaElement>"},{"identifier":"onContextMenuCapture","type":"MouseEventHandler<HTMLTextAreaElement>"},{"identifier":"onDoubleClick","type":"MouseEventHandler<HTMLTextAreaElement>"},{"identifier":"onDoubleClickCapture","type":"MouseEventHandler<HTMLTextAreaElement>"},{"identifier":"onDrag","type":"DragEventHandler<HTMLTextAreaElement>"},{"identifier":"onDragCapture","type":"DragEventHandler<HTMLTextAreaElement>"},{"identifier":"onDragEnd","type":"DragEventHandler<HTMLTextAreaElement>"},{"identifier":"onDragEndCapture","type":"DragEventHandler<HTMLTextAreaElement>"},{"identifier":"onDragEnter","type":"DragEventHandler<HTMLTextAreaElement>"},{"identifier":"onDragEnterCapture","type":"DragEventHandler<HTMLTextAreaElement>"},{"identifier":"onDragExit","type":"DragEventHandler<HTMLTextAreaElement>"},{"identifier":"onDragExitCapture","type":"DragEventHandler<HTMLTextAreaElement>"},{"identifier":"onDragLeave","type":"DragEventHandler<HTMLTextAreaElement>"},{"identifier":"onDragLeaveCapture","type":"DragEventHandler<HTMLTextAreaElement>"},{"identifier":"onDragOver","type":"DragEventHandler<HTMLTextAreaElement>"},{"identifier":"onDragOverCapture","type":"DragEventHandler<HTMLTextAreaElement>"},{"identifier":"onDragStart","type":"DragEventHandler<HTMLTextAreaElement>"},{"identifier":"onDragStartCapture","type":"DragEventHandler<HTMLTextAreaElement>"},{"identifier":"onDrop","type":"DragEventHandler<HTMLTextAreaElement>"},{"identifier":"onDropCapture","type":"DragEventHandler<HTMLTextAreaElement>"},{"identifier":"onMouseDown","type":"MouseEventHandler<HTMLTextAreaElement>"},{"identifier":"onMouseDownCapture","type":"MouseEventHandler<HTMLTextAreaElement>"},{"identifier":"onMouseEnter","type":"MouseEventHandler<HTMLTextAreaElement>"},{"identifier":"onMouseLeave","type":"MouseEventHandler<HTMLTextAreaElement>"},{"identifier":"onMouseMove","type":"MouseEventHandler<HTMLTextAreaElement>"},{"identifier":"onMouseMoveCapture","type":"MouseEventHandler<HTMLTextAreaElement>"},{"identifier":"onMouseOut","type":"MouseEventHandler<HTMLTextAreaElement>"},{"identifier":"onMouseOutCapture","type":"MouseEventHandler<HTMLTextAreaElement>"},{"identifier":"onMouseOver","type":"MouseEventHandler<HTMLTextAreaElement>"},{"identifier":"onMouseOverCapture","type":"MouseEventHandler<HTMLTextAreaElement>"},{"identifier":"onMouseUp","type":"MouseEventHandler<HTMLTextAreaElement>"},{"identifier":"onMouseUpCapture","type":"MouseEventHandler<HTMLTextAreaElement>"},{"identifier":"onSelect","type":"(option: OptionProps, prefix: string) => void"},{"identifier":"onSelectCapture","type":"ReactEventHandler<HTMLTextAreaElement>"},{"identifier":"onTouchCancel","type":"TouchEventHandler<HTMLTextAreaElement>"},{"identifier":"onTouchCancelCapture","type":"TouchEventHandler<HTMLTextAreaElement>"},{"identifier":"onTouchEnd","type":"TouchEventHandler<HTMLTextAreaElement>"},{"identifier":"onTouchEndCapture","type":"TouchEventHandler<HTMLTextAreaElement>"},{"identifier":"onTouchMove","type":"TouchEventHandler<HTMLTextAreaElement>"},{"identifier":"onTouchMoveCapture","type":"TouchEventHandler<HTMLTextAreaElement>"},{"identifier":"onTouchStart","type":"TouchEventHandler<HTMLTextAreaElement>"},{"identifier":"onTouchStartCapture","type":"TouchEventHandler<HTMLTextAreaElement>"},{"identifier":"onPointerDown","type":"PointerEventHandler<HTMLTextAreaElement>"},{"identifier":"onPointerDownCapture","type":"PointerEventHandler<HTMLTextAreaElement>"},{"identifier":"onPointerMove","type":"PointerEventHandler<HTMLTextAreaElement>"},{"identifier":"onPointerMoveCapture","type":"PointerEventHandler<HTMLTextAreaElement>"},{"identifier":"onPointerUp","type":"PointerEventHandler<HTMLTextAreaElement>"},{"identifier":"onPointerUpCapture","type":"PointerEventHandler<HTMLTextAreaElement>"},{"identifier":"onPointerCancel","type":"PointerEventHandler<HTMLTextAreaElement>"},{"identifier":"onPointerCancelCapture","type":"PointerEventHandler<HTMLTextAreaElement>"},{"identifier":"onPointerEnter","type":"PointerEventHandler<HTMLTextAreaElement>"},{"identifier":"onPointerEnterCapture","type":"PointerEventHandler<HTMLTextAreaElement>"},{"identifier":"onPointerLeave","type":"PointerEventHandler<HTMLTextAreaElement>"},{"identifier":"onPointerLeaveCapture","type":"PointerEventHandler<HTMLTextAreaElement>"},{"identifier":"onPointerOver","type":"PointerEventHandler<HTMLTextAreaElement>"},{"identifier":"onPointerOverCapture","type":"PointerEventHandler<HTMLTextAreaElement>"},{"identifier":"onPointerOut","type":"PointerEventHandler<HTMLTextAreaElement>"},{"identifier":"onPointerOutCapture","type":"PointerEventHandler<HTMLTextAreaElement>"},{"identifier":"onGotPointerCapture","type":"PointerEventHandler<HTMLTextAreaElement>"},{"identifier":"onGotPointerCaptureCapture","type":"PointerEventHandler<HTMLTextAreaElement>"},{"identifier":"onLostPointerCapture","type":"PointerEventHandler<HTMLTextAreaElement>"},{"identifier":"onLostPointerCaptureCapture","type":"PointerEventHandler<HTMLTextAreaElement>"},{"identifier":"onScroll","type":"UIEventHandler<HTMLTextAreaElement>"},{"identifier":"onScrollCapture","type":"UIEventHandler<HTMLTextAreaElement>"},{"identifier":"onWheel","type":"WheelEventHandler<HTMLTextAreaElement>"},{"identifier":"onWheelCapture","type":"WheelEventHandler<HTMLTextAreaElement>"},{"identifier":"onAnimationStart","type":"AnimationEventHandler<HTMLTextAreaElement>"},{"identifier":"onAnimationStartCapture","type":"AnimationEventHandler<HTMLTextAreaElement>"},{"identifier":"onAnimationEnd","type":"AnimationEventHandler<HTMLTextAreaElement>"},{"identifier":"onAnimationEndCapture","type":"AnimationEventHandler<HTMLTextAreaElement>"},{"identifier":"onAnimationIteration","type":"AnimationEventHandler<HTMLTextAreaElement>"},{"identifier":"onAnimationIterationCapture","type":"AnimationEventHandler<HTMLTextAreaElement>"},{"identifier":"onTransitionEnd","type":"TransitionEventHandler<HTMLTextAreaElement>"},{"identifier":"onTransitionEndCapture","type":"TransitionEventHandler<HTMLTextAreaElement>"},{"identifier":"prefixCls","type":"string"},{"identifier":"autoSize","type":"boolean | AutoSizeType"},{"identifier":"onPressEnter","type":"KeyboardEventHandler<HTMLTextAreaElement>"},{"identifier":"classes","type":"{ countWrapper?: string; affixWrapper?: string; }"},{"identifier":"classNames","type":"{ textarea?: string; count?: string; }"},{"identifier":"styles","type":"{ textarea?: CSSProperties; count?: CSSProperties; }"},{"identifier":"notFoundContent","type":"ReactNode"},{"identifier":"split","type":"string"},{"identifier":"transitionName","type":"string"},{"identifier":"placement","type":"Placement"},{"identifier":"direction","type":"Direction"},{"identifier":"filterOption","type":"false | ((input: string, { value }: OptionProps) => boolean)"},{"identifier":"validateSearch","type":"(text: string, split: string) => boolean"},{"identifier":"onSearch","type":"(text: string, prefix: string) => void"},{"identifier":"getPopupContainer","type":"() => HTMLElement"},{"identifier":"dropdownClassName","type":"string"},{"identifier":"open","description":"@private Testing usage. Do not use in prod. It will not work as your expect.","type":"boolean"}],"IPropsType":[{"identifier":"options","description":"\u6570\u636e\u6e90","type":"MentionsItemTypes[]","default":"[]"}],"MentionsItemTypes":[{"identifier":"label","description":"label","type":"ReactNode","required":true},{"identifier":"value","description":"value","type":"string","required":true}]},"RangeInput":{"default":[{"identifier":"value","description":"value","type":"any[]","default":"[]"},{"identifier":"defaultValue","description":"\u9ed8\u8ba4\u503c","type":"any[]","default":"[]"},{"identifier":"onChange","description":"\u8f93\u5165\u6846\u503c\u53d1\u751f\u53d8\u5316\u89e6\u53d1","type":"(val?: any[]) => void"},{"identifier":"startInputProps","description":"\u900f\u4f20\u7ed9\u5f00\u59cb\u503c\u7684\u53c2\u6570\uff1a\u53c2\u8003 antd InputNumber API","type":"InputProps","default":"{}"},{"identifier":"endInputProps","description":"\u900f\u4f20\u7ed9\u7ed3\u675f\u503c\u7684\u53c2\u6570\uff1a\u53c2\u8003 antd InputNumber API","type":"InputProps","default":"{}"},{"identifier":"placeholder","description":"placeholder","type":"string[]","default":"[\'\u5f00\u59cb\u503c\', \'\u7ed3\u675f\u503c\']"},{"identifier":"connectSymbol","description":"\u8fde\u63a5\u7b26\u53f7","type":"string","default":"-"},{"identifier":"className","description":"className","type":"string"}]},"SearchForm":{"default":[{"identifier":"prefixCls","type":"string"},{"identifier":"colon","type":"boolean"},{"identifier":"name","type":"string"},{"identifier":"layout","type":"FormLayout"},{"identifier":"labelAlign","type":"FormLabelAlign"},{"identifier":"labelWrap","type":"boolean"},{"identifier":"labelCol","type":"ColProps"},{"identifier":"wrapperCol","type":"ColProps"},{"identifier":"form","type":"FormInstance<any>"},{"identifier":"size","type":"SizeType"},{"identifier":"disabled","type":"boolean"},{"identifier":"scrollToFirstError","type":"boolean | Options<unknown>"},{"identifier":"requiredMark","type":"RequiredMark"},{"identifier":"hideRequiredMark","description":"@deprecated Will warning in future branch. Pls use `requiredMark` instead.","type":"boolean"},{"identifier":"rootClassName","type":"string"},{"identifier":"onClick","type":"MouseEventHandler<HTMLFormElement>"},{"identifier":"target","type":"string"},{"identifier":"defaultChecked","type":"boolean"},{"identifier":"defaultValue","type":"string | number | readonly string[]"},{"identifier":"suppressContentEditableWarning","type":"boolean"},{"identifier":"suppressHydrationWarning","type":"boolean"},{"identifier":"accessKey","type":"string"},{"identifier":"autoFocus","type":"boolean"},{"identifier":"className","type":"string"},{"identifier":"contentEditable","type":"Booleanish | \\"inherit\\""},{"identifier":"contextMenu","type":"string"},{"identifier":"dir","type":"string"},{"identifier":"draggable","type":"Booleanish"},{"identifier":"hidden","type":"boolean"},{"identifier":"id","type":"string"},{"identifier":"lang","type":"string"},{"identifier":"nonce","type":"string"},{"identifier":"placeholder","type":"string"},{"identifier":"slot","type":"string"},{"identifier":"spellCheck","type":"Booleanish"},{"identifier":"style","type":"CSSProperties"},{"identifier":"tabIndex","type":"number"},{"identifier":"title","type":"string"},{"identifier":"translate","type":"\\"yes\\" | \\"no\\""},{"identifier":"radioGroup","type":"string"},{"identifier":"role","type":"AriaRole"},{"identifier":"about","type":"string"},{"identifier":"content","type":"string"},{"identifier":"datatype","type":"string"},{"identifier":"inlist","type":"any"},{"identifier":"prefix","type":"string"},{"identifier":"property","type":"string"},{"identifier":"rel","type":"string"},{"identifier":"resource","type":"string"},{"identifier":"rev","type":"string"},{"identifier":"typeof","type":"string"},{"identifier":"vocab","type":"string"},{"identifier":"autoCapitalize","type":"string"},{"identifier":"autoCorrect","type":"string"},{"identifier":"autoSave","type":"string"},{"identifier":"color","type":"string"},{"identifier":"itemProp","type":"string"},{"identifier":"itemScope","type":"boolean"},{"identifier":"itemType","type":"string"},{"identifier":"itemID","type":"string"},{"identifier":"itemRef","type":"string"},{"identifier":"results","type":"number"},{"identifier":"security","type":"string"},{"identifier":"unselectable","type":"\\"on\\" | \\"off\\""},{"identifier":"inputMode","description":"Hints at the type of data that might be entered by the user while editing the element or its contents\\n@see https://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-inputmode-attribute","type":"\\"none\\" | \\"search\\" | \\"text\\" | \\"tel\\" | \\"url\\" | \\"email\\" | \\"numeric\\" | \\"decimal\\""},{"identifier":"is","description":"Specify that a standard HTML element should behave like a defined custom built-in element\\n@see https://html.spec.whatwg.org/multipage/custom-elements.html#attr-is","type":"string"},{"identifier":"aria-activedescendant","description":"Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application.","type":"string"},{"identifier":"aria-atomic","description":"Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute.","type":"Booleanish"},{"identifier":"aria-autocomplete","description":"Indicates whether inputting text could trigger display of one or more predictions of the user\'s intended value for an input and specifies how predictions would be\\npresented if they are made.","type":"\\"list\\" | \\"none\\" | \\"inline\\" | \\"both\\""},{"identifier":"aria-busy","description":"Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user.","type":"Booleanish"},{"identifier":"aria-checked","description":"Indicates the current \\"checked\\" state of checkboxes, radio buttons, and other widgets.\\n@see aria-pressed\\n@see aria-selected.","type":"boolean | \\"true\\" | \\"false\\" | \\"mixed\\""},{"identifier":"aria-colcount","description":"Defines the total number of columns in a table, grid, or treegrid.\\n@see aria-colindex.","type":"number"},{"identifier":"aria-colindex","description":"Defines an element\'s column index or position with respect to the total number of columns within a table, grid, or treegrid.\\n@see aria-colcount\\n@see aria-colspan.","type":"number"},{"identifier":"aria-colspan","description":"Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.\\n@see aria-colindex\\n@see aria-rowspan.","type":"number"},{"identifier":"aria-controls","description":"Identifies the element (or elements) whose contents or presence are controlled by the current element.\\n@see aria-owns.","type":"string"},{"identifier":"aria-current","description":"Indicates the element that represents the current item within a container or set of related elements.","type":"boolean | \\"true\\" | \\"false\\" | \\"page\\" | \\"step\\" | \\"location\\" | \\"date\\" | \\"time\\""},{"identifier":"aria-describedby","description":"Identifies the element (or elements) that describes the object.\\n@see aria-labelledby","type":"string"},{"identifier":"aria-details","description":"Identifies the element that provides a detailed, extended description for the object.\\n@see aria-describedby.","type":"string"},{"identifier":"aria-disabled","description":"Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.\\n@see aria-hidden\\n@see aria-readonly.","type":"Booleanish"},{"identifier":"aria-dropeffect","description":"Indicates what functions can be performed when a dragged object is released on the drop target.\\n@deprecated in ARIA 1.1","type":"\\"link\\" | \\"none\\" | \\"copy\\" | \\"execute\\" | \\"move\\" | \\"popup\\""},{"identifier":"aria-errormessage","description":"Identifies the element that provides an error message for the object.\\n@see aria-invalid\\n@see aria-describedby.","type":"string"},{"identifier":"aria-expanded","description":"Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.","type":"Booleanish"},{"identifier":"aria-flowto","description":"Identifies the next element (or elements) in an alternate reading order of content which, at the user\'s discretion,\\nallows assistive technology to override the general default of reading in document source order.","type":"string"},{"identifier":"aria-grabbed","description":"Indicates an element\'s \\"grabbed\\" state in a drag-and-drop operation.\\n@deprecated in ARIA 1.1","type":"Booleanish"},{"identifier":"aria-haspopup","description":"Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.","type":"boolean | \\"true\\" | \\"false\\" | \\"dialog\\" | \\"grid\\" | \\"listbox\\" | \\"menu\\" | \\"tree\\""},{"identifier":"aria-hidden","description":"Indicates whether the element is exposed to an accessibility API.\\n@see aria-disabled.","type":"Booleanish"},{"identifier":"aria-invalid","description":"Indicates the entered value does not conform to the format expected by the application.\\n@see aria-errormessage.","type":"boolean | \\"true\\" | \\"false\\" | \\"grammar\\" | \\"spelling\\""},{"identifier":"aria-keyshortcuts","description":"Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.","type":"string"},{"identifier":"aria-label","description":"Defines a string value that labels the current element.\\n@see aria-labelledby.","type":"string"},{"identifier":"aria-labelledby","description":"Identifies the element (or elements) that labels the current element.\\n@see aria-describedby.","type":"string"},{"identifier":"aria-level","description":"Defines the hierarchical level of an element within a structure.","type":"number"},{"identifier":"aria-live","description":"Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.","type":"\\"off\\" | \\"assertive\\" | \\"polite\\""},{"identifier":"aria-modal","description":"Indicates whether an element is modal when displayed.","type":"Booleanish"},{"identifier":"aria-multiline","description":"Indicates whether a text box accepts multiple lines of input or only a single line.","type":"Booleanish"},{"identifier":"aria-multiselectable","description":"Indicates that the user may select more than one item from the current selectable descendants.","type":"Booleanish"},{"identifier":"aria-orientation","description":"Indicates whether the element\'s orientation is horizontal, vertical, or unknown/ambiguous.","type":"\\"horizontal\\" | \\"vertical\\""},{"identifier":"aria-owns","description":"Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship\\nbetween DOM elements where the DOM hierarchy cannot be used to represent the relationship.\\n@see aria-controls.","type":"string"},{"identifier":"aria-placeholder","description":"Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.\\nA hint could be a sample value or a brief description of the expected format.","type":"string"},{"identifier":"aria-posinset","description":"Defines an element\'s number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.\\n@see aria-setsize.","type":"number"},{"identifier":"aria-pressed","description":"Indicates the current \\"pressed\\" state of toggle buttons.\\n@see aria-checked\\n@see aria-selected.","type":"boolean | \\"true\\" | \\"false\\" | \\"mixed\\""},{"identifier":"aria-readonly","description":"Indicates that the element is not editable, but is otherwise operable.\\n@see aria-disabled.","type":"Booleanish"},{"identifier":"aria-relevant","description":"Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.\\n@see aria-atomic.","type":"\\"text\\" | \\"additions\\" | \\"additions removals\\" | \\"additions text\\" | \\"all\\" | \\"removals\\" | \\"removals additions\\" | \\"removals text\\" | \\"text additions\\" | \\"text removals\\""},{"identifier":"aria-required","description":"Indicates that user input is required on the element before a form may be submitted.","type":"Booleanish"},{"identifier":"aria-roledescription","description":"Defines a human-readable, author-localized description for the role of an element.","type":"string"},{"identifier":"aria-rowcount","description":"Defines the total number of rows in a table, grid, or treegrid.\\n@see aria-rowindex.","type":"number"},{"identifier":"aria-rowindex","description":"Defines an element\'s row index or position with respect to the total number of rows within a table, grid, or treegrid.\\n@see aria-rowcount\\n@see aria-rowspan.","type":"number"},{"identifier":"aria-rowspan","description":"Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.\\n@see aria-rowindex\\n@see aria-colspan.","type":"number"},{"identifier":"aria-selected","description":"Indicates the current \\"selected\\" state of various widgets.\\n@see aria-checked\\n@see aria-pressed.","type":"Booleanish"},{"identifier":"aria-setsize","description":"Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.\\n@see aria-posinset.","type":"number"},{"identifier":"aria-sort","description":"Indicates if items in a table or grid are sorted in ascending or descending order.","type":"\\"none\\" | \\"ascending\\" | \\"descending\\" | \\"other\\""},{"identifier":"aria-valuemax","description":"Defines the maximum allowed value for a range widget.","type":"number"},{"identifier":"aria-valuemin","description":"Defines the minimum allowed value for a range widget.","type":"number"},{"identifier":"aria-valuenow","description":"Defines the current value for a range widget.\\n@see aria-valuetext.","type":"number"},{"identifier":"aria-valuetext","description":"Defines the human readable text alternative of aria-valuenow for a range widget.","type":"string"},{"identifier":"children","description":"\u4f20\u9012\u7684\u7ec4\u4ef6\uff0c\u4e00\u822c\u4e3a form item","type":"any","default":"[]"},{"identifier":"dangerouslySetInnerHTML","type":"{ __html: string | TrustedHTML; }"},{"identifier":"onCopy","type":"ClipboardEventHandler<HTMLFormElement>"},{"identifier":"onCopyCapture","type":"ClipboardEventHandler<HTMLFormElement>"},{"identifier":"onCut","type":"ClipboardEventHandler<HTMLFormElement>"},{"identifier":"onCutCapture","type":"ClipboardEventHandler<HTMLFormElement>"},{"identifier":"onPaste","type":"ClipboardEventHandler<HTMLFormElement>"},{"identifier":"onPasteCapture","type":"ClipboardEventHandler<HTMLFormElement>"},{"identifier":"onCompositionEnd","type":"CompositionEventHandler<HTMLFormElement>"},{"identifier":"onCompositionEndCapture","type":"CompositionEventHandler<HTMLFormElement>"},{"identifier":"onCompositionStart","type":"CompositionEventHandler<HTMLFormElement>"},{"identifier":"onCompositionStartCapture","type":"CompositionEventHandler<HTMLFormElement>"},{"identifier":"onCompositionUpdate","type":"CompositionEventHandler<HTMLFormElement>"},{"identifier":"onCompositionUpdateCapture","type":"CompositionEventHandler<HTMLFormElement>"},{"identifier":"onFocus","type":"FocusEventHandler<HTMLFormElement>"},{"identifier":"onFocusCapture","type":"FocusEventHandler<HTMLFormElement>"},{"identifier":"onBlur","type":"FocusEventHandler<HTMLFormElement>"},{"identifier":"onBlurCapture","type":"FocusEventHandler<HTMLFormElement>"},{"identifier":"onChange","type":"FormEventHandler<HTMLFormElement>"},{"identifier":"onChangeCapture","type":"FormEventHandler<HTMLFormElement>"},{"identifier":"onBeforeInput","type":"FormEventHandler<HTMLFormElement>"},{"identifier":"onBeforeInputCapture","type":"FormEventHandler<HTMLFormElement>"},{"identifier":"onInput","type":"FormEventHandler<HTMLFormElement>"},{"identifier":"onInputCapture","type":"FormEventHandler<HTMLFormElement>"},{"identifier":"onReset","description":"\u70b9\u51fb\u91cd\u7f6e\u89e6\u53d1","type":"FormEventHandler<HTMLFormElement> & (() => void)"},{"identifier":"onResetCapture","type":"FormEventHandler<HTMLFormElement>"},{"identifier":"onSubmitCapture","type":"FormEventHandler<HTMLFormElement>"},{"identifier":"onInvalid","type":"FormEventHandler<HTMLFormElement>"},{"identifier":"onInvalidCapture","type":"FormEventHandler<HTMLFormElement>"},{"identifier":"onLoad","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onLoadCapture","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onError","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onErrorCapture","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onKeyDown","type":"KeyboardEventHandler<HTMLFormElement>"},{"identifier":"onKeyDownCapture","type":"KeyboardEventHandler<HTMLFormElement>"},{"identifier":"onKeyPress","description":"@deprecated","type":"KeyboardEventHandler<HTMLFormElement>"},{"identifier":"onKeyPressCapture","description":"@deprecated","type":"KeyboardEventHandler<HTMLFormElement>"},{"identifier":"onKeyUp","type":"KeyboardEventHandler<HTMLFormElement>"},{"identifier":"onKeyUpCapture","type":"KeyboardEventHandler<HTMLFormElement>"},{"identifier":"onAbort","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onAbortCapture","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onCanPlay","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onCanPlayCapture","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onCanPlayThrough","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onCanPlayThroughCapture","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onDurationChange","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onDurationChangeCapture","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onEmptied","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onEmptiedCapture","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onEncrypted","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onEncryptedCapture","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onEnded","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onEndedCapture","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onLoadedData","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onLoadedDataCapture","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onLoadedMetadata","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onLoadedMetadataCapture","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onLoadStart","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onLoadStartCapture","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onPause","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onPauseCapture","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onPlay","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onPlayCapture","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onPlaying","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onPlayingCapture","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onProgress","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onProgressCapture","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onRateChange","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onRateChangeCapture","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onResize","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onResizeCapture","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onSeeked","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onSeekedCapture","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onSeeking","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onSeekingCapture","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onStalled","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onStalledCapture","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onSuspend","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onSuspendCapture","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onTimeUpdate","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onTimeUpdateCapture","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onVolumeChange","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onVolumeChangeCapture","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onWaiting","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onWaitingCapture","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onAuxClick","type":"MouseEventHandler<HTMLFormElement>"},{"identifier":"onAuxClickCapture","type":"MouseEventHandler<HTMLFormElement>"},{"identifier":"onClickCapture","type":"MouseEventHandler<HTMLFormElement>"},{"identifier":"onContextMenu","type":"MouseEventHandler<HTMLFormElement>"},{"identifier":"onContextMenuCapture","type":"MouseEventHandler<HTMLFormElement>"},{"identifier":"onDoubleClick","type":"MouseEventHandler<HTMLFormElement>"},{"identifier":"onDoubleClickCapture","type":"MouseEventHandler<HTMLFormElement>"},{"identifier":"onDrag","type":"DragEventHandler<HTMLFormElement>"},{"identifier":"onDragCapture","type":"DragEventHandler<HTMLFormElement>"},{"identifier":"onDragEnd","type":"DragEventHandler<HTMLFormElement>"},{"identifier":"onDragEndCapture","type":"DragEventHandler<HTMLFormElement>"},{"identifier":"onDragEnter","type":"DragEventHandler<HTMLFormElement>"},{"identifier":"onDragEnterCapture","type":"DragEventHandler<HTMLFormElement>"},{"identifier":"onDragExit","type":"DragEventHandler<HTMLFormElement>"},{"identifier":"onDragExitCapture","type":"DragEventHandler<HTMLFormElement>"},{"identifier":"onDragLeave","type":"DragEventHandler<HTMLFormElement>"},{"identifier":"onDragLeaveCapture","type":"DragEventHandler<HTMLFormElement>"},{"identifier":"onDragOver","type":"DragEventHandler<HTMLFormElement>"},{"identifier":"onDragOverCapture","type":"DragEventHandler<HTMLFormElement>"},{"identifier":"onDragStart","type":"DragEventHandler<HTMLFormElement>"},{"identifier":"onDragStartCapture","type":"DragEventHandler<HTMLFormElement>"},{"identifier":"onDrop","type":"DragEventHandler<HTMLFormElement>"},{"identifier":"onDropCapture","type":"DragEventHandler<HTMLFormElement>"},{"identifier":"onMouseDown","type":"MouseEventHandler<HTMLFormElement>"},{"identifier":"onMouseDownCapture","type":"MouseEventHandler<HTMLFormElement>"},{"identifier":"onMouseEnter","type":"MouseEventHandler<HTMLFormElement>"},{"identifier":"onMouseLeave","type":"MouseEventHandler<HTMLFormElement>"},{"identifier":"onMouseMove","type":"MouseEventHandler<HTMLFormElement>"},{"identifier":"onMouseMoveCapture","type":"MouseEventHandler<HTMLFormElement>"},{"identifier":"onMouseOut","type":"MouseEventHandler<HTMLFormElement>"},{"identifier":"onMouseOutCapture","type":"MouseEventHandler<HTMLFormElement>"},{"identifier":"onMouseOver","type":"MouseEventHandler<HTMLFormElement>"},{"identifier":"onMouseOverCapture","type":"MouseEventHandler<HTMLFormElement>"},{"identifier":"onMouseUp","type":"MouseEventHandler<HTMLFormElement>"},{"identifier":"onMouseUpCapture","type":"MouseEventHandler<HTMLFormElement>"},{"identifier":"onSelect","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onSelectCapture","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onTouchCancel","type":"TouchEventHandler<HTMLFormElement>"},{"identifier":"onTouchCancelCapture","type":"TouchEventHandler<HTMLFormElement>"},{"identifier":"onTouchEnd","type":"TouchEventHandler<HTMLFormElement>"},{"identifier":"onTouchEndCapture","type":"TouchEventHandler<HTMLFormElement>"},{"identifier":"onTouchMove","type":"TouchEventHandler<HTMLFormElement>"},{"identifier":"onTouchMoveCapture","type":"TouchEventHandler<HTMLFormElement>"},{"identifier":"onTouchStart","type":"TouchEventHandler<HTMLFormElement>"},{"identifier":"onTouchStartCapture","type":"TouchEventHandler<HTMLFormElement>"},{"identifier":"onPointerDown","type":"PointerEventHandler<HTMLFormElement>"},{"identifier":"onPointerDownCapture","type":"PointerEventHandler<HTMLFormElement>"},{"identifier":"onPointerMove","type":"PointerEventHandler<HTMLFormElement>"},{"identifier":"onPointerMoveCapture","type":"PointerEventHandler<HTMLFormElement>"},{"identifier":"onPointerUp","type":"PointerEventHandler<HTMLFormElement>"},{"identifier":"onPointerUpCapture","type":"PointerEventHandler<HTMLFormElement>"},{"identifier":"onPointerCancel","type":"PointerEventHandler<HTMLFormElement>"},{"identifier":"onPointerCancelCapture","type":"PointerEventHandler<HTMLFormElement>"},{"identifier":"onPointerEnter","type":"PointerEventHandler<HTMLFormElement>"},{"identifier":"onPointerEnterCapture","type":"PointerEventHandler<HTMLFormElement>"},{"identifier":"onPointerLeave","type":"PointerEventHandler<HTMLFormElement>"},{"identifier":"onPointerLeaveCapture","type":"PointerEventHandler<HTMLFormElement>"},{"identifier":"onPointerOver","type":"PointerEventHandler<HTMLFormElement>"},{"identifier":"onPointerOverCapture","type":"PointerEventHandler<HTMLFormElement>"},{"identifier":"onPointerOut","type":"PointerEventHandler<HTMLFormElement>"},{"identifier":"onPointerOutCapture","type":"PointerEventHandler<HTMLFormElement>"},{"identifier":"onGotPointerCapture","type":"PointerEventHandler<HTMLFormElement>"},{"identifier":"onGotPointerCaptureCapture","type":"PointerEventHandler<HTMLFormElement>"},{"identifier":"onLostPointerCapture","type":"PointerEventHandler<HTMLFormElement>"},{"identifier":"onLostPointerCaptureCapture","type":"PointerEventHandler<HTMLFormElement>"},{"identifier":"onScroll","type":"UIEventHandler<HTMLFormElement>"},{"identifier":"onScrollCapture","type":"UIEventHandler<HTMLFormElement>"},{"identifier":"onWheel","type":"WheelEventHandler<HTMLFormElement>"},{"identifier":"onWheelCapture","type":"WheelEventHandler<HTMLFormElement>"},{"identifier":"onAnimationStart","type":"AnimationEventHandler<HTMLFormElement>"},{"identifier":"onAnimationStartCapture","type":"AnimationEventHandler<HTMLFormElement>"},{"identifier":"onAnimationEnd","type":"AnimationEventHandler<HTMLFormElement>"},{"identifier":"onAnimationEndCapture","type":"AnimationEventHandler<HTMLFormElement>"},{"identifier":"onAnimationIteration","type":"AnimationEventHandler<HTMLFormElement>"},{"identifier":"onAnimationIterationCapture","type":"AnimationEventHandler<HTMLFormElement>"},{"identifier":"onTransitionEnd","type":"TransitionEventHandler<HTMLFormElement>"},{"identifier":"onTransitionEndCapture","type":"TransitionEventHandler<HTMLFormElement>"},{"identifier":"onFinish","type":"(values: any) => void"},{"identifier":"acceptCharset","type":"string"},{"identifier":"action","type":"string"},{"identifier":"autoComplete","type":"string"},{"identifier":"encType","type":"string"},{"identifier":"method","type":"string"},{"identifier":"noValidate","type":"boolean"},{"identifier":"initialValues","type":"Store"},{"identifier":"component","type":"string | false | FC<any> | ComponentClass<any, any>"},{"identifier":"fields","type":"FieldData[]"},{"identifier":"validateMessages","type":"ValidateMessages"},{"identifier":"onValuesChange","type":"(changedValues: any, values: any) => void"},{"identifier":"onFieldsChange","type":"(changedFields: FieldData[], allFields: FieldData[]) => void"},{"identifier":"onFinishFailed","type":"(errorInfo: ValidateErrorEntity<any>) => void"},{"identifier":"validateTrigger","type":"string | false | string[]"},{"identifier":"preserve","type":"boolean"},{"identifier":"submitProps","description":"\u67e5\u8be2\u6309\u94ae props, \u7ee7\u627f antd Button \u7ec4\u4ef6 API","type":"SearchButtonProps","default":"{}"},{"identifier":"cancelProps","description":"\u91cd\u7f6e\u6309\u94ae props, \u7ee7\u627f antd Button \u7ec4\u4ef6 API","type":"SearchButtonProps","default":"{}"},{"identifier":"onSearch","description":"\u70b9\u51fb\u67e5\u8be2\u89e6\u53d1","type":"(values: any) => void"},{"identifier":"rows","description":"\u9ed8\u8ba4\u5c55\u5f00\u7684\u884c\u6570\uff08\u5176\u4f59\u9ed8\u8ba4\u6536\u8d77\uff09","type":"2 | 3","default":"2"},{"identifier":"cols","description":"\u9ed8\u8ba4\u6bcf\u884c\u5c55\u793a\u7684\u5217\u6570\uff08\u4e00\u884c\u7684 FormItem \u6570\u91cf\uff09","type":"2 | 3 | 4","default":"3"},{"identifier":"foldProps","description":"\u5c55\u5f00\u6536\u8d77 props","type":"FoldProps","default":"{}"},{"identifier":"resetNames","description":"\u91cd\u7f6e\u7684\u5b57\u6bb5","type":"string[]"},{"identifier":"buttonAlign","description":"\u6309\u94ae\u4f4d\u7f6e","type":"\\"left\\" | \\"center\\" | \\"right\\"","default":"center"}],"IPropsOptions":[{"identifier":"submitProps","description":"\u67e5\u8be2\u6309\u94ae props, \u7ee7\u627f antd Button \u7ec4\u4ef6 API","type":"SearchButtonProps","default":"{}"},{"identifier":"cancelProps","description":"\u91cd\u7f6e\u6309\u94ae props, \u7ee7\u627f antd Button \u7ec4\u4ef6 API","type":"SearchButtonProps","default":"{}"},{"identifier":"onSearch","description":"\u70b9\u51fb\u67e5\u8be2\u89e6\u53d1","type":"(values: any) => void"},{"identifier":"onReset","description":"\u70b9\u51fb\u91cd\u7f6e\u89e6\u53d1","type":"() => void"},{"identifier":"children","description":"\u4f20\u9012\u7684\u7ec4\u4ef6\uff0c\u4e00\u822c\u4e3a form item","type":"any","default":"[]"},{"identifier":"rows","description":"\u9ed8\u8ba4\u5c55\u5f00\u7684\u884c\u6570\uff08\u5176\u4f59\u9ed8\u8ba4\u6536\u8d77\uff09","type":"2 | 3","default":"2"},{"identifier":"cols","description":"\u9ed8\u8ba4\u6bcf\u884c\u5c55\u793a\u7684\u5217\u6570\uff08\u4e00\u884c\u7684 FormItem \u6570\u91cf\uff09","type":"2 | 3 | 4","default":"3"},{"identifier":"foldProps","description":"\u5c55\u5f00\u6536\u8d77 props","type":"FoldProps","default":"{}"},{"identifier":"resetNames","description":"\u91cd\u7f6e\u7684\u5b57\u6bb5","type":"string[]"},{"identifier":"buttonAlign","description":"\u6309\u94ae\u4f4d\u7f6e","type":"\\"left\\" | \\"center\\" | \\"right\\"","default":"center"}],"SearchButtonProps":[{"identifier":"text","description":"\u6309\u94ae\u7684\u6587\u5b57","type":"ReactNode"},{"identifier":"isShow","description":"\u662f\u5426\u5c55\u793a","type":"Boolean"}],"FoldProps":[{"identifier":"foldText","description":"\u5c55\u5f00\u7684\u6587\u5b57","type":"string"},{"identifier":"unfoldText","description":"\u6536\u8d77\u7684\u6587\u5b57","type":"string"}]},"SizeInput":{"default":[{"identifier":"value","description":"\u53d7\u63a7\u503c","type":"number[]","default":"[]"},{"identifier":"defaultValue","description":"\u9ed8\u8ba4\u503c","type":"number[]","default":"[]"},{"identifier":"count","description":"\u8f93\u5165\u6846\u4e2a\u6570","type":"2 | 3 | 4","default":"3"},{"identifier":"numberInputProps","description":"\u900f\u4f20\u7ed9\u8f93\u5165\u6846\u7684\u5c5e\u6027\u96c6\uff0c\u7ee7\u627f\u81ea antd InputNumber API\uff0c\u4f20\u5165\u6570\u7ec4\u5219\u5206\u522b\u5bf9\u6bcf\u4e2a input \u8bbe\u7f6e","type":"InputNumberProps<ValueType> | InputNumberProps<ValueType>[]","default":"{}"},{"identifier":"placeholder","description":"\u8f93\u5165\u63d0\u793a","type":"string[]","default":"[\'\u957f\', \'\u5bbd\', \'\u9ad8\']"},{"identifier":"onChange","description":"\u8f93\u5165\u6846\u6539\u53d8\u65f6\u89e6\u53d1","type":"(val: any) => void"},{"identifier":"unit","description":"\u5355\u4f4d\uff0c\u53ef\u9009","type":"string[]","default":"[]"},{"identifier":"connectSymbol","description":"\u8fde\u63a5\u7b26\u53f7","type":"string","default":"-"}]},"ToolBar":{"default":[{"identifier":"rightActionList","description":"\u540c ActionList","type":"ActionType[]","default":"[]"},{"identifier":"leftActionList","description":"\u540c ActionList","type":"ActionType[]","default":"[]"},{"identifier":"bordered","description":"\u662f\u5426\u663e\u793a\u4e0b\u8fb9\u6846","type":"boolean","default":"true"},{"identifier":"className","description":"className","type":"string"},{"identifier":"onActionClick","description":"\u70b9\u51fb\u6309\u94ae\u89e6\u53d1","type":"(key: string, data?: object) => void"},{"identifier":"menuTrigger","description":"\u89e6\u53d1\u65b9\u5f0f","type":"(\\"contextMenu\\" | \\"click\\" | \\"hover\\")[]"}]}}',
        ),
        m = n(49215),
        c = (e) => r.createElement(m.Z, (0, i.default)({}, e, { config: a, demos: s, apis: p }));
    },
  },
]);
