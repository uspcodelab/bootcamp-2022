(window.webpackJsonp = window.webpackJsonp || []).push([
  [12],
  {
    460: function (t, o, e) {
      var content = e(476);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, e(21).default)("598146b6", content, !0, { sourceMap: !1 });
    },
    475: function (t, o, e) {
      "use strict";
      e(460);
    },
    476: function (t, o, e) {
      var r = e(20)(!1);
      r.push([
        t.i,
        ".vuetify-logo{height:180px;width:180px;transform:rotateY(560deg);-webkit-animation:turn 3.5s ease-out 1s forwards;animation:turn 3.5s ease-out 1s forwards}@-webkit-keyframes turn{to{transform:rotateY(0deg)}}@keyframes turn{to{transform:rotateY(0deg)}}",
        "",
      ]),
        (t.exports = r);
    },
    485: function (t, o, e) {
      "use strict";
      e.r(o);
      e(475);
      var r = e(60),
        component = Object(r.a)(
          {},
          function () {
            return (0, this._self._c)("img", {
              staticClass: "vuetify-logo",
              attrs: { alt: "Vuetify Logo", src: "/vuetify-logo.svg" },
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
