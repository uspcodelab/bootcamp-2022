(window.webpackJsonp = window.webpackJsonp || []).push([
  [2],
  {
    159: function (t, r, n) {
      "use strict";
      n.r(r);
      var e = n(160),
        o = n.n(e);
      for (var f in e)
        ["default"].indexOf(f) < 0 &&
          (function (t) {
            n.d(r, t, function () {
              return e[t];
            });
          })(f);
      r.default = o.a;
    },
    160: function (t, r) {},
    161: function (t, r, n) {
      "use strict";
      n.r(r);
      var e = n(162),
        o = n.n(e);
      for (var f in e)
        ["default"].indexOf(f) < 0 &&
          (function (t) {
            n.d(r, t, function () {
              return e[t];
            });
          })(f);
      r.default = o.a;
    },
    162: function (t, r) {},
    201: function (t, r, n) {
      "use strict";
      n.d(r, "a", function () {
        return f;
      }),
        n.d(r, "b", function () {
          return c;
        });
      var e = n(407),
        o = n(409),
        f = function () {
          var t = this,
            r = t._self._c;
          t._self._setupProxy;
          return r(
            o.a,
            [
              r(e.a, { attrs: { to: "/" } }, [t._v("Home")]),
              t._v(" "),
              r(e.a, { attrs: { to: "/inspire" } }, [t._v("Inspire")]),
            ],
            1
          );
        },
        c = [];
    },
    202: function (t, r, n) {
      "use strict";
      n.d(r, "a", function () {
        return e;
      }),
        n.d(r, "b", function () {
          return o;
        });
      var e = function () {
          var t = this,
            r = t._self._c;
          t._self._setupProxy;
          return r("p", [t._v("© 2022 - Rede Linux")]);
        },
        o = [];
    },
    254: function (t, r, n) {
      var content = n(330);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, n(21).default)("ac362cf8", content, !0, { sourceMap: !1 });
    },
    270: function (t, r, n) {
      "use strict";
      var e = n(404),
        o = n(410),
        f = n(406),
        c = n(195),
        l = n(193),
        d = n(129),
        v = n(194),
        _ = n(128),
        h = n(405),
        x = n(408),
        m =
          (n(112),
          {
            name: "DefaultLayout",
            data: function () {
              return {
                clipped: !1,
                drawer: !1,
                fixed: !1,
                items: [
                  { icon: "mdi-apps", title: "Welcome", to: "/" },
                  {
                    icon: "mdi-chart-bubble",
                    title: "Inspire",
                    to: "/inspire",
                  },
                ],
                miniVariant: !1,
                right: !0,
                rightDrawer: !1,
                title: "Vuetify.js",
              };
            },
          }),
        y = n(60),
        component = Object(y.a)(
          m,
          function () {
            var t = this,
              r = t._self._c;
            return r(
              e.a,
              { attrs: { dark: "" } },
              [
                r(
                  o.a,
                  { attrs: { color: "#05161E", fixed: "", app: "" } },
                  [r("TabsMenu")],
                  1
                ),
                t._v(" "),
                r(h.a, [r("Nuxt")], 1),
                t._v(" "),
                r(
                  x.a,
                  {
                    attrs: { right: t.right, temporary: "", fixed: "" },
                    model: {
                      value: t.rightDrawer,
                      callback: function (r) {
                        t.rightDrawer = r;
                      },
                      expression: "rightDrawer",
                    },
                  },
                  [
                    r(
                      l.a,
                      [
                        r(
                          d.a,
                          {
                            nativeOn: {
                              click: function (r) {
                                t.right = !t.right;
                              },
                            },
                          },
                          [
                            r(
                              v.a,
                              [
                                r(c.a, { attrs: { light: "" } }, [
                                  t._v(" mdi-repeat "),
                                ]),
                              ],
                              1
                            ),
                            t._v(" "),
                            r(_.a, [t._v("Switch drawer (click me)")]),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                ),
                t._v(" "),
                r(
                  f.a,
                  { attrs: { absolute: !t.fixed, app: "" } },
                  [r("Footer")],
                  1
                ),
              ],
              1
            );
          },
          [],
          !1,
          null,
          null,
          null
        );
      r.a = component.exports;
      installComponents(component, {
        TabsMenu: n(385).default,
        Footer: n(274).default,
      });
    },
    274: function (t, r, n) {
      "use strict";
      n.r(r);
      var e = n(202),
        o = n(161);
      for (var f in o)
        ["default"].indexOf(f) < 0 &&
          (function (t) {
            n.d(r, t, function () {
              return o[t];
            });
          })(f);
      var c = n(60),
        component = Object(c.a)(
          o.default,
          e.a,
          e.b,
          !1,
          null,
          "9979f602",
          null
        );
      r.default = component.exports;
    },
    277: function (t, r, n) {
      n(278), (t.exports = n(279));
    },
    329: function (t, r, n) {
      "use strict";
      n(254);
    },
    330: function (t, r, n) {
      var e = n(20)(!1);
      e.push([t.i, "h1[data-v-09024c56]{font-size:20px}", ""]), (t.exports = e);
    },
    333: function (t, r, n) {
      var content = n(334);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, n(21).default)("73ed3b1f", content, !0, { sourceMap: !1 });
    },
    334: function (t, r, n) {
      var e = n(20)(!1);
      e.push([
        t.i,
        "@import url(https://fonts.googleapis.com/css?family=Ubuntu);",
      ]),
        e.push([t.i, "body{font-family:Ubuntu}", ""]),
        (t.exports = e);
    },
    385: function (t, r, n) {
      "use strict";
      n.r(r);
      var e = n(201),
        o = n(159);
      for (var f in o)
        ["default"].indexOf(f) < 0 &&
          (function (t) {
            n.d(r, t, function () {
              return o[t];
            });
          })(f);
      var c = n(60),
        component = Object(c.a)(
          o.default,
          e.a,
          e.b,
          !1,
          null,
          "e754fdd2",
          null
        );
      r.default = component.exports;
    },
    77: function (t, r, n) {
      "use strict";
      var e = n(404),
        o = {
          name: "EmptyLayout",
          layout: "empty",
          props: { error: { type: Object, default: null } },
          data: function () {
            return {
              pageNotFound: "404 Not Found",
              otherError: "An error occurred",
            };
          },
          head: function () {
            return {
              title:
                404 === this.error.statusCode
                  ? this.pageNotFound
                  : this.otherError,
            };
          },
        },
        f = (n(329), n(60)),
        component = Object(f.a)(
          o,
          function () {
            var t = this,
              r = t._self._c;
            return r(
              e.a,
              { attrs: { dark: "" } },
              [
                404 === t.error.statusCode
                  ? r("h1", [t._v("\n    " + t._s(t.pageNotFound) + "\n  ")])
                  : r("h1", [t._v("\n    " + t._s(t.otherError) + "\n  ")]),
                t._v(" "),
                r("NuxtLink", { attrs: { to: "/" } }, [t._v(" Home page ")]),
              ],
              1
            );
          },
          [],
          !1,
          null,
          "09024c56",
          null
        );
      r.a = component.exports;
    },
  },
  [[277, 15, 3, 16]],
]);
