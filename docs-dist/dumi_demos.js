(self['webpackChunkremons_components'] = self['webpackChunkremons_components'] || []).push([
  [48],
  {
    22231: function (e, t, r) {
      'use strict';
      r.d(t, {
        m: function () {
          return n.m;
        },
      });
      var n = r(9684);
      r(72255);
    },
    65971: function (e, t, r) {
      'use strict';
      function n() {
        var e = i(r(67294));
        return (
          (n = function () {
            return e;
          }),
          e
        );
      }
      function o() {
        var e = r(96089);
        return (
          (o = function () {
            return e;
          }),
          e
        );
      }
      function i(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function u(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function c(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? u(Object(r), !0).forEach(function (t) {
                a(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : u(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
              });
        }
        return e;
      }
      function a(e, t, r) {
        return (
          (t = f(t)),
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      function f(e) {
        var t = s(e, 'string');
        return 'symbol' === typeof t ? t : String(t);
      }
      function s(e, t) {
        if ('object' !== typeof e || null === e) return e;
        var r = e[Symbol.toPrimitive];
        if (void 0 !== r) {
          var n = r.call(e, t || 'default');
          if ('object' !== typeof n) return n;
          throw new TypeError('@@toPrimitive must return a primitive value.');
        }
        return ('string' === t ? String : Number)(e);
      }
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var l = function (e) {
          return e.render();
        },
        p = function (e, t) {
          var r = [],
            i = e.match.params.uuid,
            u = void 0 === e.location.query.wrapper,
            a = t[i];
          if (a) {
            var f = c(
              c({}, a.previewerProps),
              {},
              { hideActions: (a.previewerProps.hideActions || []).concat(['EXTERNAL']) },
            );
            void 0 !== e.location.query.capture &&
              ((f.motions = (f.motions || []).slice()),
              f.motions.unshift('autoplay'),
              f.motions.every(function (e) {
                return !e.startsWith('capture');
              }) && f.motions.push('capture:[id|=root]')),
              (r = u
                ? [
                    n()['default'].createElement(l, {
                      render: function () {
                        return (
                          (0, o().useMotions)(
                            f.motions || [],
                            'undefined' !== typeof window ? document.documentElement : null,
                          ),
                          n()['default'].createElement(
                            'div',
                            {},
                            n()['default'].createElement(a.component),
                          )
                        );
                      },
                    }),
                  ]
                : [f, n()['default'].createElement(a.component)]);
          }
          return r;
        };
      t.default = p;
    },
  },
]);
