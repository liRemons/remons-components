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
      var i = n(3066),
        r = n(67294),
        o = JSON.parse(
          '{"menus":{"en-US":{"*":[{"path":"/","title":"\u4ecb\u7ecd","meta":{}},{"title":"FormItem","path":"/form-item","meta":{},"children":[]},{"title":"SearchForm","path":"/search-form","meta":{},"children":[]}]}},"locales":[{"name":"en-US","label":"English"}],"navs":{},"title":"remons-componets","logo":"https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png","mode":"doc","repository":{"url":"","branch":"master"},"theme":{}}',
        ),
        a = n(76905),
        d = n(78864),
        l = n(60535),
        p = {
          'FormItem-demo': {
            component: (0, l.D8)({
              loader: (function () {
                var e = (0, d.Z)(
                  (0, a.Z)().mark(function e() {
                    var t, i, r, o, d, l, p, s;
                    return (0, a.Z)().wrap(function (e) {
                      while (1)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), n.e(318).then(n.t.bind(n, 95318, 23));
                          case 2:
                            return (
                              (t = e.sent['default']),
                              (e.t0 = t),
                              (e.next = 6),
                              Promise.resolve().then(n.bind(n, 3066))
                            );
                          case 6:
                            return (
                              (e.t1 = e.sent),
                              (i = (0, e.t0)(e.t1)),
                              (e.t2 = t),
                              (e.next = 11),
                              Promise.resolve().then(n.t.bind(n, 67294, 19))
                            );
                          case 11:
                            return (
                              (e.t3 = e.sent),
                              (r = (0, e.t2)(e.t3)),
                              (e.next = 15),
                              Promise.all([n.e(60), n.e(886), n.e(980), n.e(927), n.e(700)]).then(
                                n.bind(n, 35927),
                              )
                            );
                          case 15:
                            return (
                              (o = e.sent),
                              (e.next = 18),
                              Promise.all([n.e(60), n.e(980), n.e(771), n.e(712)]).then(
                                n.bind(n, 22438),
                              )
                            );
                          case 18:
                            return (
                              (d = e.sent),
                              (l = { labelCol: { span: 4 }, wrapperCol: { span: 20 } }),
                              (p = [
                                { label: '\u8f93\u5165', component: 'input' },
                                {
                                  label: '\u6570\u5b57',
                                  component: 'inputNumber',
                                  componentProps: { min: 0 },
                                },
                                {
                                  label: '\u4e0b\u62c9\u9009\u62e9',
                                  component: 'select',
                                  componentProps: {
                                    options: [{ label: '\u6d4b\u8bd5', value: 'test' }],
                                  },
                                },
                              ]),
                              (s = function () {
                                return r['default'].createElement(
                                  o.Form,
                                  l,
                                  p.map(function (e) {
                                    return r['default'].createElement(
                                      d.FormItem,
                                      (0, i['default'])({ key: e.label }, e),
                                    );
                                  }),
                                );
                              }),
                              e.abrupt('return', s)
                            );
                          case 23:
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
                  tsx: "import React from 'react';\nimport { Form } from 'antd';\nimport { FormItem } from 'remons-components';\n\nconst layout = {\n  labelCol: { span: 4 },\n  wrapperCol: { span: 20 },\n};\n\nconst items = [\n  { label: '\u8f93\u5165', component: 'input' },\n  { label: '\u6570\u5b57', component: 'inputNumber', componentProps: { min: 0 } },\n  {\n    label: '\u4e0b\u62c9\u9009\u62e9',\n    component: 'select',\n    componentProps: {\n      options: [{ label: '\u6d4b\u8bd5', value: 'test' }],\n    },\n  },\n];\n\nexport default () => (\n  <Form {...layout}>\n    {items.map((item) => (\n      <FormItem key={item.label} {...item} />\n    ))}\n  </Form>\n);",
                },
              },
              dependencies: {
                react: { version: '>=16.9.0' },
                antd: { version: '4.21.6', css: 'antd/dist/antd.css' },
                'remons-components': { version: '0.0.1-beta' },
                'react-dom': { version: '>=16.9.0' },
              },
              componentName: 'FormItem',
              identifier: 'FormItem-demo',
            },
          },
          'SearchForm-demo': {
            component: (0, l.D8)({
              loader: (function () {
                var e = (0, d.Z)(
                  (0, a.Z)().mark(function e() {
                    var t, i, r, o, d, l;
                    return (0, a.Z)().wrap(function (e) {
                      while (1)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), n.e(318).then(n.t.bind(n, 95318, 23));
                          case 2:
                            return (
                              (t = e.sent['default']),
                              (e.t0 = t),
                              (e.next = 6),
                              Promise.resolve().then(n.bind(n, 3066))
                            );
                          case 6:
                            return (
                              (e.t1 = e.sent),
                              (i = (0, e.t0)(e.t1)),
                              (e.t2 = t),
                              (e.next = 11),
                              Promise.resolve().then(n.t.bind(n, 67294, 19))
                            );
                          case 11:
                            return (
                              (e.t3 = e.sent),
                              (r = (0, e.t2)(e.t3)),
                              (e.next = 15),
                              Promise.all([n.e(60), n.e(980), n.e(771), n.e(712)]).then(
                                n.bind(n, 22438),
                              )
                            );
                          case 15:
                            return (
                              (o = e.sent),
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
                                  o.SearchForm,
                                  { cols: 2, onSearch: e },
                                  d.map(function (e) {
                                    return r['default'].createElement(
                                      o.FormItem,
                                      (0, i['default'])({}, e, { key: e.name }),
                                    );
                                  }),
                                );
                              }),
                              e.abrupt('return', l)
                            );
                          case 19:
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
                  tsx: "import React from 'react';\nimport { SearchForm, FormItem } from 'remons-components';\n\nconst items = [\n  { name: 'test1', component: 'input', label: '\u6d4b\u8bd5\u5b57\u6bb51' },\n  { name: 'test2', component: 'input', label: '\u6d4b\u8bd5\u5b57\u6bb52' },\n  { name: 'test3', component: 'input', label: '\u6d4b\u8bd5\u5b57\u6bb53' },\n  { name: 'test4', component: 'input', label: '\u6d4b\u8bd5\u5b57\u6bb54' },\n  { name: 'test5', component: 'input', label: '\u6d4b\u8bd5\u5b57\u6bb55' },\n  { name: 'test6', component: 'input', label: '\u6d4b\u8bd5\u5b57\u6bb56' },\n  { name: 'test7', component: 'input', label: '\u6d4b\u8bd5\u5b57\u6bb57' },\n  { name: 'test8', component: 'input', label: '\u6d4b\u8bd5\u5b57\u6bb58' },\n  { name: 'test9', component: 'input', label: '\u6d4b\u8bd5\u5b57\u6bb59' },\n  { name: 'test10', component: 'input', label: '\u6d4b\u8bd5\u5b57\u6bb510' },\n];\n\nexport default () => {\n  const onSearch = (values) => {\n    console.log(values);\n  };\n  return (\n    <SearchForm cols={2} onSearch={onSearch}>\n      {items.map((item) => (\n        <FormItem {...item} key={item.name} />\n      ))}\n    </SearchForm>\n  );\n};",
                },
              },
              dependencies: {
                react: { version: '18.2.0' },
                'remons-components': { version: '0.0.1-beta' },
              },
              componentName: 'SearchForm',
              identifier: 'SearchForm-demo',
            },
          },
        },
        s = JSON.parse(
          '{"FormItem":{"default":[{"identifier":"component","description":"\u6240\u652f\u6301\u7684\u7ec4\u4ef6\u7c7b\u578b","type":"any"},{"identifier":"componentProps","description":"\u900f\u4f20\u5230 FormItem \u4f7f\u7528\u7ec4\u4ef6\u7684\u53c2\u6570","type":"object"},{"identifier":"prefixCls","type":"string"},{"identifier":"noStyle","type":"boolean"},{"identifier":"style","type":"CSSProperties"},{"identifier":"className","type":"string"},{"identifier":"id","type":"string"},{"identifier":"hasFeedback","type":"boolean"},{"identifier":"validateStatus","type":"\\"\\" | \\"success\\" | \\"warning\\" | \\"error\\" | \\"validating\\""},{"identifier":"required","type":"boolean"},{"identifier":"hidden","type":"boolean"},{"identifier":"initialValue","type":"any"},{"identifier":"messageVariables","type":"Record<string, string>"},{"identifier":"tooltip","type":"LabelTooltipType"},{"identifier":"fieldKey","description":"@deprecated No need anymore","type":"Key | Key[]"},{"identifier":"colon","type":"boolean"},{"identifier":"htmlFor","type":"string"},{"identifier":"label","type":"ReactNode"},{"identifier":"labelAlign","type":"FormLabelAlign"},{"identifier":"labelCol","type":"ColProps"},{"identifier":"requiredMark","type":"RequiredMark"},{"identifier":"wrapperCol","type":"ColProps"},{"identifier":"extra","type":"ReactNode"},{"identifier":"status","type":"\\"\\" | \\"success\\" | \\"warning\\" | \\"error\\" | \\"validating\\""},{"identifier":"help","type":"ReactNode"},{"identifier":"name","type":"NamePath"},{"identifier":"dependencies","description":"Set up `dependencies` field.\\nWhen dependencies field update and current field is touched,\\nwill trigger validate rules and render.","type":"NamePath[]"},{"identifier":"getValueFromEvent","type":"(...args: EventArgs) => any"},{"identifier":"normalize","type":"(value: any, prevValue: any, allValues: Store) => any"},{"identifier":"rules","type":"Rule[]"},{"identifier":"shouldUpdate","type":"ShouldUpdate<any>"},{"identifier":"trigger","type":"string"},{"identifier":"validateTrigger","type":"string | false | string[]"},{"identifier":"validateFirst","type":"boolean | \\"parallel\\""},{"identifier":"valuePropName","type":"string"},{"identifier":"getValueProps","type":"(value: any) => Record<string, unknown>"},{"identifier":"onReset","type":"() => void"},{"identifier":"onMetaChange","type":"(meta: Meta & { destroy?: boolean; }) => void"},{"identifier":"preserve","type":"boolean"},{"identifier":"isListField","description":"@private Passed by Form.List props. Do not use since it will break by path check.","type":"boolean"},{"identifier":"isList","description":"@private Passed by Form.List props. Do not use since it will break by path check.","type":"boolean"}],"IPropsOption":[{"identifier":"component","description":"\u6240\u652f\u6301\u7684\u7ec4\u4ef6\u7c7b\u578b","type":"any"},{"identifier":"componentProps","description":"\u900f\u4f20\u5230 FormItem \u4f7f\u7528\u7ec4\u4ef6\u7684\u53c2\u6570","type":"object"}]},"SearchForm":{"default":[{"identifier":"prefixCls","type":"string"},{"identifier":"colon","type":"boolean"},{"identifier":"name","type":"string"},{"identifier":"layout","type":"FormLayout"},{"identifier":"labelAlign","type":"FormLabelAlign"},{"identifier":"labelWrap","type":"boolean"},{"identifier":"labelCol","type":"ColProps"},{"identifier":"wrapperCol","type":"ColProps"},{"identifier":"form","type":"FormInstance<any>"},{"identifier":"size","type":"SizeType"},{"identifier":"disabled","type":"boolean"},{"identifier":"scrollToFirstError","type":"boolean | Options<any>"},{"identifier":"requiredMark","type":"RequiredMark"},{"identifier":"hideRequiredMark","description":"@deprecated Will warning in future branch. Pls use `requiredMark` instead.","type":"boolean"},{"identifier":"onClick","type":"MouseEventHandler<HTMLFormElement>"},{"identifier":"target","type":"string"},{"identifier":"defaultChecked","type":"boolean"},{"identifier":"defaultValue","type":"string | number | readonly string[]"},{"identifier":"suppressContentEditableWarning","type":"boolean"},{"identifier":"suppressHydrationWarning","type":"boolean"},{"identifier":"accessKey","type":"string"},{"identifier":"className","type":"string"},{"identifier":"contentEditable","type":"Booleanish | \\"inherit\\""},{"identifier":"contextMenu","type":"string"},{"identifier":"dir","type":"string"},{"identifier":"draggable","type":"Booleanish"},{"identifier":"hidden","type":"boolean"},{"identifier":"id","type":"string"},{"identifier":"lang","type":"string"},{"identifier":"placeholder","type":"string"},{"identifier":"slot","type":"string"},{"identifier":"spellCheck","type":"Booleanish"},{"identifier":"style","type":"CSSProperties"},{"identifier":"tabIndex","type":"number"},{"identifier":"title","type":"string"},{"identifier":"translate","type":"\\"yes\\" | \\"no\\""},{"identifier":"radioGroup","type":"string"},{"identifier":"role","type":"AriaRole"},{"identifier":"about","type":"string"},{"identifier":"datatype","type":"string"},{"identifier":"inlist","type":"any"},{"identifier":"prefix","type":"string"},{"identifier":"property","type":"string"},{"identifier":"resource","type":"string"},{"identifier":"typeof","type":"string"},{"identifier":"vocab","type":"string"},{"identifier":"autoCapitalize","type":"string"},{"identifier":"autoCorrect","type":"string"},{"identifier":"autoSave","type":"string"},{"identifier":"color","type":"string"},{"identifier":"itemProp","type":"string"},{"identifier":"itemScope","type":"boolean"},{"identifier":"itemType","type":"string"},{"identifier":"itemID","type":"string"},{"identifier":"itemRef","type":"string"},{"identifier":"results","type":"number"},{"identifier":"security","type":"string"},{"identifier":"unselectable","type":"\\"on\\" | \\"off\\""},{"identifier":"inputMode","description":"Hints at the type of data that might be entered by the user while editing the element or its contents\\n@see https://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-inputmode-attribute","type":"\\"none\\" | \\"search\\" | \\"text\\" | \\"tel\\" | \\"url\\" | \\"email\\" | \\"numeric\\" | \\"decimal\\""},{"identifier":"is","description":"Specify that a standard HTML element should behave like a defined custom built-in element\\n@see https://html.spec.whatwg.org/multipage/custom-elements.html#attr-is","type":"string"},{"identifier":"aria-activedescendant","description":"Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application.","type":"string"},{"identifier":"aria-atomic","description":"Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute.","type":"Booleanish"},{"identifier":"aria-autocomplete","description":"Indicates whether inputting text could trigger display of one or more predictions of the user\'s intended value for an input and specifies how predictions would be\\npresented if they are made.","type":"\\"list\\" | \\"none\\" | \\"inline\\" | \\"both\\""},{"identifier":"aria-busy","description":"Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user.","type":"Booleanish"},{"identifier":"aria-checked","description":"Indicates the current \\"checked\\" state of checkboxes, radio buttons, and other widgets.\\n@see aria-pressed\\n@see aria-selected.","type":"boolean | \\"true\\" | \\"false\\" | \\"mixed\\""},{"identifier":"aria-colcount","description":"Defines the total number of columns in a table, grid, or treegrid.\\n@see aria-colindex.","type":"number"},{"identifier":"aria-colindex","description":"Defines an element\'s column index or position with respect to the total number of columns within a table, grid, or treegrid.\\n@see aria-colcount\\n@see aria-colspan.","type":"number"},{"identifier":"aria-colspan","description":"Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.\\n@see aria-colindex\\n@see aria-rowspan.","type":"number"},{"identifier":"aria-controls","description":"Identifies the element (or elements) whose contents or presence are controlled by the current element.\\n@see aria-owns.","type":"string"},{"identifier":"aria-current","description":"Indicates the element that represents the current item within a container or set of related elements.","type":"boolean | \\"true\\" | \\"false\\" | \\"page\\" | \\"step\\" | \\"location\\" | \\"date\\" | \\"time\\""},{"identifier":"aria-describedby","description":"Identifies the element (or elements) that describes the object.\\n@see aria-labelledby","type":"string"},{"identifier":"aria-details","description":"Identifies the element that provides a detailed, extended description for the object.\\n@see aria-describedby.","type":"string"},{"identifier":"aria-disabled","description":"Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.\\n@see aria-hidden\\n@see aria-readonly.","type":"Booleanish"},{"identifier":"aria-dropeffect","description":"Indicates what functions can be performed when a dragged object is released on the drop target.\\n@deprecated in ARIA 1.1","type":"\\"link\\" | \\"none\\" | \\"copy\\" | \\"execute\\" | \\"move\\" | \\"popup\\""},{"identifier":"aria-errormessage","description":"Identifies the element that provides an error message for the object.\\n@see aria-invalid\\n@see aria-describedby.","type":"string"},{"identifier":"aria-expanded","description":"Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.","type":"Booleanish"},{"identifier":"aria-flowto","description":"Identifies the next element (or elements) in an alternate reading order of content which, at the user\'s discretion,\\nallows assistive technology to override the general default of reading in document source order.","type":"string"},{"identifier":"aria-grabbed","description":"Indicates an element\'s \\"grabbed\\" state in a drag-and-drop operation.\\n@deprecated in ARIA 1.1","type":"Booleanish"},{"identifier":"aria-haspopup","description":"Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.","type":"boolean | \\"true\\" | \\"false\\" | \\"dialog\\" | \\"grid\\" | \\"listbox\\" | \\"menu\\" | \\"tree\\""},{"identifier":"aria-hidden","description":"Indicates whether the element is exposed to an accessibility API.\\n@see aria-disabled.","type":"Booleanish"},{"identifier":"aria-invalid","description":"Indicates the entered value does not conform to the format expected by the application.\\n@see aria-errormessage.","type":"boolean | \\"true\\" | \\"false\\" | \\"grammar\\" | \\"spelling\\""},{"identifier":"aria-keyshortcuts","description":"Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.","type":"string"},{"identifier":"aria-label","description":"Defines a string value that labels the current element.\\n@see aria-labelledby.","type":"string"},{"identifier":"aria-labelledby","description":"Identifies the element (or elements) that labels the current element.\\n@see aria-describedby.","type":"string"},{"identifier":"aria-level","description":"Defines the hierarchical level of an element within a structure.","type":"number"},{"identifier":"aria-live","description":"Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.","type":"\\"off\\" | \\"assertive\\" | \\"polite\\""},{"identifier":"aria-modal","description":"Indicates whether an element is modal when displayed.","type":"Booleanish"},{"identifier":"aria-multiline","description":"Indicates whether a text box accepts multiple lines of input or only a single line.","type":"Booleanish"},{"identifier":"aria-multiselectable","description":"Indicates that the user may select more than one item from the current selectable descendants.","type":"Booleanish"},{"identifier":"aria-orientation","description":"Indicates whether the element\'s orientation is horizontal, vertical, or unknown/ambiguous.","type":"\\"horizontal\\" | \\"vertical\\""},{"identifier":"aria-owns","description":"Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship\\nbetween DOM elements where the DOM hierarchy cannot be used to represent the relationship.\\n@see aria-controls.","type":"string"},{"identifier":"aria-placeholder","description":"Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.\\nA hint could be a sample value or a brief description of the expected format.","type":"string"},{"identifier":"aria-posinset","description":"Defines an element\'s number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.\\n@see aria-setsize.","type":"number"},{"identifier":"aria-pressed","description":"Indicates the current \\"pressed\\" state of toggle buttons.\\n@see aria-checked\\n@see aria-selected.","type":"boolean | \\"true\\" | \\"false\\" | \\"mixed\\""},{"identifier":"aria-readonly","description":"Indicates that the element is not editable, but is otherwise operable.\\n@see aria-disabled.","type":"Booleanish"},{"identifier":"aria-relevant","description":"Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.\\n@see aria-atomic.","type":"\\"text\\" | \\"additions\\" | \\"additions removals\\" | \\"additions text\\" | \\"all\\" | \\"removals\\" | \\"removals additions\\" | \\"removals text\\" | \\"text additions\\" | \\"text removals\\""},{"identifier":"aria-required","description":"Indicates that user input is required on the element before a form may be submitted.","type":"Booleanish"},{"identifier":"aria-roledescription","description":"Defines a human-readable, author-localized description for the role of an element.","type":"string"},{"identifier":"aria-rowcount","description":"Defines the total number of rows in a table, grid, or treegrid.\\n@see aria-rowindex.","type":"number"},{"identifier":"aria-rowindex","description":"Defines an element\'s row index or position with respect to the total number of rows within a table, grid, or treegrid.\\n@see aria-rowcount\\n@see aria-rowspan.","type":"number"},{"identifier":"aria-rowspan","description":"Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.\\n@see aria-rowindex\\n@see aria-colspan.","type":"number"},{"identifier":"aria-selected","description":"Indicates the current \\"selected\\" state of various widgets.\\n@see aria-checked\\n@see aria-pressed.","type":"Booleanish"},{"identifier":"aria-setsize","description":"Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.\\n@see aria-posinset.","type":"number"},{"identifier":"aria-sort","description":"Indicates if items in a table or grid are sorted in ascending or descending order.","type":"\\"none\\" | \\"ascending\\" | \\"descending\\" | \\"other\\""},{"identifier":"aria-valuemax","description":"Defines the maximum allowed value for a range widget.","type":"number"},{"identifier":"aria-valuemin","description":"Defines the minimum allowed value for a range widget.","type":"number"},{"identifier":"aria-valuenow","description":"Defines the current value for a range widget.\\n@see aria-valuetext.","type":"number"},{"identifier":"aria-valuetext","description":"Defines the human readable text alternative of aria-valuenow for a range widget.","type":"string"},{"identifier":"children","description":"\u4f20\u9012\u7684\u7ec4\u4ef6\uff0c\u4e00\u822c\u4e3a form item","type":"any","default":"[]"},{"identifier":"dangerouslySetInnerHTML","type":"{ __html: string; }"},{"identifier":"onCopy","type":"ClipboardEventHandler<HTMLFormElement>"},{"identifier":"onCopyCapture","type":"ClipboardEventHandler<HTMLFormElement>"},{"identifier":"onCut","type":"ClipboardEventHandler<HTMLFormElement>"},{"identifier":"onCutCapture","type":"ClipboardEventHandler<HTMLFormElement>"},{"identifier":"onPaste","type":"ClipboardEventHandler<HTMLFormElement>"},{"identifier":"onPasteCapture","type":"ClipboardEventHandler<HTMLFormElement>"},{"identifier":"onCompositionEnd","type":"CompositionEventHandler<HTMLFormElement>"},{"identifier":"onCompositionEndCapture","type":"CompositionEventHandler<HTMLFormElement>"},{"identifier":"onCompositionStart","type":"CompositionEventHandler<HTMLFormElement>"},{"identifier":"onCompositionStartCapture","type":"CompositionEventHandler<HTMLFormElement>"},{"identifier":"onCompositionUpdate","type":"CompositionEventHandler<HTMLFormElement>"},{"identifier":"onCompositionUpdateCapture","type":"CompositionEventHandler<HTMLFormElement>"},{"identifier":"onFocus","type":"FocusEventHandler<HTMLFormElement>"},{"identifier":"onFocusCapture","type":"FocusEventHandler<HTMLFormElement>"},{"identifier":"onBlur","type":"FocusEventHandler<HTMLFormElement>"},{"identifier":"onBlurCapture","type":"FocusEventHandler<HTMLFormElement>"},{"identifier":"onChange","type":"FormEventHandler<HTMLFormElement>"},{"identifier":"onChangeCapture","type":"FormEventHandler<HTMLFormElement>"},{"identifier":"onBeforeInput","type":"FormEventHandler<HTMLFormElement>"},{"identifier":"onBeforeInputCapture","type":"FormEventHandler<HTMLFormElement>"},{"identifier":"onInput","type":"FormEventHandler<HTMLFormElement>"},{"identifier":"onInputCapture","type":"FormEventHandler<HTMLFormElement>"},{"identifier":"onReset","description":"\u70b9\u51fb\u91cd\u7f6e\u89e6\u53d1","type":"FormEventHandler<HTMLFormElement> & (() => void)"},{"identifier":"onResetCapture","type":"FormEventHandler<HTMLFormElement>"},{"identifier":"onSubmitCapture","type":"FormEventHandler<HTMLFormElement>"},{"identifier":"onInvalid","type":"FormEventHandler<HTMLFormElement>"},{"identifier":"onInvalidCapture","type":"FormEventHandler<HTMLFormElement>"},{"identifier":"onLoad","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onLoadCapture","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onError","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onErrorCapture","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onKeyDown","type":"KeyboardEventHandler<HTMLFormElement>"},{"identifier":"onKeyDownCapture","type":"KeyboardEventHandler<HTMLFormElement>"},{"identifier":"onKeyPress","description":"@deprecated","type":"KeyboardEventHandler<HTMLFormElement>"},{"identifier":"onKeyPressCapture","description":"@deprecated","type":"KeyboardEventHandler<HTMLFormElement>"},{"identifier":"onKeyUp","type":"KeyboardEventHandler<HTMLFormElement>"},{"identifier":"onKeyUpCapture","type":"KeyboardEventHandler<HTMLFormElement>"},{"identifier":"onAbort","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onAbortCapture","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onCanPlay","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onCanPlayCapture","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onCanPlayThrough","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onCanPlayThroughCapture","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onDurationChange","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onDurationChangeCapture","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onEmptied","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onEmptiedCapture","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onEncrypted","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onEncryptedCapture","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onEnded","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onEndedCapture","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onLoadedData","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onLoadedDataCapture","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onLoadedMetadata","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onLoadedMetadataCapture","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onLoadStart","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onLoadStartCapture","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onPause","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onPauseCapture","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onPlay","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onPlayCapture","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onPlaying","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onPlayingCapture","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onProgress","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onProgressCapture","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onRateChange","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onRateChangeCapture","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onSeeked","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onSeekedCapture","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onSeeking","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onSeekingCapture","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onStalled","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onStalledCapture","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onSuspend","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onSuspendCapture","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onTimeUpdate","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onTimeUpdateCapture","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onVolumeChange","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onVolumeChangeCapture","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onWaiting","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onWaitingCapture","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onAuxClick","type":"MouseEventHandler<HTMLFormElement>"},{"identifier":"onAuxClickCapture","type":"MouseEventHandler<HTMLFormElement>"},{"identifier":"onClickCapture","type":"MouseEventHandler<HTMLFormElement>"},{"identifier":"onContextMenu","type":"MouseEventHandler<HTMLFormElement>"},{"identifier":"onContextMenuCapture","type":"MouseEventHandler<HTMLFormElement>"},{"identifier":"onDoubleClick","type":"MouseEventHandler<HTMLFormElement>"},{"identifier":"onDoubleClickCapture","type":"MouseEventHandler<HTMLFormElement>"},{"identifier":"onDrag","type":"DragEventHandler<HTMLFormElement>"},{"identifier":"onDragCapture","type":"DragEventHandler<HTMLFormElement>"},{"identifier":"onDragEnd","type":"DragEventHandler<HTMLFormElement>"},{"identifier":"onDragEndCapture","type":"DragEventHandler<HTMLFormElement>"},{"identifier":"onDragEnter","type":"DragEventHandler<HTMLFormElement>"},{"identifier":"onDragEnterCapture","type":"DragEventHandler<HTMLFormElement>"},{"identifier":"onDragExit","type":"DragEventHandler<HTMLFormElement>"},{"identifier":"onDragExitCapture","type":"DragEventHandler<HTMLFormElement>"},{"identifier":"onDragLeave","type":"DragEventHandler<HTMLFormElement>"},{"identifier":"onDragLeaveCapture","type":"DragEventHandler<HTMLFormElement>"},{"identifier":"onDragOver","type":"DragEventHandler<HTMLFormElement>"},{"identifier":"onDragOverCapture","type":"DragEventHandler<HTMLFormElement>"},{"identifier":"onDragStart","type":"DragEventHandler<HTMLFormElement>"},{"identifier":"onDragStartCapture","type":"DragEventHandler<HTMLFormElement>"},{"identifier":"onDrop","type":"DragEventHandler<HTMLFormElement>"},{"identifier":"onDropCapture","type":"DragEventHandler<HTMLFormElement>"},{"identifier":"onMouseDown","type":"MouseEventHandler<HTMLFormElement>"},{"identifier":"onMouseDownCapture","type":"MouseEventHandler<HTMLFormElement>"},{"identifier":"onMouseEnter","type":"MouseEventHandler<HTMLFormElement>"},{"identifier":"onMouseLeave","type":"MouseEventHandler<HTMLFormElement>"},{"identifier":"onMouseMove","type":"MouseEventHandler<HTMLFormElement>"},{"identifier":"onMouseMoveCapture","type":"MouseEventHandler<HTMLFormElement>"},{"identifier":"onMouseOut","type":"MouseEventHandler<HTMLFormElement>"},{"identifier":"onMouseOutCapture","type":"MouseEventHandler<HTMLFormElement>"},{"identifier":"onMouseOver","type":"MouseEventHandler<HTMLFormElement>"},{"identifier":"onMouseOverCapture","type":"MouseEventHandler<HTMLFormElement>"},{"identifier":"onMouseUp","type":"MouseEventHandler<HTMLFormElement>"},{"identifier":"onMouseUpCapture","type":"MouseEventHandler<HTMLFormElement>"},{"identifier":"onSelect","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onSelectCapture","type":"ReactEventHandler<HTMLFormElement>"},{"identifier":"onTouchCancel","type":"TouchEventHandler<HTMLFormElement>"},{"identifier":"onTouchCancelCapture","type":"TouchEventHandler<HTMLFormElement>"},{"identifier":"onTouchEnd","type":"TouchEventHandler<HTMLFormElement>"},{"identifier":"onTouchEndCapture","type":"TouchEventHandler<HTMLFormElement>"},{"identifier":"onTouchMove","type":"TouchEventHandler<HTMLFormElement>"},{"identifier":"onTouchMoveCapture","type":"TouchEventHandler<HTMLFormElement>"},{"identifier":"onTouchStart","type":"TouchEventHandler<HTMLFormElement>"},{"identifier":"onTouchStartCapture","type":"TouchEventHandler<HTMLFormElement>"},{"identifier":"onPointerDown","type":"PointerEventHandler<HTMLFormElement>"},{"identifier":"onPointerDownCapture","type":"PointerEventHandler<HTMLFormElement>"},{"identifier":"onPointerMove","type":"PointerEventHandler<HTMLFormElement>"},{"identifier":"onPointerMoveCapture","type":"PointerEventHandler<HTMLFormElement>"},{"identifier":"onPointerUp","type":"PointerEventHandler<HTMLFormElement>"},{"identifier":"onPointerUpCapture","type":"PointerEventHandler<HTMLFormElement>"},{"identifier":"onPointerCancel","type":"PointerEventHandler<HTMLFormElement>"},{"identifier":"onPointerCancelCapture","type":"PointerEventHandler<HTMLFormElement>"},{"identifier":"onPointerEnter","type":"PointerEventHandler<HTMLFormElement>"},{"identifier":"onPointerEnterCapture","type":"PointerEventHandler<HTMLFormElement>"},{"identifier":"onPointerLeave","type":"PointerEventHandler<HTMLFormElement>"},{"identifier":"onPointerLeaveCapture","type":"PointerEventHandler<HTMLFormElement>"},{"identifier":"onPointerOver","type":"PointerEventHandler<HTMLFormElement>"},{"identifier":"onPointerOverCapture","type":"PointerEventHandler<HTMLFormElement>"},{"identifier":"onPointerOut","type":"PointerEventHandler<HTMLFormElement>"},{"identifier":"onPointerOutCapture","type":"PointerEventHandler<HTMLFormElement>"},{"identifier":"onGotPointerCapture","type":"PointerEventHandler<HTMLFormElement>"},{"identifier":"onGotPointerCaptureCapture","type":"PointerEventHandler<HTMLFormElement>"},{"identifier":"onLostPointerCapture","type":"PointerEventHandler<HTMLFormElement>"},{"identifier":"onLostPointerCaptureCapture","type":"PointerEventHandler<HTMLFormElement>"},{"identifier":"onScroll","type":"UIEventHandler<HTMLFormElement>"},{"identifier":"onScrollCapture","type":"UIEventHandler<HTMLFormElement>"},{"identifier":"onWheel","type":"WheelEventHandler<HTMLFormElement>"},{"identifier":"onWheelCapture","type":"WheelEventHandler<HTMLFormElement>"},{"identifier":"onAnimationStart","type":"AnimationEventHandler<HTMLFormElement>"},{"identifier":"onAnimationStartCapture","type":"AnimationEventHandler<HTMLFormElement>"},{"identifier":"onAnimationEnd","type":"AnimationEventHandler<HTMLFormElement>"},{"identifier":"onAnimationEndCapture","type":"AnimationEventHandler<HTMLFormElement>"},{"identifier":"onAnimationIteration","type":"AnimationEventHandler<HTMLFormElement>"},{"identifier":"onAnimationIterationCapture","type":"AnimationEventHandler<HTMLFormElement>"},{"identifier":"onTransitionEnd","type":"TransitionEventHandler<HTMLFormElement>"},{"identifier":"onTransitionEndCapture","type":"TransitionEventHandler<HTMLFormElement>"},{"identifier":"onFinish","type":"(values: any) => void"},{"identifier":"acceptCharset","type":"string"},{"identifier":"action","type":"string"},{"identifier":"autoComplete","type":"string"},{"identifier":"encType","type":"string"},{"identifier":"method","type":"string"},{"identifier":"noValidate","type":"boolean"},{"identifier":"initialValues","type":"Store"},{"identifier":"component","type":"string | false | FC<any> | ComponentClass<any, any>"},{"identifier":"fields","type":"FieldData[]"},{"identifier":"validateMessages","type":"ValidateMessages"},{"identifier":"onValuesChange","type":"(changedValues: any, values: any) => void"},{"identifier":"onFieldsChange","type":"(changedFields: FieldData[], allFields: FieldData[]) => void"},{"identifier":"onFinishFailed","type":"(errorInfo: ValidateErrorEntity<any>) => void"},{"identifier":"validateTrigger","type":"string | false | string[]"},{"identifier":"preserve","type":"boolean"},{"identifier":"submitProps","description":"\u67e5\u8be2\u6309\u94ae props, \u7ee7\u627f antd Button \u7ec4\u4ef6 API","type":"SearchButtonProps"},{"identifier":"cancelProps","description":"\u91cd\u7f6e\u6309\u94ae props, \u7ee7\u627f antd Button \u7ec4\u4ef6 API","type":"SearchButtonProps"},{"identifier":"onSearch","description":"\u70b9\u51fb\u67e5\u8be2\u89e6\u53d1","type":"(values: any) => void"},{"identifier":"rows","description":"\u6bcf\u884c\u6240\u5bb9\u7eb3\u7684 form item","type":"2 | 3","default":"2"},{"identifier":"cols","description":"\u9ed8\u8ba4\u5c55\u5f00\u7684\u884c\u6570\uff08\u5176\u4f59\u9ed8\u8ba4\u6536\u8d77\uff09","type":"2 | 3 | 4","default":"3"},{"identifier":"foldProps","description":"\u5c55\u5f00\u6536\u8d77 props","type":"FoldProps","default":"{}"},{"identifier":"resetNames","description":"\u91cd\u7f6e\u7684\u5b57\u6bb5","type":"string[]"}],"IPropsOptions":[{"identifier":"submitProps","description":"\u67e5\u8be2\u6309\u94ae props, \u7ee7\u627f antd Button \u7ec4\u4ef6 API","type":"SearchButtonProps"},{"identifier":"cancelProps","description":"\u91cd\u7f6e\u6309\u94ae props, \u7ee7\u627f antd Button \u7ec4\u4ef6 API","type":"SearchButtonProps"},{"identifier":"onSearch","description":"\u70b9\u51fb\u67e5\u8be2\u89e6\u53d1","type":"(values: any) => void"},{"identifier":"onReset","description":"\u70b9\u51fb\u91cd\u7f6e\u89e6\u53d1","type":"() => void"},{"identifier":"children","description":"\u4f20\u9012\u7684\u7ec4\u4ef6\uff0c\u4e00\u822c\u4e3a form item","type":"any","default":"[]"},{"identifier":"rows","description":"\u6bcf\u884c\u6240\u5bb9\u7eb3\u7684 form item","type":"2 | 3","default":"2"},{"identifier":"cols","description":"\u9ed8\u8ba4\u5c55\u5f00\u7684\u884c\u6570\uff08\u5176\u4f59\u9ed8\u8ba4\u6536\u8d77\uff09","type":"2 | 3 | 4","default":"3"},{"identifier":"foldProps","description":"\u5c55\u5f00\u6536\u8d77 props","type":"FoldProps","default":"{}"},{"identifier":"resetNames","description":"\u91cd\u7f6e\u7684\u5b57\u6bb5","type":"string[]"}],"SearchButtonProps":[{"identifier":"text","description":"\u6309\u94ae\u7684\u6587\u5b57","type":"string"},{"identifier":"isShow","description":"\u662f\u5426\u5c55\u793a","type":"Boolean"}],"FoldProps":[{"identifier":"foldText","description":"\u5c55\u5f00\u7684\u6587\u5b57","type":"string"},{"identifier":"unfoldText","description":"\u6536\u8d77\u7684\u6587\u5b57","type":"string"}]}}',
        ),
        m = n(49215),
        c = (e) => r.createElement(m.Z, (0, i.default)({}, e, { config: o, demos: p, apis: s }));
    },
  },
]);
