(self['webpackChunkremons_components'] = self['webpackChunkremons_components'] || []).push([
  [302],
  {
    46507: function (e) {
      function t(e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
      }
      (e.exports = t), (e.exports.__esModule = !0), (e.exports.default = e.exports);
    },
    21364: function (e) {
      function t(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            'value' in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      function r(e, r, n) {
        return (
          r && t(e.prototype, r),
          n && t(e, n),
          Object.defineProperty(e, 'prototype', { writable: !1 }),
          e
        );
      }
      (e.exports = r), (e.exports.__esModule = !0), (e.exports.default = e.exports);
    },
    33657: function (e) {
      function t(e, t, r) {
        return (
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
      (e.exports = t), (e.exports.__esModule = !0), (e.exports.default = e.exports);
    },
    76248: function (e, t, r) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var n = c(r(67294)),
        o = r(36549),
        i = u(r(97397));
      function u(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function a(e) {
        if ('function' !== typeof WeakMap) return null;
        var t = new WeakMap(),
          r = new WeakMap();
        return (a = function (e) {
          return e ? r : t;
        })(e);
      }
      function c(e, t) {
        if (!t && e && e.__esModule) return e;
        if (null === e || ('object' !== l(e) && 'function' !== typeof e)) return { default: e };
        var r = a(t);
        if (r && r.has(e)) return r.get(e);
        var n = {},
          o = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var i in e)
          if ('default' !== i && Object.prototype.hasOwnProperty.call(e, i)) {
            var u = o ? Object.getOwnPropertyDescriptor(e, i) : null;
            u && (u.get || u.set) ? Object.defineProperty(n, i, u) : (n[i] = e[i]);
          }
        return (n['default'] = e), r && r.set(e, n), n;
      }
      function l(e) {
        return (
          (l =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    'function' == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e;
                }),
          l(e)
        );
      }
      function f() {
        return (
          (f = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
          f.apply(this, arguments)
        );
      }
      function s(e, t) {
        return m(e) || y(e, t) || p(e, t) || d();
      }
      function d() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
        );
      }
      function p(e, t) {
        if (e) {
          if ('string' === typeof e) return v(e, t);
          var r = Object.prototype.toString.call(e).slice(8, -1);
          return (
            'Object' === r && e.constructor && (r = e.constructor.name),
            'Map' === r || 'Set' === r
              ? Array.from(e)
              : 'Arguments' === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
              ? v(e, t)
              : void 0
          );
        }
      }
      function v(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function y(e, t) {
        var r =
          null == e
            ? null
            : ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
        if (null != r) {
          var n,
            o,
            i,
            u,
            a = [],
            c = !0,
            l = !1;
          try {
            if (((i = (r = r.call(e)).next), 0 === t)) {
              if (Object(r) !== r) return;
              c = !1;
            } else for (; !(c = (n = i.call(r)).done) && (a.push(n.value), a.length !== t); c = !0);
          } catch (f) {
            (l = !0), (o = f);
          } finally {
            try {
              if (!c && null != r['return'] && ((u = r['return']()), Object(u) !== u)) return;
            } finally {
              if (l) throw o;
            }
          }
          return a;
        }
      }
      function m(e) {
        if (Array.isArray(e)) return e;
      }
      function h(e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
      }
      function b(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            'value' in n && (n.writable = !0),
            Object.defineProperty(e, O(n.key), n);
        }
      }
      function g(e, t, r) {
        return (
          t && b(e.prototype, t),
          r && b(e, r),
          Object.defineProperty(e, 'prototype', { writable: !1 }),
          e
        );
      }
      function O(e) {
        var t = j(e, 'string');
        return 'symbol' === l(t) ? t : String(t);
      }
      function j(e, t) {
        if ('object' !== l(e) || null === e) return e;
        var r = e[Symbol.toPrimitive];
        if (void 0 !== r) {
          var n = r.call(e, t || 'default');
          if ('object' !== l(n)) return n;
          throw new TypeError('@@toPrimitive must return a primitive value.');
        }
        return ('string' === t ? String : Number)(e);
      }
      var w = new ((function () {
        function e() {
          h(this, e),
            (this.anchors = []),
            (this.listeners = []),
            (this.listener = void 0),
            (this.listener = (0, i['default'])(this._matchActiveAnchor.bind(this), 200));
        }
        return (
          g(e, [
            {
              key: '_matchActiveAnchor',
              value: function () {
                var e = this,
                  t = this.anchors.findIndex(function (t, r) {
                    return t.getBoundingClientRect().top > 128 || r === e.anchors.length - 1;
                  }),
                  r = this.anchors[Math.max(0, t - 1)],
                  n = r.parentElement.id;
                this.listeners.forEach(function (e) {
                  return e(n);
                });
              },
            },
            {
              key: 'watch',
              value: function (e) {
                0 === this.anchors.length &&
                  'undefined' !== typeof window &&
                  window.addEventListener('scroll', this.listener),
                  this.anchors.push(e),
                  this.listener();
              },
            },
            {
              key: 'unwatch',
              value: function (e) {
                this.anchors.splice(
                  this.anchors.findIndex(function (t) {
                    return t === e;
                  }),
                  1,
                ),
                  0 === this.anchors.length &&
                    'undefined' !== typeof window &&
                    window.removeEventListener('scroll', this.listener);
              },
            },
            {
              key: 'listen',
              value: function (e) {
                this.listeners.push(e);
              },
            },
            {
              key: 'unlisten',
              value: function (e) {
                this.listeners.splice(
                  this.listeners.findIndex(function (t) {
                    return t === e;
                  }),
                  1,
                );
              },
            },
          ]),
          e
        );
      })())();
      function A(e) {
        return e.offsetTop + (e.offsetParent ? A(e.offsetParent) : 0);
      }
      var S = function e(t) {
        var r,
          i = (null === (r = t.to.match(/(#[^&?]*)/)) || void 0 === r ? void 0 : r[1]) || '',
          u = (0, n.useRef)(null),
          a = (0, n.useState)(!1),
          c = s(a, 2),
          l = c[0],
          d = c[1];
        return (
          (0, n.useEffect)(function () {
            var e, t;
            if (
              ['H1', 'H2', 'H3'].includes(
                null === (e = u.current) ||
                  void 0 === e ||
                  null === (t = e.parentElement) ||
                  void 0 === t
                  ? void 0
                  : t.tagName,
              ) &&
              u.current.parentElement.id
            ) {
              var r = u.current;
              return (
                w.watch(r),
                function () {
                  w.unwatch(r);
                }
              );
            }
            var n = function (e) {
              d(i === '#'.concat(e));
            };
            return (
              w.listen(n),
              function () {
                return w.unlisten(n);
              }
            );
          }, []),
          n['default'].createElement(
            o.NavLink,
            f({}, t, {
              ref: u,
              onClick: function () {
                return e.scrollToAnchor(i.substring(1));
              },
              isActive: function () {
                return l;
              },
            }),
          )
        );
      };
      S.scrollToAnchor = function (e) {
        window.requestAnimationFrame(function () {
          var t = document.getElementById(decodeURIComponent(e));
          t && window.scrollTo(0, A(t) - 100);
        });
      };
      var P = S;
      t.default = P;
    },
    82239: function (e, t, r) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = t.LinkWrapper = void 0);
      var n = u(r(67294)),
        o = r(36549),
        i = ['to'];
      function u(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function a() {
        return (
          (a = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
          a.apply(this, arguments)
        );
      }
      function c(e, t) {
        if (null == e) return {};
        var r,
          n,
          o = l(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (n = 0; n < i.length; n++)
            (r = i[n]),
              t.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]));
        }
        return o;
      }
      function l(e, t) {
        if (null == e) return {};
        var r,
          n,
          o = {},
          i = Object.keys(e);
        for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
        return o;
      }
      var f = function (e) {
        return function (t) {
          var r = t.to,
            o = c(t, i),
            u = /^(\w+:)?\/\/|^(mailto|tel):/.test(r) || !r,
            l = n['default'].isValidElement(o.children);
          return n['default'].createElement(
            e,
            a(
              {
                to: r || '',
                component: u
                  ? function () {
                      return n['default'].createElement(
                        'a',
                        { target: '_blank', rel: 'noopener noreferrer', href: r },
                        o.children,
                        r &&
                          !l &&
                          n['default'].createElement(
                            'svg',
                            {
                              xmlns: 'http://www.w3.org/2000/svg',
                              'aria-hidden': 'true',
                              x: '0px',
                              y: '0px',
                              viewBox: '0 0 100 100',
                              width: '15',
                              height: '15',
                              className: '__dumi-default-external-link-icon',
                            },
                            n['default'].createElement('path', {
                              fill: 'currentColor',
                              d: 'M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z',
                            }),
                            n['default'].createElement('polygon', {
                              fill: 'currentColor',
                              points:
                                '45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9',
                            }),
                          ),
                      );
                    }
                  : void 0,
              },
              o,
              u
                ? {}
                : {
                    onClick: function () {
                      var e;
                      window.scrollTo({ top: 0 });
                      for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
                        r[n] = arguments[n];
                      null === (e = o.onClick) || void 0 === e || e.apply(this, r);
                    },
                  },
            ),
          );
        };
      };
      t.LinkWrapper = f;
      var s = f(o.Link);
      t.default = s;
    },
    12469: function (e, t, r) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var n = r(36549),
        o = r(82239),
        i = (0, o.LinkWrapper)(n.NavLink);
      t.default = i;
    },
    96433: function (e, t, r) {
      'use strict';
      function n() {
        var e = o(r(67294));
        return (
          (n = function () {
            return e;
          }),
          e
        );
      }
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var i = n()['default'].createContext({
        config: {
          mode: 'doc',
          title: '',
          navs: {},
          menus: {},
          locales: [],
          repository: { branch: 'master' },
          theme: {},
        },
        meta: { title: '' },
        menu: [],
        nav: [],
        base: '',
        routes: [],
        apis: {},
        demos: {},
      });
      t.default = i;
    },
    69724: function (e, t, r) {
      'use strict';
      var n = r(66933).default;
      function o() {
        var e = r(67294);
        return (
          (o = function () {
            return e;
          }),
          e
        );
      }
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var i = u(r(96433));
      function u(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function a(e, t) {
        return d(e) || s(e, t) || l(e, t) || c();
      }
      function c() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
        );
      }
      function l(e, t) {
        if (e) {
          if ('string' === typeof e) return f(e, t);
          var r = Object.prototype.toString.call(e).slice(8, -1);
          return (
            'Object' === r && e.constructor && (r = e.constructor.name),
            'Map' === r || 'Set' === r
              ? Array.from(e)
              : 'Arguments' === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
              ? f(e, t)
              : void 0
          );
        }
      }
      function f(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function s(e, t) {
        var r =
          null == e
            ? null
            : ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
        if (null != r) {
          var n,
            o,
            i,
            u,
            a = [],
            c = !0,
            l = !1;
          try {
            if (((i = (r = r.call(e)).next), 0 === t)) {
              if (Object(r) !== r) return;
              c = !1;
            } else for (; !(c = (n = i.call(r)).done) && (a.push(n.value), a.length !== t); c = !0);
          } catch (f) {
            (l = !0), (o = f);
          } finally {
            try {
              if (!c && null != r['return'] && ((u = r['return']()), Object(u) !== u)) return;
            } finally {
              if (l) throw o;
            }
          }
          return a;
        }
      }
      function d(e) {
        if (Array.isArray(e)) return e;
      }
      function p(e, t, r) {
        return Object.entries(e[t]).reduce(function (e, t) {
          var o = n(t, 2),
            i = o[0],
            u = o[1];
          return (
            (e[i] = u.map(function (e) {
              var t = { description: e.description };
              return (
                Object.keys(e).forEach(function (n) {
                  if (n.startsWith('description.')) {
                    var o = n.match(/^description\.(.*)$/),
                      i = a(o, 2),
                      u = i[1];
                    u && u === r && (t.description = e[n]);
                  } else t[n] = e[n];
                }),
                t
              );
            })),
            e
          );
        }, {});
      }
      var v = function (e) {
        var t = (0, o().useContext)(i['default']),
          r = t.locale,
          n = t.apis,
          u = (0, o().useState)(p(n, e, r)),
          c = a(u, 2),
          l = c[0],
          f = c[1];
        return (
          (0, o().useEffect)(
            function () {
              f(p(n, e, r));
            },
            [n, e, r],
          ),
          l
        );
      };
      t.default = v;
    },
    23749: function (e, t, r) {
      'use strict';
      var n = r(66933).default;
      function o() {
        var e = r(67294);
        return (
          (o = function () {
            return e;
          }),
          e
        );
      }
      function i() {
        var e = r(73269);
        return (
          (i = function () {
            return e;
          }),
          e
        );
      }
      function u(e, t) {
        return s(e) || f(e, t) || c(e, t) || a();
      }
      function a() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
        );
      }
      function c(e, t) {
        if (e) {
          if ('string' === typeof e) return l(e, t);
          var r = Object.prototype.toString.call(e).slice(8, -1);
          return (
            'Object' === r && e.constructor && (r = e.constructor.name),
            'Map' === r || 'Set' === r
              ? Array.from(e)
              : 'Arguments' === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
              ? l(e, t)
              : void 0
          );
        }
      }
      function l(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function f(e, t) {
        var r =
          null == e
            ? null
            : ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
        if (null != r) {
          var n,
            o,
            i,
            u,
            a = [],
            c = !0,
            l = !1;
          try {
            if (((i = (r = r.call(e)).next), 0 === t)) {
              if (Object(r) !== r) return;
              c = !1;
            } else for (; !(c = (n = i.call(r)).done) && (a.push(n.value), a.length !== t); c = !0);
          } catch (f) {
            (l = !0), (o = f);
          } finally {
            try {
              if (!c && null != r['return'] && ((u = r['return']()), Object(u) !== u)) return;
            } finally {
              if (l) throw o;
            }
          }
          return a;
        }
      }
      function s(e) {
        if (Array.isArray(e)) return e;
      }
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var d = 'https://codesandbox.io/api/v1/sandboxes/define',
        p = function (e, t) {
          return 'react-dom' === e
            ? "/**\n* This is an auto-generated demo by dumi\n* if you think it is not working as expected,\n* please report the issue at\n* https://github.com/umijs/dumi/issues\n**/\n    \nimport React from 'react';\nimport ReactDOM from 'react-dom';\n".concat(
                t,
                "\nimport App from './App';\n    \nReactDOM.render(\n  <App />,\n  document.getElementById('root'),\n);",
              )
            : 'react-dom/client' === e
            ? '/**\n* This is an auto-generated demo by dumi\n* if you think it is not working as expected,\n* please report the issue at\n* https://github.com/umijs/dumi/issues\n**/\nimport React from \'react\';\nimport { createRoot } from "react-dom/client";\n'.concat(
                t,
                '\nimport App from "./App";\n\nconst rootElement = document.getElementById("root");\nconst root = createRoot(rootElement);\n\nroot.render(<App />);',
              )
            : void 0;
        };
      function v(e) {
        var t = document.createElement('span');
        t.innerHTML = e;
        var r = t.textContent;
        return t.remove(), r;
      }
      function y(e) {
        var t,
          r = Boolean(e.sources._.tsx),
          o = r ? '.tsx' : '.jsx',
          u = {},
          a = {},
          c = Object.values(e.dependencies).filter(function (e) {
            return e.css;
          }),
          l = 'App'.concat(o),
          f = 'index'.concat(o);
        return (
          Object.entries(e.dependencies).forEach(function (e) {
            var t = n(e, 2),
              r = t[0],
              o = t[1].version;
            a[r] = o;
          }),
          a['react-dom'] || (a['react-dom'] = a.react || 'latest'),
          (u['sandbox.config.json'] = {
            content: JSON.stringify(
              { template: r ? 'create-react-app-typescript' : 'create-react-app' },
              null,
              2,
            ),
            isBinary: !1,
          }),
          (u['package.json'] = {
            content: JSON.stringify(
              {
                name: e.title,
                description: v(e.description || 'An auto-generated demo by dumi'),
                main: f,
                dependencies: a,
                devDependencies: r ? { typescript: '^3' } : {},
              },
              null,
              2,
            ),
            isBinary: !1,
          }),
          (u['index.html'] = {
            content: '<div style="margin: 16px;" id="root"></div>',
            isBinary: !1,
          }),
          (u[f] = {
            content: p(
              (null === a || void 0 === a || null === (t = a['react-dom']) || void 0 === t
                ? void 0
                : t.startsWith('18.')) || 'latest' === a.react
                ? 'react-dom/client'
                : 'react-dom',
              c
                .map(function (e) {
                  var t = e.css;
                  return "import '".concat(t, "';");
                })
                .join('\n'),
            ),
            isBinary: !1,
          }),
          Object.entries(e.sources).forEach(function (e) {
            var t = n(e, 2),
              r = t[0],
              o = t[1],
              i = o.tsx,
              a = o.jsx,
              c = o.content;
            u['_' === r ? l : r] = { content: i || a || c, isBinary: !1 };
          }),
          (0, i().getParameters)({ files: u })
        );
      }
      var m = function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d,
          r = (0, o().useState)(),
          n = u(r, 2),
          i = n[0],
          a = n[1];
        return (
          (0, o().useEffect)(
            function () {
              if (e) {
                var r = document.createElement('form'),
                  n = document.createElement('input'),
                  o = y(e);
                return (
                  (r.method = 'POST'),
                  (r.target = '_blank'),
                  (r.style.display = 'none'),
                  (r.action = t),
                  r.appendChild(n),
                  r.setAttribute('data-demo', e.title || ''),
                  (n.name = 'parameters'),
                  (n.value = o),
                  document.body.appendChild(r),
                  a(function () {
                    return function () {
                      return r.submit();
                    };
                  }),
                  function () {
                    return r.remove();
                  }
                );
              }
            },
            [e],
          ),
          i
        );
      };
      t.default = m;
    },
    45649: function (e, t, r) {
      'use strict';
      function n() {
        var e = r(67294);
        return (
          (n = function () {
            return e;
          }),
          e
        );
      }
      function o() {
        var e = i(r(31342));
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
        return s(e) || f(e, t) || c(e, t) || a();
      }
      function a() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
        );
      }
      function c(e, t) {
        if (e) {
          if ('string' === typeof e) return l(e, t);
          var r = Object.prototype.toString.call(e).slice(8, -1);
          return (
            'Object' === r && e.constructor && (r = e.constructor.name),
            'Map' === r || 'Set' === r
              ? Array.from(e)
              : 'Arguments' === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
              ? l(e, t)
              : void 0
          );
        }
      }
      function l(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function f(e, t) {
        var r =
          null == e
            ? null
            : ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
        if (null != r) {
          var n,
            o,
            i,
            u,
            a = [],
            c = !0,
            l = !1;
          try {
            if (((i = (r = r.call(e)).next), 0 === t)) {
              if (Object(r) !== r) return;
              c = !1;
            } else for (; !(c = (n = i.call(r)).done) && (a.push(n.value), a.length !== t); c = !0);
          } catch (f) {
            (l = !0), (o = f);
          } finally {
            try {
              if (!c && null != r['return'] && ((u = r['return']()), Object(u) !== u)) return;
            } finally {
              if (l) throw o;
            }
          }
          return a;
        }
      }
      function s(e) {
        if (Array.isArray(e)) return e;
      }
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var d = function () {
        var e = (0, n().useState)(),
          t = u(e, 2),
          r = t[0],
          i = t[1],
          a = (0, n().useState)('ready'),
          c = u(a, 2),
          l = c[0],
          f = c[1],
          s = (0, n().useCallback)(function (e) {
            (0, o()['default'])(e),
              f('copied'),
              clearTimeout(r),
              i(
                setTimeout(function () {
                  f('ready');
                }, 2e3),
              );
          }, []);
        return [s, l];
      };
      t.default = d;
    },
    45284: function (e, t, r) {
      'use strict';
      function n() {
        var e = r(67294);
        return (
          (n = function () {
            return e;
          }),
          e
        );
      }
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.getDemoUrl = t.getDemoRouteName = t.default = void 0);
      var o = i(r(96433));
      function i(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function u(e, t) {
        return s(e) || f(e, t) || c(e, t) || a();
      }
      function a() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
        );
      }
      function c(e, t) {
        if (e) {
          if ('string' === typeof e) return l(e, t);
          var r = Object.prototype.toString.call(e).slice(8, -1);
          return (
            'Object' === r && e.constructor && (r = e.constructor.name),
            'Map' === r || 'Set' === r
              ? Array.from(e)
              : 'Arguments' === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
              ? l(e, t)
              : void 0
          );
        }
      }
      function l(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function f(e, t) {
        var r =
          null == e
            ? null
            : ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
        if (null != r) {
          var n,
            o,
            i,
            u,
            a = [],
            c = !0,
            l = !1;
          try {
            if (((i = (r = r.call(e)).next), 0 === t)) {
              if (Object(r) !== r) return;
              c = !1;
            } else for (; !(c = (n = i.call(r)).done) && (a.push(n.value), a.length !== t); c = !0);
          } catch (f) {
            (l = !0), (o = f);
          } finally {
            try {
              if (!c && null != r['return'] && ((u = r['return']()), Object(u) !== u)) return;
            } finally {
              if (l) throw o;
            }
          }
          return a;
        }
      }
      function s(e) {
        if (Array.isArray(e)) return e;
      }
      function d() {
        return 'BASEMENT' === { NODE_ENV: 'production' }.PLATFORM_TYPE;
      }
      var p = function () {
        return d() ? '_demos' : '~demos';
      };
      t.getDemoRouteName = p;
      var v = function (e, t) {
        var r,
          n = window,
          o = n.location,
          i = o.href,
          a = o.origin,
          c = i.split(/#\//),
          l = u(c, 2),
          f = l[0],
          s = l[1],
          d = 'string' === typeof s;
        return [
          d ? ''.concat(f, '#') : a,
          ''
            .concat((null === (r = window) || void 0 === r ? void 0 : r.routerBase) || '', '/')
            .replace(/\/\/$/, '/'),
          p(),
          '/',
          e,
          ''.concat(t ? '.html' : ''),
        ].join('');
      };
      t.getDemoUrl = v;
      var y = function (e) {
        var t = (0, n().useContext)(o['default']),
          r = t.config,
          i = (0, n().useState)(''),
          a = u(i, 2),
          c = a[0],
          l = a[1];
        return (
          (0, n().useEffect)(
            function () {
              l(e ? v(e, r.exportStatic && r.exportStatic.htmlSuffix) : null);
            },
            [e, r],
          ),
          c
        );
      };
      t.default = y;
    },
    20107: function (e, t, r) {
      'use strict';
      function n() {
        var e = r(67294);
        return (
          (n = function () {
            return e;
          }),
          e
        );
      }
      function o(e, t) {
        return l(e) || c(e, t) || u(e, t) || i();
      }
      function i() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
        );
      }
      function u(e, t) {
        if (e) {
          if ('string' === typeof e) return a(e, t);
          var r = Object.prototype.toString.call(e).slice(8, -1);
          return (
            'Object' === r && e.constructor && (r = e.constructor.name),
            'Map' === r || 'Set' === r
              ? Array.from(e)
              : 'Arguments' === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
              ? a(e, t)
              : void 0
          );
        }
      }
      function a(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function c(e, t) {
        var r =
          null == e
            ? null
            : ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
        if (null != r) {
          var n,
            o,
            i,
            u,
            a = [],
            c = !0,
            l = !1;
          try {
            if (((i = (r = r.call(e)).next), 0 === t)) {
              if (Object(r) !== r) return;
              c = !1;
            } else for (; !(c = (n = i.call(r)).done) && (a.push(n.value), a.length !== t); c = !0);
          } catch (f) {
            (l = !0), (o = f);
          } finally {
            try {
              if (!c && null != r['return'] && ((u = r['return']()), Object(u) !== u)) return;
            } finally {
              if (l) throw o;
            }
          }
          return a;
        }
      }
      function l(e) {
        if (Array.isArray(e)) return e;
      }
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var f = function (e, t) {
        var r = function () {
            for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
            var n = {};
            return (
              Object.keys(t[1]).forEach(function (e) {
                var r = (e.match(/^(.+)\.([^_]+)$/) || []).slice(1),
                  i = o(r, 2),
                  u = i[0],
                  a = i[1];
                (a && a !== t[0]) || (n[u || e] = t[1][e]);
              }),
              n
            );
          },
          i = (0, n().useState)(r(e, t)),
          u = o(i, 2),
          a = u[0],
          c = u[1];
        return (
          (0, n().useEffect)(
            function () {
              c(r(e, t));
            },
            [e, t],
          ),
          a
        );
      };
      t.default = f;
    },
    99897: function (e, t, r) {
      'use strict';
      function n() {
        var e = r(67294);
        return (
          (n = function () {
            return e;
          }),
          e
        );
      }
      function o(e, t) {
        return l(e) || c(e, t) || u(e, t) || i();
      }
      function i() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
        );
      }
      function u(e, t) {
        if (e) {
          if ('string' === typeof e) return a(e, t);
          var r = Object.prototype.toString.call(e).slice(8, -1);
          return (
            'Object' === r && e.constructor && (r = e.constructor.name),
            'Map' === r || 'Set' === r
              ? Array.from(e)
              : 'Arguments' === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
              ? a(e, t)
              : void 0
          );
        }
      }
      function a(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function c(e, t) {
        var r =
          null == e
            ? null
            : ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
        if (null != r) {
          var n,
            o,
            i,
            u,
            a = [],
            c = !0,
            l = !1;
          try {
            if (((i = (r = r.call(e)).next), 0 === t)) {
              if (Object(r) !== r) return;
              c = !1;
            } else for (; !(c = (n = i.call(r)).done) && (a.push(n.value), a.length !== t); c = !0);
          } catch (f) {
            (l = !0), (o = f);
          } finally {
            try {
              if (!c && null != r['return'] && ((u = r['return']()), Object(u) !== u)) return;
            } finally {
              if (l) throw o;
            }
          }
          return a;
        }
      }
      function l(e) {
        if (Array.isArray(e)) return e;
      }
      function f(e, t, r) {
        var n,
          i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        if (i < t.length) {
          var u = t[i],
            a = function () {
              return f(e, t, r, i + 1);
            },
            c = u.match(/^([^:]+):?(.*)$/) || [],
            l = o(c, 3),
            s = l[1],
            d = l[2];
          switch (s) {
            case 'autoplay':
              a();
              break;
            case 'click':
              var p = d.match(/^(global\()?(.+?)\)?$/) || [],
                v = o(p, 3),
                y = v[1],
                m = v[2],
                h = y ? document : e;
              null === (n = h.querySelector(m)) || void 0 === n || n.click(), a();
              break;
            case 'timeout':
              setTimeout(a, Number(d));
              break;
            case 'capture':
              window.postMessage({ type: 'dumi:capture-element', value: d }, '*'), a();
              break;
            default:
              console.warn("[dumi: motion] unknown motion '".concat(u, "', skip.")), a();
          }
        } else r();
      }
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var s = function (e, t) {
        var r = (0, n().useState)(!1),
          i = o(r, 2),
          u = i[0],
          a = i[1],
          c = (0, n().useCallback)(
            function () {
              u ||
                (f(t, e, function () {
                  a(!1);
                }),
                a(!0));
            },
            [e, t, u],
          );
        return (
          (0, n().useEffect)(
            function () {
              'autoplay' === e[0] && t && c();
            },
            [e, t],
          ),
          [c, u]
        );
      };
      t.default = s;
    },
    94918: function (e, t, r) {
      'use strict';
      var n = r(46507).default,
        o = r(21364).default;
      function i() {
        var e = r(67294);
        return (
          (i = function () {
            return e;
          }),
          e
        );
      }
      function u(e, t) {
        return s(e) || f(e, t) || c(e, t) || a();
      }
      function a() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
        );
      }
      function c(e, t) {
        if (e) {
          if ('string' === typeof e) return l(e, t);
          var r = Object.prototype.toString.call(e).slice(8, -1);
          return (
            'Object' === r && e.constructor && (r = e.constructor.name),
            'Map' === r || 'Set' === r
              ? Array.from(e)
              : 'Arguments' === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
              ? l(e, t)
              : void 0
          );
        }
      }
      function l(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function f(e, t) {
        var r =
          null == e
            ? null
            : ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
        if (null != r) {
          var n,
            o,
            i,
            u,
            a = [],
            c = !0,
            l = !1;
          try {
            if (((i = (r = r.call(e)).next), 0 === t)) {
              if (Object(r) !== r) return;
              c = !1;
            } else for (; !(c = (n = i.call(r)).done) && (a.push(n.value), a.length !== t); c = !0);
          } catch (f) {
            (l = !0), (o = f);
          } finally {
            try {
              if (!c && null != r['return'] && ((u = r['return']()), Object(u) !== u)) return;
            } finally {
              if (l) throw o;
            }
          }
          return a;
        }
      }
      function s(e) {
        if (Array.isArray(e)) return e;
      }
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var d,
        p = 'data-prefers-color',
        v = 'dumi:prefers-color',
        y = (function () {
          function e() {
            var t = this;
            n(this, e),
              (this.color = void 0),
              (this.callbacks = []),
              (this.color = localStorage.getItem(v) || document.documentElement.getAttribute(p)),
              ['light', 'dark'].forEach(function (e) {
                var r = t.getColorMedia(e),
                  n = function (r) {
                    r.matches &&
                      'auto' === t.color &&
                      (document.documentElement.setAttribute(p, e), t.applyCallbacks());
                  };
                r.addEventListener
                  ? r.addEventListener('change', n)
                  : r.addListener && r.addListener(n);
              });
          }
          return (
            o(e, [
              {
                key: 'getColorMedia',
                value: function (e) {
                  return window.matchMedia('(prefers-color-scheme: '.concat(e, ')'));
                },
              },
              {
                key: 'isColorMode',
                value: function (e) {
                  return this.getColorMedia(e).matches;
                },
              },
              {
                key: 'applyCallbacks',
                value: function () {
                  var e = this;
                  this.callbacks.forEach(function (t) {
                    return t(e.color);
                  });
                },
              },
              {
                key: 'listen',
                value: function (e) {
                  this.callbacks.push(e);
                },
              },
              {
                key: 'unlisten',
                value: function (e) {
                  this.callbacks.splice(this.callbacks.indexOf(e), 1);
                },
              },
              {
                key: 'set',
                value: function (e) {
                  return (
                    (this.color = e),
                    localStorage.setItem(v, e),
                    this.applyCallbacks(),
                    'auto' === e
                      ? document.documentElement.setAttribute(
                          p,
                          this.isColorMode('dark') ? 'dark' : 'light',
                        )
                      : document.documentElement.setAttribute(p, e),
                    e
                  );
                },
              },
            ]),
            e
          );
        })(),
        m = function () {
          var e = (0, i().useState)(),
            t = u(e, 2),
            r = t[0],
            n = t[1],
            o = (0, i().useCallback)(function (e) {
              d.set(e);
            }, []);
          return (
            (0, i().useEffect)(function () {
              return (
                (d = d || new y()),
                d.listen(n),
                n(d.color),
                function () {
                  return d.unlisten(n);
                }
              );
            }, []),
            [r, o]
          );
        };
      t.default = m;
    },
    34759: function (e, t, r) {
      'use strict';
      var n = r(33657).default,
        o = r(66933).default;
      function i() {
        var e = r(67294);
        return (
          (i = function () {
            return e;
          }),
          e
        );
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
      function a(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? u(Object(r), !0).forEach(function (t) {
                c(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : u(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
              });
        }
        return e;
      }
      function c(e, t, r) {
        return (
          (t = l(t)),
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
      function l(e) {
        var t = f(e, 'string');
        return 'symbol' === typeof t ? t : String(t);
      }
      function f(e, t) {
        if ('object' !== typeof e || null === e) return e;
        var r = e[Symbol.toPrimitive];
        if (void 0 !== r) {
          var n = r.call(e, t || 'default');
          if ('object' !== typeof n) return n;
          throw new TypeError('@@toPrimitive must return a primitive value.');
        }
        return ('string' === t ? String : Number)(e);
      }
      function s(e, t) {
        return m(e) || y(e, t) || p(e, t) || d();
      }
      function d() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
        );
      }
      function p(e, t) {
        if (e) {
          if ('string' === typeof e) return v(e, t);
          var r = Object.prototype.toString.call(e).slice(8, -1);
          return (
            'Object' === r && e.constructor && (r = e.constructor.name),
            'Map' === r || 'Set' === r
              ? Array.from(e)
              : 'Arguments' === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
              ? v(e, t)
              : void 0
          );
        }
      }
      function v(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function y(e, t) {
        var r =
          null == e
            ? null
            : ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
        if (null != r) {
          var n,
            o,
            i,
            u,
            a = [],
            c = !0,
            l = !1;
          try {
            if (((i = (r = r.call(e)).next), 0 === t)) {
              if (Object(r) !== r) return;
              c = !1;
            } else for (; !(c = (n = i.call(r)).done) && (a.push(n.value), a.length !== t); c = !0);
          } catch (f) {
            (l = !0), (o = f);
          } finally {
            try {
              if (!c && null != r['return'] && ((u = r['return']()), Object(u) !== u)) return;
            } finally {
              if (l) throw o;
            }
          }
          return a;
        }
      }
      function m(e) {
        if (Array.isArray(e)) return e;
      }
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var h,
        b = 'https://riddle.alibaba-inc.com/riddles/define',
        g = function () {
          var e = (0, i().useState)(Boolean(h)),
            t = s(e, 2),
            r = t[0],
            n = t[1];
          return (
            (0, i().useEffect)(function () {
              if (void 0 === h) {
                var e = document.createElement('img');
                setTimeout(function () {
                  (e.src = ''), e.remove();
                }, 200),
                  (e.onload = function () {
                    (h = !0), n(!0), e.remove();
                  }),
                  (e.src =
                    'https://private-alipayobjects.alipay.com/alipay-rmsdeploy-image/rmsportal/RKuAiriJqrUhyqW.png');
              }
            }, []),
            r
          );
        };
      function O(e) {
        var t = e.sources._.tsx || e.sources._.jsx;
        return (
          (t = t
            .replace(/^/, "import ReactDOM from 'react-dom';\n")
            .replace('export default', 'const DumiDemo =')
            .concat('\nReactDOM.render(<DumiDemo />, mountNode);')),
          t
        );
      }
      var j = function (e) {
        var t = (0, i().useState)(),
          r = s(t, 2),
          u = r[0],
          c = r[1],
          l = g();
        return (
          (0, i().useEffect)(
            function () {
              if (e && l && 1 === Object.keys(e.sources).length) {
                var t,
                  r = document.createElement('form'),
                  i = document.createElement('input');
                return (
                  (r.method = 'POST'),
                  (r.target = '_blank'),
                  (r.style.display = 'none'),
                  (r.action = b),
                  r.appendChild(i),
                  r.setAttribute('data-demo', e.title || ''),
                  (i.name = 'data'),
                  (i.value = JSON.stringify({
                    title: e.titlle,
                    js: O(e),
                    css: Object.entries(e.dependencies)
                      .filter(function (e) {
                        var t = o(e, 2),
                          r = t[1];
                        return r.css;
                      })
                      .map(function (e) {
                        var t = o(e, 2),
                          r = t[0],
                          n = t[1],
                          i = n.version,
                          u = n.css;
                        return "@import '~".concat(
                          u.replace(new RegExp('^('.concat(r, ')')), '$1@'.concat(i)),
                          "';",
                        );
                      })
                      .concat(
                        e.background ? 'body {\n  background: '.concat(e.background, ';\n}') : '',
                      )
                      .join('\n'),
                    json: JSON.stringify(
                      {
                        description: e.description,
                        dependencies: Object.entries(e.dependencies).reduce(
                          function (e, t) {
                            var r = o(t, 2),
                              i = r[0],
                              u = r[1].version;
                            return a(a({}, e), {}, n({}, i, u));
                          },
                          {
                            'react-dom':
                              (null === (t = e.dependencies.react) || void 0 === t
                                ? void 0
                                : t.version) || 'latest',
                          },
                        ),
                      },
                      null,
                      2,
                    ),
                  })),
                  document.body.appendChild(r),
                  c(function () {
                    return function () {
                      return r.submit();
                    };
                  }),
                  function () {
                    return r.remove();
                  }
                );
              }
            },
            [e, l],
          ),
          u
        );
      };
      t.default = j;
    },
    47148: function (e, t, r) {
      'use strict';
      var n = r(30352).default;
      function o() {
        var e = r(67294);
        return (
          (o = function () {
            return e;
          }),
          e
        );
      }
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var i = r(96089);
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
      function a(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? u(Object(r), !0).forEach(function (t) {
                c(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : u(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
              });
        }
        return e;
      }
      function c(e, t, r) {
        return (
          (t = l(t)),
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
      function l(e) {
        var t = f(e, 'string');
        return 'symbol' === typeof t ? t : String(t);
      }
      function f(e, t) {
        if ('object' !== typeof e || null === e) return e;
        var r = e[Symbol.toPrimitive];
        if (void 0 !== r) {
          var n = r.call(e, t || 'default');
          if ('object' !== typeof n) return n;
          throw new TypeError('@@toPrimitive must return a primitive value.');
        }
        return ('string' === t ? String : Number)(e);
      }
      function s(e, t) {
        return m(e) || y(e, t) || p(e, t) || d();
      }
      function d() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
        );
      }
      function p(e, t) {
        if (e) {
          if ('string' === typeof e) return v(e, t);
          var r = Object.prototype.toString.call(e).slice(8, -1);
          return (
            'Object' === r && e.constructor && (r = e.constructor.name),
            'Map' === r || 'Set' === r
              ? Array.from(e)
              : 'Arguments' === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
              ? v(e, t)
              : void 0
          );
        }
      }
      function v(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function y(e, t) {
        var r =
          null == e
            ? null
            : ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
        if (null != r) {
          var n,
            o,
            i,
            u,
            a = [],
            c = !0,
            l = !1;
          try {
            if (((i = (r = r.call(e)).next), 0 === t)) {
              if (Object(r) !== r) return;
              c = !1;
            } else for (; !(c = (n = i.call(r)).done) && (a.push(n.value), a.length !== t); c = !0);
          } catch (f) {
            (l = !0), (o = f);
          } finally {
            try {
              if (!c && null != r['return'] && ((u = r['return']()), Object(u) !== u)) return;
            } finally {
              if (l) throw o;
            }
          }
          return a;
        }
      }
      function m(e) {
        if (Array.isArray(e)) return e;
      }
      var h = function (e) {
          var t = (0, o().useContext)(i.context),
            r = t.locale,
            u = t.routes,
            a = t.config.locales,
            c = (0, o().useState)([]),
            l = s(c, 2),
            f = l[0],
            d = l[1],
            p = (0, o().useState)([]),
            v = s(p, 2),
            y = v[0],
            m = v[1];
          return (
            (0, o().useEffect)(
              function () {
                d(
                  u
                    .filter(function (e) {
                      var t = e.title,
                        n = e.meta,
                        o = (null === n || void 0 === n ? void 0 : n.locale) === r,
                        i =
                          !(null === n || void 0 === n ? void 0 : n.locale) &&
                          (!a.length || r === a[0].name);
                      return t && (i || o);
                    })
                    .reduce(function (e, t) {
                      var r,
                        o,
                        i,
                        u = {
                          title:
                            (null === (r = t.meta) || void 0 === r ? void 0 : r.title) || t.title,
                          path: t.path,
                        };
                      return (
                        (null === (o = t.meta) || void 0 === o ? void 0 : o.group) &&
                          (u.parent = t.meta.group),
                        e.push(u),
                        e.push.apply(
                          e,
                          n(
                            ((null === (i = t.meta) || void 0 === i ? void 0 : i.slugs) || [])
                              .filter(function (e) {
                                var r,
                                  n = e.value;
                                return (
                                  n !==
                                  ((null === (r = t.meta) || void 0 === r ? void 0 : r.title) ||
                                    t.title)
                                );
                              })
                              .map(function (e) {
                                return {
                                  title: e.value,
                                  path: ''.concat(t.path, '#').concat(e.heading),
                                  parent: u,
                                };
                              }),
                          ),
                        ),
                        e
                      );
                    }, []),
                );
              },
              [u.length, r],
            ),
            (0, o().useEffect)(
              function () {
                var t = null === e || void 0 === e ? void 0 : e.trim().toUpperCase();
                if (t) {
                  for (var r = [], n = 0; n < f.length; n += 1)
                    f[n].title.toUpperCase().indexOf(t) > -1 && r.push(f[n]);
                  m(r);
                } else m([]);
              },
              [e, f.length],
            ),
            y
          );
        },
        b = function () {
          var e = (0, o().useContext)(i.context),
            t = e.config.algolia,
            r = (0, o().useCallback)(
              function (e) {
                window.docsearch(a({ inputSelector: e }, t));
              },
              [t],
            );
          return r;
        },
        g = function (e) {
          var t = (0, o().useContext)(i.context),
            r = t.config,
            n = h(e),
            u = b();
          return r.algolia ? u : n;
        };
      t.default = g;
    },
    8104: function (e, t, r) {
      'use strict';
      function n() {
        var e = r(67294);
        return (
          (n = function () {
            return e;
          }),
          e
        );
      }
      function o() {
        var e = i(r(82477));
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
        return s(e) || f(e, t) || c(e, t) || a();
      }
      function a() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
        );
      }
      function c(e, t) {
        if (e) {
          if ('string' === typeof e) return l(e, t);
          var r = Object.prototype.toString.call(e).slice(8, -1);
          return (
            'Object' === r && e.constructor && (r = e.constructor.name),
            'Map' === r || 'Set' === r
              ? Array.from(e)
              : 'Arguments' === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
              ? l(e, t)
              : void 0
          );
        }
      }
      function l(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function f(e, t) {
        var r =
          null == e
            ? null
            : ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
        if (null != r) {
          var n,
            o,
            i,
            u,
            a = [],
            c = !0,
            l = !1;
          try {
            if (((i = (r = r.call(e)).next), 0 === t)) {
              if (Object(r) !== r) return;
              c = !1;
            } else for (; !(c = (n = i.call(r)).done) && (a.push(n.value), a.length !== t); c = !0);
          } catch (f) {
            (l = !0), (o = f);
          } finally {
            try {
              if (!c && null != r['return'] && ((u = r['return']()), Object(u) !== u)) return;
            } finally {
              if (l) throw o;
            }
          }
          return a;
        }
      }
      function s(e) {
        if (Array.isArray(e)) return e;
      }
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var d = {
          'zh-CN': 'https://www.typescriptlang.org/zh/play',
          'en-US': 'https://www.typescriptlang.org/play',
        },
        p = function (e, t) {
          var r = function () {
              var e = /^zh|cn$/.test(arguments.length <= 0 ? void 0 : arguments[0])
                ? d['zh-CN']
                : d['en-US'];
              return ''
                .concat(e, '?skipLibCheck=true&jsx=1#code/')
                .concat(
                  o()['default'].compressToEncodedURIComponent(
                    arguments.length <= 1 ? void 0 : arguments[1],
                  ),
                );
            },
            i = (0, n().useState)(r(e, t)),
            a = u(i, 2),
            c = a[0],
            l = a[1];
          return (
            (0, n().useEffect)(
              function () {
                l(r(e, t));
              },
              [e, t],
            ),
            c
          );
        };
      t.default = p;
    },
    96089: function (e, t, r) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'AnchorLink', {
          enumerable: !0,
          get: function () {
            return u['default'];
          },
        }),
        Object.defineProperty(t, 'Link', {
          enumerable: !0,
          get: function () {
            return o['default'];
          },
        }),
        Object.defineProperty(t, 'NavLink', {
          enumerable: !0,
          get: function () {
            return i['default'];
          },
        }),
        Object.defineProperty(t, 'context', {
          enumerable: !0,
          get: function () {
            return n['default'];
          },
        }),
        Object.defineProperty(t, 'getDemoUrl', {
          enumerable: !0,
          get: function () {
            return p.getDemoUrl;
          },
        }),
        Object.defineProperty(t, 'useApiData', {
          enumerable: !0,
          get: function () {
            return v['default'];
          },
        }),
        Object.defineProperty(t, 'useCodeSandbox', {
          enumerable: !0,
          get: function () {
            return s['default'];
          },
        }),
        Object.defineProperty(t, 'useCopy', {
          enumerable: !0,
          get: function () {
            return c['default'];
          },
        }),
        Object.defineProperty(t, 'useDemoUrl', {
          enumerable: !0,
          get: function () {
            return p['default'];
          },
        }),
        Object.defineProperty(t, 'useLocaleProps', {
          enumerable: !0,
          get: function () {
            return d['default'];
          },
        }),
        Object.defineProperty(t, 'useMotions', {
          enumerable: !0,
          get: function () {
            return f['default'];
          },
        }),
        Object.defineProperty(t, 'usePrefersColor', {
          enumerable: !0,
          get: function () {
            return m['default'];
          },
        }),
        Object.defineProperty(t, 'useRiddle', {
          enumerable: !0,
          get: function () {
            return l['default'];
          },
        }),
        Object.defineProperty(t, 'useSearch', {
          enumerable: !0,
          get: function () {
            return a['default'];
          },
        }),
        Object.defineProperty(t, 'useTSPlaygroundUrl', {
          enumerable: !0,
          get: function () {
            return y['default'];
          },
        });
      var n = g(r(96433)),
        o = g(r(82239)),
        i = g(r(12469)),
        u = g(r(76248)),
        a = g(r(47148)),
        c = g(r(45649)),
        l = g(r(34759)),
        f = g(r(99897)),
        s = g(r(23749)),
        d = g(r(20107)),
        p = b(r(45284)),
        v = g(r(69724)),
        y = g(r(8104)),
        m = g(r(94918));
      function h(e) {
        if ('function' !== typeof WeakMap) return null;
        var t = new WeakMap(),
          r = new WeakMap();
        return (h = function (e) {
          return e ? r : t;
        })(e);
      }
      function b(e, t) {
        if (!t && e && e.__esModule) return e;
        if (null === e || ('object' !== typeof e && 'function' !== typeof e)) return { default: e };
        var r = h(t);
        if (r && r.has(e)) return r.get(e);
        var n = {},
          o = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var i in e)
          if ('default' !== i && Object.prototype.hasOwnProperty.call(e, i)) {
            var u = o ? Object.getOwnPropertyDescriptor(e, i) : null;
            u && (u.get || u.set) ? Object.defineProperty(n, i, u) : (n[i] = e[i]);
          }
        return (n['default'] = e), r && r.set(e, n), n;
      }
      function g(e) {
        return e && e.__esModule ? e : { default: e };
      }
    },
    98010: function (e, t, r) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.getParameters = void 0);
      var n = r(82477);
      function o(e) {
        return n.compressToBase64(e).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
      }
      function i(e) {
        return o(JSON.stringify(e));
      }
      t.getParameters = i;
    },
    73269: function (e, t, r) {
      'use strict';
      (t.__esModule = !0), (t.getParameters = void 0);
      var n = r(98010);
      t.getParameters = n.getParameters;
    },
    31342: function (e) {
      'use strict';
      var t = function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          r = t.target,
          n = void 0 === r ? document.body : r,
          o = document.createElement('textarea'),
          i = document.activeElement;
        (o.value = e),
          o.setAttribute('readonly', ''),
          (o.style.contain = 'strict'),
          (o.style.position = 'absolute'),
          (o.style.left = '-9999px'),
          (o.style.fontSize = '12pt');
        var u = document.getSelection(),
          a = !1;
        u.rangeCount > 0 && (a = u.getRangeAt(0)),
          n.append(o),
          o.select(),
          (o.selectionStart = 0),
          (o.selectionEnd = e.length);
        var c = !1;
        try {
          c = document.execCommand('copy');
        } catch (l) {}
        return o.remove(), a && (u.removeAllRanges(), u.addRange(a)), i && i.focus(), c;
      };
      (e.exports = t), (e.exports.default = t);
    },
    97397: function (e, t, r) {
      var n = 'Expected a function',
        o = NaN,
        i = '[object Symbol]',
        u = /^\s+|\s+$/g,
        a = /^[-+]0x[0-9a-f]+$/i,
        c = /^0b[01]+$/i,
        l = /^0o[0-7]+$/i,
        f = parseInt,
        s = 'object' == typeof r.g && r.g && r.g.Object === Object && r.g,
        d = 'object' == typeof self && self && self.Object === Object && self,
        p = s || d || Function('return this')(),
        v = Object.prototype,
        y = v.toString,
        m = Math.max,
        h = Math.min,
        b = function () {
          return p.Date.now();
        };
      function g(e, t, r) {
        var o,
          i,
          u,
          a,
          c,
          l,
          f = 0,
          s = !1,
          d = !1,
          p = !0;
        if ('function' != typeof e) throw new TypeError(n);
        function v(t) {
          var r = o,
            n = i;
          return (o = i = void 0), (f = t), (a = e.apply(n, r)), a;
        }
        function y(e) {
          return (f = e), (c = setTimeout(w, t)), s ? v(e) : a;
        }
        function g(e) {
          var r = e - l,
            n = e - f,
            o = t - r;
          return d ? h(o, u - n) : o;
        }
        function O(e) {
          var r = e - l,
            n = e - f;
          return void 0 === l || r >= t || r < 0 || (d && n >= u);
        }
        function w() {
          var e = b();
          if (O(e)) return A(e);
          c = setTimeout(w, g(e));
        }
        function A(e) {
          return (c = void 0), p && o ? v(e) : ((o = i = void 0), a);
        }
        function P() {
          void 0 !== c && clearTimeout(c), (f = 0), (o = l = i = c = void 0);
        }
        function x() {
          return void 0 === c ? a : A(b());
        }
        function _() {
          var e = b(),
            r = O(e);
          if (((o = arguments), (i = this), (l = e), r)) {
            if (void 0 === c) return y(l);
            if (d) return (c = setTimeout(w, t)), v(l);
          }
          return void 0 === c && (c = setTimeout(w, t)), a;
        }
        return (
          (t = S(t) || 0),
          j(r) &&
            ((s = !!r.leading),
            (d = 'maxWait' in r),
            (u = d ? m(S(r.maxWait) || 0, t) : u),
            (p = 'trailing' in r ? !!r.trailing : p)),
          (_.cancel = P),
          (_.flush = x),
          _
        );
      }
      function O(e, t, r) {
        var o = !0,
          i = !0;
        if ('function' != typeof e) throw new TypeError(n);
        return (
          j(r) &&
            ((o = 'leading' in r ? !!r.leading : o), (i = 'trailing' in r ? !!r.trailing : i)),
          g(e, t, { leading: o, maxWait: t, trailing: i })
        );
      }
      function j(e) {
        var t = typeof e;
        return !!e && ('object' == t || 'function' == t);
      }
      function w(e) {
        return !!e && 'object' == typeof e;
      }
      function A(e) {
        return 'symbol' == typeof e || (w(e) && y.call(e) == i);
      }
      function S(e) {
        if ('number' == typeof e) return e;
        if (A(e)) return o;
        if (j(e)) {
          var t = 'function' == typeof e.valueOf ? e.valueOf() : e;
          e = j(t) ? t + '' : t;
        }
        if ('string' != typeof e) return 0 === e ? e : +e;
        e = e.replace(u, '');
        var r = c.test(e);
        return r || l.test(e) ? f(e.slice(2), r ? 2 : 8) : a.test(e) ? o : +e;
      }
      e.exports = O;
    },
    82477: function (e, t, r) {
      var n,
        o = (function () {
          var e = String.fromCharCode,
            t = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
            r = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$',
            n = {};
          function o(e, t) {
            if (!n[e]) {
              n[e] = {};
              for (var r = 0; r < e.length; r++) n[e][e.charAt(r)] = r;
            }
            return n[e][t];
          }
          var i = {
            compressToBase64: function (e) {
              if (null == e) return '';
              var r = i._compress(e, 6, function (e) {
                return t.charAt(e);
              });
              switch (r.length % 4) {
                default:
                case 0:
                  return r;
                case 1:
                  return r + '===';
                case 2:
                  return r + '==';
                case 3:
                  return r + '=';
              }
            },
            decompressFromBase64: function (e) {
              return null == e
                ? ''
                : '' == e
                ? null
                : i._decompress(e.length, 32, function (r) {
                    return o(t, e.charAt(r));
                  });
            },
            compressToUTF16: function (t) {
              return null == t
                ? ''
                : i._compress(t, 15, function (t) {
                    return e(t + 32);
                  }) + ' ';
            },
            decompressFromUTF16: function (e) {
              return null == e
                ? ''
                : '' == e
                ? null
                : i._decompress(e.length, 16384, function (t) {
                    return e.charCodeAt(t) - 32;
                  });
            },
            compressToUint8Array: function (e) {
              for (
                var t = i.compress(e), r = new Uint8Array(2 * t.length), n = 0, o = t.length;
                n < o;
                n++
              ) {
                var u = t.charCodeAt(n);
                (r[2 * n] = u >>> 8), (r[2 * n + 1] = u % 256);
              }
              return r;
            },
            decompressFromUint8Array: function (t) {
              if (null === t || void 0 === t) return i.decompress(t);
              for (var r = new Array(t.length / 2), n = 0, o = r.length; n < o; n++)
                r[n] = 256 * t[2 * n] + t[2 * n + 1];
              var u = [];
              return (
                r.forEach(function (t) {
                  u.push(e(t));
                }),
                i.decompress(u.join(''))
              );
            },
            compressToEncodedURIComponent: function (e) {
              return null == e
                ? ''
                : i._compress(e, 6, function (e) {
                    return r.charAt(e);
                  });
            },
            decompressFromEncodedURIComponent: function (e) {
              return null == e
                ? ''
                : '' == e
                ? null
                : ((e = e.replace(/ /g, '+')),
                  i._decompress(e.length, 32, function (t) {
                    return o(r, e.charAt(t));
                  }));
            },
            compress: function (t) {
              return i._compress(t, 16, function (t) {
                return e(t);
              });
            },
            _compress: function (e, t, r) {
              if (null == e) return '';
              var n,
                o,
                i,
                u = {},
                a = {},
                c = '',
                l = '',
                f = '',
                s = 2,
                d = 3,
                p = 2,
                v = [],
                y = 0,
                m = 0;
              for (i = 0; i < e.length; i += 1)
                if (
                  ((c = e.charAt(i)),
                  Object.prototype.hasOwnProperty.call(u, c) || ((u[c] = d++), (a[c] = !0)),
                  (l = f + c),
                  Object.prototype.hasOwnProperty.call(u, l))
                )
                  f = l;
                else {
                  if (Object.prototype.hasOwnProperty.call(a, f)) {
                    if (f.charCodeAt(0) < 256) {
                      for (n = 0; n < p; n++)
                        (y <<= 1), m == t - 1 ? ((m = 0), v.push(r(y)), (y = 0)) : m++;
                      for (o = f.charCodeAt(0), n = 0; n < 8; n++)
                        (y = (y << 1) | (1 & o)),
                          m == t - 1 ? ((m = 0), v.push(r(y)), (y = 0)) : m++,
                          (o >>= 1);
                    } else {
                      for (o = 1, n = 0; n < p; n++)
                        (y = (y << 1) | o),
                          m == t - 1 ? ((m = 0), v.push(r(y)), (y = 0)) : m++,
                          (o = 0);
                      for (o = f.charCodeAt(0), n = 0; n < 16; n++)
                        (y = (y << 1) | (1 & o)),
                          m == t - 1 ? ((m = 0), v.push(r(y)), (y = 0)) : m++,
                          (o >>= 1);
                    }
                    s--, 0 == s && ((s = Math.pow(2, p)), p++), delete a[f];
                  } else
                    for (o = u[f], n = 0; n < p; n++)
                      (y = (y << 1) | (1 & o)),
                        m == t - 1 ? ((m = 0), v.push(r(y)), (y = 0)) : m++,
                        (o >>= 1);
                  s--, 0 == s && ((s = Math.pow(2, p)), p++), (u[l] = d++), (f = String(c));
                }
              if ('' !== f) {
                if (Object.prototype.hasOwnProperty.call(a, f)) {
                  if (f.charCodeAt(0) < 256) {
                    for (n = 0; n < p; n++)
                      (y <<= 1), m == t - 1 ? ((m = 0), v.push(r(y)), (y = 0)) : m++;
                    for (o = f.charCodeAt(0), n = 0; n < 8; n++)
                      (y = (y << 1) | (1 & o)),
                        m == t - 1 ? ((m = 0), v.push(r(y)), (y = 0)) : m++,
                        (o >>= 1);
                  } else {
                    for (o = 1, n = 0; n < p; n++)
                      (y = (y << 1) | o),
                        m == t - 1 ? ((m = 0), v.push(r(y)), (y = 0)) : m++,
                        (o = 0);
                    for (o = f.charCodeAt(0), n = 0; n < 16; n++)
                      (y = (y << 1) | (1 & o)),
                        m == t - 1 ? ((m = 0), v.push(r(y)), (y = 0)) : m++,
                        (o >>= 1);
                  }
                  s--, 0 == s && ((s = Math.pow(2, p)), p++), delete a[f];
                } else
                  for (o = u[f], n = 0; n < p; n++)
                    (y = (y << 1) | (1 & o)),
                      m == t - 1 ? ((m = 0), v.push(r(y)), (y = 0)) : m++,
                      (o >>= 1);
                s--, 0 == s && ((s = Math.pow(2, p)), p++);
              }
              for (o = 2, n = 0; n < p; n++)
                (y = (y << 1) | (1 & o)),
                  m == t - 1 ? ((m = 0), v.push(r(y)), (y = 0)) : m++,
                  (o >>= 1);
              while (1) {
                if (((y <<= 1), m == t - 1)) {
                  v.push(r(y));
                  break;
                }
                m++;
              }
              return v.join('');
            },
            decompress: function (e) {
              return null == e
                ? ''
                : '' == e
                ? null
                : i._decompress(e.length, 32768, function (t) {
                    return e.charCodeAt(t);
                  });
            },
            _decompress: function (t, r, n) {
              var o,
                i,
                u,
                a,
                c,
                l,
                f,
                s = [],
                d = 4,
                p = 4,
                v = 3,
                y = '',
                m = [],
                h = { val: n(0), position: r, index: 1 };
              for (o = 0; o < 3; o += 1) s[o] = o;
              (u = 0), (c = Math.pow(2, 2)), (l = 1);
              while (l != c)
                (a = h.val & h.position),
                  (h.position >>= 1),
                  0 == h.position && ((h.position = r), (h.val = n(h.index++))),
                  (u |= (a > 0 ? 1 : 0) * l),
                  (l <<= 1);
              switch (u) {
                case 0:
                  (u = 0), (c = Math.pow(2, 8)), (l = 1);
                  while (l != c)
                    (a = h.val & h.position),
                      (h.position >>= 1),
                      0 == h.position && ((h.position = r), (h.val = n(h.index++))),
                      (u |= (a > 0 ? 1 : 0) * l),
                      (l <<= 1);
                  f = e(u);
                  break;
                case 1:
                  (u = 0), (c = Math.pow(2, 16)), (l = 1);
                  while (l != c)
                    (a = h.val & h.position),
                      (h.position >>= 1),
                      0 == h.position && ((h.position = r), (h.val = n(h.index++))),
                      (u |= (a > 0 ? 1 : 0) * l),
                      (l <<= 1);
                  f = e(u);
                  break;
                case 2:
                  return '';
              }
              (s[3] = f), (i = f), m.push(f);
              while (1) {
                if (h.index > t) return '';
                (u = 0), (c = Math.pow(2, v)), (l = 1);
                while (l != c)
                  (a = h.val & h.position),
                    (h.position >>= 1),
                    0 == h.position && ((h.position = r), (h.val = n(h.index++))),
                    (u |= (a > 0 ? 1 : 0) * l),
                    (l <<= 1);
                switch ((f = u)) {
                  case 0:
                    (u = 0), (c = Math.pow(2, 8)), (l = 1);
                    while (l != c)
                      (a = h.val & h.position),
                        (h.position >>= 1),
                        0 == h.position && ((h.position = r), (h.val = n(h.index++))),
                        (u |= (a > 0 ? 1 : 0) * l),
                        (l <<= 1);
                    (s[p++] = e(u)), (f = p - 1), d--;
                    break;
                  case 1:
                    (u = 0), (c = Math.pow(2, 16)), (l = 1);
                    while (l != c)
                      (a = h.val & h.position),
                        (h.position >>= 1),
                        0 == h.position && ((h.position = r), (h.val = n(h.index++))),
                        (u |= (a > 0 ? 1 : 0) * l),
                        (l <<= 1);
                    (s[p++] = e(u)), (f = p - 1), d--;
                    break;
                  case 2:
                    return m.join('');
                }
                if ((0 == d && ((d = Math.pow(2, v)), v++), s[f])) y = s[f];
                else {
                  if (f !== p) return null;
                  y = i + i.charAt(0);
                }
                m.push(y),
                  (s[p++] = i + y.charAt(0)),
                  d--,
                  (i = y),
                  0 == d && ((d = Math.pow(2, v)), v++);
              }
            },
          };
          return i;
        })();
      (n = function () {
        return o;
      }.call(t, r, t, e)),
        void 0 === n || (e.exports = n);
    },
  },
]);
