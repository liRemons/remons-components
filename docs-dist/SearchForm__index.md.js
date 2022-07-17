(self['webpackChunkremons_components'] = self['webpackChunkremons_components'] || []).push([
  [74],
  {
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
    41945: function (e, t, n) {
      'use strict';
      n.r(t);
      var r = n(67294),
        a = n(96089),
        l = n(40805),
        c = n(68991),
        o = r.memo((e) => {
          var t = e.demos,
            n = t['SearchForm-demo'].component;
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
                  { id: 'searchform' },
                  r.createElement(
                    a.AnchorLink,
                    { to: '#searchform', 'aria-hidden': 'true', tabIndex: -1 },
                    r.createElement('span', { className: 'icon icon-link' }),
                  ),
                  'SearchForm',
                ),
                r.createElement(
                  'h4',
                  { id: '\u4f7f\u7528\u793a\u4f8b' },
                  r.createElement(
                    a.AnchorLink,
                    { to: '#\u4f7f\u7528\u793a\u4f8b', 'aria-hidden': 'true', tabIndex: -1 },
                    r.createElement('span', { className: 'icon icon-link' }),
                  ),
                  '\u4f7f\u7528\u793a\u4f8b',
                ),
              ),
              r.createElement(
                c.default,
                t['SearchForm-demo'].previewerProps,
                r.createElement(n, null),
              ),
              r.createElement(
                'div',
                { className: 'markdown' },
                r.createElement(
                  'h3',
                  { id: 'api-ipropsoptions' },
                  r.createElement(
                    a.AnchorLink,
                    { to: '#api-ipropsoptions', 'aria-hidden': 'true', tabIndex: -1 },
                    r.createElement('span', { className: 'icon icon-link' }),
                  ),
                  'IPropsOptions',
                ),
                r.createElement(l.Z, { identifier: 'SearchForm', export: 'IPropsOptions' }),
                r.createElement(
                  'h3',
                  { id: 'api-searchbuttonprops' },
                  r.createElement(
                    a.AnchorLink,
                    { to: '#api-searchbuttonprops', 'aria-hidden': 'true', tabIndex: -1 },
                    r.createElement('span', { className: 'icon icon-link' }),
                  ),
                  'SearchButtonProps',
                ),
                r.createElement(l.Z, { identifier: 'SearchForm', export: 'SearchButtonProps' }),
                r.createElement(
                  'h3',
                  { id: 'api-foldprops' },
                  r.createElement(
                    a.AnchorLink,
                    { to: '#api-foldprops', 'aria-hidden': 'true', tabIndex: -1 },
                    r.createElement('span', { className: 'icon icon-link' }),
                  ),
                  'FoldProps',
                ),
                r.createElement(l.Z, { identifier: 'SearchForm', export: 'FoldProps' }),
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
          r.createElement(o, { demos: n })
        );
      };
    },
    40805: function (e, t, n) {
      'use strict';
      var r = n(67294),
        a = n(96089),
        l = {
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
          c = (0, a.useApiData)(t),
          o = (0, r.useContext)(a.context),
          i = o.locale,
          m = /^zh|cn$/i.test(i) ? l['zh-CN'] : l['en-US'];
        return r.createElement(
          r.Fragment,
          null,
          c &&
            r.createElement(
              'table',
              { style: { marginTop: 24 } },
              r.createElement(
                'thead',
                null,
                r.createElement(
                  'tr',
                  null,
                  r.createElement('th', null, m.name),
                  r.createElement('th', null, m.description),
                  r.createElement('th', null, m.type),
                  r.createElement('th', null, m['default']),
                ),
              ),
              r.createElement(
                'tbody',
                null,
                c[n].map(function (e) {
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
                        e['default'] || (e.required && m.required) || '--',
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
