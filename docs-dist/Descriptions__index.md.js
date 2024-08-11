(self['webpackChunkremons_components'] = self['webpackChunkremons_components'] || []).push([
  [336],
  {
    8036: function () {},
    22231: function (e, t, n) {
      'use strict';
      n.d(t, {
        m: function () {
          return r.m;
        },
      });
      var r = n(9684);
      n(72255);
    },
    63252: function (e, t, n) {
      'use strict';
      n.r(t);
      var r = n(67294),
        i = n(96089),
        l = n(35713),
        a = n(40805),
        o = n(8747),
        c = r.memo((e) => {
          var t = e.demos,
            n = t['Descriptions-demo'].component;
          return r.createElement(
            r.Fragment,
            null,
            r.createElement(
              r.Fragment,
              null,
              r.createElement(
                'div',
                { className: 'markdown' },
                r.createElement(
                  'h2',
                  { id: 'descriptions' },
                  r.createElement(
                    i.AnchorLink,
                    { to: '#descriptions', 'aria-hidden': 'true', tabIndex: -1 },
                    r.createElement('span', { className: 'icon icon-link' }),
                  ),
                  'Descriptions',
                ),
                r.createElement('p', null, '\u63cf\u8ff0\u5217\u8868'),
                r.createElement(
                  'p',
                  null,
                  '\u57fa\u4e8e antd Descriptions \u5c01\u88c5\uff0c\u53ef\u4ee5\u6307\u5b9a\u6570\u636e\u6e90\u548c\u5b57\u6bb5\u540d\uff0c\u7ec4\u4ef6\u4f1a\u81ea\u52a8\u89e3\u6790',
                ),
                r.createElement(
                  l.Z,
                  { type: 'info' },
                  '\u652f\u6301\u89e3\u6790\u94fe\u5f0f\u5b57\u6bb5\uff0c\u4f8b\u5982 a.b.c',
                ),
                r.createElement(
                  'h4',
                  { id: '\u4f7f\u7528\u793a\u4f8b' },
                  r.createElement(
                    i.AnchorLink,
                    { to: '#\u4f7f\u7528\u793a\u4f8b', 'aria-hidden': 'true', tabIndex: -1 },
                    r.createElement('span', { className: 'icon icon-link' }),
                  ),
                  '\u4f7f\u7528\u793a\u4f8b',
                ),
              ),
              r.createElement(
                o.default,
                t['Descriptions-demo'].previewerProps,
                r.createElement(n, null),
              ),
              r.createElement(
                'div',
                { className: 'markdown' },
                r.createElement(
                  l.Z,
                  { type: 'info' },
                  '\u7ee7\u627f\u81ea antd Descriptions API, \u652f\u6301\u4f20\u5165 Descriptions API',
                ),
                r.createElement(
                  'h3',
                  { id: 'api-ipropsoptions' },
                  r.createElement(
                    i.AnchorLink,
                    { to: '#api-ipropsoptions', 'aria-hidden': 'true', tabIndex: -1 },
                    r.createElement('span', { className: 'icon icon-link' }),
                  ),
                  'IPropsOptions',
                ),
                r.createElement(a.Z, { identifier: 'Descriptions', export: 'IPropsOptions' }),
                r.createElement(
                  'h3',
                  { id: 'api-descriptionsitemtype' },
                  r.createElement(
                    i.AnchorLink,
                    { to: '#api-descriptionsitemtype', 'aria-hidden': 'true', tabIndex: -1 },
                    r.createElement('span', { className: 'icon icon-link' }),
                  ),
                  'DescriptionsItemType',
                ),
                r.createElement(a.Z, {
                  identifier: 'Descriptions',
                  export: 'DescriptionsItemType',
                }),
              ),
            ),
          );
        });
      t['default'] = (e) => {
        var t = r.useContext(i.context),
          n = t.demos;
        return (
          r.useEffect(() => {
            var t;
            null !== e &&
              void 0 !== e &&
              null !== (t = e.location) &&
              void 0 !== t &&
              t.hash &&
              i.AnchorLink.scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)));
          }, []),
          r.createElement(c, { demos: n })
        );
      };
    },
    40805: function (e, t, n) {
      'use strict';
      var r = n(67294),
        i = n(96089),
        l = n(4187),
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
          o = (0, i.useApiData)(t),
          c = (0, r.useContext)(i.context),
          s = c.locale,
          u = /^zh|cn$/i.test(s) ? a['zh-CN'] : a['en-US'];
        return r.createElement(
          r.Fragment,
          null,
          o &&
            r.createElement(
              l.Z,
              null,
              r.createElement(
                'thead',
                null,
                r.createElement(
                  'tr',
                  null,
                  r.createElement('th', null, u.name),
                  r.createElement('th', null, u.description),
                  r.createElement('th', null, u.type),
                  r.createElement('th', null, u['default']),
                ),
              ),
              r.createElement(
                'tbody',
                null,
                o[n].map(function (e) {
                  return r.createElement(
                    'tr',
                    { key: e.identifier },
                    r.createElement('td', null, e.identifier),
                    r.createElement('td', null, e.description || '--'),
                    r.createElement('td', null, r.createElement('code', null, e.type)),
                    r.createElement(
                      'td',
                      null,
                      r.createElement(
                        'code',
                        null,
                        e['default'] || (e.required && u.required) || '--',
                      ),
                    ),
                  );
                }),
              ),
            ),
        );
      };
    },
    4187: function (e, t, n) {
      'use strict';
      var r = n(67294),
        i = n(97397),
        l = n.n(i);
      n(8036);
      function a(e, t) {
        return d(e) || u(e, t) || c(e, t) || o();
      }
      function o() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
        );
      }
      function c(e, t) {
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
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function u(e, t) {
        var n =
          null == e
            ? null
            : ('undefined' !== typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
        if (null != n) {
          var r,
            i,
            l = [],
            a = !0,
            o = !1;
          try {
            for (n = n.call(e); !(a = (r = n.next()).done); a = !0)
              if ((l.push(r.value), t && l.length === t)) break;
          } catch (c) {
            (o = !0), (i = c);
          } finally {
            try {
              a || null == n['return'] || n['return']();
            } finally {
              if (o) throw i;
            }
          }
          return l;
        }
      }
      function d(e) {
        if (Array.isArray(e)) return e;
      }
      var m = function (e) {
        var t = e.children,
          n = (0, r.useRef)(),
          i = (0, r.useState)(!1),
          o = a(i, 2),
          c = o[0],
          s = o[1],
          u = (0, r.useState)(!1),
          d = a(u, 2),
          m = d[0],
          p = d[1];
        return (
          (0, r.useEffect)(function () {
            var e = n.current,
              t = l()(function () {
                s(e.scrollLeft > 0), p(e.scrollLeft < e.scrollWidth - e.offsetWidth);
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
          r.createElement(
            'div',
            { className: '__dumi-default-table' },
            r.createElement(
              'div',
              {
                className: '__dumi-default-table-content',
                ref: n,
                'data-left-folded': c || void 0,
                'data-right-folded': m || void 0,
              },
              r.createElement('table', null, t),
            ),
          )
        );
      };
      t['Z'] = m;
    },
  },
]);
