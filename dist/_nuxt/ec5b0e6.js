(window.webpackJsonp = window.webpackJsonp || []).push([
  [6],
  {
    421: function (e, t, l) {
      var content = l(431);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[e.i, content, ""]]),
        content.locals && (e.exports = content.locals);
      (0, l(21).default)("b9f570ac", content, !0, { sourceMap: !1 });
    },
    422: function (e, t, l) {
      var content = l(432);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[e.i, content, ""]]),
        content.locals && (e.exports = content.locals);
      (0, l(21).default)("744bab4a", content, !0, { sourceMap: !1 });
    },
    423: function (e, t, l) {
      "use strict";
      l.d(t, "a", function () {
        return n;
      });
      l(81), l(38), l(11), l(4), l(12), l(80), l(89);
      var o = l(1);
      function n(e) {
        return o.a.extend({
          name: "v-".concat(e),
          functional: !0,
          props: { id: String, tag: { type: String, default: "div" } },
          render: function (t, l) {
            var o = l.props,
              data = l.data,
              n = l.children;
            data.staticClass = ""
              .concat(e, " ")
              .concat(data.staticClass || "")
              .trim();
            var r = data.attrs;
            if (r) {
              data.attrs = {};
              var f = Object.keys(r).filter(function (e) {
                if ("slot" === e) return !1;
                var t = r[e];
                return e.startsWith("data-")
                  ? ((data.attrs[e] = t), !1)
                  : t || "string" == typeof t;
              });
              f.length && (data.staticClass += " ".concat(f.join(" ")));
            }
            return (
              o.id &&
                ((data.domProps = data.domProps || {}),
                (data.domProps.id = o.id)),
              t(o.tag, data, n)
            );
          },
        });
      }
    },
    428: function (e, t, l) {
      var content = l(438);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[e.i, content, ""]]),
        content.locals && (e.exports = content.locals);
      (0, l(21).default)("48d86c92", content, !0, { sourceMap: !1 });
    },
    431: function (e, t, l) {
      var o = l(20)(!1);
      o.push([
        e.i,
        ".container{width:100%;padding:12px;margin-right:auto;margin-left:auto}@media(min-width:960px){.container{max-width:900px}}@media(min-width:1264px){.container{max-width:1185px}}@media(min-width:1904px){.container{max-width:1785px}}.container--fluid{max-width:100%}.row{display:flex;flex-wrap:wrap;flex:1 1 auto;margin:-12px}.row+.row{margin-top:12px}.row+.row--dense{margin-top:4px}.row--dense{margin:-4px}.row--dense>.col,.row--dense>[class*=col-]{padding:4px}.row.no-gutters{margin:0}.row.no-gutters>.col,.row.no-gutters>[class*=col-]{padding:0}.col,.col-1,.col-2,.col-3,.col-4,.col-5,.col-6,.col-7,.col-8,.col-9,.col-10,.col-11,.col-12,.col-auto,.col-lg,.col-lg-1,.col-lg-2,.col-lg-3,.col-lg-4,.col-lg-5,.col-lg-6,.col-lg-7,.col-lg-8,.col-lg-9,.col-lg-10,.col-lg-11,.col-lg-12,.col-lg-auto,.col-md,.col-md-1,.col-md-2,.col-md-3,.col-md-4,.col-md-5,.col-md-6,.col-md-7,.col-md-8,.col-md-9,.col-md-10,.col-md-11,.col-md-12,.col-md-auto,.col-sm,.col-sm-1,.col-sm-2,.col-sm-3,.col-sm-4,.col-sm-5,.col-sm-6,.col-sm-7,.col-sm-8,.col-sm-9,.col-sm-10,.col-sm-11,.col-sm-12,.col-sm-auto,.col-xl,.col-xl-1,.col-xl-2,.col-xl-3,.col-xl-4,.col-xl-5,.col-xl-6,.col-xl-7,.col-xl-8,.col-xl-9,.col-xl-10,.col-xl-11,.col-xl-12,.col-xl-auto{width:100%;padding:12px}.col{flex-basis:0;flex-grow:1;max-width:100%}.col-auto{flex:0 0 auto;width:auto;max-width:100%}.col-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.col-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.col-3{flex:0 0 25%;max-width:25%}.col-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.col-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.col-6{flex:0 0 50%;max-width:50%}.col-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.col-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.col-9{flex:0 0 75%;max-width:75%}.col-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.col-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.col-12{flex:0 0 100%;max-width:100%}.v-application--is-ltr .offset-1{margin-left:8.3333333333%}.v-application--is-rtl .offset-1{margin-right:8.3333333333%}.v-application--is-ltr .offset-2{margin-left:16.6666666667%}.v-application--is-rtl .offset-2{margin-right:16.6666666667%}.v-application--is-ltr .offset-3{margin-left:25%}.v-application--is-rtl .offset-3{margin-right:25%}.v-application--is-ltr .offset-4{margin-left:33.3333333333%}.v-application--is-rtl .offset-4{margin-right:33.3333333333%}.v-application--is-ltr .offset-5{margin-left:41.6666666667%}.v-application--is-rtl .offset-5{margin-right:41.6666666667%}.v-application--is-ltr .offset-6{margin-left:50%}.v-application--is-rtl .offset-6{margin-right:50%}.v-application--is-ltr .offset-7{margin-left:58.3333333333%}.v-application--is-rtl .offset-7{margin-right:58.3333333333%}.v-application--is-ltr .offset-8{margin-left:66.6666666667%}.v-application--is-rtl .offset-8{margin-right:66.6666666667%}.v-application--is-ltr .offset-9{margin-left:75%}.v-application--is-rtl .offset-9{margin-right:75%}.v-application--is-ltr .offset-10{margin-left:83.3333333333%}.v-application--is-rtl .offset-10{margin-right:83.3333333333%}.v-application--is-ltr .offset-11{margin-left:91.6666666667%}.v-application--is-rtl .offset-11{margin-right:91.6666666667%}@media(min-width:600px){.col-sm{flex-basis:0;flex-grow:1;max-width:100%}.col-sm-auto{flex:0 0 auto;width:auto;max-width:100%}.col-sm-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.col-sm-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.col-sm-3{flex:0 0 25%;max-width:25%}.col-sm-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.col-sm-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.col-sm-6{flex:0 0 50%;max-width:50%}.col-sm-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.col-sm-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.col-sm-9{flex:0 0 75%;max-width:75%}.col-sm-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.col-sm-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.col-sm-12{flex:0 0 100%;max-width:100%}.v-application--is-ltr .offset-sm-0{margin-left:0}.v-application--is-rtl .offset-sm-0{margin-right:0}.v-application--is-ltr .offset-sm-1{margin-left:8.3333333333%}.v-application--is-rtl .offset-sm-1{margin-right:8.3333333333%}.v-application--is-ltr .offset-sm-2{margin-left:16.6666666667%}.v-application--is-rtl .offset-sm-2{margin-right:16.6666666667%}.v-application--is-ltr .offset-sm-3{margin-left:25%}.v-application--is-rtl .offset-sm-3{margin-right:25%}.v-application--is-ltr .offset-sm-4{margin-left:33.3333333333%}.v-application--is-rtl .offset-sm-4{margin-right:33.3333333333%}.v-application--is-ltr .offset-sm-5{margin-left:41.6666666667%}.v-application--is-rtl .offset-sm-5{margin-right:41.6666666667%}.v-application--is-ltr .offset-sm-6{margin-left:50%}.v-application--is-rtl .offset-sm-6{margin-right:50%}.v-application--is-ltr .offset-sm-7{margin-left:58.3333333333%}.v-application--is-rtl .offset-sm-7{margin-right:58.3333333333%}.v-application--is-ltr .offset-sm-8{margin-left:66.6666666667%}.v-application--is-rtl .offset-sm-8{margin-right:66.6666666667%}.v-application--is-ltr .offset-sm-9{margin-left:75%}.v-application--is-rtl .offset-sm-9{margin-right:75%}.v-application--is-ltr .offset-sm-10{margin-left:83.3333333333%}.v-application--is-rtl .offset-sm-10{margin-right:83.3333333333%}.v-application--is-ltr .offset-sm-11{margin-left:91.6666666667%}.v-application--is-rtl .offset-sm-11{margin-right:91.6666666667%}}@media(min-width:960px){.col-md{flex-basis:0;flex-grow:1;max-width:100%}.col-md-auto{flex:0 0 auto;width:auto;max-width:100%}.col-md-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.col-md-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.col-md-3{flex:0 0 25%;max-width:25%}.col-md-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.col-md-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.col-md-6{flex:0 0 50%;max-width:50%}.col-md-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.col-md-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.col-md-9{flex:0 0 75%;max-width:75%}.col-md-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.col-md-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.col-md-12{flex:0 0 100%;max-width:100%}.v-application--is-ltr .offset-md-0{margin-left:0}.v-application--is-rtl .offset-md-0{margin-right:0}.v-application--is-ltr .offset-md-1{margin-left:8.3333333333%}.v-application--is-rtl .offset-md-1{margin-right:8.3333333333%}.v-application--is-ltr .offset-md-2{margin-left:16.6666666667%}.v-application--is-rtl .offset-md-2{margin-right:16.6666666667%}.v-application--is-ltr .offset-md-3{margin-left:25%}.v-application--is-rtl .offset-md-3{margin-right:25%}.v-application--is-ltr .offset-md-4{margin-left:33.3333333333%}.v-application--is-rtl .offset-md-4{margin-right:33.3333333333%}.v-application--is-ltr .offset-md-5{margin-left:41.6666666667%}.v-application--is-rtl .offset-md-5{margin-right:41.6666666667%}.v-application--is-ltr .offset-md-6{margin-left:50%}.v-application--is-rtl .offset-md-6{margin-right:50%}.v-application--is-ltr .offset-md-7{margin-left:58.3333333333%}.v-application--is-rtl .offset-md-7{margin-right:58.3333333333%}.v-application--is-ltr .offset-md-8{margin-left:66.6666666667%}.v-application--is-rtl .offset-md-8{margin-right:66.6666666667%}.v-application--is-ltr .offset-md-9{margin-left:75%}.v-application--is-rtl .offset-md-9{margin-right:75%}.v-application--is-ltr .offset-md-10{margin-left:83.3333333333%}.v-application--is-rtl .offset-md-10{margin-right:83.3333333333%}.v-application--is-ltr .offset-md-11{margin-left:91.6666666667%}.v-application--is-rtl .offset-md-11{margin-right:91.6666666667%}}@media(min-width:1264px){.col-lg{flex-basis:0;flex-grow:1;max-width:100%}.col-lg-auto{flex:0 0 auto;width:auto;max-width:100%}.col-lg-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.col-lg-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.col-lg-3{flex:0 0 25%;max-width:25%}.col-lg-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.col-lg-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.col-lg-6{flex:0 0 50%;max-width:50%}.col-lg-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.col-lg-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.col-lg-9{flex:0 0 75%;max-width:75%}.col-lg-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.col-lg-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.col-lg-12{flex:0 0 100%;max-width:100%}.v-application--is-ltr .offset-lg-0{margin-left:0}.v-application--is-rtl .offset-lg-0{margin-right:0}.v-application--is-ltr .offset-lg-1{margin-left:8.3333333333%}.v-application--is-rtl .offset-lg-1{margin-right:8.3333333333%}.v-application--is-ltr .offset-lg-2{margin-left:16.6666666667%}.v-application--is-rtl .offset-lg-2{margin-right:16.6666666667%}.v-application--is-ltr .offset-lg-3{margin-left:25%}.v-application--is-rtl .offset-lg-3{margin-right:25%}.v-application--is-ltr .offset-lg-4{margin-left:33.3333333333%}.v-application--is-rtl .offset-lg-4{margin-right:33.3333333333%}.v-application--is-ltr .offset-lg-5{margin-left:41.6666666667%}.v-application--is-rtl .offset-lg-5{margin-right:41.6666666667%}.v-application--is-ltr .offset-lg-6{margin-left:50%}.v-application--is-rtl .offset-lg-6{margin-right:50%}.v-application--is-ltr .offset-lg-7{margin-left:58.3333333333%}.v-application--is-rtl .offset-lg-7{margin-right:58.3333333333%}.v-application--is-ltr .offset-lg-8{margin-left:66.6666666667%}.v-application--is-rtl .offset-lg-8{margin-right:66.6666666667%}.v-application--is-ltr .offset-lg-9{margin-left:75%}.v-application--is-rtl .offset-lg-9{margin-right:75%}.v-application--is-ltr .offset-lg-10{margin-left:83.3333333333%}.v-application--is-rtl .offset-lg-10{margin-right:83.3333333333%}.v-application--is-ltr .offset-lg-11{margin-left:91.6666666667%}.v-application--is-rtl .offset-lg-11{margin-right:91.6666666667%}}@media(min-width:1904px){.col-xl{flex-basis:0;flex-grow:1;max-width:100%}.col-xl-auto{flex:0 0 auto;width:auto;max-width:100%}.col-xl-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.col-xl-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.col-xl-3{flex:0 0 25%;max-width:25%}.col-xl-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.col-xl-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.col-xl-6{flex:0 0 50%;max-width:50%}.col-xl-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.col-xl-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.col-xl-9{flex:0 0 75%;max-width:75%}.col-xl-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.col-xl-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.col-xl-12{flex:0 0 100%;max-width:100%}.v-application--is-ltr .offset-xl-0{margin-left:0}.v-application--is-rtl .offset-xl-0{margin-right:0}.v-application--is-ltr .offset-xl-1{margin-left:8.3333333333%}.v-application--is-rtl .offset-xl-1{margin-right:8.3333333333%}.v-application--is-ltr .offset-xl-2{margin-left:16.6666666667%}.v-application--is-rtl .offset-xl-2{margin-right:16.6666666667%}.v-application--is-ltr .offset-xl-3{margin-left:25%}.v-application--is-rtl .offset-xl-3{margin-right:25%}.v-application--is-ltr .offset-xl-4{margin-left:33.3333333333%}.v-application--is-rtl .offset-xl-4{margin-right:33.3333333333%}.v-application--is-ltr .offset-xl-5{margin-left:41.6666666667%}.v-application--is-rtl .offset-xl-5{margin-right:41.6666666667%}.v-application--is-ltr .offset-xl-6{margin-left:50%}.v-application--is-rtl .offset-xl-6{margin-right:50%}.v-application--is-ltr .offset-xl-7{margin-left:58.3333333333%}.v-application--is-rtl .offset-xl-7{margin-right:58.3333333333%}.v-application--is-ltr .offset-xl-8{margin-left:66.6666666667%}.v-application--is-rtl .offset-xl-8{margin-right:66.6666666667%}.v-application--is-ltr .offset-xl-9{margin-left:75%}.v-application--is-rtl .offset-xl-9{margin-right:75%}.v-application--is-ltr .offset-xl-10{margin-left:83.3333333333%}.v-application--is-rtl .offset-xl-10{margin-right:83.3333333333%}.v-application--is-ltr .offset-xl-11{margin-left:91.6666666667%}.v-application--is-rtl .offset-xl-11{margin-right:91.6666666667%}}",
        "",
      ]),
        (e.exports = o);
    },
    432: function (e, t, l) {
      var o = l(20)(!1);
      o.push([
        e.i,
        ".container.grow-shrink-0{flex-grow:0;flex-shrink:0}.container.fill-height{align-items:center;display:flex;flex-wrap:wrap}.container.fill-height>.row{flex:1 1 100%;max-width:calc(100% + 24px)}.container.fill-height>.layout{height:100%;flex:1 1 auto}.container.fill-height>.layout.grow-shrink-0{flex-grow:0;flex-shrink:0}.container.grid-list-xs .layout .flex{padding:1px}.container.grid-list-xs .layout:only-child{margin:-1px}.container.grid-list-xs .layout:not(:only-child){margin:auto -1px}.container.grid-list-xs :not(:only-child) .layout:first-child{margin-top:-1px}.container.grid-list-xs :not(:only-child) .layout:last-child{margin-bottom:-1px}.container.grid-list-sm .layout .flex{padding:2px}.container.grid-list-sm .layout:only-child{margin:-2px}.container.grid-list-sm .layout:not(:only-child){margin:auto -2px}.container.grid-list-sm :not(:only-child) .layout:first-child{margin-top:-2px}.container.grid-list-sm :not(:only-child) .layout:last-child{margin-bottom:-2px}.container.grid-list-md .layout .flex{padding:4px}.container.grid-list-md .layout:only-child{margin:-4px}.container.grid-list-md .layout:not(:only-child){margin:auto -4px}.container.grid-list-md :not(:only-child) .layout:first-child{margin-top:-4px}.container.grid-list-md :not(:only-child) .layout:last-child{margin-bottom:-4px}.container.grid-list-lg .layout .flex{padding:8px}.container.grid-list-lg .layout:only-child{margin:-8px}.container.grid-list-lg .layout:not(:only-child){margin:auto -8px}.container.grid-list-lg :not(:only-child) .layout:first-child{margin-top:-8px}.container.grid-list-lg :not(:only-child) .layout:last-child{margin-bottom:-8px}.container.grid-list-xl .layout .flex{padding:12px}.container.grid-list-xl .layout:only-child{margin:-12px}.container.grid-list-xl .layout:not(:only-child){margin:auto -12px}.container.grid-list-xl :not(:only-child) .layout:first-child{margin-top:-12px}.container.grid-list-xl :not(:only-child) .layout:last-child{margin-bottom:-12px}.layout{display:flex;flex:1 1 auto;flex-wrap:nowrap;min-width:0}.layout.reverse{flex-direction:row-reverse}.layout.column{flex-direction:column}.layout.column.reverse{flex-direction:column-reverse}.layout.column>.flex{max-width:100%}.layout.wrap{flex-wrap:wrap}.layout.grow-shrink-0{flex-grow:0;flex-shrink:0}@media (min-width:0){.flex.xs12{flex-basis:100%;flex-grow:0;max-width:100%}.flex.order-xs12{order:12}.flex.xs11{flex-basis:91.6666666667%;flex-grow:0;max-width:91.6666666667%}.flex.order-xs11{order:11}.flex.xs10{flex-basis:83.3333333333%;flex-grow:0;max-width:83.3333333333%}.flex.order-xs10{order:10}.flex.xs9{flex-basis:75%;flex-grow:0;max-width:75%}.flex.order-xs9{order:9}.flex.xs8{flex-basis:66.6666666667%;flex-grow:0;max-width:66.6666666667%}.flex.order-xs8{order:8}.flex.xs7{flex-basis:58.3333333333%;flex-grow:0;max-width:58.3333333333%}.flex.order-xs7{order:7}.flex.xs6{flex-basis:50%;flex-grow:0;max-width:50%}.flex.order-xs6{order:6}.flex.xs5{flex-basis:41.6666666667%;flex-grow:0;max-width:41.6666666667%}.flex.order-xs5{order:5}.flex.xs4{flex-basis:33.3333333333%;flex-grow:0;max-width:33.3333333333%}.flex.order-xs4{order:4}.flex.xs3{flex-basis:25%;flex-grow:0;max-width:25%}.flex.order-xs3{order:3}.flex.xs2{flex-basis:16.6666666667%;flex-grow:0;max-width:16.6666666667%}.flex.order-xs2{order:2}.flex.xs1{flex-basis:8.3333333333%;flex-grow:0;max-width:8.3333333333%}.flex.order-xs1{order:1}.v-application--is-ltr .flex.offset-xs12{margin-left:100%}.v-application--is-rtl .flex.offset-xs12{margin-right:100%}.v-application--is-ltr .flex.offset-xs11{margin-left:91.6666666667%}.v-application--is-rtl .flex.offset-xs11{margin-right:91.6666666667%}.v-application--is-ltr .flex.offset-xs10{margin-left:83.3333333333%}.v-application--is-rtl .flex.offset-xs10{margin-right:83.3333333333%}.v-application--is-ltr .flex.offset-xs9{margin-left:75%}.v-application--is-rtl .flex.offset-xs9{margin-right:75%}.v-application--is-ltr .flex.offset-xs8{margin-left:66.6666666667%}.v-application--is-rtl .flex.offset-xs8{margin-right:66.6666666667%}.v-application--is-ltr .flex.offset-xs7{margin-left:58.3333333333%}.v-application--is-rtl .flex.offset-xs7{margin-right:58.3333333333%}.v-application--is-ltr .flex.offset-xs6{margin-left:50%}.v-application--is-rtl .flex.offset-xs6{margin-right:50%}.v-application--is-ltr .flex.offset-xs5{margin-left:41.6666666667%}.v-application--is-rtl .flex.offset-xs5{margin-right:41.6666666667%}.v-application--is-ltr .flex.offset-xs4{margin-left:33.3333333333%}.v-application--is-rtl .flex.offset-xs4{margin-right:33.3333333333%}.v-application--is-ltr .flex.offset-xs3{margin-left:25%}.v-application--is-rtl .flex.offset-xs3{margin-right:25%}.v-application--is-ltr .flex.offset-xs2{margin-left:16.6666666667%}.v-application--is-rtl .flex.offset-xs2{margin-right:16.6666666667%}.v-application--is-ltr .flex.offset-xs1{margin-left:8.3333333333%}.v-application--is-rtl .flex.offset-xs1{margin-right:8.3333333333%}.v-application--is-ltr .flex.offset-xs0{margin-left:0}.v-application--is-rtl .flex.offset-xs0{margin-right:0}}@media (min-width:600px){.flex.sm12{flex-basis:100%;flex-grow:0;max-width:100%}.flex.order-sm12{order:12}.flex.sm11{flex-basis:91.6666666667%;flex-grow:0;max-width:91.6666666667%}.flex.order-sm11{order:11}.flex.sm10{flex-basis:83.3333333333%;flex-grow:0;max-width:83.3333333333%}.flex.order-sm10{order:10}.flex.sm9{flex-basis:75%;flex-grow:0;max-width:75%}.flex.order-sm9{order:9}.flex.sm8{flex-basis:66.6666666667%;flex-grow:0;max-width:66.6666666667%}.flex.order-sm8{order:8}.flex.sm7{flex-basis:58.3333333333%;flex-grow:0;max-width:58.3333333333%}.flex.order-sm7{order:7}.flex.sm6{flex-basis:50%;flex-grow:0;max-width:50%}.flex.order-sm6{order:6}.flex.sm5{flex-basis:41.6666666667%;flex-grow:0;max-width:41.6666666667%}.flex.order-sm5{order:5}.flex.sm4{flex-basis:33.3333333333%;flex-grow:0;max-width:33.3333333333%}.flex.order-sm4{order:4}.flex.sm3{flex-basis:25%;flex-grow:0;max-width:25%}.flex.order-sm3{order:3}.flex.sm2{flex-basis:16.6666666667%;flex-grow:0;max-width:16.6666666667%}.flex.order-sm2{order:2}.flex.sm1{flex-basis:8.3333333333%;flex-grow:0;max-width:8.3333333333%}.flex.order-sm1{order:1}.v-application--is-ltr .flex.offset-sm12{margin-left:100%}.v-application--is-rtl .flex.offset-sm12{margin-right:100%}.v-application--is-ltr .flex.offset-sm11{margin-left:91.6666666667%}.v-application--is-rtl .flex.offset-sm11{margin-right:91.6666666667%}.v-application--is-ltr .flex.offset-sm10{margin-left:83.3333333333%}.v-application--is-rtl .flex.offset-sm10{margin-right:83.3333333333%}.v-application--is-ltr .flex.offset-sm9{margin-left:75%}.v-application--is-rtl .flex.offset-sm9{margin-right:75%}.v-application--is-ltr .flex.offset-sm8{margin-left:66.6666666667%}.v-application--is-rtl .flex.offset-sm8{margin-right:66.6666666667%}.v-application--is-ltr .flex.offset-sm7{margin-left:58.3333333333%}.v-application--is-rtl .flex.offset-sm7{margin-right:58.3333333333%}.v-application--is-ltr .flex.offset-sm6{margin-left:50%}.v-application--is-rtl .flex.offset-sm6{margin-right:50%}.v-application--is-ltr .flex.offset-sm5{margin-left:41.6666666667%}.v-application--is-rtl .flex.offset-sm5{margin-right:41.6666666667%}.v-application--is-ltr .flex.offset-sm4{margin-left:33.3333333333%}.v-application--is-rtl .flex.offset-sm4{margin-right:33.3333333333%}.v-application--is-ltr .flex.offset-sm3{margin-left:25%}.v-application--is-rtl .flex.offset-sm3{margin-right:25%}.v-application--is-ltr .flex.offset-sm2{margin-left:16.6666666667%}.v-application--is-rtl .flex.offset-sm2{margin-right:16.6666666667%}.v-application--is-ltr .flex.offset-sm1{margin-left:8.3333333333%}.v-application--is-rtl .flex.offset-sm1{margin-right:8.3333333333%}.v-application--is-ltr .flex.offset-sm0{margin-left:0}.v-application--is-rtl .flex.offset-sm0{margin-right:0}}@media (min-width:960px){.flex.md12{flex-basis:100%;flex-grow:0;max-width:100%}.flex.order-md12{order:12}.flex.md11{flex-basis:91.6666666667%;flex-grow:0;max-width:91.6666666667%}.flex.order-md11{order:11}.flex.md10{flex-basis:83.3333333333%;flex-grow:0;max-width:83.3333333333%}.flex.order-md10{order:10}.flex.md9{flex-basis:75%;flex-grow:0;max-width:75%}.flex.order-md9{order:9}.flex.md8{flex-basis:66.6666666667%;flex-grow:0;max-width:66.6666666667%}.flex.order-md8{order:8}.flex.md7{flex-basis:58.3333333333%;flex-grow:0;max-width:58.3333333333%}.flex.order-md7{order:7}.flex.md6{flex-basis:50%;flex-grow:0;max-width:50%}.flex.order-md6{order:6}.flex.md5{flex-basis:41.6666666667%;flex-grow:0;max-width:41.6666666667%}.flex.order-md5{order:5}.flex.md4{flex-basis:33.3333333333%;flex-grow:0;max-width:33.3333333333%}.flex.order-md4{order:4}.flex.md3{flex-basis:25%;flex-grow:0;max-width:25%}.flex.order-md3{order:3}.flex.md2{flex-basis:16.6666666667%;flex-grow:0;max-width:16.6666666667%}.flex.order-md2{order:2}.flex.md1{flex-basis:8.3333333333%;flex-grow:0;max-width:8.3333333333%}.flex.order-md1{order:1}.v-application--is-ltr .flex.offset-md12{margin-left:100%}.v-application--is-rtl .flex.offset-md12{margin-right:100%}.v-application--is-ltr .flex.offset-md11{margin-left:91.6666666667%}.v-application--is-rtl .flex.offset-md11{margin-right:91.6666666667%}.v-application--is-ltr .flex.offset-md10{margin-left:83.3333333333%}.v-application--is-rtl .flex.offset-md10{margin-right:83.3333333333%}.v-application--is-ltr .flex.offset-md9{margin-left:75%}.v-application--is-rtl .flex.offset-md9{margin-right:75%}.v-application--is-ltr .flex.offset-md8{margin-left:66.6666666667%}.v-application--is-rtl .flex.offset-md8{margin-right:66.6666666667%}.v-application--is-ltr .flex.offset-md7{margin-left:58.3333333333%}.v-application--is-rtl .flex.offset-md7{margin-right:58.3333333333%}.v-application--is-ltr .flex.offset-md6{margin-left:50%}.v-application--is-rtl .flex.offset-md6{margin-right:50%}.v-application--is-ltr .flex.offset-md5{margin-left:41.6666666667%}.v-application--is-rtl .flex.offset-md5{margin-right:41.6666666667%}.v-application--is-ltr .flex.offset-md4{margin-left:33.3333333333%}.v-application--is-rtl .flex.offset-md4{margin-right:33.3333333333%}.v-application--is-ltr .flex.offset-md3{margin-left:25%}.v-application--is-rtl .flex.offset-md3{margin-right:25%}.v-application--is-ltr .flex.offset-md2{margin-left:16.6666666667%}.v-application--is-rtl .flex.offset-md2{margin-right:16.6666666667%}.v-application--is-ltr .flex.offset-md1{margin-left:8.3333333333%}.v-application--is-rtl .flex.offset-md1{margin-right:8.3333333333%}.v-application--is-ltr .flex.offset-md0{margin-left:0}.v-application--is-rtl .flex.offset-md0{margin-right:0}}@media (min-width:1264px){.flex.lg12{flex-basis:100%;flex-grow:0;max-width:100%}.flex.order-lg12{order:12}.flex.lg11{flex-basis:91.6666666667%;flex-grow:0;max-width:91.6666666667%}.flex.order-lg11{order:11}.flex.lg10{flex-basis:83.3333333333%;flex-grow:0;max-width:83.3333333333%}.flex.order-lg10{order:10}.flex.lg9{flex-basis:75%;flex-grow:0;max-width:75%}.flex.order-lg9{order:9}.flex.lg8{flex-basis:66.6666666667%;flex-grow:0;max-width:66.6666666667%}.flex.order-lg8{order:8}.flex.lg7{flex-basis:58.3333333333%;flex-grow:0;max-width:58.3333333333%}.flex.order-lg7{order:7}.flex.lg6{flex-basis:50%;flex-grow:0;max-width:50%}.flex.order-lg6{order:6}.flex.lg5{flex-basis:41.6666666667%;flex-grow:0;max-width:41.6666666667%}.flex.order-lg5{order:5}.flex.lg4{flex-basis:33.3333333333%;flex-grow:0;max-width:33.3333333333%}.flex.order-lg4{order:4}.flex.lg3{flex-basis:25%;flex-grow:0;max-width:25%}.flex.order-lg3{order:3}.flex.lg2{flex-basis:16.6666666667%;flex-grow:0;max-width:16.6666666667%}.flex.order-lg2{order:2}.flex.lg1{flex-basis:8.3333333333%;flex-grow:0;max-width:8.3333333333%}.flex.order-lg1{order:1}.v-application--is-ltr .flex.offset-lg12{margin-left:100%}.v-application--is-rtl .flex.offset-lg12{margin-right:100%}.v-application--is-ltr .flex.offset-lg11{margin-left:91.6666666667%}.v-application--is-rtl .flex.offset-lg11{margin-right:91.6666666667%}.v-application--is-ltr .flex.offset-lg10{margin-left:83.3333333333%}.v-application--is-rtl .flex.offset-lg10{margin-right:83.3333333333%}.v-application--is-ltr .flex.offset-lg9{margin-left:75%}.v-application--is-rtl .flex.offset-lg9{margin-right:75%}.v-application--is-ltr .flex.offset-lg8{margin-left:66.6666666667%}.v-application--is-rtl .flex.offset-lg8{margin-right:66.6666666667%}.v-application--is-ltr .flex.offset-lg7{margin-left:58.3333333333%}.v-application--is-rtl .flex.offset-lg7{margin-right:58.3333333333%}.v-application--is-ltr .flex.offset-lg6{margin-left:50%}.v-application--is-rtl .flex.offset-lg6{margin-right:50%}.v-application--is-ltr .flex.offset-lg5{margin-left:41.6666666667%}.v-application--is-rtl .flex.offset-lg5{margin-right:41.6666666667%}.v-application--is-ltr .flex.offset-lg4{margin-left:33.3333333333%}.v-application--is-rtl .flex.offset-lg4{margin-right:33.3333333333%}.v-application--is-ltr .flex.offset-lg3{margin-left:25%}.v-application--is-rtl .flex.offset-lg3{margin-right:25%}.v-application--is-ltr .flex.offset-lg2{margin-left:16.6666666667%}.v-application--is-rtl .flex.offset-lg2{margin-right:16.6666666667%}.v-application--is-ltr .flex.offset-lg1{margin-left:8.3333333333%}.v-application--is-rtl .flex.offset-lg1{margin-right:8.3333333333%}.v-application--is-ltr .flex.offset-lg0{margin-left:0}.v-application--is-rtl .flex.offset-lg0{margin-right:0}}@media (min-width:1904px){.flex.xl12{flex-basis:100%;flex-grow:0;max-width:100%}.flex.order-xl12{order:12}.flex.xl11{flex-basis:91.6666666667%;flex-grow:0;max-width:91.6666666667%}.flex.order-xl11{order:11}.flex.xl10{flex-basis:83.3333333333%;flex-grow:0;max-width:83.3333333333%}.flex.order-xl10{order:10}.flex.xl9{flex-basis:75%;flex-grow:0;max-width:75%}.flex.order-xl9{order:9}.flex.xl8{flex-basis:66.6666666667%;flex-grow:0;max-width:66.6666666667%}.flex.order-xl8{order:8}.flex.xl7{flex-basis:58.3333333333%;flex-grow:0;max-width:58.3333333333%}.flex.order-xl7{order:7}.flex.xl6{flex-basis:50%;flex-grow:0;max-width:50%}.flex.order-xl6{order:6}.flex.xl5{flex-basis:41.6666666667%;flex-grow:0;max-width:41.6666666667%}.flex.order-xl5{order:5}.flex.xl4{flex-basis:33.3333333333%;flex-grow:0;max-width:33.3333333333%}.flex.order-xl4{order:4}.flex.xl3{flex-basis:25%;flex-grow:0;max-width:25%}.flex.order-xl3{order:3}.flex.xl2{flex-basis:16.6666666667%;flex-grow:0;max-width:16.6666666667%}.flex.order-xl2{order:2}.flex.xl1{flex-basis:8.3333333333%;flex-grow:0;max-width:8.3333333333%}.flex.order-xl1{order:1}.v-application--is-ltr .flex.offset-xl12{margin-left:100%}.v-application--is-rtl .flex.offset-xl12{margin-right:100%}.v-application--is-ltr .flex.offset-xl11{margin-left:91.6666666667%}.v-application--is-rtl .flex.offset-xl11{margin-right:91.6666666667%}.v-application--is-ltr .flex.offset-xl10{margin-left:83.3333333333%}.v-application--is-rtl .flex.offset-xl10{margin-right:83.3333333333%}.v-application--is-ltr .flex.offset-xl9{margin-left:75%}.v-application--is-rtl .flex.offset-xl9{margin-right:75%}.v-application--is-ltr .flex.offset-xl8{margin-left:66.6666666667%}.v-application--is-rtl .flex.offset-xl8{margin-right:66.6666666667%}.v-application--is-ltr .flex.offset-xl7{margin-left:58.3333333333%}.v-application--is-rtl .flex.offset-xl7{margin-right:58.3333333333%}.v-application--is-ltr .flex.offset-xl6{margin-left:50%}.v-application--is-rtl .flex.offset-xl6{margin-right:50%}.v-application--is-ltr .flex.offset-xl5{margin-left:41.6666666667%}.v-application--is-rtl .flex.offset-xl5{margin-right:41.6666666667%}.v-application--is-ltr .flex.offset-xl4{margin-left:33.3333333333%}.v-application--is-rtl .flex.offset-xl4{margin-right:33.3333333333%}.v-application--is-ltr .flex.offset-xl3{margin-left:25%}.v-application--is-rtl .flex.offset-xl3{margin-right:25%}.v-application--is-ltr .flex.offset-xl2{margin-left:16.6666666667%}.v-application--is-rtl .flex.offset-xl2{margin-right:16.6666666667%}.v-application--is-ltr .flex.offset-xl1{margin-left:8.3333333333%}.v-application--is-rtl .flex.offset-xl1{margin-right:8.3333333333%}.v-application--is-ltr .flex.offset-xl0{margin-left:0}.v-application--is-rtl .flex.offset-xl0{margin-right:0}}.child-flex>*,.flex{flex:1 1 auto;max-width:100%}.child-flex>.grow-shrink-0,.flex.grow-shrink-0{flex-grow:0;flex-shrink:0}.grow,.spacer{flex-grow:1!important}.grow{flex-shrink:0!important}.shrink{flex-grow:0!important;flex-shrink:1!important}.fill-height{height:100%}",
        "",
      ]),
        (e.exports = o);
    },
    435: function (e, t, l) {
      var content = l(436);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[e.i, content, ""]]),
        content.locals && (e.exports = content.locals);
      (0, l(21).default)("48751daa", content, !0, { sourceMap: !1 });
    },
    436: function (e, t, l) {
      var o = l(20)(!1);
      o.push([
        e.i,
        '.theme--light.v-expansion-panels .v-expansion-panel{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-expansion-panels .v-expansion-panel--disabled{color:rgba(0,0,0,.38)}.theme--light.v-expansion-panels .v-expansion-panel:not(:first-child):after{border-color:rgba(0,0,0,.12)}.theme--light.v-expansion-panels .v-expansion-panel-header .v-expansion-panel-header__icon .v-icon{color:rgba(0,0,0,.54)}.theme--light.v-expansion-panels.v-expansion-panels--focusable .v-expansion-panel-header:hover:before{opacity:.04}.theme--light.v-expansion-panels.v-expansion-panels--focusable .v-expansion-panel-header--active:before,.theme--light.v-expansion-panels.v-expansion-panels--focusable .v-expansion-panel-header--active:hover:before,.theme--light.v-expansion-panels.v-expansion-panels--focusable .v-expansion-panel-header:focus:before{opacity:.12}.theme--light.v-expansion-panels.v-expansion-panels--focusable .v-expansion-panel-header--active:focus:before{opacity:.16}.theme--light.v-expansion-panels.v-expansion-panels--hover>.v-expansion-panel>.v-expansion-panel-header:hover:before{opacity:.04}.theme--dark.v-expansion-panels .v-expansion-panel{background-color:#1e1e1e;color:#fff}.theme--dark.v-expansion-panels .v-expansion-panel--disabled{color:hsla(0,0%,100%,.5)}.theme--dark.v-expansion-panels .v-expansion-panel:not(:first-child):after{border-color:hsla(0,0%,100%,.12)}.theme--dark.v-expansion-panels .v-expansion-panel-header .v-expansion-panel-header__icon .v-icon{color:#fff}.theme--dark.v-expansion-panels.v-expansion-panels--focusable .v-expansion-panel-header:hover:before{opacity:.08}.theme--dark.v-expansion-panels.v-expansion-panels--focusable .v-expansion-panel-header--active:before,.theme--dark.v-expansion-panels.v-expansion-panels--focusable .v-expansion-panel-header--active:hover:before,.theme--dark.v-expansion-panels.v-expansion-panels--focusable .v-expansion-panel-header:focus:before{opacity:.24}.theme--dark.v-expansion-panels.v-expansion-panels--focusable .v-expansion-panel-header--active:focus:before{opacity:.32}.theme--dark.v-expansion-panels.v-expansion-panels--hover>.v-expansion-panel>.v-expansion-panel-header:hover:before{opacity:.08}.v-expansion-panels{border-radius:4px;display:flex;flex-wrap:wrap;justify-content:center;list-style-type:none;padding:0;width:100%;z-index:1}.v-expansion-panels>*{cursor:auto}.v-expansion-panels>:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}.v-expansion-panels>:last-child{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-expansion-panels:not(.v-expansion-panels--accordion):not(.v-expansion-panels--tile)>.v-expansion-panel--active{border-radius:4px}.v-expansion-panels:not(.v-expansion-panels--accordion):not(.v-expansion-panels--tile)>.v-expansion-panel--active+.v-expansion-panel{border-top-left-radius:4px;border-top-right-radius:4px}.v-expansion-panels:not(.v-expansion-panels--accordion):not(.v-expansion-panels--tile)>.v-expansion-panel--next-active{border-bottom-left-radius:4px;border-bottom-right-radius:4px}.v-expansion-panels:not(.v-expansion-panels--accordion):not(.v-expansion-panels--tile)>.v-expansion-panel--next-active .v-expansion-panel-header{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-expansion-panel{flex:1 0 100%;max-width:100%;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-expansion-panel:before{border-radius:inherit;bottom:0;content:"";left:0;position:absolute;right:0;top:0;z-index:-1;transition:box-shadow .28s cubic-bezier(.4,0,.2,1);box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-expansion-panel:not(:first-child):after{border-top:thin solid;content:"";left:0;position:absolute;right:0;top:0;transition:border-color .2s cubic-bezier(.4,0,.2,1),opacity .2s cubic-bezier(.4,0,.2,1)}.v-expansion-panel--disabled .v-expansion-panel-header{pointer-events:none}.v-expansion-panel--active+.v-expansion-panel,.v-expansion-panel--active:not(:first-child){margin-top:16px}.v-expansion-panel--active+.v-expansion-panel:after,.v-expansion-panel--active:not(:first-child):after{opacity:0}.v-expansion-panel--active>.v-expansion-panel-header{min-height:64px}.v-expansion-panel--active>.v-expansion-panel-header--active .v-expansion-panel-header__icon:not(.v-expansion-panel-header__icon--disable-rotate) .v-icon{transform:rotate(-180deg)}.v-expansion-panel-header__icon{display:inline-flex;margin-bottom:-4px;margin-top:-4px;-webkit-user-select:none;-moz-user-select:none;user-select:none}.v-application--is-ltr .v-expansion-panel-header__icon{margin-left:auto}.v-application--is-rtl .v-expansion-panel-header__icon{margin-right:auto}.v-expansion-panel-header{align-items:center;border-top-left-radius:inherit;border-top-right-radius:inherit;display:flex;font-size:.9375rem;line-height:1;min-height:48px;outline:none;padding:16px 24px;position:relative;transition:min-height .3s cubic-bezier(.25,.8,.5,1);width:100%}.v-application--is-ltr .v-expansion-panel-header{text-align:left}.v-application--is-rtl .v-expansion-panel-header{text-align:right}.v-expansion-panel-header:not(.v-expansion-panel-header--mousedown):focus:before{opacity:.12}.v-expansion-panel-header:before{background-color:currentColor;border-radius:inherit;bottom:0;content:"";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .3s cubic-bezier(.25,.8,.5,1)}.v-expansion-panel-header>:not(.v-expansion-panel-header__icon){flex:1 1 auto}.v-expansion-panel-content{display:flex}.v-expansion-panel-content__wrap{padding:0 24px 16px;flex:1 1 auto;max-width:100%}.v-expansion-panels--accordion>.v-expansion-panel{margin-top:0}.v-expansion-panels--accordion>.v-expansion-panel:after{opacity:1}.v-expansion-panels--popout>.v-expansion-panel{max-width:calc(100% - 32px)}.v-expansion-panels--popout>.v-expansion-panel--active{max-width:calc(100% + 16px)}.v-expansion-panels--inset>.v-expansion-panel{max-width:100%}.v-expansion-panels--inset>.v-expansion-panel--active{max-width:calc(100% - 32px)}.v-expansion-panels--flat>.v-expansion-panel:after{border-top:none}.v-expansion-panels--flat>.v-expansion-panel:before{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.v-expansion-panels--tile,.v-expansion-panels--tile>.v-expansion-panel:before{border-radius:0}',
        "",
      ]),
        (e.exports = o);
    },
    437: function (e, t, l) {
      "use strict";
      l(428);
    },
    438: function (e, t, l) {
      var o = l(20)(!1);
      o.push([
        e.i,
        ".v-expansion-panel-content[data-v-83d46858]{white-space:pre-line;color:#797979;background-color:#f2f2f2}.v-expansion-panel[data-v-83d46858]{margin:8px;padding:0}.question[data-v-83d46858]{background-color:#dae3f0!important;color:#000!important}.active[data-v-83d46858]{background-color:#212121!important;color:#fff!important}",
        "",
      ]),
        (e.exports = o);
    },
    461: function (e, t, l) {
      "use strict";
      l.r(t);
      var o = l(468),
        n = (l(12), l(9), l(11), l(4), l(14), l(10), l(15), l(2)),
        r = l(102),
        f = l(134),
        x = l(0),
        c = l(6);
      function d(object, e) {
        var t = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(object);
          e &&
            (l = l.filter(function (e) {
              return Object.getOwnPropertyDescriptor(object, e).enumerable;
            })),
            t.push.apply(t, l);
        }
        return t;
      }
      var m = Object(c.a)(
          Object(r.a)(
            "expansionPanels",
            "v-expansion-panel",
            "v-expansion-panels"
          ),
          Object(f.b)("expansionPanel", !0)
        ).extend({
          name: "v-expansion-panel",
          props: { disabled: Boolean, readonly: Boolean },
          data: function () {
            return { content: null, header: null, nextIsActive: !1 };
          },
          computed: {
            classes: function () {
              return (function (e) {
                for (var i = 1; i < arguments.length; i++) {
                  var source = null != arguments[i] ? arguments[i] : {};
                  i % 2
                    ? d(Object(source), !0).forEach(function (t) {
                        Object(n.a)(e, t, source[t]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                        e,
                        Object.getOwnPropertyDescriptors(source)
                      )
                    : d(Object(source)).forEach(function (t) {
                        Object.defineProperty(
                          e,
                          t,
                          Object.getOwnPropertyDescriptor(source, t)
                        );
                      });
                }
                return e;
              })(
                {
                  "v-expansion-panel--active": this.isActive,
                  "v-expansion-panel--next-active": this.nextIsActive,
                  "v-expansion-panel--disabled": this.isDisabled,
                },
                this.groupClasses
              );
            },
            isDisabled: function () {
              return this.expansionPanels.disabled || this.disabled;
            },
            isReadonly: function () {
              return this.expansionPanels.readonly || this.readonly;
            },
          },
          methods: {
            registerContent: function (e) {
              this.content = e;
            },
            unregisterContent: function () {
              this.content = null;
            },
            registerHeader: function (e) {
              (this.header = e), e.$on("click", this.onClick);
            },
            unregisterHeader: function () {
              this.header = null;
            },
            onClick: function (e) {
              e.detail && this.header.$el.blur(),
                this.$emit("click", e),
                this.isReadonly || this.isDisabled || this.toggle();
            },
            toggle: function () {
              var e = this;
              this.$nextTick(function () {
                return e.$emit("change");
              });
            },
          },
          render: function (e) {
            return e(
              "div",
              {
                staticClass: "v-expansion-panel",
                class: this.classes,
                attrs: { "aria-expanded": String(this.isActive) },
              },
              Object(x.m)(this)
            );
          },
        }),
        h = l(135),
        v = l(207),
        w = l(25),
        y = Object(c.a)(
          v.a,
          w.a,
          Object(f.a)(
            "expansionPanel",
            "v-expansion-panel-content",
            "v-expansion-panel"
          )
        )
          .extend()
          .extend({
            name: "v-expansion-panel-content",
            data: function () {
              return { isActive: !1 };
            },
            computed: {
              parentIsActive: function () {
                return this.expansionPanel.isActive;
              },
            },
            watch: {
              parentIsActive: {
                immediate: !0,
                handler: function (e, t) {
                  var l = this;
                  e && (this.isBooted = !0),
                    null == t
                      ? (this.isActive = e)
                      : this.$nextTick(function () {
                          return (l.isActive = e);
                        });
                },
              },
            },
            created: function () {
              this.expansionPanel.registerContent(this);
            },
            beforeDestroy: function () {
              this.expansionPanel.unregisterContent();
            },
            render: function (e) {
              var t = this;
              return e(
                h.a,
                this.showLazyContent(function () {
                  return [
                    e(
                      "div",
                      t.setBackgroundColor(t.color, {
                        staticClass: "v-expansion-panel-content",
                        directives: [{ name: "show", value: t.isActive }],
                      }),
                      [
                        e(
                          "div",
                          { class: "v-expansion-panel-content__wrap" },
                          Object(x.m)(t)
                        ),
                      ]
                    ),
                  ];
                })
              );
            },
          }),
        O = l(82),
        j = l(103);
      function P(object, e) {
        var t = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(object);
          e &&
            (l = l.filter(function (e) {
              return Object.getOwnPropertyDescriptor(object, e).enumerable;
            })),
            t.push.apply(t, l);
        }
        return t;
      }
      function k(e) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? P(Object(source), !0).forEach(function (t) {
                Object(n.a)(e, t, source[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(
                e,
                Object.getOwnPropertyDescriptors(source)
              )
            : P(Object(source)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(source, t)
                );
              });
        }
        return e;
      }
      var _ = Object(c.a)(
          w.a,
          Object(f.a)(
            "expansionPanel",
            "v-expansion-panel-header",
            "v-expansion-panel"
          )
        )
          .extend()
          .extend({
            name: "v-expansion-panel-header",
            directives: { ripple: j.a },
            props: {
              disableIconRotate: Boolean,
              expandIcon: { type: String, default: "$expand" },
              hideActions: Boolean,
              ripple: { type: [Boolean, Object], default: !1 },
            },
            data: function () {
              return { hasMousedown: !1 };
            },
            computed: {
              classes: function () {
                return {
                  "v-expansion-panel-header--active": this.isActive,
                  "v-expansion-panel-header--mousedown": this.hasMousedown,
                };
              },
              isActive: function () {
                return this.expansionPanel.isActive;
              },
              isDisabled: function () {
                return this.expansionPanel.isDisabled;
              },
              isReadonly: function () {
                return this.expansionPanel.isReadonly;
              },
            },
            created: function () {
              this.expansionPanel.registerHeader(this);
            },
            beforeDestroy: function () {
              this.expansionPanel.unregisterHeader();
            },
            methods: {
              onClick: function (e) {
                this.$emit("click", e);
              },
              genIcon: function () {
                var e = Object(x.m)(this, "actions") || [
                  this.$createElement(O.a, this.expandIcon),
                ];
                return this.$createElement(h.b, [
                  this.$createElement(
                    "div",
                    {
                      staticClass: "v-expansion-panel-header__icon",
                      class: {
                        "v-expansion-panel-header__icon--disable-rotate":
                          this.disableIconRotate,
                      },
                      directives: [{ name: "show", value: !this.isDisabled }],
                    },
                    e
                  ),
                ]);
              },
            },
            render: function (e) {
              var t = this;
              return e(
                "button",
                this.setBackgroundColor(this.color, {
                  staticClass: "v-expansion-panel-header",
                  class: this.classes,
                  attrs: {
                    tabindex: this.isDisabled ? -1 : null,
                    type: "button",
                    "aria-expanded": this.isActive,
                  },
                  directives: [{ name: "ripple", value: this.ripple }],
                  on: k(
                    k({}, this.$listeners),
                    {},
                    {
                      click: this.onClick,
                      mousedown: function () {
                        return (t.hasMousedown = !0);
                      },
                      mouseup: function () {
                        return (t.hasMousedown = !1);
                      },
                    }
                  ),
                }),
                [
                  Object(x.m)(this, "default", { open: this.isActive }, !0),
                  this.hideActions || this.genIcon(),
                ]
              );
            },
          }),
        C = (l(205), l(206), l(435), l(55)),
        A = l(13);
      function D(object, e) {
        var t = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(object);
          e &&
            (l = l.filter(function (e) {
              return Object.getOwnPropertyDescriptor(object, e).enumerable;
            })),
            t.push.apply(t, l);
        }
        return t;
      }
      function M(e) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? D(Object(source), !0).forEach(function (t) {
                Object(n.a)(e, t, source[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(
                e,
                Object.getOwnPropertyDescriptors(source)
              )
            : D(Object(source)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(source, t)
                );
              });
        }
        return e;
      }
      var B = C.a.extend({
          name: "v-expansion-panels",
          provide: function () {
            return { expansionPanels: this };
          },
          props: {
            accordion: Boolean,
            disabled: Boolean,
            flat: Boolean,
            hover: Boolean,
            focusable: Boolean,
            inset: Boolean,
            popout: Boolean,
            readonly: Boolean,
            tile: Boolean,
          },
          computed: {
            classes: function () {
              return M(
                M({}, C.a.options.computed.classes.call(this)),
                {},
                {
                  "v-expansion-panels": !0,
                  "v-expansion-panels--accordion": this.accordion,
                  "v-expansion-panels--flat": this.flat,
                  "v-expansion-panels--hover": this.hover,
                  "v-expansion-panels--focusable": this.focusable,
                  "v-expansion-panels--inset": this.inset,
                  "v-expansion-panels--popout": this.popout,
                  "v-expansion-panels--tile": this.tile,
                }
              );
            },
          },
          created: function () {
            this.$attrs.hasOwnProperty("expand") &&
              Object(A.a)("expand", "multiple", this),
              Array.isArray(this.value) &&
                this.value.length > 0 &&
                "boolean" == typeof this.value[0] &&
                Object(A.a)(
                  ':value="[true, false, true]"',
                  ':value="[0, 2]"',
                  this
                );
          },
          methods: {
            updateItem: function (e, t) {
              var l = this.getValue(e, t),
                o = this.getValue(e, t + 1);
              (e.isActive = this.toggleMethod(l)),
                (e.nextIsActive = this.toggleMethod(o));
            },
          },
        }),
        E = l(195),
        S = (l(422), l(423)),
        I = Object(S.a)("layout"),
        $ = {
          data: function () {
            return {
              faqContent: [
                {
                  question: "Posso ter uma conta na Rede Linux?",
                  answer:
                    "Apenas pessoas vinculadas ─ professor, aluno, pesquisador visitante ─ ao IME USP podem ter contas na Rede GNU-Linux.             Caso você não seja estudante do IME, mas curse disciplina da computação, faremos uma conta para você ─ de um semestre de duração             ─ mediante apresentação de comprovante de matrícula na disciplina. \n\n             Coisas como criar contas para eventos, visitantes associados ao IME, e             similares podem ser discutidas ─ por email ─ com os admins.",
                },
                {
                  question: "Como obter conta na Rede Linux?",
                  answer:
                    "Acesse conta.linux.ime.usp.br e faça login com sua senha única da USP. Este sistema ainda está em fase de testes e pode conter um bug ou outro.             Se o login falhar, tente alguns minutos mais tarde. Caso não consiga fazer a conta por esse sistema, por favor contate-nos via e-mail relatando a             falha em detalhes e anexando fotos da carteirinha USP (ou comprovante de matrícula -- emissível via Júpiter) para que possamos criar a conta. ",
                },
                {
                  question: "Quanto tempo durará minha conta?",
                  answer:
                    "Enquanto durar seu vínculo com o IME, sendo renovada após 4 anos de curso, se você for estudante do IME. Um semestre, se apenas cursar uma disciplina MAC.             Ou permanentemente, caso você seja docente ou ex administrador.\n\n Próximo do período de expiração da conta, enviaremos um email ao endereço             cadastrado na criação de sua conta ─ para que você possa tomar as medidas necessárias ou pleitear maior duração para a mesma.",
                },
                {
                  question: "Como eu mudo/recupero minha senha?",
                  answer:
                    "Há diversas formas de fazê-lo. Remotamente, em particular, há duas opções: acessar a rede remotamente e rodar o comando $ kpasswd             (caso você se lembre da senha e tenha acesso remoto ativado) ou acessar conta.linux.ime.usp.br e pedir pela geração de uma nova senha. Note que, em todo o caso,             você terá de ter acesso remoto ativado, caso queira mudar sua senha aleatória para uma de sua preferência. A ativação do acesso remoto pode ser feita por este mesmo sistema.             Presencialmente, você pode comparecer à nossa sala (caso as coisas já tenham retornado a uma certa “normalidade”) munido de sua carteirinha USP ou comprovante de matrícula (o Júpiter emite),            e, depois, fazer login em qualquer uma de nossas estações, abrir um terminal e rodar $ kpasswd, como citado anteriormente. Caso o sistema automático de recuperação de senha não funcione, por favor contate-nos.            Faça um relato detalhado e anexe os mesmos documentos citados no parágrafo anterior para que possamos confirmar sua identidade.",
                },
                {
                  question: "Como ver minha cota de impressão?",
                  answer:
                    "Para a cota de impressão, você pode executar $ quotap ou olhar no nosso website ao logar-se com seu usuário e senha da rede. ",
                },
                {
                  question: "O que ocorre com uma conta expirada?",
                  answer:
                    "Após haver sido deletada, os arquivos dela também o serão. Teoricamente, no entanto, elas podem nos backups da rede por algum tempo, e você poderá, se for este o caso, reavê-los.            É preferível, no entretanto, não depender do backup da rede, pois ele é notoriamente não-feito. ",
                },
                {
                  question: "Como uso o email@linux.ime.usp.br?",
                  answer:
                    "Email Linux pode ser acessado pelo link https://webmail.linux.ime.usp.br ou por aplicações de terminal como o mutt, etc. ",
                },
                {
                  question: "Como modificar o meu site /~meu-nome?",
                  answer:
                    "O conteúdo de seu website está em ~/www. Mude o index.html, edite como lhe convier.\n\n            Atualmente, temos PHP habilitado, entre outras coisas. Lembre-se de atentar-se às permissões de acesso de sua home e site.",
                },
                {
                  question: "Como sair de uma lista de email?",
                  answer:
                    "As listas de Email são:\n\n            admin@linux.ime.usp.br ─ Lista dos administradores da Rede Linux\n            users@linux.ime.usp.br ─ Lista de todos os usuários da rede\n            users-bcc@linux.ime.usp.br ─ Lista do Bacharelado em Ciência da Computação\n\n            Para se inscrever, saír ou mudar sua senha da lista. Por favor, entre em nos seguintes links: Lista de users, lista de users-bcc.",
                },
              ],
            };
          },
        },
        z = (l(437), l(60)),
        component = Object(z.a)(
          $,
          function () {
            var e = this,
              t = e._self._c;
            return t(
              o.a,
              [
                t("h1", [e._v("FAQ")]),
                e._v(" "),
                t(
                  B,
                  { attrs: { accordion: "", flat: "" } },
                  e._l(e.faqContent, function (l, o) {
                    return t(
                      m,
                      {
                        staticClass: "py-1 rounded-lg black--text question",
                        attrs: { "active-class": "active" },
                      },
                      [
                        t(_, {
                          attrs: { "expand-icon": "" },
                          scopedSlots: e._u(
                            [
                              {
                                key: "default",
                                fn: function (o) {
                                  var n = o.open;
                                  return [
                                    t(
                                      I,
                                      {
                                        attrs: {
                                          "justify-space-between": "",
                                          "align-center": "",
                                        },
                                      },
                                      [
                                        e._v(
                                          "\n          " +
                                            e._s(l.question) +
                                            "\n          "
                                        ),
                                        n
                                          ? t(
                                              E.a,
                                              { attrs: { color: "white" } },
                                              [e._v("mdi-chevron-up")]
                                            )
                                          : t(
                                              E.a,
                                              { attrs: { color: "black" } },
                                              [e._v("mdi-chevron-down")]
                                            ),
                                      ],
                                      1
                                    ),
                                  ];
                                },
                              },
                            ],
                            null,
                            !0
                          ),
                        }),
                        e._v(" "),
                        t(y, { staticClass: "rounded-lg rounded-t-0" }, [
                          e._v("\n        " + e._s(l.answer) + "\n      "),
                        ]),
                      ],
                      1
                    );
                  }),
                  1
                ),
              ],
              1
            );
          },
          [],
          !1,
          null,
          "83d46858",
          null
        );
      t.default = component.exports;
    },
    468: function (e, t, l) {
      "use strict";
      l(11), l(4), l(12), l(80), l(38), l(422), l(421);
      var o = l(423),
        n = l(113);
      t.a = Object(o.a)("container").extend({
        name: "v-container",
        functional: !0,
        props: {
          id: String,
          tag: { type: String, default: "div" },
          fluid: { type: Boolean, default: !1 },
        },
        render: function (e, t) {
          var l,
            o = t.props,
            data = t.data,
            r = t.children,
            f = data.attrs;
          return (
            f &&
              ((data.attrs = {}),
              (l = Object.keys(f).filter(function (e) {
                if ("slot" === e) return !1;
                var t = f[e];
                return e.startsWith("data-")
                  ? ((data.attrs[e] = t), !1)
                  : t || "string" == typeof t;
              }))),
            o.id &&
              ((data.domProps = data.domProps || {}),
              (data.domProps.id = o.id)),
            e(
              o.tag,
              Object(n.a)(data, {
                staticClass: "container",
                class: Array({ "container--fluid": o.fluid }).concat(l || []),
              }),
              r
            )
          );
        },
      });
    },
  },
]);
