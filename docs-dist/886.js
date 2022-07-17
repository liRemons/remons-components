(self['webpackChunkremons_components'] = self['webpackChunkremons_components'] || []).push([
  [886],
  {
    84602: function (e, t, n) {
      'use strict';
      n.d(t, {
        Z: function () {
          return k;
        },
      });
      var r = n(4763),
        o = n(45937),
        a = n(19877),
        i = n(63309),
        l = n(67294),
        c = n(28528),
        u = n(35510),
        s = n.n(u),
        f = { adjustX: 1, adjustY: 1 },
        d = [0, 0],
        v = {
          topLeft: { points: ['bl', 'tl'], overflow: f, offset: [0, -4], targetOffset: d },
          topCenter: { points: ['bc', 'tc'], overflow: f, offset: [0, -4], targetOffset: d },
          topRight: { points: ['br', 'tr'], overflow: f, offset: [0, -4], targetOffset: d },
          bottomLeft: { points: ['tl', 'bl'], overflow: f, offset: [0, 4], targetOffset: d },
          bottomCenter: { points: ['tc', 'bc'], overflow: f, offset: [0, 4], targetOffset: d },
          bottomRight: { points: ['tr', 'br'], overflow: f, offset: [0, 4], targetOffset: d },
        },
        p = v,
        m = n(90826),
        b = n(90468),
        h = n(63616),
        y = m.Z.ESC,
        g = m.Z.TAB;
      function Z(e) {
        var t = e.visible,
          n = e.setTriggerVisible,
          r = e.triggerRef,
          o = e.onVisibleChange,
          a = e.autoFocus,
          i = l.useRef(!1),
          c = function () {
            var e, a, i, l;
            t &&
              r.current &&
              (null === (e = r.current) ||
                void 0 === e ||
                null === (a = e.triggerRef) ||
                void 0 === a ||
                null === (i = a.current) ||
                void 0 === i ||
                null === (l = i.focus) ||
                void 0 === l ||
                l.call(i),
              n(!1),
              'function' === typeof o && o(!1));
          },
          u = function () {
            var e,
              t,
              n,
              o,
              a = (0, h.tS)(
                null === (e = r.current) ||
                  void 0 === e ||
                  null === (t = e.popupRef) ||
                  void 0 === t ||
                  null === (n = t.current) ||
                  void 0 === n ||
                  null === (o = n.getElement) ||
                  void 0 === o
                  ? void 0
                  : o.call(n),
              ),
              l = a[0];
            return (
              !!(null === l || void 0 === l ? void 0 : l.focus) && (l.focus(), (i.current = !0), !0)
            );
          },
          s = function (e) {
            switch (e.keyCode) {
              case y:
                c();
                break;
              case g:
                var t = !1;
                i.current || (t = u()), t ? e.preventDefault() : c();
                break;
            }
          };
        l.useEffect(
          function () {
            return t
              ? (window.addEventListener('keydown', s),
                a && (0, b.Z)(u, 3),
                function () {
                  window.removeEventListener('keydown', s), (i.current = !1);
                })
              : function () {
                  i.current = !1;
                };
          },
          [t],
        );
      }
      var C = [
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
      function E(e, t) {
        var n = e.arrow,
          u = void 0 !== n && n,
          f = e.prefixCls,
          d = void 0 === f ? 'rc-dropdown' : f,
          v = e.transitionName,
          m = e.animation,
          b = e.align,
          h = e.placement,
          y = void 0 === h ? 'bottomLeft' : h,
          g = e.placements,
          E = void 0 === g ? p : g,
          w = e.getPopupContainer,
          k = e.showAction,
          x = e.hideAction,
          N = e.overlayClassName,
          P = e.overlayStyle,
          M = e.visible,
          S = e.trigger,
          I = void 0 === S ? ['hover'] : S,
          R = e.autoFocus,
          K = (0, i.Z)(e, C),
          T = l.useState(),
          A = (0, a.Z)(T, 2),
          L = A[0],
          D = A[1],
          O = 'visible' in e ? M : L,
          V = l.useRef(null);
        l.useImperativeHandle(t, function () {
          return V.current;
        }),
          Z({
            visible: O,
            setTriggerVisible: D,
            triggerRef: V,
            onVisibleChange: e.onVisibleChange,
            autoFocus: R,
          });
        var _ = function () {
            var t,
              n = e.overlay;
            return (t = 'function' === typeof n ? n() : n), t;
          },
          B = function (t) {
            var n = e.onOverlayClick;
            D(!1), n && n(t);
          },
          W = function (t) {
            var n = e.onVisibleChange;
            D(t), 'function' === typeof n && n(t);
          },
          F = function () {
            var e = _();
            return l.createElement(
              l.Fragment,
              null,
              u && l.createElement('div', { className: ''.concat(d, '-arrow') }),
              e,
            );
          },
          j = function () {
            var t = e.overlay;
            return 'function' === typeof t ? F : F();
          },
          z = function () {
            var t = e.minOverlayWidthMatchTrigger,
              n = e.alignPoint;
            return 'minOverlayWidthMatchTrigger' in e ? t : !n;
          },
          H = function () {
            var t = e.openClassName;
            return void 0 !== t ? t : ''.concat(d, '-open');
          },
          G = function () {
            var t = e.children,
              n = t.props ? t.props : {},
              r = s()(n.className, H());
            return O && t ? l.cloneElement(t, { className: r }) : t;
          },
          X = x;
        return (
          X || -1 === I.indexOf('contextMenu') || (X = ['click']),
          l.createElement(
            c.Z,
            (0, o.Z)(
              (0, o.Z)({ builtinPlacements: E }, K),
              {},
              {
                prefixCls: d,
                ref: V,
                popupClassName: s()(N, (0, r.Z)({}, ''.concat(d, '-show-arrow'), u)),
                popupStyle: P,
                action: I,
                showAction: k,
                hideAction: X || [],
                popupPlacement: y,
                popupAlign: b,
                popupTransitionName: v,
                popupAnimation: m,
                popupVisible: O,
                stretch: z() ? 'minWidth' : '',
                popup: j(),
                onPopupVisibleChange: W,
                onPopupClick: B,
                getPopupContainer: w,
              },
            ),
            G(),
          )
        );
      }
      var w = l.forwardRef(E),
        k = w;
    },
    38337: function (e, t, n) {
      'use strict';
      n.d(t, {
        iz: function () {
          return tt;
        },
        ck: function () {
          return U;
        },
        BW: function () {
          return et;
        },
        sN: function () {
          return U;
        },
        GP: function () {
          return et;
        },
        Wd: function () {
          return Ce;
        },
        ZP: function () {
          return ot;
        },
        Xl: function () {
          return nt;
        },
      });
      var r = n(3066),
        o = n(4763),
        a = n(45937),
        i = n(66156),
        l = n(19877),
        c = n(63309),
        u = n(67294),
        s = n(35510),
        f = n.n(s),
        d = n(23270),
        v = n.n(d),
        p = n(82321),
        m = n(32503),
        b = n(76824),
        h = n(96285),
        y = n(76553),
        g = n(75304),
        Z = n(40251),
        C = n(90826),
        E = n(26670),
        w = n(45851),
        k = ['children', 'locked'],
        x = u.createContext(null);
      function N(e, t) {
        var n = (0, a.Z)({}, e);
        return (
          Object.keys(t).forEach(function (e) {
            var r = t[e];
            void 0 !== r && (n[e] = r);
          }),
          n
        );
      }
      function P(e) {
        var t = e.children,
          n = e.locked,
          r = (0, c.Z)(e, k),
          o = u.useContext(x),
          a = (0, w.Z)(
            function () {
              return N(o, r);
            },
            [o, r],
            function (e, t) {
              return !n && (e[0] !== t[0] || !v()(e[1], t[1]));
            },
          );
        return u.createElement(x.Provider, { value: a }, t);
      }
      function M(e, t, n, r) {
        var o = u.useContext(x),
          a = o.activeKey,
          i = o.onActive,
          l = o.onInactive,
          c = { active: a === e };
        return (
          t ||
            ((c.onMouseEnter = function (t) {
              null === n || void 0 === n || n({ key: e, domEvent: t }), i(e);
            }),
            (c.onMouseLeave = function (t) {
              null === r || void 0 === r || r({ key: e, domEvent: t }), l(e);
            })),
          c
        );
      }
      var S = ['item'];
      function I(e) {
        var t = e.item,
          n = (0, c.Z)(e, S);
        return (
          Object.defineProperty(n, 'item', {
            get: function () {
              return (
                (0, m.ZP)(
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
      function R(e) {
        var t,
          n = e.icon,
          r = e.props,
          o = e.children;
        return (
          (t = 'function' === typeof n ? u.createElement(n, (0, a.Z)({}, r)) : n), t || o || null
        );
      }
      function K(e) {
        var t = u.useContext(x),
          n = t.mode,
          r = t.rtl,
          o = t.inlineIndent;
        if ('inline' !== n) return null;
        var a = e;
        return r ? { paddingRight: a * o } : { paddingLeft: a * o };
      }
      var T = [],
        A = u.createContext(null);
      function L() {
        return u.useContext(A);
      }
      var D = u.createContext(T);
      function O(e) {
        var t = u.useContext(D);
        return u.useMemo(
          function () {
            return void 0 !== e ? [].concat((0, i.Z)(t), [e]) : t;
          },
          [t, e],
        );
      }
      var V = u.createContext(null),
        _ = u.createContext(null);
      function B(e, t) {
        return void 0 === e ? null : ''.concat(e, '-').concat(t);
      }
      function W(e) {
        var t = u.useContext(_);
        return B(t, e);
      }
      var F = u.createContext({}),
        j = F,
        z = ['title', 'attribute', 'elementRef'],
        H = [
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
        G = ['active'],
        X = (function (e) {
          (0, g.Z)(n, e);
          var t = (0, Z.Z)(n);
          function n() {
            return (0, h.Z)(this, n), t.apply(this, arguments);
          }
          return (
            (0, y.Z)(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.title,
                    n = e.attribute,
                    o = e.elementRef,
                    a = (0, c.Z)(e, z),
                    i = (0, E.Z)(a, ['eventKey']);
                  return (
                    (0, m.ZP)(
                      !n,
                      '`attribute` of Menu.Item is deprecated. Please pass attribute directly.',
                    ),
                    u.createElement(
                      b.Z.Item,
                      (0, r.default)({}, n, { title: 'string' === typeof t ? t : void 0 }, i, {
                        ref: o,
                      }),
                    )
                  );
                },
              },
            ]),
            n
          );
        })(u.Component),
        Y = function (e) {
          var t,
            n = e.style,
            l = e.className,
            s = e.eventKey,
            d = (e.warnKey, e.disabled),
            v = e.itemIcon,
            p = e.children,
            m = e.role,
            b = e.onMouseEnter,
            h = e.onMouseLeave,
            y = e.onClick,
            g = e.onKeyDown,
            Z = e.onFocus,
            E = (0, c.Z)(e, H),
            w = W(s),
            k = u.useContext(x),
            N = k.prefixCls,
            P = k.onItemClick,
            S = k.disabled,
            T = k.overflowDisabled,
            A = k.itemIcon,
            L = k.selectedKeys,
            D = k.onActive,
            V = u.useContext(j),
            _ = V._internalRenderMenuItem,
            B = ''.concat(N, '-item'),
            F = u.useRef(),
            z = u.useRef(),
            Y = S || d,
            q = O(s);
          var U = function (e) {
              return { key: s, keyPath: (0, i.Z)(q).reverse(), item: F.current, domEvent: e };
            },
            J = v || A,
            Q = M(s, Y, b, h),
            $ = Q.active,
            ee = (0, c.Z)(Q, G),
            te = L.includes(s),
            ne = K(q.length),
            re = function (e) {
              if (!Y) {
                var t = U(e);
                null === y || void 0 === y || y(I(t)), P(t);
              }
            },
            oe = function (e) {
              if ((null === g || void 0 === g || g(e), e.which === C.Z.ENTER)) {
                var t = U(e);
                null === y || void 0 === y || y(I(t)), P(t);
              }
            },
            ae = function (e) {
              D(s), null === Z || void 0 === Z || Z(e);
            },
            ie = {};
          'option' === e.role && (ie['aria-selected'] = te);
          var le = u.createElement(
            X,
            (0, r.default)(
              {
                ref: F,
                elementRef: z,
                role: null === m ? 'none' : m || 'menuitem',
                tabIndex: d ? null : -1,
                'data-menu-id': T && w ? null : w,
              },
              E,
              ee,
              ie,
              {
                component: 'li',
                'aria-disabled': d,
                style: (0, a.Z)((0, a.Z)({}, ne), n),
                className: f()(
                  B,
                  ((t = {}),
                  (0, o.Z)(t, ''.concat(B, '-active'), $),
                  (0, o.Z)(t, ''.concat(B, '-selected'), te),
                  (0, o.Z)(t, ''.concat(B, '-disabled'), Y),
                  t),
                  l,
                ),
                onClick: re,
                onKeyDown: oe,
                onFocus: ae,
              },
            ),
            p,
            u.createElement(R, {
              props: (0, a.Z)((0, a.Z)({}, e), {}, { isSelected: te }),
              icon: J,
            }),
          );
          return _ && (le = _(le, e, { selected: te })), le;
        };
      function q(e) {
        var t = e.eventKey,
          n = L(),
          r = O(t);
        return (
          u.useEffect(
            function () {
              if (n)
                return (
                  n.registerPath(t, r),
                  function () {
                    n.unregisterPath(t, r);
                  }
                );
            },
            [r],
          ),
          n ? null : u.createElement(Y, e)
        );
      }
      var U = q,
        J = n(95676),
        Q = n(10048),
        $ = ['label', 'children', 'key', 'type'];
      function ee(e, t) {
        return (0, Q.Z)(e).map(function (e, n) {
          if (u.isValidElement(e)) {
            var r,
              o,
              a = e.key,
              l =
                null !== (r = null === (o = e.props) || void 0 === o ? void 0 : o.eventKey) &&
                void 0 !== r
                  ? r
                  : a,
              c = null === l || void 0 === l;
            c && (l = 'tmp_key-'.concat([].concat((0, i.Z)(t), [n]).join('-')));
            var s = { key: l, eventKey: l };
            return u.cloneElement(e, s);
          }
          return e;
        });
      }
      function te(e) {
        return (e || [])
          .map(function (e, t) {
            if (e && 'object' === (0, J.Z)(e)) {
              var n = e.label,
                o = e.children,
                a = e.key,
                i = e.type,
                l = (0, c.Z)(e, $),
                s = null !== a && void 0 !== a ? a : 'tmp-'.concat(t);
              return o || 'group' === i
                ? 'group' === i
                  ? u.createElement(et, (0, r.default)({ key: s }, l, { title: n }), te(o))
                  : u.createElement(Ce, (0, r.default)({ key: s }, l, { title: n }), te(o))
                : 'divider' === i
                ? u.createElement(tt, (0, r.default)({ key: s }, l))
                : u.createElement(U, (0, r.default)({ key: s }, l), n);
            }
            return null;
          })
          .filter(function (e) {
            return e;
          });
      }
      function ne(e, t, n) {
        var r = e;
        return t && (r = te(t)), ee(r, n);
      }
      function re(e) {
        var t = u.useRef(e);
        t.current = e;
        var n = u.useCallback(function () {
          for (var e, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return null === (e = t.current) || void 0 === e ? void 0 : e.call.apply(e, [t].concat(r));
        }, []);
        return e ? n : void 0;
      }
      var oe = ['className', 'children'],
        ae = function (e, t) {
          var n = e.className,
            o = e.children,
            a = (0, c.Z)(e, oe),
            i = u.useContext(x),
            l = i.prefixCls,
            s = i.mode,
            d = i.rtl;
          return u.createElement(
            'ul',
            (0, r.default)(
              {
                className: f()(
                  l,
                  d && ''.concat(l, '-rtl'),
                  ''.concat(l, '-sub'),
                  ''.concat(l, '-').concat('inline' === s ? 'inline' : 'vertical'),
                  n,
                ),
              },
              a,
              { 'data-menu-list': !0, ref: t },
            ),
            o,
          );
        },
        ie = u.forwardRef(ae);
      ie.displayName = 'SubMenuList';
      var le = ie,
        ce = n(28528),
        ue = n(90468),
        se = { adjustX: 1, adjustY: 1 },
        fe = {
          topLeft: { points: ['bl', 'tl'], overflow: se, offset: [0, -7] },
          bottomLeft: { points: ['tl', 'bl'], overflow: se, offset: [0, 7] },
          leftTop: { points: ['tr', 'tl'], overflow: se, offset: [-4, 0] },
          rightTop: { points: ['tl', 'tr'], overflow: se, offset: [4, 0] },
        },
        de = {
          topLeft: { points: ['bl', 'tl'], overflow: se, offset: [0, -7] },
          bottomLeft: { points: ['tl', 'bl'], overflow: se, offset: [0, 7] },
          rightTop: { points: ['tr', 'tl'], overflow: se, offset: [-4, 0] },
          leftTop: { points: ['tl', 'tr'], overflow: se, offset: [4, 0] },
        };
      function ve(e, t, n) {
        return t || (n ? n[e] || n.other : void 0);
      }
      var pe = {
        horizontal: 'bottomLeft',
        vertical: 'rightTop',
        'vertical-left': 'rightTop',
        'vertical-right': 'leftTop',
      };
      function me(e) {
        var t = e.prefixCls,
          n = e.visible,
          r = e.children,
          i = e.popup,
          c = e.popupClassName,
          s = e.popupOffset,
          d = e.disabled,
          v = e.mode,
          p = e.onVisibleChange,
          m = u.useContext(x),
          b = m.getPopupContainer,
          h = m.rtl,
          y = m.subMenuOpenDelay,
          g = m.subMenuCloseDelay,
          Z = m.builtinPlacements,
          C = m.triggerSubMenuAction,
          E = m.forceSubMenuRender,
          w = m.rootClassName,
          k = m.motion,
          N = m.defaultMotions,
          P = u.useState(!1),
          M = (0, l.Z)(P, 2),
          S = M[0],
          I = M[1],
          R = h ? (0, a.Z)((0, a.Z)({}, de), Z) : (0, a.Z)((0, a.Z)({}, fe), Z),
          K = pe[v],
          T = ve(v, k, N),
          A = (0, a.Z)(
            (0, a.Z)({}, T),
            {},
            { leavedClassName: ''.concat(t, '-hidden'), removeOnLeave: !1, motionAppear: !0 },
          ),
          L = u.useRef();
        return (
          u.useEffect(
            function () {
              return (
                (L.current = (0, ue.Z)(function () {
                  I(n);
                })),
                function () {
                  ue.Z.cancel(L.current);
                }
              );
            },
            [n],
          ),
          u.createElement(
            ce.Z,
            {
              prefixCls: t,
              popupClassName: f()(
                ''.concat(t, '-popup'),
                (0, o.Z)({}, ''.concat(t, '-rtl'), h),
                c,
                w,
              ),
              stretch: 'horizontal' === v ? 'minWidth' : null,
              getPopupContainer: b,
              builtinPlacements: R,
              popupPlacement: K,
              popupVisible: S,
              popup: i,
              popupAlign: s && { offset: s },
              action: d ? [] : [C],
              mouseEnterDelay: y,
              mouseLeaveDelay: g,
              onPopupVisibleChange: p,
              forceRender: E,
              popupMotion: A,
            },
            r,
          )
        );
      }
      var be = n(80289);
      function he(e) {
        var t = e.id,
          n = e.open,
          o = e.keyPath,
          i = e.children,
          c = 'inline',
          s = u.useContext(x),
          f = s.prefixCls,
          d = s.forceSubMenuRender,
          v = s.motion,
          p = s.defaultMotions,
          m = s.mode,
          b = u.useRef(!1);
        b.current = m === c;
        var h = u.useState(!b.current),
          y = (0, l.Z)(h, 2),
          g = y[0],
          Z = y[1],
          C = !!b.current && n;
        u.useEffect(
          function () {
            b.current && Z(!1);
          },
          [m],
        );
        var E = (0, a.Z)({}, ve(c, v, p));
        o.length > 1 && (E.motionAppear = !1);
        var w = E.onVisibleChanged;
        return (
          (E.onVisibleChanged = function (e) {
            return b.current || e || Z(!0), null === w || void 0 === w ? void 0 : w(e);
          }),
          g
            ? null
            : u.createElement(
                P,
                { mode: c, locked: !b.current },
                u.createElement(
                  be.Z,
                  (0, r.default)({ visible: C }, E, {
                    forceRender: d,
                    removeOnLeave: !1,
                    leavedClassName: ''.concat(f, '-hidden'),
                  }),
                  function (e) {
                    var n = e.className,
                      r = e.style;
                    return u.createElement(le, { id: t, className: n, style: r }, i);
                  },
                ),
              )
        );
      }
      var ye = [
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
        ge = ['active'],
        Ze = function (e) {
          var t,
            n = e.style,
            i = e.className,
            s = e.title,
            d = e.eventKey,
            v = (e.warnKey, e.disabled),
            p = e.internalPopupClose,
            m = e.children,
            h = e.itemIcon,
            y = e.expandIcon,
            g = e.popupClassName,
            Z = e.popupOffset,
            C = e.onClick,
            E = e.onMouseEnter,
            w = e.onMouseLeave,
            k = e.onTitleClick,
            N = e.onTitleMouseEnter,
            S = e.onTitleMouseLeave,
            T = (0, c.Z)(e, ye),
            A = W(d),
            L = u.useContext(x),
            D = L.prefixCls,
            _ = L.mode,
            B = L.openKeys,
            F = L.disabled,
            z = L.overflowDisabled,
            H = L.activeKey,
            G = L.selectedKeys,
            X = L.itemIcon,
            Y = L.expandIcon,
            q = L.onItemClick,
            U = L.onOpenChange,
            J = L.onActive,
            Q = u.useContext(j),
            $ = Q._internalRenderSubMenuItem,
            ee = u.useContext(V),
            te = ee.isSubPathKey,
            ne = O(),
            oe = ''.concat(D, '-submenu'),
            ae = F || v,
            ie = u.useRef(),
            ce = u.useRef();
          var ue = h || X,
            se = y || Y,
            fe = B.includes(d),
            de = !z && fe,
            ve = te(G, d),
            pe = M(d, ae, N, S),
            be = pe.active,
            Ze = (0, c.Z)(pe, ge),
            Ce = u.useState(!1),
            Ee = (0, l.Z)(Ce, 2),
            we = Ee[0],
            ke = Ee[1],
            xe = function (e) {
              ae || ke(e);
            },
            Ne = function (e) {
              xe(!0), null === E || void 0 === E || E({ key: d, domEvent: e });
            },
            Pe = function (e) {
              xe(!1), null === w || void 0 === w || w({ key: d, domEvent: e });
            },
            Me = u.useMemo(
              function () {
                return be || ('inline' !== _ && (we || te([H], d)));
              },
              [_, be, H, we, d, te],
            ),
            Se = K(ne.length),
            Ie = function (e) {
              ae ||
                (null === k || void 0 === k || k({ key: d, domEvent: e }),
                'inline' === _ && U(d, !fe));
            },
            Re = re(function (e) {
              null === C || void 0 === C || C(I(e)), q(e);
            }),
            Ke = function (e) {
              'inline' !== _ && U(d, e);
            },
            Te = function () {
              J(d);
            },
            Ae = A && ''.concat(A, '-popup'),
            Le = u.createElement(
              'div',
              (0, r.default)(
                {
                  role: 'menuitem',
                  style: Se,
                  className: ''.concat(oe, '-title'),
                  tabIndex: ae ? null : -1,
                  ref: ie,
                  title: 'string' === typeof s ? s : null,
                  'data-menu-id': z && A ? null : A,
                  'aria-expanded': de,
                  'aria-haspopup': !0,
                  'aria-controls': Ae,
                  'aria-disabled': ae,
                  onClick: Ie,
                  onFocus: Te,
                },
                Ze,
              ),
              s,
              u.createElement(
                R,
                {
                  icon: 'horizontal' !== _ ? se : null,
                  props: (0, a.Z)((0, a.Z)({}, e), {}, { isOpen: de, isSubMenu: !0 }),
                },
                u.createElement('i', { className: ''.concat(oe, '-arrow') }),
              ),
            ),
            De = u.useRef(_);
          if (('inline' !== _ && (De.current = ne.length > 1 ? 'vertical' : _), !z)) {
            var Oe = De.current;
            Le = u.createElement(
              me,
              {
                mode: Oe,
                prefixCls: oe,
                visible: !p && de && 'inline' !== _,
                popupClassName: g,
                popupOffset: Z,
                popup: u.createElement(
                  P,
                  { mode: 'horizontal' === Oe ? 'vertical' : Oe },
                  u.createElement(le, { id: Ae, ref: ce }, m),
                ),
                disabled: ae,
                onVisibleChange: Ke,
              },
              Le,
            );
          }
          var Ve = u.createElement(
            b.Z.Item,
            (0, r.default)({ role: 'none' }, T, {
              component: 'li',
              style: n,
              className: f()(
                oe,
                ''.concat(oe, '-').concat(_),
                i,
                ((t = {}),
                (0, o.Z)(t, ''.concat(oe, '-open'), de),
                (0, o.Z)(t, ''.concat(oe, '-active'), Me),
                (0, o.Z)(t, ''.concat(oe, '-selected'), ve),
                (0, o.Z)(t, ''.concat(oe, '-disabled'), ae),
                t),
              ),
              onMouseEnter: Ne,
              onMouseLeave: Pe,
            }),
            Le,
            !z && u.createElement(he, { id: Ae, open: de, keyPath: ne }, m),
          );
          return (
            $ && (Ve = $(Ve, e, { selected: ve, active: Me, open: de, disabled: ae })),
            u.createElement(
              P,
              {
                onItemClick: Re,
                mode: 'horizontal' === _ ? 'vertical' : _,
                itemIcon: ue,
                expandIcon: se,
              },
              Ve,
            )
          );
        };
      function Ce(e) {
        var t,
          n = e.eventKey,
          r = e.children,
          o = O(n),
          a = ee(r, o),
          i = L();
        return (
          u.useEffect(
            function () {
              if (i)
                return (
                  i.registerPath(n, o),
                  function () {
                    i.unregisterPath(n, o);
                  }
                );
            },
            [o],
          ),
          (t = i ? a : u.createElement(Ze, e, a)),
          u.createElement(D.Provider, { value: o }, t)
        );
      }
      var Ee = n(63616),
        we = C.Z.LEFT,
        ke = C.Z.RIGHT,
        xe = C.Z.UP,
        Ne = C.Z.DOWN,
        Pe = C.Z.ENTER,
        Me = C.Z.ESC,
        Se = C.Z.HOME,
        Ie = C.Z.END,
        Re = [xe, Ne, we, ke];
      function Ke(e, t, n, r) {
        var a,
          i,
          l,
          c,
          u = 'prev',
          s = 'next',
          f = 'children',
          d = 'parent';
        if ('inline' === e && r === Pe) return { inlineTrigger: !0 };
        var v = ((a = {}), (0, o.Z)(a, xe, u), (0, o.Z)(a, Ne, s), a),
          p =
            ((i = {}),
            (0, o.Z)(i, we, n ? s : u),
            (0, o.Z)(i, ke, n ? u : s),
            (0, o.Z)(i, Ne, f),
            (0, o.Z)(i, Pe, f),
            i),
          m =
            ((l = {}),
            (0, o.Z)(l, xe, u),
            (0, o.Z)(l, Ne, s),
            (0, o.Z)(l, Pe, f),
            (0, o.Z)(l, Me, d),
            (0, o.Z)(l, we, n ? f : d),
            (0, o.Z)(l, ke, n ? d : f),
            l),
          b = {
            inline: v,
            horizontal: p,
            vertical: m,
            inlineSub: v,
            horizontalSub: m,
            verticalSub: m,
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
      function Te(e) {
        var t = e;
        while (t) {
          if (t.getAttribute('data-menu-list')) return t;
          t = t.parentElement;
        }
        return null;
      }
      function Ae(e, t) {
        var n = e || document.activeElement;
        while (n) {
          if (t.has(n)) return n;
          n = n.parentElement;
        }
        return null;
      }
      function Le(e, t) {
        var n = (0, Ee.tS)(e, !0);
        return n.filter(function (e) {
          return t.has(e);
        });
      }
      function De(e, t, n) {
        var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        if (!e) return null;
        var o = Le(e, t),
          a = o.length,
          i = o.findIndex(function (e) {
            return n === e;
          });
        return (
          r < 0 ? (-1 === i ? (i = a - 1) : (i -= 1)) : r > 0 && (i += 1), (i = (i + a) % a), o[i]
        );
      }
      function Oe(e, t, n, r, o, a, i, l, c, s) {
        var f = u.useRef(),
          d = u.useRef();
        d.current = t;
        var v = function () {
          ue.Z.cancel(f.current);
        };
        return (
          u.useEffect(function () {
            return function () {
              v();
            };
          }, []),
          function (u) {
            var p = u.which;
            if ([].concat(Re, [Pe, Me, Se, Ie]).includes(p)) {
              var m,
                b,
                h,
                y = function () {
                  (m = new Set()), (b = new Map()), (h = new Map());
                  var e = a();
                  return (
                    e.forEach(function (e) {
                      var t = document.querySelector("[data-menu-id='".concat(B(r, e), "']"));
                      t && (m.add(t), h.set(t, e), b.set(e, t));
                    }),
                    m
                  );
                };
              y();
              var g = b.get(t),
                Z = Ae(g, m),
                C = h.get(Z),
                E = Ke(e, 1 === i(C, !0).length, n, p);
              if (!E && p !== Se && p !== Ie) return;
              (Re.includes(p) || [Se, Ie].includes(p)) && u.preventDefault();
              var w = function (e) {
                if (e) {
                  var t = e,
                    n = e.querySelector('a');
                  (null === n || void 0 === n ? void 0 : n.getAttribute('href')) && (t = n);
                  var r = h.get(e);
                  l(r),
                    v(),
                    (f.current = (0, ue.Z)(function () {
                      d.current === r && t.focus();
                    }));
                }
              };
              if ([Se, Ie].includes(p) || E.sibling || !Z) {
                var k, x;
                k = Z && 'inline' !== e ? Te(Z) : o.current;
                var N = Le(k, m);
                (x = p === Se ? N[0] : p === Ie ? N[N.length - 1] : De(k, m, Z, E.offset)), w(x);
              } else if (E.inlineTrigger) c(C);
              else if (E.offset > 0)
                c(C, !0),
                  v(),
                  (f.current = (0, ue.Z)(function () {
                    y();
                    var e = Z.getAttribute('aria-controls'),
                      t = document.getElementById(e),
                      n = De(t, m);
                    w(n);
                  }, 5));
              else if (E.offset < 0) {
                var P = i(C, !0),
                  M = P[P.length - 2],
                  S = b.get(M);
                c(M, !1), w(S);
              }
            }
            null === s || void 0 === s || s(u);
          }
        );
      }
      var Ve = Math.random().toFixed(5).toString().slice(2),
        _e = 0;
      function Be(e) {
        var t = (0, p.Z)(e, { value: e }),
          n = (0, l.Z)(t, 2),
          r = n[0],
          o = n[1];
        return (
          u.useEffect(function () {
            _e += 1;
            var e = ''.concat(Ve, '-').concat(_e);
            o('rc-menu-uuid-'.concat(e));
          }, []),
          r
        );
      }
      function We(e) {
        Promise.resolve().then(e);
      }
      var Fe = '__RC_UTIL_PATH_SPLIT__',
        je = function (e) {
          return e.join(Fe);
        },
        ze = function (e) {
          return e.split(Fe);
        },
        He = 'rc-menu-more';
      function Ge() {
        var e = u.useState({}),
          t = (0, l.Z)(e, 2),
          n = t[1],
          r = (0, u.useRef)(new Map()),
          o = (0, u.useRef)(new Map()),
          a = u.useState([]),
          c = (0, l.Z)(a, 2),
          s = c[0],
          f = c[1],
          d = (0, u.useRef)(0),
          v = (0, u.useRef)(!1),
          p = function () {
            v.current || n({});
          },
          m = (0, u.useCallback)(function (e, t) {
            var n = je(t);
            o.current.set(n, e), r.current.set(e, n), (d.current += 1);
            var a = d.current;
            We(function () {
              a === d.current && p();
            });
          }, []),
          b = (0, u.useCallback)(function (e, t) {
            var n = je(t);
            o.current['delete'](n), r.current['delete'](e);
          }, []),
          h = (0, u.useCallback)(function (e) {
            f(e);
          }, []),
          y = (0, u.useCallback)(
            function (e, t) {
              var n = r.current.get(e) || '',
                o = ze(n);
              return t && s.includes(o[0]) && o.unshift(He), o;
            },
            [s],
          ),
          g = (0, u.useCallback)(
            function (e, t) {
              return e.some(function (e) {
                var n = y(e, !0);
                return n.includes(t);
              });
            },
            [y],
          ),
          Z = function () {
            var e = (0, i.Z)(r.current.keys());
            return s.length && e.push(He), e;
          },
          C = (0, u.useCallback)(function (e) {
            var t = ''.concat(r.current.get(e)).concat(Fe),
              n = new Set();
            return (
              (0, i.Z)(o.current.keys()).forEach(function (e) {
                e.startsWith(t) && n.add(o.current.get(e));
              }),
              n
            );
          }, []);
        return (
          u.useEffect(function () {
            return function () {
              v.current = !0;
            };
          }, []),
          {
            registerPath: m,
            unregisterPath: b,
            refreshOverflowKeys: h,
            isSubPathKey: g,
            getKeyPath: y,
            getKeys: Z,
            getSubPathKeys: C,
          }
        );
      }
      var Xe = [
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
        Ye = [],
        qe = u.forwardRef(function (e, t) {
          var n,
            s,
            d = e.prefixCls,
            m = void 0 === d ? 'rc-menu' : d,
            h = e.rootClassName,
            y = e.style,
            g = e.className,
            Z = e.tabIndex,
            C = void 0 === Z ? 0 : Z,
            E = e.items,
            w = e.children,
            k = e.direction,
            x = e.id,
            N = e.mode,
            M = void 0 === N ? 'vertical' : N,
            S = e.inlineCollapsed,
            R = e.disabled,
            K = e.disabledOverflow,
            T = e.subMenuOpenDelay,
            L = void 0 === T ? 0.1 : T,
            D = e.subMenuCloseDelay,
            O = void 0 === D ? 0.1 : D,
            W = e.forceSubMenuRender,
            F = e.defaultOpenKeys,
            z = e.openKeys,
            H = e.activeKey,
            G = e.defaultActiveFirst,
            X = e.selectable,
            Y = void 0 === X || X,
            q = e.multiple,
            J = void 0 !== q && q,
            Q = e.defaultSelectedKeys,
            $ = e.selectedKeys,
            ee = e.onSelect,
            te = e.onDeselect,
            oe = e.inlineIndent,
            ae = void 0 === oe ? 24 : oe,
            ie = e.motion,
            le = e.defaultMotions,
            ce = e.triggerSubMenuAction,
            ue = void 0 === ce ? 'hover' : ce,
            se = e.builtinPlacements,
            fe = e.itemIcon,
            de = e.expandIcon,
            ve = e.overflowedIndicator,
            pe = void 0 === ve ? '...' : ve,
            me = e.overflowedIndicatorPopupClassName,
            be = e.getPopupContainer,
            he = e.onClick,
            ye = e.onOpenChange,
            ge = e.onKeyDown,
            Ze = (e.openAnimation, e.openTransitionName, e._internalRenderMenuItem),
            Ee = e._internalRenderSubMenuItem,
            we = (0, c.Z)(e, Xe),
            ke = u.useMemo(
              function () {
                return ne(w, E, Ye);
              },
              [w, E],
            ),
            xe = u.useState(!1),
            Ne = (0, l.Z)(xe, 2),
            Pe = Ne[0],
            Me = Ne[1],
            Se = u.useRef(),
            Ie = Be(x),
            Re = 'rtl' === k;
          var Ke = u.useMemo(
              function () {
                return ('inline' !== M && 'vertical' !== M) || !S ? [M, !1] : ['vertical', S];
              },
              [M, S],
            ),
            Te = (0, l.Z)(Ke, 2),
            Ae = Te[0],
            Le = Te[1],
            De = u.useState(0),
            Ve = (0, l.Z)(De, 2),
            _e = Ve[0],
            We = Ve[1],
            Fe = _e >= ke.length - 1 || 'horizontal' !== Ae || K,
            je = (0, p.Z)(F, {
              value: z,
              postState: function (e) {
                return e || Ye;
              },
            }),
            ze = (0, l.Z)(je, 2),
            qe = ze[0],
            Ue = ze[1],
            Je = function (e) {
              Ue(e), null === ye || void 0 === ye || ye(e);
            },
            Qe = u.useState(qe),
            $e = (0, l.Z)(Qe, 2),
            et = $e[0],
            tt = $e[1],
            nt = 'inline' === Ae,
            rt = u.useRef(!1);
          u.useEffect(
            function () {
              nt && tt(qe);
            },
            [qe],
          ),
            u.useEffect(
              function () {
                rt.current ? (nt ? Ue(et) : Je(Ye)) : (rt.current = !0);
              },
              [nt],
            );
          var ot = Ge(),
            at = ot.registerPath,
            it = ot.unregisterPath,
            lt = ot.refreshOverflowKeys,
            ct = ot.isSubPathKey,
            ut = ot.getKeyPath,
            st = ot.getKeys,
            ft = ot.getSubPathKeys,
            dt = u.useMemo(
              function () {
                return { registerPath: at, unregisterPath: it };
              },
              [at, it],
            ),
            vt = u.useMemo(
              function () {
                return { isSubPathKey: ct };
              },
              [ct],
            );
          u.useEffect(
            function () {
              lt(
                Fe
                  ? Ye
                  : ke.slice(_e + 1).map(function (e) {
                      return e.key;
                    }),
              );
            },
            [_e, Fe],
          );
          var pt = (0, p.Z)(H || (G && (null === (n = ke[0]) || void 0 === n ? void 0 : n.key)), {
              value: H,
            }),
            mt = (0, l.Z)(pt, 2),
            bt = mt[0],
            ht = mt[1],
            yt = re(function (e) {
              ht(e);
            }),
            gt = re(function () {
              ht(void 0);
            });
          (0, u.useImperativeHandle)(t, function () {
            return {
              list: Se.current,
              focus: function (e) {
                var t,
                  n,
                  r,
                  o,
                  a =
                    null !== bt && void 0 !== bt
                      ? bt
                      : null ===
                          (t = ke.find(function (e) {
                            return !e.props.disabled;
                          })) || void 0 === t
                      ? void 0
                      : t.key;
                a &&
                  (null === (n = Se.current) ||
                    void 0 === n ||
                    null === (r = n.querySelector("li[data-menu-id='".concat(B(Ie, a), "']"))) ||
                    void 0 === r ||
                    null === (o = r.focus) ||
                    void 0 === o ||
                    o.call(r, e));
              },
            };
          });
          var Zt = (0, p.Z)(Q || [], {
              value: $,
              postState: function (e) {
                return Array.isArray(e) ? e : null === e || void 0 === e ? Ye : [e];
              },
            }),
            Ct = (0, l.Z)(Zt, 2),
            Et = Ct[0],
            wt = Ct[1],
            kt = function (e) {
              if (Y) {
                var t,
                  n = e.key,
                  r = Et.includes(n);
                (t = J
                  ? r
                    ? Et.filter(function (e) {
                        return e !== n;
                      })
                    : [].concat((0, i.Z)(Et), [n])
                  : [n]),
                  wt(t);
                var o = (0, a.Z)((0, a.Z)({}, e), {}, { selectedKeys: t });
                r ? null === te || void 0 === te || te(o) : null === ee || void 0 === ee || ee(o);
              }
              !J && qe.length && 'inline' !== Ae && Je(Ye);
            },
            xt = re(function (e) {
              null === he || void 0 === he || he(I(e)), kt(e);
            }),
            Nt = re(function (e, t) {
              var n = qe.filter(function (t) {
                return t !== e;
              });
              if (t) n.push(e);
              else if ('inline' !== Ae) {
                var r = ft(e);
                n = n.filter(function (e) {
                  return !r.has(e);
                });
              }
              v()(qe, n) || Je(n);
            }),
            Pt = re(be),
            Mt = function (e, t) {
              var n = null !== t && void 0 !== t ? t : !qe.includes(e);
              Nt(e, n);
            },
            St = Oe(Ae, bt, Re, Ie, Se, st, ut, ht, Mt, ge);
          u.useEffect(function () {
            Me(!0);
          }, []);
          var It = u.useMemo(
              function () {
                return { _internalRenderMenuItem: Ze, _internalRenderSubMenuItem: Ee };
              },
              [Ze, Ee],
            ),
            Rt =
              'horizontal' !== Ae || K
                ? ke
                : ke.map(function (e, t) {
                    return u.createElement(P, { key: e.key, overflowDisabled: t > _e }, e);
                  }),
            Kt = u.createElement(
              b.Z,
              (0, r.default)(
                {
                  id: x,
                  ref: Se,
                  prefixCls: ''.concat(m, '-overflow'),
                  component: 'ul',
                  itemComponent: U,
                  className: f()(
                    m,
                    ''.concat(m, '-root'),
                    ''.concat(m, '-').concat(Ae),
                    g,
                    ((s = {}),
                    (0, o.Z)(s, ''.concat(m, '-inline-collapsed'), Le),
                    (0, o.Z)(s, ''.concat(m, '-rtl'), Re),
                    s),
                    h,
                  ),
                  dir: k,
                  style: y,
                  role: 'menu',
                  tabIndex: C,
                  data: Rt,
                  renderRawItem: function (e) {
                    return e;
                  },
                  renderRawRest: function (e) {
                    var t = e.length,
                      n = t ? ke.slice(-t) : null;
                    return u.createElement(
                      Ce,
                      {
                        eventKey: He,
                        title: pe,
                        disabled: Fe,
                        internalPopupClose: 0 === t,
                        popupClassName: me,
                      },
                      n,
                    );
                  },
                  maxCount: 'horizontal' !== Ae || K ? b.Z.INVALIDATE : b.Z.RESPONSIVE,
                  ssr: 'full',
                  'data-menu-list': !0,
                  onVisibleChange: function (e) {
                    We(e);
                  },
                  onKeyDown: St,
                },
                we,
              ),
            );
          return u.createElement(
            j.Provider,
            { value: It },
            u.createElement(
              _.Provider,
              { value: Ie },
              u.createElement(
                P,
                {
                  prefixCls: m,
                  rootClassName: h,
                  mode: Ae,
                  openKeys: qe,
                  rtl: Re,
                  disabled: R,
                  motion: Pe ? ie : null,
                  defaultMotions: Pe ? le : null,
                  activeKey: bt,
                  onActive: yt,
                  onInactive: gt,
                  selectedKeys: Et,
                  inlineIndent: ae,
                  subMenuOpenDelay: L,
                  subMenuCloseDelay: O,
                  forceSubMenuRender: W,
                  builtinPlacements: se,
                  triggerSubMenuAction: ue,
                  getPopupContainer: Pt,
                  itemIcon: fe,
                  expandIcon: de,
                  onItemClick: xt,
                  onOpenChange: Nt,
                },
                u.createElement(V.Provider, { value: vt }, Kt),
                u.createElement(
                  'div',
                  { style: { display: 'none' }, 'aria-hidden': !0 },
                  u.createElement(A.Provider, { value: dt }, ke),
                ),
              ),
            ),
          );
        }),
        Ue = qe,
        Je = ['className', 'title', 'eventKey', 'children'],
        Qe = ['children'],
        $e = function (e) {
          var t = e.className,
            n = e.title,
            o = (e.eventKey, e.children),
            a = (0, c.Z)(e, Je),
            i = u.useContext(x),
            l = i.prefixCls,
            s = ''.concat(l, '-item-group');
          return u.createElement(
            'li',
            (0, r.default)({}, a, {
              onClick: function (e) {
                return e.stopPropagation();
              },
              className: f()(s, t),
            }),
            u.createElement(
              'div',
              { className: ''.concat(s, '-title'), title: 'string' === typeof n ? n : void 0 },
              n,
            ),
            u.createElement('ul', { className: ''.concat(s, '-list') }, o),
          );
        };
      function et(e) {
        var t = e.children,
          n = (0, c.Z)(e, Qe),
          r = O(n.eventKey),
          o = ee(t, r),
          a = L();
        return a ? o : u.createElement($e, (0, E.Z)(n, ['warnKey']), o);
      }
      function tt(e) {
        var t = e.className,
          n = e.style,
          r = u.useContext(x),
          o = r.prefixCls,
          a = L();
        return a
          ? null
          : u.createElement('li', { className: f()(''.concat(o, '-item-divider'), t), style: n });
      }
      var nt = O,
        rt = Ue;
      (rt.Item = U), (rt.SubMenu = Ce), (rt.ItemGroup = et), (rt.Divider = tt);
      var ot = rt;
    },
    42886: function (e, t, n) {
      'use strict';
      n.d(t, {
        J: function () {
          return H;
        },
        Z: function () {
          return Q;
        },
      });
      var r = n(3066),
        o = n(4763),
        a = n(19877),
        i = n(95676),
        l = n(63309),
        c = n(45937),
        u = n(67294),
        s = n(35510),
        f = n.n(s),
        d = n(10048),
        v = n(44581),
        p = n(82321),
        m = n(66156),
        b = n(90468),
        h = n(83710);
      function y(e) {
        var t = (0, u.useRef)(),
          n = (0, u.useRef)(!1);
        function r() {
          for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++) o[a] = arguments[a];
          n.current ||
            (b.Z.cancel(t.current),
            (t.current = (0, b.Z)(function () {
              e.apply(void 0, o);
            })));
        }
        return (
          (0, u.useEffect)(function () {
            return (
              (n.current = !1),
              function () {
                (n.current = !0), b.Z.cancel(t.current);
              }
            );
          }, []),
          r
        );
      }
      function g(e) {
        var t = (0, u.useRef)([]),
          n = (0, u.useState)({}),
          r = (0, a.Z)(n, 2),
          o = r[1],
          i = (0, u.useRef)('function' === typeof e ? e() : e),
          l = y(function () {
            var e = i.current;
            t.current.forEach(function (t) {
              e = t(e);
            }),
              (t.current = []),
              (i.current = e),
              o({});
          });
        function c(e) {
          t.current.push(e), l();
        }
        return [i.current, c];
      }
      var Z = n(90826);
      function C(e, t) {
        var n,
          r = e.prefixCls,
          a = e.id,
          i = e.active,
          l = e.tab,
          c = l.key,
          s = l.tab,
          d = l.disabled,
          v = l.closeIcon,
          p = e.closable,
          m = e.renderWrapper,
          b = e.removeAriaLabel,
          h = e.editable,
          y = e.onClick,
          g = e.onRemove,
          C = e.onFocus,
          E = e.style,
          w = ''.concat(r, '-tab');
        u.useEffect(function () {
          return g;
        }, []);
        var k = h && !1 !== p && !d;
        function x(e) {
          d || y(e);
        }
        function N(e) {
          e.preventDefault(), e.stopPropagation(), h.onEdit('remove', { key: c, event: e });
        }
        var P = u.createElement(
          'div',
          {
            key: c,
            ref: t,
            className: f()(
              w,
              ((n = {}),
              (0, o.Z)(n, ''.concat(w, '-with-remove'), k),
              (0, o.Z)(n, ''.concat(w, '-active'), i),
              (0, o.Z)(n, ''.concat(w, '-disabled'), d),
              n),
            ),
            style: E,
            onClick: x,
          },
          u.createElement(
            'div',
            {
              role: 'tab',
              'aria-selected': i,
              id: a && ''.concat(a, '-tab-').concat(c),
              className: ''.concat(w, '-btn'),
              'aria-controls': a && ''.concat(a, '-panel-').concat(c),
              'aria-disabled': d,
              tabIndex: d ? null : 0,
              onClick: function (e) {
                e.stopPropagation(), x(e);
              },
              onKeyDown: function (e) {
                [Z.Z.SPACE, Z.Z.ENTER].includes(e.which) && (e.preventDefault(), x(e));
              },
              onFocus: C,
            },
            s,
          ),
          k &&
            u.createElement(
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
        return m ? m(P) : P;
      }
      var E = u.forwardRef(C),
        w = { width: 0, height: 0, left: 0, top: 0 };
      function k(e, t, n) {
        return (0, u.useMemo)(
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
                u = e[i].key,
                s = t.get(u);
              if (!s) s = t.get(null === (l = e[i - 1]) || void 0 === l ? void 0 : l.key) || w;
              var f = r.get(u) || (0, c.Z)({}, s);
              (f.right = a - f.left - f.width), r.set(u, f);
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
      function N(e, t, n, r, o) {
        var a,
          i,
          l,
          c = o.tabs,
          s = o.tabPosition,
          f = o.rtl;
        ['top', 'bottom'].includes(s)
          ? ((a = 'width'), (i = f ? 'right' : 'left'), (l = Math.abs(t.left)))
          : ((a = 'height'), (i = 'top'), (l = -t.top));
        var d = t[a],
          v = n[a],
          p = r[a],
          m = d;
        return (
          v + p > d && v < d && (m = d - p),
          (0, u.useMemo)(
            function () {
              if (!c.length) return [0, 0];
              for (var t = c.length, n = t, r = 0; r < t; r += 1) {
                var o = e.get(c[r].key) || x;
                if (o[i] + o[a] > l + m) {
                  n = r - 1;
                  break;
                }
              }
              for (var u = 0, s = t - 1; s >= 0; s -= 1) {
                var f = e.get(c[s].key) || x;
                if (f[i] < l) {
                  u = s + 1;
                  break;
                }
              }
              return [u, n];
            },
            [
              e,
              l,
              m,
              s,
              c
                .map(function (e) {
                  return e.key;
                })
                .join('_'),
              f,
            ],
          )
        );
      }
      var P = n(38337),
        M = n(84602);
      function S(e, t) {
        var n = e.prefixCls,
          r = e.editable,
          o = e.locale,
          a = e.style;
        return r && !1 !== r.showAdd
          ? u.createElement(
              'button',
              {
                ref: t,
                type: 'button',
                className: ''.concat(n, '-nav-add'),
                style: a,
                'aria-label': (null === o || void 0 === o ? void 0 : o.addAriaLabel) || 'Add tab',
                onClick: function (e) {
                  r.onEdit('add', { event: e });
                },
              },
              r.addIcon || '+',
            )
          : null;
      }
      var I = u.forwardRef(S);
      function R(e, t) {
        var n = e.prefixCls,
          r = e.id,
          i = e.tabs,
          l = e.locale,
          c = e.mobile,
          s = e.moreIcon,
          d = void 0 === s ? 'More' : s,
          v = e.moreTransitionName,
          p = e.style,
          m = e.className,
          b = e.editable,
          h = e.tabBarGutter,
          y = e.rtl,
          g = e.removeAriaLabel,
          C = e.onTabClick,
          E = e.getPopupContainer,
          w = e.popupClassName,
          k = (0, u.useState)(!1),
          x = (0, a.Z)(k, 2),
          N = x[0],
          S = x[1],
          R = (0, u.useState)(null),
          K = (0, a.Z)(R, 2),
          T = K[0],
          A = K[1],
          L = ''.concat(r, '-more-popup'),
          D = ''.concat(n, '-dropdown'),
          O = null !== T ? ''.concat(L, '-').concat(T) : null,
          V = null === l || void 0 === l ? void 0 : l.dropdownAriaLabel;
        function _(e, t) {
          e.preventDefault(), e.stopPropagation(), b.onEdit('remove', { key: t, event: e });
        }
        var B = u.createElement(
          P.ZP,
          {
            onClick: function (e) {
              var t = e.key,
                n = e.domEvent;
              C(t, n), S(!1);
            },
            prefixCls: ''.concat(D, '-menu'),
            id: L,
            tabIndex: -1,
            role: 'listbox',
            'aria-activedescendant': O,
            selectedKeys: [T],
            'aria-label': void 0 !== V ? V : 'expanded dropdown',
          },
          i.map(function (e) {
            var t = b && !1 !== e.closable && !e.disabled;
            return u.createElement(
              P.sN,
              {
                key: e.key,
                id: ''.concat(L, '-').concat(e.key),
                role: 'option',
                'aria-controls': r && ''.concat(r, '-panel-').concat(e.key),
                disabled: e.disabled,
              },
              u.createElement('span', null, e.tab),
              t &&
                u.createElement(
                  'button',
                  {
                    type: 'button',
                    'aria-label': g || 'remove',
                    tabIndex: 0,
                    className: ''.concat(D, '-menu-item-remove'),
                    onClick: function (t) {
                      t.stopPropagation(), _(t, e.key);
                    },
                  },
                  e.closeIcon || b.removeIcon || '\xd7',
                ),
            );
          }),
        );
        function W(e) {
          for (
            var t = i.filter(function (e) {
                return !e.disabled;
              }),
              n =
                t.findIndex(function (e) {
                  return e.key === T;
                }) || 0,
              r = t.length,
              o = 0;
            o < r;
            o += 1
          ) {
            n = (n + e + r) % r;
            var a = t[n];
            if (!a.disabled) return void A(a.key);
          }
        }
        function F(e) {
          var t = e.which;
          if (N)
            switch (t) {
              case Z.Z.UP:
                W(-1), e.preventDefault();
                break;
              case Z.Z.DOWN:
                W(1), e.preventDefault();
                break;
              case Z.Z.ESC:
                S(!1);
                break;
              case Z.Z.SPACE:
              case Z.Z.ENTER:
                null !== T && C(T, e);
                break;
            }
          else [Z.Z.DOWN, Z.Z.SPACE, Z.Z.ENTER].includes(t) && (S(!0), e.preventDefault());
        }
        (0, u.useEffect)(
          function () {
            var e = document.getElementById(O);
            e && e.scrollIntoView && e.scrollIntoView(!1);
          },
          [T],
        ),
          (0, u.useEffect)(
            function () {
              N || A(null);
            },
            [N],
          );
        var j = (0, o.Z)({}, y ? 'marginRight' : 'marginLeft', h);
        i.length || ((j.visibility = 'hidden'), (j.order = 1));
        var z = f()((0, o.Z)({}, ''.concat(D, '-rtl'), y)),
          H = c
            ? null
            : u.createElement(
                M.Z,
                {
                  prefixCls: D,
                  overlay: B,
                  trigger: ['hover'],
                  visible: !!i.length && N,
                  transitionName: v,
                  onVisibleChange: S,
                  overlayClassName: f()(z, w),
                  mouseEnterDelay: 0.1,
                  mouseLeaveDelay: 0.1,
                  getPopupContainer: E,
                },
                u.createElement(
                  'button',
                  {
                    type: 'button',
                    className: ''.concat(n, '-nav-more'),
                    style: j,
                    tabIndex: -1,
                    'aria-hidden': 'true',
                    'aria-haspopup': 'listbox',
                    'aria-controls': L,
                    id: ''.concat(r, '-more'),
                    'aria-expanded': N,
                    onKeyDown: F,
                  },
                  d,
                ),
              );
        return u.createElement(
          'div',
          { className: f()(''.concat(n, '-nav-operations'), m), style: p, ref: t },
          H,
          u.createElement(I, { prefixCls: n, locale: l, editable: b }),
        );
      }
      var K = u.memo(u.forwardRef(R), function (e, t) {
          return t.tabMoving;
        }),
        T = (0, u.createContext)(null),
        A = 0.1,
        L = 0.01,
        D = 20,
        O = Math.pow(0.995, D);
      function V(e, t) {
        var n = (0, u.useState)(),
          r = (0, a.Z)(n, 2),
          o = r[0],
          i = r[1],
          l = (0, u.useState)(0),
          c = (0, a.Z)(l, 2),
          s = c[0],
          f = c[1],
          d = (0, u.useState)(0),
          v = (0, a.Z)(d, 2),
          p = v[0],
          m = v[1],
          b = (0, u.useState)(),
          h = (0, a.Z)(b, 2),
          y = h[0],
          g = h[1],
          Z = (0, u.useRef)();
        function C(e) {
          var t = e.touches[0],
            n = t.screenX,
            r = t.screenY;
          i({ x: n, y: r }), window.clearInterval(Z.current);
        }
        function E(e) {
          if (o) {
            e.preventDefault();
            var n = e.touches[0],
              r = n.screenX,
              a = n.screenY;
            i({ x: r, y: a });
            var l = r - o.x,
              c = a - o.y;
            t(l, c);
            var u = Date.now();
            f(u), m(u - s), g({ x: l, y: c });
          }
        }
        function w() {
          if (o && (i(null), g(null), y)) {
            var e = y.x / p,
              n = y.y / p,
              r = Math.abs(e),
              a = Math.abs(n);
            if (Math.max(r, a) < A) return;
            var l = e,
              c = n;
            Z.current = window.setInterval(function () {
              Math.abs(l) < L && Math.abs(c) < L
                ? window.clearInterval(Z.current)
                : ((l *= O), (c *= O), t(l * D, c * D));
            }, D);
          }
        }
        var k = (0, u.useRef)();
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
        var N = (0, u.useRef)(null);
        (N.current = { onTouchStart: C, onTouchMove: E, onTouchEnd: w, onWheel: x }),
          u.useEffect(function () {
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
      function _() {
        var e = (0, u.useRef)(new Map());
        function t(t) {
          return e.current.has(t) || e.current.set(t, u.createRef()), e.current.get(t);
        }
        function n(t) {
          e.current['delete'](t);
        }
        return [t, n];
      }
      function B(e, t) {
        var n = u.useRef(e),
          r = u.useState({}),
          o = (0, a.Z)(r, 2),
          i = o[1];
        function l(e) {
          var r = 'function' === typeof e ? e(n.current) : e;
          r !== n.current && t(r, n.current), (n.current = r), i({});
        }
        return [n.current, l];
      }
      var W = function (e) {
        var t,
          n = e.position,
          r = e.prefixCls,
          o = e.extra;
        if (!o) return null;
        var a = {};
        return (
          o && 'object' === (0, i.Z)(o) && !u.isValidElement(o) ? (a = o) : (a.right = o),
          'right' === n && (t = a.right),
          'left' === n && (t = a.left),
          t ? u.createElement('div', { className: ''.concat(r, '-extra-content') }, t) : null
        );
      };
      function F(e, t) {
        var n,
          i = u.useContext(T),
          l = i.prefixCls,
          s = i.tabs,
          d = e.className,
          v = e.style,
          p = e.id,
          Z = e.animated,
          C = e.activeKey,
          w = e.rtl,
          x = e.extra,
          P = e.editable,
          M = e.locale,
          S = e.tabPosition,
          R = e.tabBarGutter,
          A = e.children,
          L = e.onTabClick,
          D = e.onTabScroll,
          O = (0, u.useRef)(),
          F = (0, u.useRef)(),
          j = (0, u.useRef)(),
          z = (0, u.useRef)(),
          H = _(),
          G = (0, a.Z)(H, 2),
          X = G[0],
          Y = G[1],
          q = 'top' === S || 'bottom' === S,
          U = B(0, function (e, t) {
            q && D && D({ direction: e > t ? 'left' : 'right' });
          }),
          J = (0, a.Z)(U, 2),
          Q = J[0],
          $ = J[1],
          ee = B(0, function (e, t) {
            !q && D && D({ direction: e > t ? 'top' : 'bottom' });
          }),
          te = (0, a.Z)(ee, 2),
          ne = te[0],
          re = te[1],
          oe = (0, u.useState)(0),
          ae = (0, a.Z)(oe, 2),
          ie = ae[0],
          le = ae[1],
          ce = (0, u.useState)(0),
          ue = (0, a.Z)(ce, 2),
          se = ue[0],
          fe = ue[1],
          de = (0, u.useState)(null),
          ve = (0, a.Z)(de, 2),
          pe = ve[0],
          me = ve[1],
          be = (0, u.useState)(null),
          he = (0, a.Z)(be, 2),
          ye = he[0],
          ge = he[1],
          Ze = (0, u.useState)(0),
          Ce = (0, a.Z)(Ze, 2),
          Ee = Ce[0],
          we = Ce[1],
          ke = (0, u.useState)(0),
          xe = (0, a.Z)(ke, 2),
          Ne = xe[0],
          Pe = xe[1],
          Me = g(new Map()),
          Se = (0, a.Z)(Me, 2),
          Ie = Se[0],
          Re = Se[1],
          Ke = k(s, Ie, ie),
          Te = ''.concat(l, '-nav-operations-hidden'),
          Ae = 0,
          Le = 0;
        function De(e) {
          return e < Ae ? Ae : e > Le ? Le : e;
        }
        q
          ? w
            ? ((Ae = 0), (Le = Math.max(0, ie - pe)))
            : ((Ae = Math.min(0, pe - ie)), (Le = 0))
          : ((Ae = Math.min(0, ye - se)), (Le = 0));
        var Oe = (0, u.useRef)(),
          Ve = (0, u.useState)(),
          _e = (0, a.Z)(Ve, 2),
          Be = _e[0],
          We = _e[1];
        function Fe() {
          We(Date.now());
        }
        function je() {
          window.clearTimeout(Oe.current);
        }
        function ze() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : C,
            t = Ke.get(e) || { width: 0, height: 0, left: 0, right: 0, top: 0 };
          if (q) {
            var n = Q;
            w
              ? t.right < Q
                ? (n = t.right)
                : t.right + t.width > Q + pe && (n = t.right + t.width - pe)
              : t.left < -Q
              ? (n = -t.left)
              : t.left + t.width > -Q + pe && (n = -(t.left + t.width - pe)),
              re(0),
              $(De(n));
          } else {
            var r = ne;
            t.top < -ne
              ? (r = -t.top)
              : t.top + t.height > -ne + ye && (r = -(t.top + t.height - ye)),
              $(0),
              re(De(r));
          }
        }
        V(O, function (e, t) {
          function n(e, t) {
            e(function (e) {
              var n = De(e + t);
              return n;
            });
          }
          if (q) {
            if (pe >= ie) return !1;
            n($, e);
          } else {
            if (ye >= se) return !1;
            n(re, t);
          }
          return je(), Fe(), !0;
        }),
          (0, u.useEffect)(
            function () {
              return (
                je(),
                Be &&
                  (Oe.current = window.setTimeout(function () {
                    We(0);
                  }, 100)),
                je
              );
            },
            [Be],
          );
        var He = N(
            Ke,
            { width: pe, height: ye, left: Q, top: ne },
            { width: ie, height: se },
            { width: Ee, height: Ne },
            (0, c.Z)((0, c.Z)({}, e), {}, { tabs: s }),
          ),
          Ge = (0, a.Z)(He, 2),
          Xe = Ge[0],
          Ye = Ge[1],
          qe = {};
        'top' === S || 'bottom' === S
          ? (qe[w ? 'marginRight' : 'marginLeft'] = R)
          : (qe.marginTop = R);
        var Ue = s.map(function (e, t) {
            var n = e.key;
            return u.createElement(E, {
              id: p,
              prefixCls: l,
              key: n,
              tab: e,
              style: 0 === t ? void 0 : qe,
              closable: e.closable,
              editable: P,
              active: n === C,
              renderWrapper: A,
              removeAriaLabel: null === M || void 0 === M ? void 0 : M.removeAriaLabel,
              ref: X(n),
              onClick: function (e) {
                L(n, e);
              },
              onRemove: function () {
                Y(n);
              },
              onFocus: function () {
                ze(n),
                  Fe(),
                  O.current && (w || (O.current.scrollLeft = 0), (O.current.scrollTop = 0));
              },
            });
          }),
          Je = y(function () {
            var e,
              t,
              n,
              r,
              o,
              a,
              i = (null === (e = O.current) || void 0 === e ? void 0 : e.offsetWidth) || 0,
              l = (null === (t = O.current) || void 0 === t ? void 0 : t.offsetHeight) || 0,
              c = (null === (n = z.current) || void 0 === n ? void 0 : n.offsetWidth) || 0,
              u = (null === (r = z.current) || void 0 === r ? void 0 : r.offsetHeight) || 0;
            me(i), ge(l), we(c), Pe(u);
            var f = ((null === (o = F.current) || void 0 === o ? void 0 : o.offsetWidth) || 0) - c,
              d = ((null === (a = F.current) || void 0 === a ? void 0 : a.offsetHeight) || 0) - u;
            le(f),
              fe(d),
              Re(function () {
                var e = new Map();
                return (
                  s.forEach(function (t) {
                    var n = t.key,
                      r = X(n).current;
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
          Qe = s.slice(0, Xe),
          $e = s.slice(Ye + 1),
          et = [].concat((0, m.Z)(Qe), (0, m.Z)($e)),
          tt = (0, u.useState)(),
          nt = (0, a.Z)(tt, 2),
          rt = nt[0],
          ot = nt[1],
          at = Ke.get(C),
          it = (0, u.useRef)();
        function lt() {
          b.Z.cancel(it.current);
        }
        (0, u.useEffect)(
          function () {
            var e = {};
            return (
              at &&
                (q
                  ? (w ? (e.right = at.right) : (e.left = at.left), (e.width = at.width))
                  : ((e.top = at.top), (e.height = at.height))),
              lt(),
              (it.current = (0, b.Z)(function () {
                ot(e);
              })),
              lt
            );
          },
          [at, q, w],
        ),
          (0, u.useEffect)(
            function () {
              ze();
            },
            [C, at, Ke, q],
          ),
          (0, u.useEffect)(
            function () {
              Je();
            },
            [
              w,
              R,
              C,
              s
                .map(function (e) {
                  return e.key;
                })
                .join('_'),
            ],
          );
        var ct,
          ut,
          st,
          ft,
          dt = !!et.length,
          vt = ''.concat(l, '-nav-wrap');
        return (
          q
            ? w
              ? ((ut = Q > 0), (ct = Q + pe < ie))
              : ((ct = Q < 0), (ut = -Q + pe < ie))
            : ((st = ne < 0), (ft = -ne + ye < se)),
          u.createElement(
            'div',
            {
              ref: t,
              role: 'tablist',
              className: f()(''.concat(l, '-nav'), d),
              style: v,
              onKeyDown: function () {
                Fe();
              },
            },
            u.createElement(W, { position: 'left', extra: x, prefixCls: l }),
            u.createElement(
              h.Z,
              { onResize: Je },
              u.createElement(
                'div',
                {
                  className: f()(
                    vt,
                    ((n = {}),
                    (0, o.Z)(n, ''.concat(vt, '-ping-left'), ct),
                    (0, o.Z)(n, ''.concat(vt, '-ping-right'), ut),
                    (0, o.Z)(n, ''.concat(vt, '-ping-top'), st),
                    (0, o.Z)(n, ''.concat(vt, '-ping-bottom'), ft),
                    n),
                  ),
                  ref: O,
                },
                u.createElement(
                  h.Z,
                  { onResize: Je },
                  u.createElement(
                    'div',
                    {
                      ref: F,
                      className: ''.concat(l, '-nav-list'),
                      style: {
                        transform: 'translate('.concat(Q, 'px, ').concat(ne, 'px)'),
                        transition: Be ? 'none' : void 0,
                      },
                    },
                    Ue,
                    u.createElement(I, {
                      ref: z,
                      prefixCls: l,
                      locale: M,
                      editable: P,
                      style: (0, c.Z)(
                        (0, c.Z)({}, 0 === Ue.length ? void 0 : qe),
                        {},
                        { visibility: dt ? 'hidden' : null },
                      ),
                    }),
                    u.createElement('div', {
                      className: f()(
                        ''.concat(l, '-ink-bar'),
                        (0, o.Z)({}, ''.concat(l, '-ink-bar-animated'), Z.inkBar),
                      ),
                      style: rt,
                    }),
                  ),
                ),
              ),
            ),
            u.createElement(
              K,
              (0, r.default)({}, e, {
                removeAriaLabel: null === M || void 0 === M ? void 0 : M.removeAriaLabel,
                ref: j,
                prefixCls: l,
                tabs: et,
                className: !dt && Te,
                tabMoving: !!Be,
              }),
            ),
            u.createElement(W, { position: 'right', extra: x, prefixCls: l }),
          )
        );
      }
      var j = u.forwardRef(F);
      function z(e) {
        var t = e.id,
          n = e.activeKey,
          r = e.animated,
          a = e.tabPosition,
          i = e.rtl,
          l = e.destroyInactiveTabPane,
          c = u.useContext(T),
          s = c.prefixCls,
          d = c.tabs,
          v = r.tabPane,
          p = d.findIndex(function (e) {
            return e.key === n;
          });
        return u.createElement(
          'div',
          { className: f()(''.concat(s, '-content-holder')) },
          u.createElement(
            'div',
            {
              className: f()(
                ''.concat(s, '-content'),
                ''.concat(s, '-content-').concat(a),
                (0, o.Z)({}, ''.concat(s, '-content-animated'), v),
              ),
              style:
                p && v
                  ? (0, o.Z)({}, i ? 'marginRight' : 'marginLeft', '-'.concat(p, '00%'))
                  : null,
            },
            d.map(function (e) {
              return u.cloneElement(e.node, {
                key: e.key,
                prefixCls: s,
                tabKey: e.key,
                id: t,
                animated: v,
                active: e.key === n,
                destroyInactiveTabPane: l,
              });
            }),
          ),
        );
      }
      function H(e) {
        var t = e.prefixCls,
          n = e.forceRender,
          r = e.className,
          o = e.style,
          i = e.id,
          l = e.active,
          s = e.animated,
          d = e.destroyInactiveTabPane,
          v = e.tabKey,
          p = e.children,
          m = u.useState(n),
          b = (0, a.Z)(m, 2),
          h = b[0],
          y = b[1];
        u.useEffect(
          function () {
            l ? y(!0) : d && y(!1);
          },
          [l, d],
        );
        var g = {};
        return (
          l ||
            (s
              ? ((g.visibility = 'hidden'), (g.height = 0), (g.overflowY = 'hidden'))
              : (g.display = 'none')),
          u.createElement(
            'div',
            {
              id: i && ''.concat(i, '-panel-').concat(v),
              role: 'tabpanel',
              tabIndex: l ? 0 : -1,
              'aria-labelledby': i && ''.concat(i, '-tab-').concat(v),
              'aria-hidden': !l,
              style: (0, c.Z)((0, c.Z)({}, g), o),
              className: f()(''.concat(t, '-tabpane'), l && ''.concat(t, '-tabpane-active'), r),
            },
            (l || h || n) && p,
          )
        );
      }
      var G = [
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
        X = 0;
      function Y(e) {
        return (0, d.Z)(e)
          .map(function (e) {
            if (u.isValidElement(e)) {
              var t = void 0 !== e.key ? String(e.key) : void 0;
              return (0, c.Z)((0, c.Z)({ key: t }, e.props), {}, { node: e });
            }
            return null;
          })
          .filter(function (e) {
            return e;
          });
      }
      function q(e, t) {
        var n,
          s,
          d = e.id,
          m = e.prefixCls,
          b = void 0 === m ? 'rc-tabs' : m,
          h = e.className,
          y = e.children,
          g = e.direction,
          Z = e.activeKey,
          C = e.defaultActiveKey,
          E = e.editable,
          w = e.animated,
          k = void 0 === w ? { inkBar: !0, tabPane: !1 } : w,
          x = e.tabPosition,
          N = void 0 === x ? 'top' : x,
          P = e.tabBarGutter,
          M = e.tabBarStyle,
          S = e.tabBarExtraContent,
          I = e.locale,
          R = e.moreIcon,
          K = e.moreTransitionName,
          A = e.destroyInactiveTabPane,
          L = e.renderTabBar,
          D = e.onChange,
          O = e.onTabClick,
          V = e.onTabScroll,
          _ = e.getPopupContainer,
          B = e.popupClassName,
          W = (0, l.Z)(e, G),
          F = Y(y),
          H = 'rtl' === g;
        s =
          !1 === k
            ? { inkBar: !1, tabPane: !1 }
            : !0 === k
            ? { inkBar: !0, tabPane: !0 }
            : (0, c.Z)({ inkBar: !0, tabPane: !1 }, 'object' === (0, i.Z)(k) ? k : {});
        var q = (0, u.useState)(!1),
          U = (0, a.Z)(q, 2),
          J = U[0],
          Q = U[1];
        (0, u.useEffect)(function () {
          Q((0, v.Z)());
        }, []);
        var $ = (0, p.Z)(
            function () {
              var e;
              return null === (e = F[0]) || void 0 === e ? void 0 : e.key;
            },
            { value: Z, defaultValue: C },
          ),
          ee = (0, a.Z)($, 2),
          te = ee[0],
          ne = ee[1],
          re = (0, u.useState)(function () {
            return F.findIndex(function (e) {
              return e.key === te;
            });
          }),
          oe = (0, a.Z)(re, 2),
          ae = oe[0],
          ie = oe[1];
        (0, u.useEffect)(
          function () {
            var e,
              t = F.findIndex(function (e) {
                return e.key === te;
              });
            -1 === t &&
              ((t = Math.max(0, Math.min(ae, F.length - 1))),
              ne(null === (e = F[t]) || void 0 === e ? void 0 : e.key));
            ie(t);
          },
          [
            F.map(function (e) {
              return e.key;
            }).join('_'),
            te,
            ae,
          ],
        );
        var le = (0, p.Z)(null, { value: d }),
          ce = (0, a.Z)(le, 2),
          ue = ce[0],
          se = ce[1],
          fe = N;
        function de(e, t) {
          null === O || void 0 === O || O(e, t);
          var n = e !== te;
          ne(e), n && (null === D || void 0 === D || D(e));
        }
        J && !['left', 'right'].includes(N) && (fe = 'top'),
          (0, u.useEffect)(function () {
            d || (se('rc-tabs-'.concat(X)), (X += 1));
          }, []);
        var ve,
          pe = { id: ue, activeKey: te, animated: s, tabPosition: fe, rtl: H, mobile: J },
          me = (0, c.Z)(
            (0, c.Z)({}, pe),
            {},
            {
              editable: E,
              locale: I,
              moreIcon: R,
              moreTransitionName: K,
              tabBarGutter: P,
              onTabClick: de,
              onTabScroll: V,
              extra: S,
              style: M,
              panes: y,
              getPopupContainer: _,
              popupClassName: B,
            },
          );
        return (
          (ve = L ? L(me, j) : u.createElement(j, me)),
          u.createElement(
            T.Provider,
            { value: { tabs: F, prefixCls: b } },
            u.createElement(
              'div',
              (0, r.default)(
                {
                  ref: t,
                  id: d,
                  className: f()(
                    b,
                    ''.concat(b, '-').concat(fe),
                    ((n = {}),
                    (0, o.Z)(n, ''.concat(b, '-mobile'), J),
                    (0, o.Z)(n, ''.concat(b, '-editable'), E),
                    (0, o.Z)(n, ''.concat(b, '-rtl'), H),
                    n),
                    h,
                  ),
                },
                W,
              ),
              ve,
              u.createElement(
                z,
                (0, r.default)({ destroyInactiveTabPane: A }, pe, { animated: s }),
              ),
            ),
          )
        );
      }
      var U = u.forwardRef(q);
      U.TabPane = H;
      var J = U,
        Q = J;
    },
    63616: function (e, t, n) {
      'use strict';
      n.d(t, {
        tS: function () {
          return i;
        },
      });
      var r = n(66156),
        o = n(26917);
      function a(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if ((0, o.Z)(e)) {
          var n = e.nodeName.toLowerCase(),
            r =
              ['input', 'select', 'textarea', 'button'].includes(n) ||
              e.isContentEditable ||
              ('a' === n && !!e.getAttribute('href')),
            a = e.getAttribute('tabindex'),
            i = Number(a),
            l = null;
          return (
            a && !Number.isNaN(i) ? (l = i) : r && null === l && (l = 0),
            r && e.disabled && (l = null),
            null !== l && (l >= 0 || (t && l < 0))
          );
        }
        return !1;
      }
      function i(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n = (0, r.Z)(e.querySelectorAll('*')).filter(function (e) {
            return a(e, t);
          });
        return a(e, t) && n.unshift(e), n;
      }
    },
  },
]);
