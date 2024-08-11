(self['webpackChunkremons_components'] = self['webpackChunkremons_components'] || []).push([
  [873],
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
    77101: function (e, t, n) {
      'use strict';
      n.r(t);
      var r = n(67294),
        a = n(96089),
        l = n(40805),
        o = n(8747),
        i = r.memo((e) => {
          var t = e.demos,
            n = t['Layout-demo'].component;
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
                  'h3',
                  { id: 'layout' },
                  r.createElement(
                    a.AnchorLink,
                    { to: '#layout', 'aria-hidden': 'true', tabIndex: -1 },
                    r.createElement('span', { className: 'icon icon-link' }),
                  ),
                  'Layout',
                ),
                r.createElement('p', null, '\u57fa\u4e8e Layout \u5c01\u88c5'),
                r.createElement(
                  'h4',
                  { id: '\u793a\u4f8b' },
                  r.createElement(
                    a.AnchorLink,
                    { to: '#\u793a\u4f8b', 'aria-hidden': 'true', tabIndex: -1 },
                    r.createElement('span', { className: 'icon icon-link' }),
                  ),
                  '\u793a\u4f8b',
                ),
              ),
              r.createElement(o.default, t['Layout-demo'].previewerProps, r.createElement(n, null)),
              r.createElement(
                'div',
                { className: 'markdown' },
                r.createElement(
                  'h2',
                  { id: 'api' },
                  r.createElement(
                    a.AnchorLink,
                    { to: '#api', 'aria-hidden': 'true', tabIndex: -1 },
                    r.createElement('span', { className: 'icon icon-link' }),
                  ),
                  'API',
                ),
                r.createElement(
                  'h3',
                  { id: 'api-mylayouttype' },
                  r.createElement(
                    a.AnchorLink,
                    { to: '#api-mylayouttype', 'aria-hidden': 'true', tabIndex: -1 },
                    r.createElement('span', { className: 'icon icon-link' }),
                  ),
                  'MyLayoutType',
                ),
                r.createElement(l.Z, { export: 'MyLayoutType', identifier: 'Layout' }),
                r.createElement(
                  'h3',
                  { id: 'api-sectionprops' },
                  r.createElement(
                    a.AnchorLink,
                    { to: '#api-sectionprops', 'aria-hidden': 'true', tabIndex: -1 },
                    r.createElement('span', { className: 'icon icon-link' }),
                  ),
                  'SectionProps',
                ),
                r.createElement(l.Z, { export: 'SectionProps', identifier: 'Layout' }),
              ),
            ),
          );
        });
      t['default'] = (e) => {
        var t = r.useContext(a.context),
          n = t.demos;
        return (
          r.useEffect(() => {
            var t;
            null !== e &&
              void 0 !== e &&
              null !== (t = e.location) &&
              void 0 !== t &&
              t.hash &&
              a.AnchorLink.scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)));
          }, []),
          r.createElement(i, { demos: n })
        );
      };
    },
    40805: function (e, t, n) {
      'use strict';
      var r = n(67294),
        a = n(96089),
        l = n(4187),
        o = {
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
          i = (0, a.useApiData)(t),
          c = (0, r.useContext)(a.context),
          u = c.locale,
          d = /^zh|cn$/i.test(u) ? o['zh-CN'] : o['en-US'];
        return r.createElement(
          r.Fragment,
          null,
          i &&
            r.createElement(
              l.Z,
              null,
              r.createElement(
                'thead',
                null,
                r.createElement(
                  'tr',
                  null,
                  r.createElement('th', null, d.name),
                  r.createElement('th', null, d.description),
                  r.createElement('th', null, d.type),
                  r.createElement('th', null, d['default']),
                ),
              ),
              r.createElement(
                'tbody',
                null,
                i[n].map(function (e) {
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
                        e['default'] || (e.required && d.required) || '--',
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
        a = n(97397),
        l = n.n(a);
      n(8036);
      function o(e, t) {
        return m(e) || d(e, t) || c(e, t) || i();
      }
      function i() {
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
      function d(e, t) {
        var n =
          null == e
            ? null
            : ('undefined' !== typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
        if (null != n) {
          var r,
            a,
            l = [],
            o = !0,
            i = !1;
          try {
            for (n = n.call(e); !(o = (r = n.next()).done); o = !0)
              if ((l.push(r.value), t && l.length === t)) break;
          } catch (c) {
            (i = !0), (a = c);
          } finally {
            try {
              o || null == n['return'] || n['return']();
            } finally {
              if (i) throw a;
            }
          }
          return l;
        }
      }
      function m(e) {
        if (Array.isArray(e)) return e;
      }
      var s = function (e) {
        var t = e.children,
          n = (0, r.useRef)(),
          a = (0, r.useState)(!1),
          i = o(a, 2),
          c = i[0],
          u = i[1],
          d = (0, r.useState)(!1),
          m = o(d, 2),
          s = m[0],
          f = m[1];
        return (
          (0, r.useEffect)(function () {
            var e = n.current,
              t = l()(function () {
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
                'data-right-folded': s || void 0,
              },
              r.createElement('table', null, t),
            ),
          )
        );
      };
      t['Z'] = s;
    },
  },
]);
