import Vue from "vue";
import App from "./app/index.vue";
import VueSlider from "vue-slider-component";
import "vue-slider-component/theme/default.css";

Vue.component("VueSlider", VueSlider);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
