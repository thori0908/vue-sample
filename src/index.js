import Vue from "vue";
import { components } from "./components";

document.addEventListener("DOMContentLoaded", () => {
  let templates = document.querySelectorAll("[data-vue]");

  for (let el of templates) {
    let app = new Vue(components[el.dataset.vue]);
    app.$mount(el);
  }
});
