(window.webpackJsonp = window.webpackJsonp || []).push([
  [5],
  {
    419: function (n, t, r) {
      "use strict";
      r.r(t);
      var e = r(420),
        f = r.n(e);
      for (var c in e)
        ["default"].indexOf(c) < 0 &&
          (function (n) {
            r.d(t, n, function () {
              return e[n];
            });
          })(c);
      t.default = f.a;
    },
    420: function (n, t) {},
    441: function (n, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return e;
      }),
        r.d(t, "b", function () {
          return f;
        });
      var e = function () {
          var n = this;
          n._self._c, n._self._setupProxy;
          return n._m(0);
        },
        f = [
          function () {
            var n = this,
              t = n._self._c;
            n._self._setupProxy;
            return t("div", [
              t("h1", [n._v("Blog")]),
              n._v(" "),
              t("p", [n._v("Change me")]),
            ]);
          },
        ];
    },
    458: function (n, t, r) {
      "use strict";
      r.r(t);
      var e = r(441),
        f = r(419);
      for (var c in f)
        ["default"].indexOf(c) < 0 &&
          (function (n) {
            r.d(t, n, function () {
              return f[n];
            });
          })(c);
      var o = r(60),
        component = Object(o.a)(
          f.default,
          e.a,
          e.b,
          !1,
          null,
          "8c2ce592",
          null
        );
      t.default = component.exports;
    },
  },
]);