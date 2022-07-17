(self['webpackChunkremons_components'] = self['webpackChunkremons_components'] || []).push([
  [759],
  {
    8036: function () {},
    22231: function (e, t, n) {
      'use strict';
      n.d(t, {
        m: function () {
          return l.m;
        },
      });
      var l = n(9684);
      n(72255);
    },
    97627: function (e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, {
          default: function () {
            return b;
          },
        });
      var l = n(67294),
        r = n(96089),
        a = n(35713),
        c = n(40805),
        u = n(68991),
        m = n(97397),
        o = n.n(m);
      n(8036);
      function i(e, t) {
        return p(e) || f(e, t) || E(e, t) || d();
      }
      function d() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
        );
      }
      function E(e, t) {
        if (e) {
          if ('string' === typeof e) return s(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            'Object' === n && e.constructor && (n = e.constructor.name),
            'Map' === n || 'Set' === n
              ? Array.from(e)
              : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? s(e, t)
              : void 0
          );
        }
      }
      function s(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, l = new Array(t); n < t; n++) l[n] = e[n];
        return l;
      }
      function f(e, t) {
        var n =
          null == e
            ? null
            : ('undefined' !== typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
        if (null != n) {
          var l,
            r,
            a = [],
            c = !0,
            u = !1;
          try {
            for (n = n.call(e); !(c = (l = n.next()).done); c = !0)
              if ((a.push(l.value), t && a.length === t)) break;
          } catch (m) {
            (u = !0), (r = m);
          } finally {
            try {
              c || null == n['return'] || n['return']();
            } finally {
              if (u) throw r;
            }
          }
          return a;
        }
      }
      function p(e) {
        if (Array.isArray(e)) return e;
      }
      var h = function (e) {
          var t = e.children,
            n = (0, l.useRef)(),
            r = (0, l.useState)(!1),
            a = i(r, 2),
            c = a[0],
            u = a[1],
            m = (0, l.useState)(!1),
            d = i(m, 2),
            E = d[0],
            s = d[1];
          return (
            (0, l.useEffect)(function () {
              var e = n.current,
                t = o()(function () {
                  u(e.scrollLeft > 0), s(e.scrollLeft < e.scrollWidth - e.offsetWidth);
                }, 100);
              return (
                t(),
                e.addEventListener('scroll', t),
                window.addEventListener('resize', t),
                function () {
                  e.removeEventListener('scroll', t), window.removeEventListener('resize', t);
                }
              );
            }, []),
            l.createElement(
              'div',
              { className: '__dumi-default-table' },
              l.createElement(
                'div',
                {
                  className: '__dumi-default-table-content',
                  ref: n,
                  'data-left-folded': c || void 0,
                  'data-right-folded': E || void 0,
                },
                l.createElement('table', null, t),
              ),
            )
          );
        },
        v = h,
        y = l.memo((e) => {
          var t = e.demos,
            n = t['FormItem-demo'].component;
          return l.createElement(
            l.Fragment,
            null,
            l.createElement(
              l.Fragment,
              null,
              l.createElement(
                'div',
                { className: 'markdown' },
                l.createElement(
                  'h2',
                  { id: 'formitem' },
                  l.createElement(
                    r.AnchorLink,
                    { to: '#formitem', 'aria-hidden': 'true', tabIndex: -1 },
                    l.createElement('span', { className: 'icon icon-link' }),
                  ),
                  'FormItem',
                ),
                l.createElement(
                  'p',
                  null,
                  '\u57fa\u4e8e antd from \u5c01\u88c5\u7684\u7b80\u6d01\u8868\u5355',
                ),
                l.createElement(
                  'h5',
                  {
                    id: 'component-\u5b57\u6bb5\u9ed8\u8ba4\u63d0\u4f9b\u4e86\u4ee5\u4e0b\u8868\u5355',
                  },
                  l.createElement(
                    r.AnchorLink,
                    {
                      to: '#component-\u5b57\u6bb5\u9ed8\u8ba4\u63d0\u4f9b\u4e86\u4ee5\u4e0b\u8868\u5355',
                      'aria-hidden': 'true',
                      tabIndex: -1,
                    },
                    l.createElement('span', { className: 'icon icon-link' }),
                  ),
                  'component \u5b57\u6bb5\u9ed8\u8ba4\u63d0\u4f9b\u4e86\u4ee5\u4e0b\u8868\u5355',
                ),
                l.createElement(
                  v,
                  null,
                  l.createElement(
                    'thead',
                    null,
                    l.createElement(
                      'tr',
                      null,
                      l.createElement('th', null, '\u5143\u7d20'),
                      l.createElement('th', null, '\u5bf9\u5e94 antd \u7ec4\u4ef6'),
                    ),
                  ),
                  l.createElement(
                    'tbody',
                    null,
                    l.createElement(
                      'tr',
                      null,
                      l.createElement('td', null, 'input'),
                      l.createElement('td', null, 'Input'),
                    ),
                    l.createElement(
                      'tr',
                      null,
                      l.createElement('td', null, 'inputPassword'),
                      l.createElement('td', null, 'Input.Password'),
                    ),
                    l.createElement(
                      'tr',
                      null,
                      l.createElement('td', null, 'inputNumber'),
                      l.createElement('td', null, 'InputNumber'),
                    ),
                    l.createElement(
                      'tr',
                      null,
                      l.createElement('td', null, 'textarea'),
                      l.createElement('td', null, 'TextArea'),
                    ),
                    l.createElement(
                      'tr',
                      null,
                      l.createElement('td', null, 'datePicker'),
                      l.createElement('td', null, 'DatePicker'),
                    ),
                    l.createElement(
                      'tr',
                      null,
                      l.createElement('td', null, 'select'),
                      l.createElement('td', null, 'Select'),
                    ),
                    l.createElement(
                      'tr',
                      null,
                      l.createElement('td', null, 'radio'),
                      l.createElement('td', null, 'Radio'),
                    ),
                    l.createElement(
                      'tr',
                      null,
                      l.createElement('td', null, 'checkbox'),
                      l.createElement('td', null, 'Checkbox'),
                    ),
                    l.createElement(
                      'tr',
                      null,
                      l.createElement('td', null, 'rate'),
                      l.createElement('td', null, 'Rate'),
                    ),
                    l.createElement(
                      'tr',
                      null,
                      l.createElement('td', null, 'slider'),
                      l.createElement('td', null, 'Slider'),
                    ),
                    l.createElement(
                      'tr',
                      null,
                      l.createElement('td', null, 'timePicker'),
                      l.createElement('td', null, 'TimePicker'),
                    ),
                    l.createElement(
                      'tr',
                      null,
                      l.createElement('td', null, 'upload'),
                      l.createElement('td', null, 'Upload'),
                    ),
                    l.createElement(
                      'tr',
                      null,
                      l.createElement('td', null, 'treeSelect'),
                      l.createElement('td', null, 'TreeSelect'),
                    ),
                    l.createElement(
                      'tr',
                      null,
                      l.createElement('td', null, 'cascader'),
                      l.createElement('td', null, 'Cascader'),
                    ),
                  ),
                ),
                l.createElement(
                  'h5',
                  { id: '\u4f7f\u7528\u65b9\u5f0f\u793a\u4f8b' },
                  l.createElement(
                    r.AnchorLink,
                    {
                      to: '#\u4f7f\u7528\u65b9\u5f0f\u793a\u4f8b',
                      'aria-hidden': 'true',
                      tabIndex: -1,
                    },
                    l.createElement('span', { className: 'icon icon-link' }),
                  ),
                  '\u4f7f\u7528\u65b9\u5f0f\u793a\u4f8b',
                ),
              ),
              l.createElement(
                u.default,
                t['FormItem-demo'].previewerProps,
                l.createElement(n, null),
              ),
              l.createElement(
                'div',
                { className: 'markdown' },
                l.createElement(
                  'h3',
                  { id: 'api-ipropsoption' },
                  l.createElement(
                    r.AnchorLink,
                    { to: '#api-ipropsoption', 'aria-hidden': 'true', tabIndex: -1 },
                    l.createElement('span', { className: 'icon icon-link' }),
                  ),
                  'IPropsOption',
                ),
                l.createElement(c.Z, { identifier: 'FormItem', export: 'IPropsOption' }),
                l.createElement(
                  a.Z,
                  { type: 'info' },
                  '\u5176\u4f59\u5b57\u6bb5\u8bf7\u53c2\u8003 antd Form.Item',
                ),
              ),
            ),
          );
        }),
        b = (e) => {
          var t = l.useContext(r.context),
            n = t.demos;
          return (
            l.useEffect(() => {
              var t;
              null !== e &&
                void 0 !== e &&
                null !== (t = e.location) &&
                void 0 !== t &&
                t.hash &&
                r.AnchorLink.scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)));
            }, []),
            l.createElement(y, { demos: n })
          );
        };
    },
    40805: function (e, t, n) {
      'use strict';
      var l = n(67294),
        r = n(96089),
        a = {
          'zh-CN': {
            name: '\u5c5e\u6027\u540d',
            description: '\u63cf\u8ff0',
            type: '\u7c7b\u578b',
            default: '\u9ed8\u8ba4\u503c',
            required: '(\u5fc5\u9009)',
          },
          'en-US': {
            name: 'Name',
            description: 'Description',
            type: 'Type',
            default: 'Default',
            required: '(required)',
          },
        };
      t['Z'] = function (e) {
        var t = e.identifier,
          n = e['export'],
          c = (0, r.useApiData)(t),
          u = (0, l.useContext)(r.context),
          m = u.locale,
          o = /^zh|cn$/i.test(m) ? a['zh-CN'] : a['en-US'];
        return l.createElement(
          l.Fragment,
          null,
          c &&
            l.createElement(
              'table',
              { style: { marginTop: 24 } },
              l.createElement(
                'thead',
                null,
                l.createElement(
                  'tr',
                  null,
                  l.createElement('th', null, o.name),
                  l.createElement('th', null, o.description),
                  l.createElement('th', null, o.type),
                  l.createElement('th', null, o['default']),
                ),
              ),
              l.createElement(
                'tbody',
                null,
                c[n].map(function (e) {
                  return l.createElement(
                    'tr',
                    { key: e.identifier },
                    l.createElement('td', null, e.identifier),
                    l.createElement('td', null, e.description || '--'),
                    l.createElement('td', null, l.createElement('code', null, e.type)),
                    l.createElement(
                      'td',
                      null,
                      l.createElement(
                        'code',
                        null,
                        e['default'] || (e.required && o.required) || '--',
                      ),
                    ),
                  );
                }),
              ),
            ),
        );
      };
    },
  },
]);
