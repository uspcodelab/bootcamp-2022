import Vue from "vue";

export default ({ app }, inject) => {
  inject("global", Vue.observable({ baseUrlApi: process.env.api.baseURL }));
};
