(self['webpackChunkremons_components'] = self['webpackChunkremons_components'] || []).push([
  [935],
  {
    35956: function (e, n, t) {
      'use strict';
      t.r(n);
      var a = t(67294),
        l = t(96089),
        c = a.memo((e) => {
          e.demos;
          return a.createElement(
            a.Fragment,
            null,
            a.createElement(
              'div',
              { className: 'markdown' },
              a.createElement(
                'h3',
                { id: '\u4ecb\u7ecd' },
                a.createElement(
                  l.AnchorLink,
                  { to: '#\u4ecb\u7ecd', 'aria-hidden': 'true', tabIndex: -1 },
                  a.createElement('span', { className: 'icon icon-link' }),
                ),
                '\u4ecb\u7ecd',
              ),
              a.createElement(
                'p',
                null,
                '\u7ed3\u5408\u81ea\u5df1\u4f7f\u7528\u7ecf\u5386\uff0c\u57fa\u4e8e antd \u5c01\u88c5\u7684\u7b80\u6d01\u7528\u6cd5\u7ec4\u4ef6',
              ),
              a.createElement(
                'h5',
                { id: '\u57fa\u672c\u601d\u60f3' },
                a.createElement(
                  l.AnchorLink,
                  { to: '#\u57fa\u672c\u601d\u60f3', 'aria-hidden': 'true', tabIndex: -1 },
                  a.createElement('span', { className: 'icon icon-link' }),
                ),
                '\u57fa\u672c\u601d\u60f3',
              ),
              a.createElement(
                'ul',
                null,
                a.createElement(
                  'li',
                  null,
                  '\u4e0d\u91cd\u590d\u9020\u8f6e\u5b50\uff1a\u53ef\u5b8c\u5168\u4f7f\u7528 antd \u7ec4\u4ef6 API',
                ),
                a.createElement(
                  'li',
                  null,
                  '\u6700\u5c0f\u6539\u52a8\u6982\u5ff5\uff1a\u529b\u6c42\u6700\u5c0f\u5f71\u54cd\uff0c\u6700\u5c0f\u5b66\u4e60\u6210\u672c',
                ),
              ),
              a.createElement(
                'h5',
                { id: '\u9e23\u8c22' },
                a.createElement(
                  l.AnchorLink,
                  { to: '#\u9e23\u8c22', 'aria-hidden': 'true', tabIndex: -1 },
                  a.createElement('span', { className: 'icon icon-link' }),
                ),
                '\u9e23\u8c22',
              ),
              a.createElement(
                'p',
                null,
                '\u611f\u8c22 Ant Design \u7ec4\u4ef6\u5e93\uff0c\u53ef\u4ee5\u7ad9\u5728\u5de8\u4eba\u7684\u80a9\u8180\u4e0a\u4ea7\u51fa\u5e76\u5206\u4eab\u5f00\u6e90\u3002',
              ),
            ),
          );
        });
      n['default'] = (e) => {
        var n = a.useContext(l.context),
          t = n.demos;
        return (
          a.useEffect(() => {
            var n;
            null !== e &&
              void 0 !== e &&
              null !== (n = e.location) &&
              void 0 !== n &&
              n.hash &&
              l.AnchorLink.scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)));
          }, []),
          a.createElement(c, { demos: t })
        );
      };
    },
  },
]);
