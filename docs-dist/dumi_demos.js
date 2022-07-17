(self['webpackChunkremons_components'] = self['webpackChunkremons_components'] || []).push([
  [336],
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
    65971: function (e, t, n) {
      'use strict';
      function r() {
        var e = u(n(67294));
        return (
          (r = function () {
            return e;
          }),
          e
        );
      }
      function o() {
        var e = n(96089);
        return (
          (o = function () {
            return e;
          }),
          e
        );
      }
      function u(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function c(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function i(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? c(Object(n), !0).forEach(function (t) {
                a(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : c(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      function a(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var s = function (e) {
          return e.render();
        },
        f = function (e, t) {
          var n = [],
            u = e.match.params.uuid,
            c = void 0 === e.location.query.wrapper,
            a = t[u];
          if (a) {
            var f = i(
              i({}, a.previewerProps),
              {},
              { hideActions: (a.previewerProps.hideActions || []).concat(['EXTERNAL']) },
            );
            void 0 !== e.location.query.capture &&
              ((f.motions = (f.motions || []).slice()),
              f.motions.unshift('autoplay'),
              f.motions.every(function (e) {
                return !e.startsWith('capture');
              }) && f.motions.push('capture:[id|=root]')),
              (n = c
                ? [
                    r()['default'].createElement(s, {
                      render: function () {
                        return (
                          (0, o().useMotions)(
                            f.motions || [],
                            'undefined' !== typeof window ? document.documentElement : null,
                          ),
                          r()['default'].createElement(
                            'div',
                            {},
                            r()['default'].createElement(a.component),
                          )
                        );
                      },
                    }),
                  ]
                : [f, r()['default'].createElement(a.component)]);
          }
          return n;
        };
      t.default = f;
    },
  },
]);
