(window.webpackJsonp = window.webpackJsonp || []).push([
  [7, 11],
  {
    413: function (t, n, e) {
      var content = e(427);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, e(21).default)("c803a5a0", content, !0, { sourceMap: !1 });
    },
    424: function (t, n, e) {
      var content = e(434);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, e(21).default)("6fa94016", content, !0, { sourceMap: !1 });
    },
    425: function (t, n, e) {
      t.exports = e.p + "img/Tux.185c646.svg";
    },
    426: function (t, n, e) {
      "use strict";
      e(413);
    },
    427: function (t, n, e) {
      var o = e(20)(!1);
      o.push([t.i, ".tux{color:#05161e}", ""]), (t.exports = o);
    },
    429: function (t, n, e) {
      "use strict";
      e.r(n);
      e(426);
      var o = e(60),
        component = Object(o.a)(
          {},
          function () {
            return (0, this._self._c)("img", {
              staticClass: "tux",
              attrs: {
                alt: "Tux",
                src: e(425),
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
      n.default = component.exports;
    },
    433: function (t, n, e) {
      "use strict";
      e(424);
    },
    434: function (t, n, e) {
      var o = e(20)(!1);
      o.push([
        t.i,
        '.texto[data-v-0fbd77a9]{color:#05161e;font-family:"Ubuntu";font-weight:bolder;padding:30px 0}h1[data-v-0fbd77a9]{font-size:5rem;padding-top:10px;padding-bottom:50px}.sub[data-v-0fbd77a9]{font-size:2rem;font-weight:400}.big[data-v-0fbd77a9]{line-height:.9}.infolink[data-v-0fbd77a9]{font-size:1rem;margin-right:10px;margin-top:10px}',
        "",
      ]),
        (t.exports = o);
    },
    462: function (t, n, e) {
      "use strict";
      e.r(n);
      var o = e(197),
        l = e(483),
        r = e(486),
        c = e(479),
        f = e(468),
        d = e(478),
        x =
          (e(272),
          {
            data: function () {
              return {
                slides: [
                  {
                    smallIntro: "Bem vindo(a) à",
                    mainText: "Rede GNU-Linux IME-USP",
                    buttons: [
                      {
                        text: "Mais informações",
                        external: !1,
                        link: "/inspire",
                        color: "rgba(5, 22, 30, 1)",
                      },
                      {
                        text: "Logue-se",
                        external: !1,
                        link: "/login",
                        color: "rgba(0, 0, 0, 1)",
                      },
                    ],
                  },
                  {
                    smallIntro: "Conta",
                    mainText: "Crie a sua conta",
                    buttons: [
                      {
                        text: "Clique aqui",
                        external: !0,
                        link: "https://linux.ime.usp.br",
                        color: "rgba(5, 22, 30, 1)",
                      },
                    ],
                  },
                ],
              };
            },
          }),
        h = (e(433), e(60)),
        component = Object(h.a)(
          x,
          function () {
            var t = this,
              n = t._self._c;
            return n(
              d.a,
              { staticStyle: { "background-color": "#dae3f0" } },
              [
                n(
                  f.a,
                  [
                    n(
                      d.a,
                      [
                        n(
                          c.a,
                          {
                            attrs: {
                              cols: "8",
                              "align-self": "center",
                              align: "left",
                            },
                          },
                          [
                            n(
                              l.a,
                              {
                                attrs: {
                                  cycle: "",
                                  height: "400",
                                  "hide-delimiter-background": "",
                                  "show-arrows": !1,
                                },
                              },
                              t._l(t.slides, function (e) {
                                return n(
                                  r.a,
                                  { key: e },
                                  [
                                    n(
                                      f.a,
                                      { staticClass: "texto" },
                                      [
                                        n("h3", { staticClass: "sub" }, [
                                          t._v(t._s(e.smallIntro)),
                                        ]),
                                        t._v(" "),
                                        n("h1", { staticClass: "big" }, [
                                          t._v(t._s(e.mainText)),
                                        ]),
                                        t._v(" "),
                                        t._l(e.buttons, function (button) {
                                          return [
                                            button.external
                                              ? n(
                                                  o.a,
                                                  {
                                                    staticClass: "infolink",
                                                    attrs: {
                                                      href: button.link,
                                                      color: button.color,
                                                      flat: "",
                                                      outlined: "",
                                                    },
                                                  },
                                                  [
                                                    t._v(
                                                      "\n                  " +
                                                        t._s(button.text) +
                                                        "\n                "
                                                    ),
                                                  ]
                                                )
                                              : n(
                                                  o.a,
                                                  {
                                                    staticClass: "infolink",
                                                    attrs: {
                                                      to: button.link,
                                                      color: button.color,
                                                      flat: "",
                                                      outlined: "",
                                                    },
                                                  },
                                                  [
                                                    t._v(
                                                      "\n                  " +
                                                        t._s(button.text) +
                                                        "\n                "
                                                    ),
                                                  ]
                                                ),
                                          ];
                                        }),
                                      ],
                                      2
                                    ),
                                  ],
                                  1
                                );
                              }),
                              1
                            ),
                          ],
                          1
                        ),
                        t._v(" "),
                        n(
                          c.a,
                          {
                            attrs: {
                              cols: "4",
                              "align-self": "center",
                              align: "right",
                            },
                          },
                          [n("Tux")],
                          1
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                ),
              ],
              1
            );
          },
          [],
          !1,
          null,
          "0fbd77a9",
          null
        );
      n.default = component.exports;
      installComponents(component, { Tux: e(429).default });
    },
  },
]);
