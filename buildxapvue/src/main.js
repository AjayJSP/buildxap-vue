/** @format */

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "@mdi/font/css/materialdesignicons.min.css";
// Data Table
// import Vue3EasyDataTable from "vue3-easy-data-table";
// import "vue3-easy-data-table/dist/style.css";

const vuetify = createVuetify({
  components,
  directives,
});

const app = createApp(App);
app.use(store).use(vuetify).use(router).mount("#app");
