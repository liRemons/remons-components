(self['webpackChunkremons_components'] = self['webpackChunkremons_components'] || []).push([
  [517],
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
    26727: function (e, t, n) {
      'use strict';
      n.r(t);
      var r = n(67294),
        l = n(96089),
        a = n(35713),
        i = n(40805),
        o = n(8747),
        c = r.memo((e) => {
          var t = e.demos,
            n = t['Mentions-demo'].component;
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
                  { id: 'mentions' },
                  r.createElement(
                    l.AnchorLink,
                    { to: '#mentions', 'aria-hidden': 'true', tabIndex: -1 },
                    r.createElement('span', { className: 'icon icon-link' }),
                  ),
                  'Mentions',
                ),
                r.createElement('p', null, '\u63d0\u53ca'),
                r.createElement('p', null, '\u57fa\u4e8e antd Mentions \u5c01\u88c5'),
                r.createElement(
                  'h4',
                  { id: '\u4f7f\u7528\u793a\u4f8b' },
                  r.createElement(
                    l.AnchorLink,
                    { to: '#\u4f7f\u7528\u793a\u4f8b', 'aria-hidden': 'true', tabIndex: -1 },
                    r.createElement('span', { className: 'icon icon-link' }),
                  ),
                  '\u4f7f\u7528\u793a\u4f8b',
                ),
              ),
              r.createElement(
                o.default,
                t['Mentions-demo'].previewerProps,
                r.createElement(n, null),
              ),
              r.createElement(
                'div',
                { className: 'markdown' },
                r.createElement(
                  a.Z,
                  { type: 'info' },
                  '\u7ee7\u627f\u81ea antd Mention API, \u652f\u6301\u4f20\u5165 Mention API',
                ),
                r.createElement(
                  'h3',
                  { id: 'api-ipropstype' },
                  r.createElement(
                    l.AnchorLink,
                    { to: '#api-ipropstype', 'aria-hidden': 'true', tabIndex: -1 },
                    r.createElement('span', { className: 'icon icon-link' }),
                  ),
                  'IPropsType',
                ),
                r.createElement(i.Z, { identifier: 'Mentions', export: 'IPropsType' }),
                r.createElement(
                  'h3',
                  { id: 'api-mentionsitemtypes' },
                  r.createElement(
                    l.AnchorLink,
                    { to: '#api-mentionsitemtypes', 'aria-hidden': 'true', tabIndex: -1 },
                    r.createElement('span', { className: 'icon icon-link' }),
                  ),
                  'MentionsItemTypes',
                ),
                r.createElement(i.Z, { identifier: 'Mentions', export: 'MentionsItemTypes' }),
              ),
            ),
          );
        });
      t['default'] = (e) => {
        var t = r.useContext(l.context),
          n = t.demos;
        return (
          r.useEffect(() => {
            var t;
            null !== e &&
              void 0 !== e &&
              null !== (t = e.location) &&
              void 0 !== t &&
              t.hash &&
              l.AnchorLink.scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)));
          }, []),
          r.createElement(c, { demos: n })
        );
      };
    },
    40805: function (e, t, n) {
      'use strict';
      var r = n(67294),
        l = n(96089),
        a = n(4187),
        i = {
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
          o = (0, l.useApiData)(t),
          c = (0, r.useContext)(l.context),
          u = c.locale,
          s = /^zh|cn$/i.test(u) ? i['zh-CN'] : i['en-US'];
        return r.createElement(
          r.Fragment,
          null,
          o &&
            r.createElement(
              a.Z,
              null,
              r.createElement(
                'thead',
                null,
                r.createElement(
                  'tr',
                  null,
                  r.createElement('th', null, s.name),
                  r.createElement('th', null, s.description),
                  r.createElement('th', null, s.type),
                  r.createElement('th', null, s['default']),
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
                        e['default'] || (e.required && s.required) || '--',
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
        l = n(97397),
        a = n.n(l);
      n(8036);
      function i(e, t) {
        return m(e) || s(e, t) || c(e, t) || o();
      }
      function o() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
        );
      }
      function c(e, t) {
        if (e) {
          if ('string' === typeof e) return u(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            'Object' === n && e.constructor && (n = e.constructor.name),
            'Map' === n || 'Set' === n
              ? Array.from(e)
              : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? u(e, t)
              : void 0
          );
        }
      }
      function u(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function s(e, t) {
        var n =
          null == e
            ? null
            : ('undefined' !== typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
        if (null != n) {
          var r,
            l,
            a = [],
            i = !0,
            o = !1;
          try {
            for (n = n.call(e); !(i = (r = n.next()).done); i = !0)
              if ((a.push(r.value), t && a.length === t)) break;
          } catch (c) {
            (o = !0), (l = c);
          } finally {
            try {
              i || null == n['return'] || n['return']();
            } finally {
              if (o) throw l;
            }
          }
          return a;
        }
      }
      function m(e) {
        if (Array.isArray(e)) return e;
      }
      var d = function (e) {
        var t = e.children,
          n = (0, r.useRef)(),
          l = (0, r.useState)(!1),
          o = i(l, 2),
          c = o[0],
          u = o[1],
          s = (0, r.useState)(!1),
          m = i(s, 2),
          d = m[0],
          f = m[1];
        return (
          (0, r.useEffect)(function () {
            var e = n.current,
              t = a()(function () {
                u(e.scrollLeft > 0), f(e.scrollLeft < e.scrollWidth - e.offsetWidth);
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
                'data-right-folded': d || void 0,
              },
              r.createElement('table', null, t),
            ),
          )
        );
      };
      t['Z'] = d;
    },
  },
]);
