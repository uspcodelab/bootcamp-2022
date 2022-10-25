(window.webpackJsonp = window.webpackJsonp || []).push([
  [4],
  {
    415: function (n, t, r) {
      "use strict";
      r.r(t);
      var e = r(416),
        f = r.n(e);
      for (var o in e)
        ["default"].indexOf(o) < 0 &&
          (function (n) {
            r.d(t, n, function () {
              return e[n];
            });
          })(o);
      t.default = f.a;
    },
    416: function (n, t) {},
    439: function (n, t, r) {
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
              t("h1", [n._v("Avisos")]),
              n._v(" "),
              t("p", [n._v("Change me")]),
            ]);
          },
        ];
    },
    456: function (n, t, r) {
      "use strict";
      r.r(t);
      var e = r(439),
        f = r(415);
      for (var o in f)
        ["default"].indexOf(o) < 0 &&
          (function (n) {
            r.d(t, n, function () {
              return f[n];
            });
          })(o);
      var c = r(60),
        component = Object(c.a)(
          f.default,
          e.a,
          e.b,
          !1,
          null,
          "0e1863f5",
          null
        );
      t.default = component.exports;
    },
  },
]);
