import Vue from "vue";

export default ({ app }, inject) => {
  inject("global", Vue.observable({ baseUrlApi: "http://localhost:3000" }));
};
