(window.webpackJsonp = window.webpackJsonp || []).push([
  [11],
  {
    413: function (t, o, c) {
      var content = c(427);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, c(21).default)("c803a5a0", content, !0, { sourceMap: !1 });
    },
    425: function (t, o, c) {
      t.exports = c.p + "img/Tux.185c646.svg";
    },
    426: function (t, o, c) {
      "use strict";
      c(413);
    },
    427: function (t, o, c) {
      var n = c(20)(!1);
      n.push([t.i, ".tux{color:#05161e}", ""]), (t.exports = n);
    },
    429: function (t, o, c) {
      "use strict";
      c.r(o);
      c(426);
      var n = c(60),
        component = Object(n.a)(
          {},
          function () {
            return (0, this._self._c)("img", {
              staticClass: "tux",
              attrs: {
                alt: "Tux",
                src: c(425),
                "aspect-ratio": 16 / 9,
                width: 250,
              },
            });
          },
          [],
          !1,
          null,
          null,
          null
        );
      o.default = component.exports;
    },
  },
]);