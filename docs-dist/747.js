(self['webpackChunkremons_components'] = self['webpackChunkremons_components'] || []).push([
  [747],
  {
    24390: function () {},
    86845: function () {},
    35713: function (e, t, n) {
      'use strict';
      var r = n(67294);
      n(24390);
      function o() {
        return (
          (o = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          o.apply(this, arguments)
        );
      }
      t['Z'] = function (e) {
        return r.createElement('div', o({ className: '__dumi-default-alert' }, e));
      };
    },
    8747: function (e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, {
          default: function () {
            return un;
          },
        });
      var r = n(67294),
        o = n(22122),
        a = n(96156),
        i = n(28481),
        l = n(90484),
        c = n(81253),
        u = n(28991),
        s = n(35510),
        f = n.n(s),
        d = n(10048),
        v = n(44581),
        m = n(82321),
        p = n(85061),
        b = n(90468),
        h = n(83710);
      function y(e) {
        var t = (0, r.useRef)(),
          n = (0, r.useRef)(!1);
        function o() {
          for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++) o[a] = arguments[a];
          n.current ||
            (b.Z.cancel(t.current),
            (t.current = (0, b.Z)(function () {
              e.apply(void 0, o);
            })));
        }
        return (
          (0, r.useEffect)(function () {
            return (
              (n.current = !1),
              function () {
                (n.current = !0), b.Z.cancel(t.current);
              }
            );
          }, []),
          o
        );
      }
      function g(e) {
        var t = (0, r.useRef)([]),
          n = (0, r.useState)({}),
          o = (0, i.Z)(n, 2),
          a = o[1],
          l = (0, r.useRef)('function' === typeof e ? e() : e),
          c = y(function () {
            var e = l.current;
            t.current.forEach(function (t) {
              e = t(e);
            }),
              (t.current = []),
              (l.current = e),
              a({});
          });
        function u(e) {
          t.current.push(e), c();
        }
        return [l.current, u];
      }
      var E = n(90826);
      function Z(e, t) {
        var n,
          o = e.prefixCls,
          i = e.id,
          l = e.active,
          c = e.tab,
          u = c.key,
          s = c.tab,
          d = c.disabled,
          v = c.closeIcon,
          m = e.closable,
          p = e.renderWrapper,
          b = e.removeAriaLabel,
          h = e.editable,
          y = e.onClick,
          g = e.onRemove,
          Z = e.onFocus,
          C = e.style,
          w = ''.concat(o, '-tab');
        r.useEffect(function () {
          return g;
        }, []);
        var k = h && !1 !== m && !d;
        function x(e) {
          d || y(e);
        }
        function N(e) {
          e.preventDefault(), e.stopPropagation(), h.onEdit('remove', { key: u, event: e });
        }
        var S = r.createElement(
          'div',
          {
            key: u,
            ref: t,
            className: f()(
              w,
              ((n = {}),
              (0, a.Z)(n, ''.concat(w, '-with-remove'), k),
              (0, a.Z)(n, ''.concat(w, '-active'), l),
              (0, a.Z)(n, ''.concat(w, '-disabled'), d),
              n),
            ),
            style: C,
            onClick: x,
          },
          r.createElement(
            'div',
            {
              role: 'tab',
              'aria-selected': l,
              id: i && ''.concat(i, '-tab-').concat(u),
              className: ''.concat(w, '-btn'),
              'aria-controls': i && ''.concat(i, '-panel-').concat(u),
              'aria-disabled': d,
              tabIndex: d ? null : 0,
              onClick: function (e) {
                e.stopPropagation(), x(e);
              },
              onKeyDown: function (e) {
                [E.Z.SPACE, E.Z.ENTER].includes(e.which) && (e.preventDefault(), x(e));
              },
              onFocus: Z,
            },
            s,
          ),
          k &&
            r.createElement(
              'button',
              {
                type: 'button',
                'aria-label': b || 'remove',
                tabIndex: 0,
                className: ''.concat(w, '-remove'),
                onClick: function (e) {
                  e.stopPropagation(), N(e);
                },
              },
              v || h.removeIcon || '\xd7',
            ),
        );
        return p ? p(S) : S;
      }
      var C = r.forwardRef(Z),
        w = { width: 0, height: 0, left: 0, top: 0 };
      function k(e, t, n) {
        return (0, r.useMemo)(
          function () {
            for (
              var n,
                r = new Map(),
                o = t.get(null === (n = e[0]) || void 0 === n ? void 0 : n.key) || w,
                a = o.left + o.width,
                i = 0;
              i < e.length;
              i += 1
            ) {
              var l,
                c = e[i].key,
                s = t.get(c);
              if (!s) s = t.get(null === (l = e[i - 1]) || void 0 === l ? void 0 : l.key) || w;
              var f = r.get(c) || (0, u.Z)({}, s);
              (f.right = a - f.left - f.width), r.set(c, f);
            }
            return r;
          },
          [
            e
              .map(function (e) {
                return e.key;
              })
              .join('_'),
            t,
            n,
          ],
        );
      }
      var x = { width: 0, height: 0, left: 0, top: 0, right: 0 };
      function N(e, t, n, o, a) {
        var i,
          l,
          c,
          u = a.tabs,
          s = a.tabPosition,
          f = a.rtl;
        ['top', 'bottom'].includes(s)
          ? ((i = 'width'), (l = f ? 'right' : 'left'), (c = Math.abs(t.left)))
          : ((i = 'height'), (l = 'top'), (c = -t.top));
        var d = t[i],
          v = n[i],
          m = o[i],
          p = d;
        return (
          v + m > d && v < d && (p = d - m),
          (0, r.useMemo)(
            function () {
              if (!u.length) return [0, 0];
              for (var t = u.length, n = t, r = 0; r < t; r += 1) {
                var o = e.get(u[r].key) || x;
                if (o[l] + o[i] > c + p) {
                  n = r - 1;
                  break;
                }
              }
              for (var a = 0, s = t - 1; s >= 0; s -= 1) {
                var f = e.get(u[s].key) || x;
                if (f[l] < c) {
                  a = s + 1;
                  break;
                }
              }
              return [a, n];
            },
            [
              e,
              c,
              p,
              s,
              u
                .map(function (e) {
                  return e.key;
                })
                .join('_'),
              f,
            ],
          )
        );
      }
      var S = n(23270),
        P = n.n(S),
        R = n(32503),
        M = n(90409),
        I = n(6610),
        _ = n(5991),
        T = n(10379),
        K = n(44144),
        O = n(26670),
        A = n(45851),
        L = ['children', 'locked'],
        D = r.createContext(null);
      function j(e, t) {
        var n = (0, u.Z)({}, e);
        return (
          Object.keys(t).forEach(function (e) {
            var r = t[e];
            void 0 !== r && (n[e] = r);
          }),
          n
        );
      }
      function B(e) {
        var t = e.children,
          n = e.locked,
          o = (0, c.Z)(e, L),
          a = r.useContext(D),
          i = (0, A.Z)(
            function () {
              return j(a, o);
            },
            [a, o],
            function (e, t) {
              return !n && (e[0] !== t[0] || !P()(e[1], t[1]));
            },
          );
        return r.createElement(D.Provider, { value: i }, t);
      }
      function V(e, t, n, o) {
        var a = r.useContext(D),
          i = a.activeKey,
          l = a.onActive,
          c = a.onInactive,
          u = { active: i === e };
        return (
          t ||
            ((u.onMouseEnter = function (t) {
              null === n || void 0 === n || n({ key: e, domEvent: t }), l(e);
            }),
            (u.onMouseLeave = function (t) {
              null === o || void 0 === o || o({ key: e, domEvent: t }), c(e);
            })),
          u
        );
      }
      var F = ['item'];
      function W(e) {
        var t = e.item,
          n = (0, c.Z)(e, F);
        return (
          Object.defineProperty(n, 'item', {
            get: function () {
              return (
                (0, R.ZP)(
                  !1,
                  '`info.item` is deprecated since we will move to function component that not provides React Node instance in future.',
                ),
                t
              );
            },
          }),
          n
        );
      }
      function z(e) {
        var t,
          n = e.icon,
          o = e.props,
          a = e.children;
        return (
          (t = 'function' === typeof n ? r.createElement(n, (0, u.Z)({}, o)) : n), t || a || null
        );
      }
      function H(e) {
        var t = r.useContext(D),
          n = t.mode,
          o = t.rtl,
          a = t.inlineIndent;
        if ('inline' !== n) return null;
        var i = e;
        return o ? { paddingRight: i * a } : { paddingLeft: i * a };
      }
      var U = [],
        G = r.createContext(null);
      function X() {
        return r.useContext(G);
      }
      var Y = r.createContext(U);
      function q(e) {
        var t = r.useContext(Y);
        return r.useMemo(
          function () {
            return void 0 !== e ? [].concat((0, p.Z)(t), [e]) : t;
          },
          [t, e],
        );
      }
      var $ = r.createContext(null),
        J = r.createContext(null);
      function Q(e, t) {
        return void 0 === e ? null : ''.concat(e, '-').concat(t);
      }
      function ee(e) {
        var t = r.useContext(J);
        return Q(t, e);
      }
      var te = r.createContext({}),
        ne = te,
        re = ['title', 'attribute', 'elementRef'],
        oe = [
          'style',
          'className',
          'eventKey',
          'warnKey',
          'disabled',
          'itemIcon',
          'children',
          'role',
          'onMouseEnter',
          'onMouseLeave',
          'onClick',
          'onKeyDown',
          'onFocus',
        ],
        ae = ['active'],
        ie = (function (e) {
          (0, T.Z)(n, e);
          var t = (0, K.Z)(n);
          function n() {
            return (0, I.Z)(this, n), t.apply(this, arguments);
          }
          return (
            (0, _.Z)(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.title,
                    n = e.attribute,
                    a = e.elementRef,
                    i = (0, c.Z)(e, re),
                    l = (0, O.Z)(i, ['eventKey']);
                  return (
                    (0, R.ZP)(
                      !n,
                      '`attribute` of Menu.Item is deprecated. Please pass attribute directly.',
                    ),
                    r.createElement(
                      M.Z.Item,
                      (0, o.Z)({}, n, { title: 'string' === typeof t ? t : void 0 }, l, { ref: a }),
                    )
                  );
                },
              },
            ]),
            n
          );
        })(r.Component),
        le = function (e) {
          var t,
            n = e.style,
            i = e.className,
            l = e.eventKey,
            s = (e.warnKey, e.disabled),
            d = e.itemIcon,
            v = e.children,
            m = e.role,
            b = e.onMouseEnter,
            h = e.onMouseLeave,
            y = e.onClick,
            g = e.onKeyDown,
            Z = e.onFocus,
            C = (0, c.Z)(e, oe),
            w = ee(l),
            k = r.useContext(D),
            x = k.prefixCls,
            N = k.onItemClick,
            S = k.disabled,
            P = k.overflowDisabled,
            R = k.itemIcon,
            M = k.selectedKeys,
            I = k.onActive,
            _ = r.useContext(ne),
            T = _._internalRenderMenuItem,
            K = ''.concat(x, '-item'),
            O = r.useRef(),
            A = r.useRef(),
            L = S || s,
            j = q(l);
          var B = function (e) {
              return { key: l, keyPath: (0, p.Z)(j).reverse(), item: O.current, domEvent: e };
            },
            F = d || R,
            U = V(l, L, b, h),
            G = U.active,
            X = (0, c.Z)(U, ae),
            Y = M.includes(l),
            $ = H(j.length),
            J = function (e) {
              if (!L) {
                var t = B(e);
                null === y || void 0 === y || y(W(t)), N(t);
              }
            },
            Q = function (e) {
              if ((null === g || void 0 === g || g(e), e.which === E.Z.ENTER)) {
                var t = B(e);
                null === y || void 0 === y || y(W(t)), N(t);
              }
            },
            te = function (e) {
              I(l), null === Z || void 0 === Z || Z(e);
            },
            re = {};
          'option' === e.role && (re['aria-selected'] = Y);
          var le = r.createElement(
            ie,
            (0, o.Z)(
              {
                ref: O,
                elementRef: A,
                role: null === m ? 'none' : m || 'menuitem',
                tabIndex: s ? null : -1,
                'data-menu-id': P && w ? null : w,
              },
              C,
              X,
              re,
              {
                component: 'li',
                'aria-disabled': s,
                style: (0, u.Z)((0, u.Z)({}, $), n),
                className: f()(
                  K,
                  ((t = {}),
                  (0, a.Z)(t, ''.concat(K, '-active'), G),
                  (0, a.Z)(t, ''.concat(K, '-selected'), Y),
                  (0, a.Z)(t, ''.concat(K, '-disabled'), L),
                  t),
                  i,
                ),
                onClick: J,
                onKeyDown: Q,
                onFocus: te,
              },
            ),
            v,
            r.createElement(z, {
              props: (0, u.Z)((0, u.Z)({}, e), {}, { isSelected: Y }),
              icon: F,
            }),
          );
          return T && (le = T(le, e, { selected: Y })), le;
        };
      function ce(e) {
        var t = e.eventKey,
          n = X(),
          o = q(t);
        return (
          r.useEffect(
            function () {
              if (n)
                return (
                  n.registerPath(t, o),
                  function () {
                    n.unregisterPath(t, o);
                  }
                );
            },
            [o],
          ),
          n ? null : r.createElement(le, e)
        );
      }
      var ue = ce,
        se = ['label', 'children', 'key', 'type'];
      function fe(e, t) {
        return (0, d.Z)(e).map(function (e, n) {
          if (r.isValidElement(e)) {
            var o,
              a,
              i = e.key,
              l =
                null !== (o = null === (a = e.props) || void 0 === a ? void 0 : a.eventKey) &&
                void 0 !== o
                  ? o
                  : i,
              c = null === l || void 0 === l;
            c && (l = 'tmp_key-'.concat([].concat((0, p.Z)(t), [n]).join('-')));
            var u = { key: l, eventKey: l };
            return r.cloneElement(e, u);
          }
          return e;
        });
      }
      function de(e) {
        return (e || [])
          .map(function (e, t) {
            if (e && 'object' === (0, l.Z)(e)) {
              var n = e.label,
                a = e.children,
                i = e.key,
                u = e.type,
                s = (0, c.Z)(e, se),
                f = null !== i && void 0 !== i ? i : 'tmp-'.concat(t);
              return a || 'group' === u
                ? 'group' === u
                  ? r.createElement(st, (0, o.Z)({ key: f }, s, { title: n }), de(a))
                  : r.createElement(Ie, (0, o.Z)({ key: f }, s, { title: n }), de(a))
                : 'divider' === u
                ? r.createElement(ft, (0, o.Z)({ key: f }, s))
                : r.createElement(ue, (0, o.Z)({ key: f }, s), n);
            }
            return null;
          })
          .filter(function (e) {
            return e;
          });
      }
      function ve(e, t, n) {
        var r = e;
        return t && (r = de(t)), fe(r, n);
      }
      function me(e) {
        var t = r.useRef(e);
        t.current = e;
        var n = r.useCallback(function () {
          for (var e, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return null === (e = t.current) || void 0 === e ? void 0 : e.call.apply(e, [t].concat(r));
        }, []);
        return e ? n : void 0;
      }
      var pe = ['className', 'children'],
        be = function (e, t) {
          var n = e.className,
            a = e.children,
            i = (0, c.Z)(e, pe),
            l = r.useContext(D),
            u = l.prefixCls,
            s = l.mode,
            d = l.rtl;
          return r.createElement(
            'ul',
            (0, o.Z)(
              {
                className: f()(
                  u,
                  d && ''.concat(u, '-rtl'),
                  ''.concat(u, '-sub'),
                  ''.concat(u, '-').concat('inline' === s ? 'inline' : 'vertical'),
                  n,
                ),
              },
              i,
              { 'data-menu-list': !0, ref: t },
            ),
            a,
          );
        },
        he = r.forwardRef(be);
      he.displayName = 'SubMenuList';
      var ye = he,
        ge = n(77814),
        Ee = { adjustX: 1, adjustY: 1 },
        Ze = {
          topLeft: { points: ['bl', 'tl'], overflow: Ee, offset: [0, -7] },
          bottomLeft: { points: ['tl', 'bl'], overflow: Ee, offset: [0, 7] },
          leftTop: { points: ['tr', 'tl'], overflow: Ee, offset: [-4, 0] },
          rightTop: { points: ['tl', 'tr'], overflow: Ee, offset: [4, 0] },
        },
        Ce = {
          topLeft: { points: ['bl', 'tl'], overflow: Ee, offset: [0, -7] },
          bottomLeft: { points: ['tl', 'bl'], overflow: Ee, offset: [0, 7] },
          rightTop: { points: ['tr', 'tl'], overflow: Ee, offset: [-4, 0] },
          leftTop: { points: ['tl', 'tr'], overflow: Ee, offset: [4, 0] },
        };
      function we(e, t, n) {
        return t || (n ? n[e] || n.other : void 0);
      }
      var ke = {
        horizontal: 'bottomLeft',
        vertical: 'rightTop',
        'vertical-left': 'rightTop',
        'vertical-right': 'leftTop',
      };
      function xe(e) {
        var t = e.prefixCls,
          n = e.visible,
          o = e.children,
          l = e.popup,
          c = e.popupClassName,
          s = e.popupOffset,
          d = e.disabled,
          v = e.mode,
          m = e.onVisibleChange,
          p = r.useContext(D),
          h = p.getPopupContainer,
          y = p.rtl,
          g = p.subMenuOpenDelay,
          E = p.subMenuCloseDelay,
          Z = p.builtinPlacements,
          C = p.triggerSubMenuAction,
          w = p.forceSubMenuRender,
          k = p.rootClassName,
          x = p.motion,
          N = p.defaultMotions,
          S = r.useState(!1),
          P = (0, i.Z)(S, 2),
          R = P[0],
          M = P[1],
          I = y ? (0, u.Z)((0, u.Z)({}, Ce), Z) : (0, u.Z)((0, u.Z)({}, Ze), Z),
          _ = ke[v],
          T = we(v, x, N),
          K = (0, u.Z)(
            (0, u.Z)({}, T),
            {},
            { leavedClassName: ''.concat(t, '-hidden'), removeOnLeave: !1, motionAppear: !0 },
          ),
          O = r.useRef();
        return (
          r.useEffect(
            function () {
              return (
                (O.current = (0, b.Z)(function () {
                  M(n);
                })),
                function () {
                  b.Z.cancel(O.current);
                }
              );
            },
            [n],
          ),
          r.createElement(
            ge.Z,
            {
              prefixCls: t,
              popupClassName: f()(
                ''.concat(t, '-popup'),
                (0, a.Z)({}, ''.concat(t, '-rtl'), y),
                c,
                k,
              ),
              stretch: 'horizontal' === v ? 'minWidth' : null,
              getPopupContainer: h,
              builtinPlacements: I,
              popupPlacement: _,
              popupVisible: R,
              popup: l,
              popupAlign: s && { offset: s },
              action: d ? [] : [C],
              mouseEnterDelay: g,
              mouseLeaveDelay: E,
              onPopupVisibleChange: m,
              forceRender: w,
              popupMotion: K,
            },
            o,
          )
        );
      }
      var Ne = n(80289);
      function Se(e) {
        var t = e.id,
          n = e.open,
          a = e.keyPath,
          l = e.children,
          c = 'inline',
          s = r.useContext(D),
          f = s.prefixCls,
          d = s.forceSubMenuRender,
          v = s.motion,
          m = s.defaultMotions,
          p = s.mode,
          b = r.useRef(!1);
        b.current = p === c;
        var h = r.useState(!b.current),
          y = (0, i.Z)(h, 2),
          g = y[0],
          E = y[1],
          Z = !!b.current && n;
        r.useEffect(
          function () {
            b.current && E(!1);
          },
          [p],
        );
        var C = (0, u.Z)({}, we(c, v, m));
        a.length > 1 && (C.motionAppear = !1);
        var w = C.onVisibleChanged;
        return (
          (C.onVisibleChanged = function (e) {
            return b.current || e || E(!0), null === w || void 0 === w ? void 0 : w(e);
          }),
          g
            ? null
            : r.createElement(
                B,
                { mode: c, locked: !b.current },
                r.createElement(
                  Ne.Z,
                  (0, o.Z)({ visible: Z }, C, {
                    forceRender: d,
                    removeOnLeave: !1,
                    leavedClassName: ''.concat(f, '-hidden'),
                  }),
                  function (e) {
                    var n = e.className,
                      o = e.style;
                    return r.createElement(ye, { id: t, className: n, style: o }, l);
                  },
                ),
              )
        );
      }
      var Pe = [
          'style',
          'className',
          'title',
          'eventKey',
          'warnKey',
          'disabled',
          'internalPopupClose',
          'children',
          'itemIcon',
          'expandIcon',
          'popupClassName',
          'popupOffset',
          'onClick',
          'onMouseEnter',
          'onMouseLeave',
          'onTitleClick',
          'onTitleMouseEnter',
          'onTitleMouseLeave',
        ],
        Re = ['active'],
        Me = function (e) {
          var t,
            n = e.style,
            l = e.className,
            s = e.title,
            d = e.eventKey,
            v = (e.warnKey, e.disabled),
            m = e.internalPopupClose,
            p = e.children,
            b = e.itemIcon,
            h = e.expandIcon,
            y = e.popupClassName,
            g = e.popupOffset,
            E = e.onClick,
            Z = e.onMouseEnter,
            C = e.onMouseLeave,
            w = e.onTitleClick,
            k = e.onTitleMouseEnter,
            x = e.onTitleMouseLeave,
            N = (0, c.Z)(e, Pe),
            S = ee(d),
            P = r.useContext(D),
            R = P.prefixCls,
            I = P.mode,
            _ = P.openKeys,
            T = P.disabled,
            K = P.overflowDisabled,
            O = P.activeKey,
            A = P.selectedKeys,
            L = P.itemIcon,
            j = P.expandIcon,
            F = P.onItemClick,
            U = P.onOpenChange,
            G = P.onActive,
            X = r.useContext(ne),
            Y = X._internalRenderSubMenuItem,
            J = r.useContext($),
            Q = J.isSubPathKey,
            te = q(),
            re = ''.concat(R, '-submenu'),
            oe = T || v,
            ae = r.useRef(),
            ie = r.useRef();
          var le = b || L,
            ce = h || j,
            ue = _.includes(d),
            se = !K && ue,
            fe = Q(A, d),
            de = V(d, oe, k, x),
            ve = de.active,
            pe = (0, c.Z)(de, Re),
            be = r.useState(!1),
            he = (0, i.Z)(be, 2),
            ge = he[0],
            Ee = he[1],
            Ze = function (e) {
              oe || Ee(e);
            },
            Ce = function (e) {
              Ze(!0), null === Z || void 0 === Z || Z({ key: d, domEvent: e });
            },
            we = function (e) {
              Ze(!1), null === C || void 0 === C || C({ key: d, domEvent: e });
            },
            ke = r.useMemo(
              function () {
                return ve || ('inline' !== I && (ge || Q([O], d)));
              },
              [I, ve, O, ge, d, Q],
            ),
            Ne = H(te.length),
            Me = function (e) {
              oe ||
                (null === w || void 0 === w || w({ key: d, domEvent: e }),
                'inline' === I && U(d, !ue));
            },
            Ie = me(function (e) {
              null === E || void 0 === E || E(W(e)), F(e);
            }),
            _e = function (e) {
              'inline' !== I && U(d, e);
            },
            Te = function () {
              G(d);
            },
            Ke = S && ''.concat(S, '-popup'),
            Oe = r.createElement(
              'div',
              (0, o.Z)(
                {
                  role: 'menuitem',
                  style: Ne,
                  className: ''.concat(re, '-title'),
                  tabIndex: oe ? null : -1,
                  ref: ae,
                  title: 'string' === typeof s ? s : null,
                  'data-menu-id': K && S ? null : S,
                  'aria-expanded': se,
                  'aria-haspopup': !0,
                  'aria-controls': Ke,
                  'aria-disabled': oe,
                  onClick: Me,
                  onFocus: Te,
                },
                pe,
              ),
              s,
              r.createElement(
                z,
                {
                  icon: 'horizontal' !== I ? ce : null,
                  props: (0, u.Z)((0, u.Z)({}, e), {}, { isOpen: se, isSubMenu: !0 }),
                },
                r.createElement('i', { className: ''.concat(re, '-arrow') }),
              ),
            ),
            Ae = r.useRef(I);
          if (('inline' !== I && (Ae.current = te.length > 1 ? 'vertical' : I), !K)) {
            var Le = Ae.current;
            Oe = r.createElement(
              xe,
              {
                mode: Le,
                prefixCls: re,
                visible: !m && se && 'inline' !== I,
                popupClassName: y,
                popupOffset: g,
                popup: r.createElement(
                  B,
                  { mode: 'horizontal' === Le ? 'vertical' : Le },
                  r.createElement(ye, { id: Ke, ref: ie }, p),
                ),
                disabled: oe,
                onVisibleChange: _e,
              },
              Oe,
            );
          }
          var De = r.createElement(
            M.Z.Item,
            (0, o.Z)({ role: 'none' }, N, {
              component: 'li',
              style: n,
              className: f()(
                re,
                ''.concat(re, '-').concat(I),
                l,
                ((t = {}),
                (0, a.Z)(t, ''.concat(re, '-open'), se),
                (0, a.Z)(t, ''.concat(re, '-active'), ke),
                (0, a.Z)(t, ''.concat(re, '-selected'), fe),
                (0, a.Z)(t, ''.concat(re, '-disabled'), oe),
                t),
              ),
              onMouseEnter: Ce,
              onMouseLeave: we,
            }),
            Oe,
            !K && r.createElement(Se, { id: Ke, open: se, keyPath: te }, p),
          );
          return (
            Y && (De = Y(De, e, { selected: fe, active: ke, open: se, disabled: oe })),
            r.createElement(
              B,
              {
                onItemClick: Ie,
                mode: 'horizontal' === I ? 'vertical' : I,
                itemIcon: le,
                expandIcon: ce,
              },
              De,
            )
          );
        };
      function Ie(e) {
        var t,
          n = e.eventKey,
          o = e.children,
          a = q(n),
          i = fe(o, a),
          l = X();
        return (
          r.useEffect(
            function () {
              if (l)
                return (
                  l.registerPath(n, a),
                  function () {
                    l.unregisterPath(n, a);
                  }
                );
            },
            [a],
          ),
          (t = l ? i : r.createElement(Me, e, i)),
          r.createElement(Y.Provider, { value: a }, t)
        );
      }
      var _e = n(63616),
        Te = E.Z.LEFT,
        Ke = E.Z.RIGHT,
        Oe = E.Z.UP,
        Ae = E.Z.DOWN,
        Le = E.Z.ENTER,
        De = E.Z.ESC,
        je = E.Z.HOME,
        Be = E.Z.END,
        Ve = [Oe, Ae, Te, Ke];
      function Fe(e, t, n, r) {
        var o,
          i,
          l,
          c,
          u = 'prev',
          s = 'next',
          f = 'children',
          d = 'parent';
        if ('inline' === e && r === Le) return { inlineTrigger: !0 };
        var v = ((o = {}), (0, a.Z)(o, Oe, u), (0, a.Z)(o, Ae, s), o),
          m =
            ((i = {}),
            (0, a.Z)(i, Te, n ? s : u),
            (0, a.Z)(i, Ke, n ? u : s),
            (0, a.Z)(i, Ae, f),
            (0, a.Z)(i, Le, f),
            i),
          p =
            ((l = {}),
            (0, a.Z)(l, Oe, u),
            (0, a.Z)(l, Ae, s),
            (0, a.Z)(l, Le, f),
            (0, a.Z)(l, De, d),
            (0, a.Z)(l, Te, n ? f : d),
            (0, a.Z)(l, Ke, n ? d : f),
            l),
          b = {
            inline: v,
            horizontal: m,
            vertical: p,
            inlineSub: v,
            horizontalSub: p,
            verticalSub: p,
          },
          h = null === (c = b[''.concat(e).concat(t ? '' : 'Sub')]) || void 0 === c ? void 0 : c[r];
        switch (h) {
          case u:
            return { offset: -1, sibling: !0 };
          case s:
            return { offset: 1, sibling: !0 };
          case d:
            return { offset: -1, sibling: !1 };
          case f:
            return { offset: 1, sibling: !1 };
          default:
            return null;
        }
      }
      function We(e) {
        var t = e;
        while (t) {
          if (t.getAttribute('data-menu-list')) return t;
          t = t.parentElement;
        }
        return null;
      }
      function ze(e, t) {
        var n = e || document.activeElement;
        while (n) {
          if (t.has(n)) return n;
          n = n.parentElement;
        }
        return null;
      }
      function He(e, t) {
        var n = (0, _e.tS)(e, !0);
        return n.filter(function (e) {
          return t.has(e);
        });
      }
      function Ue(e, t, n) {
        var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        if (!e) return null;
        var o = He(e, t),
          a = o.length,
          i = o.findIndex(function (e) {
            return n === e;
          });
        return (
          r < 0 ? (-1 === i ? (i = a - 1) : (i -= 1)) : r > 0 && (i += 1), (i = (i + a) % a), o[i]
        );
      }
      function Ge(e, t, n, o, a, i, l, c, u, s) {
        var f = r.useRef(),
          d = r.useRef();
        d.current = t;
        var v = function () {
          b.Z.cancel(f.current);
        };
        return (
          r.useEffect(function () {
            return function () {
              v();
            };
          }, []),
          function (r) {
            var m = r.which;
            if ([].concat(Ve, [Le, De, je, Be]).includes(m)) {
              var p,
                h,
                y,
                g = function () {
                  (p = new Set()), (h = new Map()), (y = new Map());
                  var e = i();
                  return (
                    e.forEach(function (e) {
                      var t = document.querySelector("[data-menu-id='".concat(Q(o, e), "']"));
                      t && (p.add(t), y.set(t, e), h.set(e, t));
                    }),
                    p
                  );
                };
              g();
              var E = h.get(t),
                Z = ze(E, p),
                C = y.get(Z),
                w = Fe(e, 1 === l(C, !0).length, n, m);
              if (!w && m !== je && m !== Be) return;
              (Ve.includes(m) || [je, Be].includes(m)) && r.preventDefault();
              var k = function (e) {
                if (e) {
                  var t = e,
                    n = e.querySelector('a');
                  (null === n || void 0 === n ? void 0 : n.getAttribute('href')) && (t = n);
                  var r = y.get(e);
                  c(r),
                    v(),
                    (f.current = (0, b.Z)(function () {
                      d.current === r && t.focus();
                    }));
                }
              };
              if ([je, Be].includes(m) || w.sibling || !Z) {
                var x, N;
                x = Z && 'inline' !== e ? We(Z) : a.current;
                var S = He(x, p);
                (N = m === je ? S[0] : m === Be ? S[S.length - 1] : Ue(x, p, Z, w.offset)), k(N);
              } else if (w.inlineTrigger) u(C);
              else if (w.offset > 0)
                u(C, !0),
                  v(),
                  (f.current = (0, b.Z)(function () {
                    g();
                    var e = Z.getAttribute('aria-controls'),
                      t = document.getElementById(e),
                      n = Ue(t, p);
                    k(n);
                  }, 5));
              else if (w.offset < 0) {
                var P = l(C, !0),
                  R = P[P.length - 2],
                  M = h.get(R);
                u(R, !1), k(M);
              }
            }
            null === s || void 0 === s || s(r);
          }
        );
      }
      var Xe = Math.random().toFixed(5).toString().slice(2),
        Ye = 0;
      function qe(e) {
        var t = (0, m.Z)(e, { value: e }),
          n = (0, i.Z)(t, 2),
          o = n[0],
          a = n[1];
        return (
          r.useEffect(function () {
            Ye += 1;
            var e = ''.concat(Xe, '-').concat(Ye);
            a('rc-menu-uuid-'.concat(e));
          }, []),
          o
        );
      }
      function $e(e) {
        Promise.resolve().then(e);
      }
      var Je = '__RC_UTIL_PATH_SPLIT__',
        Qe = function (e) {
          return e.join(Je);
        },
        et = function (e) {
          return e.split(Je);
        },
        tt = 'rc-menu-more';
      function nt() {
        var e = r.useState({}),
          t = (0, i.Z)(e, 2),
          n = t[1],
          o = (0, r.useRef)(new Map()),
          a = (0, r.useRef)(new Map()),
          l = r.useState([]),
          c = (0, i.Z)(l, 2),
          u = c[0],
          s = c[1],
          f = (0, r.useRef)(0),
          d = (0, r.useRef)(!1),
          v = function () {
            d.current || n({});
          },
          m = (0, r.useCallback)(function (e, t) {
            var n = Qe(t);
            a.current.set(n, e), o.current.set(e, n), (f.current += 1);
            var r = f.current;
            $e(function () {
              r === f.current && v();
            });
          }, []),
          b = (0, r.useCallback)(function (e, t) {
            var n = Qe(t);
            a.current['delete'](n), o.current['delete'](e);
          }, []),
          h = (0, r.useCallback)(function (e) {
            s(e);
          }, []),
          y = (0, r.useCallback)(
            function (e, t) {
              var n = o.current.get(e) || '',
                r = et(n);
              return t && u.includes(r[0]) && r.unshift(tt), r;
            },
            [u],
          ),
          g = (0, r.useCallback)(
            function (e, t) {
              return e.some(function (e) {
                var n = y(e, !0);
                return n.includes(t);
              });
            },
            [y],
          ),
          E = function () {
            var e = (0, p.Z)(o.current.keys());
            return u.length && e.push(tt), e;
          },
          Z = (0, r.useCallback)(function (e) {
            var t = ''.concat(o.current.get(e)).concat(Je),
              n = new Set();
            return (
              (0, p.Z)(a.current.keys()).forEach(function (e) {
                e.startsWith(t) && n.add(a.current.get(e));
              }),
              n
            );
          }, []);
        return (
          r.useEffect(function () {
            return function () {
              d.current = !0;
            };
          }, []),
          {
            registerPath: m,
            unregisterPath: b,
            refreshOverflowKeys: h,
            isSubPathKey: g,
            getKeyPath: y,
            getKeys: E,
            getSubPathKeys: Z,
          }
        );
      }
      var rt = [
          'prefixCls',
          'rootClassName',
          'style',
          'className',
          'tabIndex',
          'items',
          'children',
          'direction',
          'id',
          'mode',
          'inlineCollapsed',
          'disabled',
          'disabledOverflow',
          'subMenuOpenDelay',
          'subMenuCloseDelay',
          'forceSubMenuRender',
          'defaultOpenKeys',
          'openKeys',
          'activeKey',
          'defaultActiveFirst',
          'selectable',
          'multiple',
          'defaultSelectedKeys',
          'selectedKeys',
          'onSelect',
          'onDeselect',
          'inlineIndent',
          'motion',
          'defaultMotions',
          'triggerSubMenuAction',
          'builtinPlacements',
          'itemIcon',
          'expandIcon',
          'overflowedIndicator',
          'overflowedIndicatorPopupClassName',
          'getPopupContainer',
          'onClick',
          'onOpenChange',
          'onKeyDown',
          'openAnimation',
          'openTransitionName',
          '_internalRenderMenuItem',
          '_internalRenderSubMenuItem',
        ],
        ot = [],
        at = r.forwardRef(function (e, t) {
          var n,
            l,
            s = e.prefixCls,
            d = void 0 === s ? 'rc-menu' : s,
            v = e.rootClassName,
            b = e.style,
            h = e.className,
            y = e.tabIndex,
            g = void 0 === y ? 0 : y,
            E = e.items,
            Z = e.children,
            C = e.direction,
            w = e.id,
            k = e.mode,
            x = void 0 === k ? 'vertical' : k,
            N = e.inlineCollapsed,
            S = e.disabled,
            R = e.disabledOverflow,
            I = e.subMenuOpenDelay,
            _ = void 0 === I ? 0.1 : I,
            T = e.subMenuCloseDelay,
            K = void 0 === T ? 0.1 : T,
            O = e.forceSubMenuRender,
            A = e.defaultOpenKeys,
            L = e.openKeys,
            D = e.activeKey,
            j = e.defaultActiveFirst,
            V = e.selectable,
            F = void 0 === V || V,
            z = e.multiple,
            H = void 0 !== z && z,
            U = e.defaultSelectedKeys,
            X = e.selectedKeys,
            Y = e.onSelect,
            q = e.onDeselect,
            ee = e.inlineIndent,
            te = void 0 === ee ? 24 : ee,
            re = e.motion,
            oe = e.defaultMotions,
            ae = e.triggerSubMenuAction,
            ie = void 0 === ae ? 'hover' : ae,
            le = e.builtinPlacements,
            ce = e.itemIcon,
            se = e.expandIcon,
            fe = e.overflowedIndicator,
            de = void 0 === fe ? '...' : fe,
            pe = e.overflowedIndicatorPopupClassName,
            be = e.getPopupContainer,
            he = e.onClick,
            ye = e.onOpenChange,
            ge = e.onKeyDown,
            Ee = (e.openAnimation, e.openTransitionName, e._internalRenderMenuItem),
            Ze = e._internalRenderSubMenuItem,
            Ce = (0, c.Z)(e, rt),
            we = r.useMemo(
              function () {
                return ve(Z, E, ot);
              },
              [Z, E],
            ),
            ke = r.useState(!1),
            xe = (0, i.Z)(ke, 2),
            Ne = xe[0],
            Se = xe[1],
            Pe = r.useRef(),
            Re = qe(w),
            Me = 'rtl' === C;
          var _e = r.useMemo(
              function () {
                return ('inline' !== x && 'vertical' !== x) || !N ? [x, !1] : ['vertical', N];
              },
              [x, N],
            ),
            Te = (0, i.Z)(_e, 2),
            Ke = Te[0],
            Oe = Te[1],
            Ae = r.useState(0),
            Le = (0, i.Z)(Ae, 2),
            De = Le[0],
            je = Le[1],
            Be = De >= we.length - 1 || 'horizontal' !== Ke || R,
            Ve = (0, m.Z)(A, {
              value: L,
              postState: function (e) {
                return e || ot;
              },
            }),
            Fe = (0, i.Z)(Ve, 2),
            We = Fe[0],
            ze = Fe[1],
            He = function (e) {
              ze(e), null === ye || void 0 === ye || ye(e);
            },
            Ue = r.useState(We),
            Xe = (0, i.Z)(Ue, 2),
            Ye = Xe[0],
            $e = Xe[1],
            Je = 'inline' === Ke,
            Qe = r.useRef(!1);
          r.useEffect(
            function () {
              Je && $e(We);
            },
            [We],
          ),
            r.useEffect(
              function () {
                Qe.current && (Je ? ze(Ye) : He(ot));
              },
              [Je],
            ),
            r.useEffect(function () {
              return (
                (Qe.current = !0),
                function () {
                  Qe.current = !1;
                }
              );
            }, []);
          var et = nt(),
            at = et.registerPath,
            it = et.unregisterPath,
            lt = et.refreshOverflowKeys,
            ct = et.isSubPathKey,
            ut = et.getKeyPath,
            st = et.getKeys,
            ft = et.getSubPathKeys,
            dt = r.useMemo(
              function () {
                return { registerPath: at, unregisterPath: it };
              },
              [at, it],
            ),
            vt = r.useMemo(
              function () {
                return { isSubPathKey: ct };
              },
              [ct],
            );
          r.useEffect(
            function () {
              lt(
                Be
                  ? ot
                  : we.slice(De + 1).map(function (e) {
                      return e.key;
                    }),
              );
            },
            [De, Be],
          );
          var mt = (0, m.Z)(D || (j && (null === (n = we[0]) || void 0 === n ? void 0 : n.key)), {
              value: D,
            }),
            pt = (0, i.Z)(mt, 2),
            bt = pt[0],
            ht = pt[1],
            yt = me(function (e) {
              ht(e);
            }),
            gt = me(function () {
              ht(void 0);
            });
          (0, r.useImperativeHandle)(t, function () {
            return {
              list: Pe.current,
              focus: function (e) {
                var t,
                  n,
                  r,
                  o,
                  a =
                    null !== bt && void 0 !== bt
                      ? bt
                      : null ===
                          (t = we.find(function (e) {
                            return !e.props.disabled;
                          })) || void 0 === t
                      ? void 0
                      : t.key;
                a &&
                  (null === (n = Pe.current) ||
                    void 0 === n ||
                    null === (r = n.querySelector("li[data-menu-id='".concat(Q(Re, a), "']"))) ||
                    void 0 === r ||
                    null === (o = r.focus) ||
                    void 0 === o ||
                    o.call(r, e));
              },
            };
          });
          var Et = (0, m.Z)(U || [], {
              value: X,
              postState: function (e) {
                return Array.isArray(e) ? e : null === e || void 0 === e ? ot : [e];
              },
            }),
            Zt = (0, i.Z)(Et, 2),
            Ct = Zt[0],
            wt = Zt[1],
            kt = function (e) {
              if (F) {
                var t,
                  n = e.key,
                  r = Ct.includes(n);
                (t = H
                  ? r
                    ? Ct.filter(function (e) {
                        return e !== n;
                      })
                    : [].concat((0, p.Z)(Ct), [n])
                  : [n]),
                  wt(t);
                var o = (0, u.Z)((0, u.Z)({}, e), {}, { selectedKeys: t });
                r ? null === q || void 0 === q || q(o) : null === Y || void 0 === Y || Y(o);
              }
              !H && We.length && 'inline' !== Ke && He(ot);
            },
            xt = me(function (e) {
              null === he || void 0 === he || he(W(e)), kt(e);
            }),
            Nt = me(function (e, t) {
              var n = We.filter(function (t) {
                return t !== e;
              });
              if (t) n.push(e);
              else if ('inline' !== Ke) {
                var r = ft(e);
                n = n.filter(function (e) {
                  return !r.has(e);
                });
              }
              P()(We, n) || He(n);
            }),
            St = me(be),
            Pt = function (e, t) {
              var n = null !== t && void 0 !== t ? t : !We.includes(e);
              Nt(e, n);
            },
            Rt = Ge(Ke, bt, Me, Re, Pe, st, ut, ht, Pt, ge);
          r.useEffect(function () {
            Se(!0);
          }, []);
          var Mt = r.useMemo(
              function () {
                return { _internalRenderMenuItem: Ee, _internalRenderSubMenuItem: Ze };
              },
              [Ee, Ze],
            ),
            It =
              'horizontal' !== Ke || R
                ? we
                : we.map(function (e, t) {
                    return r.createElement(B, { key: e.key, overflowDisabled: t > De }, e);
                  }),
            _t = r.createElement(
              M.Z,
              (0, o.Z)(
                {
                  id: w,
                  ref: Pe,
                  prefixCls: ''.concat(d, '-overflow'),
                  component: 'ul',
                  itemComponent: ue,
                  className: f()(
                    d,
                    ''.concat(d, '-root'),
                    ''.concat(d, '-').concat(Ke),
                    h,
                    ((l = {}),
                    (0, a.Z)(l, ''.concat(d, '-inline-collapsed'), Oe),
                    (0, a.Z)(l, ''.concat(d, '-rtl'), Me),
                    l),
                    v,
                  ),
                  dir: C,
                  style: b,
                  role: 'menu',
                  tabIndex: g,
                  data: It,
                  renderRawItem: function (e) {
                    return e;
                  },
                  renderRawRest: function (e) {
                    var t = e.length,
                      n = t ? we.slice(-t) : null;
                    return r.createElement(
                      Ie,
                      {
                        eventKey: tt,
                        title: de,
                        disabled: Be,
                        internalPopupClose: 0 === t,
                        popupClassName: pe,
                      },
                      n,
                    );
                  },
                  maxCount: 'horizontal' !== Ke || R ? M.Z.INVALIDATE : M.Z.RESPONSIVE,
                  ssr: 'full',
                  'data-menu-list': !0,
                  onVisibleChange: function (e) {
                    je(e);
                  },
                  onKeyDown: Rt,
                },
                Ce,
              ),
            );
          return r.createElement(
            ne.Provider,
            { value: Mt },
            r.createElement(
              J.Provider,
              { value: Re },
              r.createElement(
                B,
                {
                  prefixCls: d,
                  rootClassName: v,
                  mode: Ke,
                  openKeys: We,
                  rtl: Me,
                  disabled: S,
                  motion: Ne ? re : null,
                  defaultMotions: Ne ? oe : null,
                  activeKey: bt,
                  onActive: yt,
                  onInactive: gt,
                  selectedKeys: Ct,
                  inlineIndent: te,
                  subMenuOpenDelay: _,
                  subMenuCloseDelay: K,
                  forceSubMenuRender: O,
                  builtinPlacements: le,
                  triggerSubMenuAction: ie,
                  getPopupContainer: St,
                  itemIcon: ce,
                  expandIcon: se,
                  onItemClick: xt,
                  onOpenChange: Nt,
                },
                r.createElement($.Provider, { value: vt }, _t),
                r.createElement(
                  'div',
                  { style: { display: 'none' }, 'aria-hidden': !0 },
                  r.createElement(G.Provider, { value: dt }, we),
                ),
              ),
            ),
          );
        }),
        it = at,
        lt = ['className', 'title', 'eventKey', 'children'],
        ct = ['children'],
        ut = function (e) {
          var t = e.className,
            n = e.title,
            a = (e.eventKey, e.children),
            i = (0, c.Z)(e, lt),
            l = r.useContext(D),
            u = l.prefixCls,
            s = ''.concat(u, '-item-group');
          return r.createElement(
            'li',
            (0, o.Z)({}, i, {
              onClick: function (e) {
                return e.stopPropagation();
              },
              className: f()(s, t),
            }),
            r.createElement(
              'div',
              { className: ''.concat(s, '-title'), title: 'string' === typeof n ? n : void 0 },
              n,
            ),
            r.createElement('ul', { className: ''.concat(s, '-list') }, a),
          );
        };
      function st(e) {
        var t = e.children,
          n = (0, c.Z)(e, ct),
          o = q(n.eventKey),
          a = fe(t, o),
          i = X();
        return i ? a : r.createElement(ut, (0, O.Z)(n, ['warnKey']), a);
      }
      function ft(e) {
        var t = e.className,
          n = e.style,
          o = r.useContext(D),
          a = o.prefixCls,
          i = X();
        return i
          ? null
          : r.createElement('li', { className: f()(''.concat(a, '-item-divider'), t), style: n });
      }
      var dt = it;
      (dt.Item = ue), (dt.SubMenu = Ie), (dt.ItemGroup = st), (dt.Divider = ft);
      var vt = dt,
        mt = { adjustX: 1, adjustY: 1 },
        pt = [0, 0],
        bt = {
          topLeft: { points: ['bl', 'tl'], overflow: mt, offset: [0, -4], targetOffset: pt },
          topCenter: { points: ['bc', 'tc'], overflow: mt, offset: [0, -4], targetOffset: pt },
          topRight: { points: ['br', 'tr'], overflow: mt, offset: [0, -4], targetOffset: pt },
          bottomLeft: { points: ['tl', 'bl'], overflow: mt, offset: [0, 4], targetOffset: pt },
          bottomCenter: { points: ['tc', 'bc'], overflow: mt, offset: [0, 4], targetOffset: pt },
          bottomRight: { points: ['tr', 'br'], overflow: mt, offset: [0, 4], targetOffset: pt },
        },
        ht = bt,
        yt = E.Z.ESC,
        gt = E.Z.TAB;
      function Et(e) {
        var t = e.visible,
          n = e.setTriggerVisible,
          o = e.triggerRef,
          a = e.onVisibleChange,
          i = e.autoFocus,
          l = r.useRef(!1),
          c = function () {
            var e, r, i, l;
            t &&
              o.current &&
              (null === (e = o.current) ||
                void 0 === e ||
                null === (r = e.triggerRef) ||
                void 0 === r ||
                null === (i = r.current) ||
                void 0 === i ||
                null === (l = i.focus) ||
                void 0 === l ||
                l.call(i),
              n(!1),
              'function' === typeof a && a(!1));
          },
          u = function () {
            var e,
              t,
              n,
              r,
              a = (0, _e.tS)(
                null === (e = o.current) ||
                  void 0 === e ||
                  null === (t = e.popupRef) ||
                  void 0 === t ||
                  null === (n = t.current) ||
                  void 0 === n ||
                  null === (r = n.getElement) ||
                  void 0 === r
                  ? void 0
                  : r.call(n),
              ),
              i = a[0];
            return (
              !!(null === i || void 0 === i ? void 0 : i.focus) && (i.focus(), (l.current = !0), !0)
            );
          },
          s = function (e) {
            switch (e.keyCode) {
              case yt:
                c();
                break;
              case gt:
                var t = !1;
                l.current || (t = u()), t ? e.preventDefault() : c();
                break;
            }
          };
        r.useEffect(
          function () {
            return t
              ? (window.addEventListener('keydown', s),
                i && (0, b.Z)(u, 3),
                function () {
                  window.removeEventListener('keydown', s), (l.current = !1);
                })
              : function () {
                  l.current = !1;
                };
          },
          [t],
        );
      }
      var Zt = [
        'arrow',
        'prefixCls',
        'transitionName',
        'animation',
        'align',
        'placement',
        'placements',
        'getPopupContainer',
        'showAction',
        'hideAction',
        'overlayClassName',
        'overlayStyle',
        'visible',
        'trigger',
        'autoFocus',
      ];
      function Ct(e, t) {
        var n = e.arrow,
          o = void 0 !== n && n,
          l = e.prefixCls,
          s = void 0 === l ? 'rc-dropdown' : l,
          d = e.transitionName,
          v = e.animation,
          m = e.align,
          p = e.placement,
          b = void 0 === p ? 'bottomLeft' : p,
          h = e.placements,
          y = void 0 === h ? ht : h,
          g = e.getPopupContainer,
          E = e.showAction,
          Z = e.hideAction,
          C = e.overlayClassName,
          w = e.overlayStyle,
          k = e.visible,
          x = e.trigger,
          N = void 0 === x ? ['hover'] : x,
          S = e.autoFocus,
          P = (0, c.Z)(e, Zt),
          R = r.useState(),
          M = (0, i.Z)(R, 2),
          I = M[0],
          _ = M[1],
          T = 'visible' in e ? k : I,
          K = r.useRef(null);
        r.useImperativeHandle(t, function () {
          return K.current;
        }),
          Et({
            visible: T,
            setTriggerVisible: _,
            triggerRef: K,
            onVisibleChange: e.onVisibleChange,
            autoFocus: S,
          });
        var O = function () {
            var t,
              n = e.overlay;
            return (t = 'function' === typeof n ? n() : n), t;
          },
          A = function (t) {
            var n = e.onOverlayClick;
            _(!1), n && n(t);
          },
          L = function (t) {
            var n = e.onVisibleChange;
            _(t), 'function' === typeof n && n(t);
          },
          D = function () {
            var e = O();
            return r.createElement(
              r.Fragment,
              null,
              o && r.createElement('div', { className: ''.concat(s, '-arrow') }),
              e,
            );
          },
          j = function () {
            var t = e.overlay;
            return 'function' === typeof t ? D : D();
          },
          B = function () {
            var t = e.minOverlayWidthMatchTrigger,
              n = e.alignPoint;
            return 'minOverlayWidthMatchTrigger' in e ? t : !n;
          },
          V = function () {
            var t = e.openClassName;
            return void 0 !== t ? t : ''.concat(s, '-open');
          },
          F = function () {
            var t = e.children,
              n = t.props ? t.props : {},
              o = f()(n.className, V());
            return T && t ? r.cloneElement(t, { className: o }) : t;
          },
          W = Z;
        return (
          W || -1 === N.indexOf('contextMenu') || (W = ['click']),
          r.createElement(
            ge.Z,
            (0, u.Z)(
              (0, u.Z)({ builtinPlacements: y }, P),
              {},
              {
                prefixCls: s,
                ref: K,
                popupClassName: f()(C, (0, a.Z)({}, ''.concat(s, '-show-arrow'), o)),
                popupStyle: w,
                action: N,
                showAction: E,
                hideAction: W || [],
                popupPlacement: b,
                popupAlign: m,
                popupTransitionName: d,
                popupAnimation: v,
                popupVisible: T,
                stretch: B() ? 'minWidth' : '',
                popup: j(),
                onPopupVisibleChange: L,
                onPopupClick: A,
                getPopupContainer: g,
              },
            ),
            F(),
          )
        );
      }
      var wt = r.forwardRef(Ct),
        kt = wt;
      function xt(e, t) {
        var n = e.prefixCls,
          o = e.editable,
          a = e.locale,
          i = e.style;
        return o && !1 !== o.showAdd
          ? r.createElement(
              'button',
              {
                ref: t,
                type: 'button',
                className: ''.concat(n, '-nav-add'),
                style: i,
                'aria-label': (null === a || void 0 === a ? void 0 : a.addAriaLabel) || 'Add tab',
                onClick: function (e) {
                  o.onEdit('add', { event: e });
                },
              },
              o.addIcon || '+',
            )
          : null;
      }
      var Nt = r.forwardRef(xt);
      function St(e, t) {
        var n = e.prefixCls,
          o = e.id,
          l = e.tabs,
          c = e.locale,
          u = e.mobile,
          s = e.moreIcon,
          d = void 0 === s ? 'More' : s,
          v = e.moreTransitionName,
          m = e.style,
          p = e.className,
          b = e.editable,
          h = e.tabBarGutter,
          y = e.rtl,
          g = e.removeAriaLabel,
          Z = e.onTabClick,
          C = e.getPopupContainer,
          w = e.popupClassName,
          k = (0, r.useState)(!1),
          x = (0, i.Z)(k, 2),
          N = x[0],
          S = x[1],
          P = (0, r.useState)(null),
          R = (0, i.Z)(P, 2),
          M = R[0],
          I = R[1],
          _ = ''.concat(o, '-more-popup'),
          T = ''.concat(n, '-dropdown'),
          K = null !== M ? ''.concat(_, '-').concat(M) : null,
          O = null === c || void 0 === c ? void 0 : c.dropdownAriaLabel;
        function A(e, t) {
          e.preventDefault(), e.stopPropagation(), b.onEdit('remove', { key: t, event: e });
        }
        var L = r.createElement(
          vt,
          {
            onClick: function (e) {
              var t = e.key,
                n = e.domEvent;
              Z(t, n), S(!1);
            },
            prefixCls: ''.concat(T, '-menu'),
            id: _,
            tabIndex: -1,
            role: 'listbox',
            'aria-activedescendant': K,
            selectedKeys: [M],
            'aria-label': void 0 !== O ? O : 'expanded dropdown',
          },
          l.map(function (e) {
            var t = b && !1 !== e.closable && !e.disabled;
            return r.createElement(
              ue,
              {
                key: e.key,
                id: ''.concat(_, '-').concat(e.key),
                role: 'option',
                'aria-controls': o && ''.concat(o, '-panel-').concat(e.key),
                disabled: e.disabled,
              },
              r.createElement('span', null, e.tab),
              t &&
                r.createElement(
                  'button',
                  {
                    type: 'button',
                    'aria-label': g || 'remove',
                    tabIndex: 0,
                    className: ''.concat(T, '-menu-item-remove'),
                    onClick: function (t) {
                      t.stopPropagation(), A(t, e.key);
                    },
                  },
                  e.closeIcon || b.removeIcon || '\xd7',
                ),
            );
          }),
        );
        function D(e) {
          for (
            var t = l.filter(function (e) {
                return !e.disabled;
              }),
              n =
                t.findIndex(function (e) {
                  return e.key === M;
                }) || 0,
              r = t.length,
              o = 0;
            o < r;
            o += 1
          ) {
            n = (n + e + r) % r;
            var a = t[n];
            if (!a.disabled) return void I(a.key);
          }
        }
        function j(e) {
          var t = e.which;
          if (N)
            switch (t) {
              case E.Z.UP:
                D(-1), e.preventDefault();
                break;
              case E.Z.DOWN:
                D(1), e.preventDefault();
                break;
              case E.Z.ESC:
                S(!1);
                break;
              case E.Z.SPACE:
              case E.Z.ENTER:
                null !== M && Z(M, e);
                break;
            }
          else [E.Z.DOWN, E.Z.SPACE, E.Z.ENTER].includes(t) && (S(!0), e.preventDefault());
        }
        (0, r.useEffect)(
          function () {
            var e = document.getElementById(K);
            e && e.scrollIntoView && e.scrollIntoView(!1);
          },
          [M],
        ),
          (0, r.useEffect)(
            function () {
              N || I(null);
            },
            [N],
          );
        var B = (0, a.Z)({}, y ? 'marginRight' : 'marginLeft', h);
        l.length || ((B.visibility = 'hidden'), (B.order = 1));
        var V = f()((0, a.Z)({}, ''.concat(T, '-rtl'), y)),
          F = u
            ? null
            : r.createElement(
                kt,
                {
                  prefixCls: T,
                  overlay: L,
                  trigger: ['hover'],
                  visible: !!l.length && N,
                  transitionName: v,
                  onVisibleChange: S,
                  overlayClassName: f()(V, w),
                  mouseEnterDelay: 0.1,
                  mouseLeaveDelay: 0.1,
                  getPopupContainer: C,
                },
                r.createElement(
                  'button',
                  {
                    type: 'button',
                    className: ''.concat(n, '-nav-more'),
                    style: B,
                    tabIndex: -1,
                    'aria-hidden': 'true',
                    'aria-haspopup': 'listbox',
                    'aria-controls': _,
                    id: ''.concat(o, '-more'),
                    'aria-expanded': N,
                    onKeyDown: j,
                  },
                  d,
                ),
              );
        return r.createElement(
          'div',
          { className: f()(''.concat(n, '-nav-operations'), p), style: m, ref: t },
          F,
          r.createElement(Nt, { prefixCls: n, locale: c, editable: b }),
        );
      }
      var Pt = r.memo(r.forwardRef(St), function (e, t) {
          return t.tabMoving;
        }),
        Rt = (0, r.createContext)(null),
        Mt = 0.1,
        It = 0.01,
        _t = 20,
        Tt = Math.pow(0.995, _t);
      function Kt(e, t) {
        var n = (0, r.useState)(),
          o = (0, i.Z)(n, 2),
          a = o[0],
          l = o[1],
          c = (0, r.useState)(0),
          u = (0, i.Z)(c, 2),
          s = u[0],
          f = u[1],
          d = (0, r.useState)(0),
          v = (0, i.Z)(d, 2),
          m = v[0],
          p = v[1],
          b = (0, r.useState)(),
          h = (0, i.Z)(b, 2),
          y = h[0],
          g = h[1],
          E = (0, r.useRef)();
        function Z(e) {
          var t = e.touches[0],
            n = t.screenX,
            r = t.screenY;
          l({ x: n, y: r }), window.clearInterval(E.current);
        }
        function C(e) {
          if (a) {
            e.preventDefault();
            var n = e.touches[0],
              r = n.screenX,
              o = n.screenY;
            l({ x: r, y: o });
            var i = r - a.x,
              c = o - a.y;
            t(i, c);
            var u = Date.now();
            f(u), p(u - s), g({ x: i, y: c });
          }
        }
        function w() {
          if (a && (l(null), g(null), y)) {
            var e = y.x / m,
              n = y.y / m,
              r = Math.abs(e),
              o = Math.abs(n);
            if (Math.max(r, o) < Mt) return;
            var i = e,
              c = n;
            E.current = window.setInterval(function () {
              Math.abs(i) < It && Math.abs(c) < It
                ? window.clearInterval(E.current)
                : ((i *= Tt), (c *= Tt), t(i * _t, c * _t));
            }, _t);
          }
        }
        var k = (0, r.useRef)();
        function x(e) {
          var n = e.deltaX,
            r = e.deltaY,
            o = 0,
            a = Math.abs(n),
            i = Math.abs(r);
          a === i
            ? (o = 'x' === k.current ? n : r)
            : a > i
            ? ((o = n), (k.current = 'x'))
            : ((o = r), (k.current = 'y')),
            t(-o, -o) && e.preventDefault();
        }
        var N = (0, r.useRef)(null);
        (N.current = { onTouchStart: Z, onTouchMove: C, onTouchEnd: w, onWheel: x }),
          r.useEffect(function () {
            function t(e) {
              N.current.onTouchStart(e);
            }
            function n(e) {
              N.current.onTouchMove(e);
            }
            function r(e) {
              N.current.onTouchEnd(e);
            }
            function o(e) {
              N.current.onWheel(e);
            }
            return (
              document.addEventListener('touchmove', n, { passive: !1 }),
              document.addEventListener('touchend', r, { passive: !1 }),
              e.current.addEventListener('touchstart', t, { passive: !1 }),
              e.current.addEventListener('wheel', o),
              function () {
                document.removeEventListener('touchmove', n),
                  document.removeEventListener('touchend', r);
              }
            );
          }, []);
      }
      function Ot() {
        var e = (0, r.useRef)(new Map());
        function t(t) {
          return e.current.has(t) || e.current.set(t, r.createRef()), e.current.get(t);
        }
        function n(t) {
          e.current['delete'](t);
        }
        return [t, n];
      }
      function At(e, t) {
        var n = r.useRef(e),
          o = r.useState({}),
          a = (0, i.Z)(o, 2),
          l = a[1];
        function c(e) {
          var r = 'function' === typeof e ? e(n.current) : e;
          r !== n.current && t(r, n.current), (n.current = r), l({});
        }
        return [n.current, c];
      }
      var Lt = function (e) {
        var t,
          n = e.position,
          o = e.prefixCls,
          a = e.extra;
        if (!a) return null;
        var i = {};
        return (
          a && 'object' === (0, l.Z)(a) && !r.isValidElement(a) ? (i = a) : (i.right = a),
          'right' === n && (t = i.right),
          'left' === n && (t = i.left),
          t ? r.createElement('div', { className: ''.concat(o, '-extra-content') }, t) : null
        );
      };
      function Dt(e, t) {
        var n,
          l = r.useContext(Rt),
          c = l.prefixCls,
          s = l.tabs,
          d = e.className,
          v = e.style,
          m = e.id,
          E = e.animated,
          Z = e.activeKey,
          w = e.rtl,
          x = e.extra,
          S = e.editable,
          P = e.locale,
          R = e.tabPosition,
          M = e.tabBarGutter,
          I = e.children,
          _ = e.onTabClick,
          T = e.onTabScroll,
          K = (0, r.useRef)(),
          O = (0, r.useRef)(),
          A = (0, r.useRef)(),
          L = (0, r.useRef)(),
          D = Ot(),
          j = (0, i.Z)(D, 2),
          B = j[0],
          V = j[1],
          F = 'top' === R || 'bottom' === R,
          W = At(0, function (e, t) {
            F && T && T({ direction: e > t ? 'left' : 'right' });
          }),
          z = (0, i.Z)(W, 2),
          H = z[0],
          U = z[1],
          G = At(0, function (e, t) {
            !F && T && T({ direction: e > t ? 'top' : 'bottom' });
          }),
          X = (0, i.Z)(G, 2),
          Y = X[0],
          q = X[1],
          $ = (0, r.useState)(0),
          J = (0, i.Z)($, 2),
          Q = J[0],
          ee = J[1],
          te = (0, r.useState)(0),
          ne = (0, i.Z)(te, 2),
          re = ne[0],
          oe = ne[1],
          ae = (0, r.useState)(null),
          ie = (0, i.Z)(ae, 2),
          le = ie[0],
          ce = ie[1],
          ue = (0, r.useState)(null),
          se = (0, i.Z)(ue, 2),
          fe = se[0],
          de = se[1],
          ve = (0, r.useState)(0),
          me = (0, i.Z)(ve, 2),
          pe = me[0],
          be = me[1],
          he = (0, r.useState)(0),
          ye = (0, i.Z)(he, 2),
          ge = ye[0],
          Ee = ye[1],
          Ze = g(new Map()),
          Ce = (0, i.Z)(Ze, 2),
          we = Ce[0],
          ke = Ce[1],
          xe = k(s, we, Q),
          Ne = ''.concat(c, '-nav-operations-hidden'),
          Se = 0,
          Pe = 0;
        function Re(e) {
          return e < Se ? Se : e > Pe ? Pe : e;
        }
        F
          ? w
            ? ((Se = 0), (Pe = Math.max(0, Q - le)))
            : ((Se = Math.min(0, le - Q)), (Pe = 0))
          : ((Se = Math.min(0, fe - re)), (Pe = 0));
        var Me = (0, r.useRef)(),
          Ie = (0, r.useState)(),
          _e = (0, i.Z)(Ie, 2),
          Te = _e[0],
          Ke = _e[1];
        function Oe() {
          Ke(Date.now());
        }
        function Ae() {
          window.clearTimeout(Me.current);
        }
        function Le() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Z,
            t = xe.get(e) || { width: 0, height: 0, left: 0, right: 0, top: 0 };
          if (F) {
            var n = H;
            w
              ? t.right < H
                ? (n = t.right)
                : t.right + t.width > H + le && (n = t.right + t.width - le)
              : t.left < -H
              ? (n = -t.left)
              : t.left + t.width > -H + le && (n = -(t.left + t.width - le)),
              q(0),
              U(Re(n));
          } else {
            var r = Y;
            t.top < -Y
              ? (r = -t.top)
              : t.top + t.height > -Y + fe && (r = -(t.top + t.height - fe)),
              U(0),
              q(Re(r));
          }
        }
        Kt(K, function (e, t) {
          function n(e, t) {
            e(function (e) {
              var n = Re(e + t);
              return n;
            });
          }
          if (F) {
            if (le >= Q) return !1;
            n(U, e);
          } else {
            if (fe >= re) return !1;
            n(q, t);
          }
          return Ae(), Oe(), !0;
        }),
          (0, r.useEffect)(
            function () {
              return (
                Ae(),
                Te &&
                  (Me.current = window.setTimeout(function () {
                    Ke(0);
                  }, 100)),
                Ae
              );
            },
            [Te],
          );
        var De = N(
            xe,
            { width: le, height: fe, left: H, top: Y },
            { width: Q, height: re },
            { width: pe, height: ge },
            (0, u.Z)((0, u.Z)({}, e), {}, { tabs: s }),
          ),
          je = (0, i.Z)(De, 2),
          Be = je[0],
          Ve = je[1],
          Fe = {};
        'top' === R || 'bottom' === R
          ? (Fe[w ? 'marginRight' : 'marginLeft'] = M)
          : (Fe.marginTop = M);
        var We = s.map(function (e, t) {
            var n = e.key;
            return r.createElement(C, {
              id: m,
              prefixCls: c,
              key: n,
              tab: e,
              style: 0 === t ? void 0 : Fe,
              closable: e.closable,
              editable: S,
              active: n === Z,
              renderWrapper: I,
              removeAriaLabel: null === P || void 0 === P ? void 0 : P.removeAriaLabel,
              ref: B(n),
              onClick: function (e) {
                _(n, e);
              },
              onRemove: function () {
                V(n);
              },
              onFocus: function () {
                Le(n),
                  Oe(),
                  K.current && (w || (K.current.scrollLeft = 0), (K.current.scrollTop = 0));
              },
            });
          }),
          ze = y(function () {
            var e,
              t,
              n,
              r,
              o,
              a,
              i = (null === (e = K.current) || void 0 === e ? void 0 : e.offsetWidth) || 0,
              l = (null === (t = K.current) || void 0 === t ? void 0 : t.offsetHeight) || 0,
              c = (null === (n = L.current) || void 0 === n ? void 0 : n.offsetWidth) || 0,
              u = (null === (r = L.current) || void 0 === r ? void 0 : r.offsetHeight) || 0;
            ce(i), de(l), be(c), Ee(u);
            var f = ((null === (o = O.current) || void 0 === o ? void 0 : o.offsetWidth) || 0) - c,
              d = ((null === (a = O.current) || void 0 === a ? void 0 : a.offsetHeight) || 0) - u;
            ee(f),
              oe(d),
              ke(function () {
                var e = new Map();
                return (
                  s.forEach(function (t) {
                    var n = t.key,
                      r = B(n).current;
                    r &&
                      e.set(n, {
                        width: r.offsetWidth,
                        height: r.offsetHeight,
                        left: r.offsetLeft,
                        top: r.offsetTop,
                      });
                  }),
                  e
                );
              });
          }),
          He = s.slice(0, Be),
          Ue = s.slice(Ve + 1),
          Ge = [].concat((0, p.Z)(He), (0, p.Z)(Ue)),
          Xe = (0, r.useState)(),
          Ye = (0, i.Z)(Xe, 2),
          qe = Ye[0],
          $e = Ye[1],
          Je = xe.get(Z),
          Qe = (0, r.useRef)();
        function et() {
          b.Z.cancel(Qe.current);
        }
        (0, r.useEffect)(
          function () {
            var e = {};
            return (
              Je &&
                (F
                  ? (w ? (e.right = Je.right) : (e.left = Je.left), (e.width = Je.width))
                  : ((e.top = Je.top), (e.height = Je.height))),
              et(),
              (Qe.current = (0, b.Z)(function () {
                $e(e);
              })),
              et
            );
          },
          [Je, F, w],
        ),
          (0, r.useEffect)(
            function () {
              Le();
            },
            [Z, Je, xe, F],
          ),
          (0, r.useEffect)(
            function () {
              ze();
            },
            [
              w,
              M,
              Z,
              s
                .map(function (e) {
                  return e.key;
                })
                .join('_'),
            ],
          );
        var tt,
          nt,
          rt,
          ot,
          at = !!Ge.length,
          it = ''.concat(c, '-nav-wrap');
        return (
          F
            ? w
              ? ((nt = H > 0), (tt = H + le < Q))
              : ((tt = H < 0), (nt = -H + le < Q))
            : ((rt = Y < 0), (ot = -Y + fe < re)),
          r.createElement(
            'div',
            {
              ref: t,
              role: 'tablist',
              className: f()(''.concat(c, '-nav'), d),
              style: v,
              onKeyDown: function () {
                Oe();
              },
            },
            r.createElement(Lt, { position: 'left', extra: x, prefixCls: c }),
            r.createElement(
              h.Z,
              { onResize: ze },
              r.createElement(
                'div',
                {
                  className: f()(
                    it,
                    ((n = {}),
                    (0, a.Z)(n, ''.concat(it, '-ping-left'), tt),
                    (0, a.Z)(n, ''.concat(it, '-ping-right'), nt),
                    (0, a.Z)(n, ''.concat(it, '-ping-top'), rt),
                    (0, a.Z)(n, ''.concat(it, '-ping-bottom'), ot),
                    n),
                  ),
                  ref: K,
                },
                r.createElement(
                  h.Z,
                  { onResize: ze },
                  r.createElement(
                    'div',
                    {
                      ref: O,
                      className: ''.concat(c, '-nav-list'),
                      style: {
                        transform: 'translate('.concat(H, 'px, ').concat(Y, 'px)'),
                        transition: Te ? 'none' : void 0,
                      },
                    },
                    We,
                    r.createElement(Nt, {
                      ref: L,
                      prefixCls: c,
                      locale: P,
                      editable: S,
                      style: (0, u.Z)(
                        (0, u.Z)({}, 0 === We.length ? void 0 : Fe),
                        {},
                        { visibility: at ? 'hidden' : null },
                      ),
                    }),
                    r.createElement('div', {
                      className: f()(
                        ''.concat(c, '-ink-bar'),
                        (0, a.Z)({}, ''.concat(c, '-ink-bar-animated'), E.inkBar),
                      ),
                      style: qe,
                    }),
                  ),
                ),
              ),
            ),
            r.createElement(
              Pt,
              (0, o.Z)({}, e, {
                removeAriaLabel: null === P || void 0 === P ? void 0 : P.removeAriaLabel,
                ref: A,
                prefixCls: c,
                tabs: Ge,
                className: !at && Ne,
                tabMoving: !!Te,
              }),
            ),
            r.createElement(Lt, { position: 'right', extra: x, prefixCls: c }),
          )
        );
      }
      var jt = r.forwardRef(Dt);
      function Bt(e) {
        var t = e.id,
          n = e.activeKey,
          o = e.animated,
          i = e.tabPosition,
          l = e.rtl,
          c = e.destroyInactiveTabPane,
          u = r.useContext(Rt),
          s = u.prefixCls,
          d = u.tabs,
          v = o.tabPane,
          m = d.findIndex(function (e) {
            return e.key === n;
          });
        return r.createElement(
          'div',
          { className: f()(''.concat(s, '-content-holder')) },
          r.createElement(
            'div',
            {
              className: f()(
                ''.concat(s, '-content'),
                ''.concat(s, '-content-').concat(i),
                (0, a.Z)({}, ''.concat(s, '-content-animated'), v),
              ),
              style:
                m && v
                  ? (0, a.Z)({}, l ? 'marginRight' : 'marginLeft', '-'.concat(m, '00%'))
                  : null,
            },
            d.map(function (e) {
              return r.cloneElement(e.node, {
                key: e.key,
                prefixCls: s,
                tabKey: e.key,
                id: t,
                animated: v,
                active: e.key === n,
                destroyInactiveTabPane: c,
              });
            }),
          ),
        );
      }
      function Vt(e) {
        var t = e.prefixCls,
          n = e.forceRender,
          o = e.className,
          a = e.style,
          l = e.id,
          c = e.active,
          s = e.animated,
          d = e.destroyInactiveTabPane,
          v = e.tabKey,
          m = e.children,
          p = r.useState(n),
          b = (0, i.Z)(p, 2),
          h = b[0],
          y = b[1];
        r.useEffect(
          function () {
            c ? y(!0) : d && y(!1);
          },
          [c, d],
        );
        var g = {};
        return (
          c ||
            (s
              ? ((g.visibility = 'hidden'), (g.height = 0), (g.overflowY = 'hidden'))
              : (g.display = 'none')),
          r.createElement(
            'div',
            {
              id: l && ''.concat(l, '-panel-').concat(v),
              role: 'tabpanel',
              tabIndex: c ? 0 : -1,
              'aria-labelledby': l && ''.concat(l, '-tab-').concat(v),
              'aria-hidden': !c,
              style: (0, u.Z)((0, u.Z)({}, g), a),
              className: f()(''.concat(t, '-tabpane'), c && ''.concat(t, '-tabpane-active'), o),
            },
            (c || h || n) && m,
          )
        );
      }
      var Ft = [
          'id',
          'prefixCls',
          'className',
          'children',
          'direction',
          'activeKey',
          'defaultActiveKey',
          'editable',
          'animated',
          'tabPosition',
          'tabBarGutter',
          'tabBarStyle',
          'tabBarExtraContent',
          'locale',
          'moreIcon',
          'moreTransitionName',
          'destroyInactiveTabPane',
          'renderTabBar',
          'onChange',
          'onTabClick',
          'onTabScroll',
          'getPopupContainer',
          'popupClassName',
        ],
        Wt = 0;
      function zt(e) {
        return (0, d.Z)(e)
          .map(function (e) {
            if (r.isValidElement(e)) {
              var t = void 0 !== e.key ? String(e.key) : void 0;
              return (0, u.Z)((0, u.Z)({ key: t }, e.props), {}, { node: e });
            }
            return null;
          })
          .filter(function (e) {
            return e;
          });
      }
      function Ht(e, t) {
        var n,
          s,
          d = e.id,
          p = e.prefixCls,
          b = void 0 === p ? 'rc-tabs' : p,
          h = e.className,
          y = e.children,
          g = e.direction,
          E = e.activeKey,
          Z = e.defaultActiveKey,
          C = e.editable,
          w = e.animated,
          k = void 0 === w ? { inkBar: !0, tabPane: !1 } : w,
          x = e.tabPosition,
          N = void 0 === x ? 'top' : x,
          S = e.tabBarGutter,
          P = e.tabBarStyle,
          R = e.tabBarExtraContent,
          M = e.locale,
          I = e.moreIcon,
          _ = e.moreTransitionName,
          T = e.destroyInactiveTabPane,
          K = e.renderTabBar,
          O = e.onChange,
          A = e.onTabClick,
          L = e.onTabScroll,
          D = e.getPopupContainer,
          j = e.popupClassName,
          B = (0, c.Z)(e, Ft),
          V = zt(y),
          F = 'rtl' === g;
        s =
          !1 === k
            ? { inkBar: !1, tabPane: !1 }
            : !0 === k
            ? { inkBar: !0, tabPane: !0 }
            : (0, u.Z)({ inkBar: !0, tabPane: !1 }, 'object' === (0, l.Z)(k) ? k : {});
        var W = (0, r.useState)(!1),
          z = (0, i.Z)(W, 2),
          H = z[0],
          U = z[1];
        (0, r.useEffect)(function () {
          U((0, v.Z)());
        }, []);
        var G = (0, m.Z)(
            function () {
              var e;
              return null === (e = V[0]) || void 0 === e ? void 0 : e.key;
            },
            { value: E, defaultValue: Z },
          ),
          X = (0, i.Z)(G, 2),
          Y = X[0],
          q = X[1],
          $ = (0, r.useState)(function () {
            return V.findIndex(function (e) {
              return e.key === Y;
            });
          }),
          J = (0, i.Z)($, 2),
          Q = J[0],
          ee = J[1];
        (0, r.useEffect)(
          function () {
            var e,
              t = V.findIndex(function (e) {
                return e.key === Y;
              });
            -1 === t &&
              ((t = Math.max(0, Math.min(Q, V.length - 1))),
              q(null === (e = V[t]) || void 0 === e ? void 0 : e.key));
            ee(t);
          },
          [
            V.map(function (e) {
              return e.key;
            }).join('_'),
            Y,
            Q,
          ],
        );
        var te = (0, m.Z)(null, { value: d }),
          ne = (0, i.Z)(te, 2),
          re = ne[0],
          oe = ne[1],
          ae = N;
        function ie(e, t) {
          null === A || void 0 === A || A(e, t);
          var n = e !== Y;
          q(e), n && (null === O || void 0 === O || O(e));
        }
        H && !['left', 'right'].includes(N) && (ae = 'top'),
          (0, r.useEffect)(function () {
            d || (oe('rc-tabs-'.concat(Wt)), (Wt += 1));
          }, []);
        var le,
          ce = { id: re, activeKey: Y, animated: s, tabPosition: ae, rtl: F, mobile: H },
          ue = (0, u.Z)(
            (0, u.Z)({}, ce),
            {},
            {
              editable: C,
              locale: M,
              moreIcon: I,
              moreTransitionName: _,
              tabBarGutter: S,
              onTabClick: ie,
              onTabScroll: L,
              extra: R,
              style: P,
              panes: y,
              getPopupContainer: D,
              popupClassName: j,
            },
          );
        return (
          (le = K ? K(ue, jt) : r.createElement(jt, ue)),
          r.createElement(
            Rt.Provider,
            { value: { tabs: V, prefixCls: b } },
            r.createElement(
              'div',
              (0, o.Z)(
                {
                  ref: t,
                  id: d,
                  className: f()(
                    b,
                    ''.concat(b, '-').concat(ae),
                    ((n = {}),
                    (0, a.Z)(n, ''.concat(b, '-mobile'), H),
                    (0, a.Z)(n, ''.concat(b, '-editable'), C),
                    (0, a.Z)(n, ''.concat(b, '-rtl'), F),
                    n),
                    h,
                  ),
                },
                B,
              ),
              le,
              r.createElement(Bt, (0, o.Z)({ destroyInactiveTabPane: T }, ce, { animated: s })),
            ),
          )
        );
      }
      var Ut = r.forwardRef(Ht);
      Ut.TabPane = Vt;
      var Gt = Ut,
        Xt = Gt,
        Yt = n(52444),
        qt = n(22231),
        $t = n(96089),
        Jt = n(65659),
        Qt = n(35713);
      n(86845);
      function en(e, t) {
        return an(e) || on(e, t) || nn(e, t) || tn();
      }
      function tn() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
        );
      }
      function nn(e, t) {
        if (e) {
          if ('string' === typeof e) return rn(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            'Object' === n && e.constructor && (n = e.constructor.name),
            'Map' === n || 'Set' === n
              ? Array.from(e)
              : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? rn(e, t)
              : void 0
          );
        }
      }
      function rn(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function on(e, t) {
        var n =
          null == e
            ? null
            : ('undefined' !== typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
        if (null != n) {
          var r,
            o,
            a = [],
            i = !0,
            l = !1;
          try {
            for (n = n.call(e); !(i = (r = n.next()).done); i = !0)
              if ((a.push(r.value), t && a.length === t)) break;
          } catch (c) {
            (l = !0), (o = c);
          } finally {
            try {
              i || null == n['return'] || n['return']();
            } finally {
              if (l) throw o;
            }
          }
          return a;
        }
      }
      function an(e) {
        if (Array.isArray(e)) return e;
      }
      function ln(e, t) {
        var n,
          r = null === (n = e.match(/\.(\w+)$/)) || void 0 === n ? void 0 : n[1];
        return r || (r = t.tsx ? 'tsx' : 'jsx'), r;
      }
      var cn = function (e) {
          var t,
            n,
            o,
            a = (0, r.useRef)(),
            i = (0, r.useContext)($t.context),
            l = i.locale,
            c = (0, $t.useLocaleProps)(l, e),
            u = (0, $t.useDemoUrl)(c.identifier),
            s = c.demoUrl || u,
            f =
              (null === qt.m || void 0 === qt.m ? void 0 : qt.m.location.hash) ===
              '#'.concat(c.identifier),
            d = 1 === Object.keys(c.sources).length,
            v = (0, $t.useCodeSandbox)(
              (null === (t = c.hideActions) || void 0 === t ? void 0 : t.includes('CSB'))
                ? null
                : c,
            ),
            m = (0, $t.useRiddle)(
              (null === (n = c.hideActions) || void 0 === n ? void 0 : n.includes('RIDDLE'))
                ? null
                : c,
            ),
            p = (0, $t.useMotions)(c.motions || [], a.current),
            b = en(p, 2),
            h = b[0],
            y = b[1],
            g = (0, $t.useCopy)(),
            E = en(g, 2),
            Z = E[0],
            C = E[1],
            w = (0, r.useState)(function () {
              return c.sources._ ? '_' : Object.keys(c.sources)[0];
            }),
            k = en(w, 2),
            x = k[0],
            N = k[1],
            S = (0, r.useState)(ln(x, c.sources[x])),
            P = en(S, 2),
            R = P[0],
            M = P[1],
            I = (0, r.useState)(Boolean(c.defaultShowCode)),
            _ = en(I, 2),
            T = _[0],
            K = _[1],
            O = (0, r.useState)(Math.random()),
            A = en(O, 2),
            L = A[0],
            D = A[1],
            j = c.sources[x][R] || c.sources[x].content,
            B = (0, $t.useTSPlaygroundUrl)(l, j),
            V = (0, r.useRef)(),
            F = (0, $t.usePrefersColor)(),
            W = en(F, 1),
            z = W[0],
            H = c.actionBarRender,
            U =
              void 0 === H
                ? function (e) {
                    return e;
                  }
                : H;
          function G(e) {
            N(e), M(ln(e, c.sources[e]));
          }
          return (
            (0, r.useEffect)(
              function () {
                D(Math.random());
              },
              [z],
            ),
            r.createElement(
              'div',
              {
                style: c.style,
                className: [
                  c.className,
                  '__dumi-default-previewer',
                  f ? '__dumi-default-previewer-target' : '',
                ]
                  .filter(Boolean)
                  .join(' '),
                id: c.identifier,
                'data-debug': c.debug || void 0,
                'data-iframe': c.iframe || void 0,
              },
              c.iframe &&
                r.createElement('div', { className: '__dumi-default-previewer-browser-nav' }),
              r.createElement(
                'div',
                {
                  ref: a,
                  className: '__dumi-default-previewer-demo',
                  style: {
                    transform: c.transform ? 'translate(0, 0)' : void 0,
                    padding: c.compact || (c.iframe && !1 !== c.compact) ? '0' : void 0,
                    background: c.background,
                  },
                },
                c.iframe
                  ? r.createElement('iframe', {
                      title: 'dumi-previewer',
                      style: { height: String(c.iframe).replace(/(\d)$/, '$1px') },
                      key: L,
                      src: s,
                      ref: V,
                    })
                  : r.createElement(
                      Yt.ErrorBoundary,
                      {
                        fallbackRender: function (e) {
                          var t = e.error;
                          return r.createElement(
                            Qt.Z,
                            { type: 'error' },
                            r.createElement('h4', null, t.message || 'This demo has been crashed.'),
                            t.stack &&
                              r.createElement(
                                'details',
                                null,
                                r.createElement('summary', null, 'Error stack'),
                                r.createElement('pre', null, t.stack),
                              ),
                          );
                        },
                      },
                      c.children,
                    ),
              ),
              r.createElement(
                'div',
                { className: '__dumi-default-previewer-desc', 'data-title': c.title },
                c.title &&
                  r.createElement($t.AnchorLink, { to: '#'.concat(c.identifier) }, c.title),
                c.description &&
                  r.createElement('div', { dangerouslySetInnerHTML: { __html: c.description } }),
              ),
              r.createElement(
                'div',
                { className: '__dumi-default-previewer-actions' },
                U(
                  r.createElement(
                    r.Fragment,
                    null,
                    v &&
                      r.createElement('button', {
                        title: 'Open demo on CodeSandbox.io',
                        className: '__dumi-default-icon',
                        role: 'codesandbox',
                        onClick: v,
                      }),
                    m &&
                      r.createElement('button', {
                        title: 'Open demo on Riddle',
                        className: '__dumi-default-icon',
                        role: 'riddle',
                        onClick: m,
                      }),
                    c.motions &&
                      r.createElement('button', {
                        title: 'Execute motions',
                        className: '__dumi-default-icon',
                        role: 'motions',
                        disabled: y,
                        onClick: function () {
                          return h();
                        },
                      }),
                    c.iframe &&
                      r.createElement('button', {
                        title: 'Reload demo iframe page',
                        className: '__dumi-default-icon',
                        role: 'refresh',
                        onClick: function () {
                          return D(Math.random());
                        },
                      }),
                    !(null === (o = c.hideActions) || void 0 === o
                      ? void 0
                      : o.includes('EXTERNAL')) &&
                      r.createElement(
                        $t.Link,
                        { target: '_blank', to: s },
                        r.createElement('button', {
                          title: 'Open demo in new tab',
                          className: '__dumi-default-icon',
                          role: 'open-demo',
                          type: 'button',
                        }),
                      ),
                    r.createElement('span', null),
                    r.createElement('button', {
                      title: 'Copy source code',
                      className: '__dumi-default-icon',
                      role: 'copy',
                      'data-status': C,
                      onClick: function () {
                        return Z(j);
                      },
                    }),
                    'tsx' === R &&
                      T &&
                      r.createElement(
                        $t.Link,
                        { target: '_blank', to: B },
                        r.createElement('button', {
                          title: 'Get JSX via TypeScript Playground',
                          className: '__dumi-default-icon',
                          role: 'change-tsx',
                          type: 'button',
                        }),
                      ),
                    r.createElement('button', {
                      title: 'Toggle source code panel',
                      className: '__dumi-default-icon'.concat(
                        T ? ' __dumi-default-btn-expand' : '',
                      ),
                      role: 'source',
                      type: 'button',
                      onClick: function () {
                        return K(!T);
                      },
                    }),
                  ),
                ),
              ),
              T &&
                r.createElement(
                  'div',
                  { className: '__dumi-default-previewer-source-wrapper' },
                  !d &&
                    r.createElement(
                      Xt,
                      {
                        className: '__dumi-default-previewer-source-tab',
                        prefixCls: '__dumi-default-tabs',
                        moreIcon: '\xb7\xb7\xb7',
                        defaultActiveKey: x,
                        onChange: G,
                      },
                      Object.keys(c.sources).map(function (e) {
                        return r.createElement(Vt, {
                          tab: '_' === e ? 'index.'.concat(ln(e, c.sources[e])) : e,
                          key: e,
                        });
                      }),
                    ),
                  r.createElement(
                    'div',
                    { className: '__dumi-default-previewer-source' },
                    r.createElement(Jt.Z, { code: j, lang: R, showCopy: !1 }),
                  ),
                ),
            )
          );
        },
        un = cn;
    },
    52444: function (e, t, n) {
      (function (e, r) {
        r(t, n(67294));
      })(0, function (e, t) {
        'use strict';
        function n(e) {
          if (e && e.__esModule) return e;
          var t = Object.create(null);
          return (
            e &&
              Object.keys(e).forEach(function (n) {
                if ('default' !== n) {
                  var r = Object.getOwnPropertyDescriptor(e, n);
                  Object.defineProperty(
                    t,
                    n,
                    r.get
                      ? r
                      : {
                          enumerable: !0,
                          get: function () {
                            return e[n];
                          },
                        },
                  );
                }
              }),
            (t['default'] = e),
            Object.freeze(t)
          );
        }
        var r = n(t);
        function o(e, t) {
          return (
            (o =
              Object.setPrototypeOf ||
              function (e, t) {
                return (e.__proto__ = t), e;
              }),
            o(e, t)
          );
        }
        function a(e, t) {
          (e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), o(e, t);
        }
        var i = function (e, t) {
            return (
              void 0 === e && (e = []),
              void 0 === t && (t = []),
              e.length !== t.length ||
                e.some(function (e, n) {
                  return !Object.is(e, t[n]);
                })
            );
          },
          l = { error: null },
          c = (function (e) {
            function t() {
              for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
                r[o] = arguments[o];
              return (
                (t = e.call.apply(e, [this].concat(r)) || this),
                (t.state = l),
                (t.resetErrorBoundary = function () {
                  for (var e, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
                    r[o] = arguments[o];
                  null == t.props.onReset || (e = t.props).onReset.apply(e, r), t.reset();
                }),
                t
              );
            }
            a(t, e),
              (t.getDerivedStateFromError = function (e) {
                return { error: e };
              });
            var n = t.prototype;
            return (
              (n.reset = function () {
                this.setState(l);
              }),
              (n.componentDidCatch = function (e, t) {
                var n, r;
                null == (n = (r = this.props).onError) || n.call(r, e, t);
              }),
              (n.componentDidUpdate = function (e, t) {
                var n,
                  r,
                  o = this.state.error,
                  a = this.props.resetKeys;
                null !== o &&
                  null !== t.error &&
                  i(e.resetKeys, a) &&
                  (null == (n = (r = this.props).onResetKeysChange) || n.call(r, e.resetKeys, a),
                  this.reset());
              }),
              (n.render = function () {
                var e = this.state.error,
                  t = this.props,
                  n = t.fallbackRender,
                  o = t.FallbackComponent,
                  a = t.fallback;
                if (null !== e) {
                  var i = { error: e, resetErrorBoundary: this.resetErrorBoundary };
                  if (r.isValidElement(a)) return a;
                  if ('function' === typeof n) return n(i);
                  if (o) return r.createElement(o, i);
                  throw new Error(
                    'react-error-boundary requires either a fallback, fallbackRender, or FallbackComponent prop',
                  );
                }
                return this.props.children;
              }),
              t
            );
          })(r.Component);
        function u(e, t) {
          var n = function (n) {
              return r.createElement(c, t, r.createElement(e, n));
            },
            o = e.displayName || e.name || 'Unknown';
          return (n.displayName = 'withErrorBoundary(' + o + ')'), n;
        }
        function s(e) {
          var t = r.useState(null),
            n = t[0],
            o = t[1];
          if (null != e) throw e;
          if (null != n) throw n;
          return o;
        }
        (e.ErrorBoundary = c),
          (e.useErrorHandler = s),
          (e.withErrorBoundary = u),
          Object.defineProperty(e, '__esModule', { value: !0 });
      });
    },
    23270: function (e) {
      e.exports = function (e, t, n, r) {
        var o = n ? n.call(r, e, t) : void 0;
        if (void 0 !== o) return !!o;
        if (e === t) return !0;
        if ('object' !== typeof e || !e || 'object' !== typeof t || !t) return !1;
        var a = Object.keys(e),
          i = Object.keys(t);
        if (a.length !== i.length) return !1;
        for (var l = Object.prototype.hasOwnProperty.bind(t), c = 0; c < a.length; c++) {
          var u = a[c];
          if (!l(u)) return !1;
          var s = e[u],
            f = t[u];
          if (((o = n ? n.call(r, s, f, u) : void 0), !1 === o || (void 0 === o && s !== f)))
            return !1;
        }
        return !0;
      };
    },
  },
]);
