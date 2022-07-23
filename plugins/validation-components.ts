import { Form, Field, ErrorMessage } from "vee-validate";
import { VueTelInput } from "vue-tel-input";
import "vue-tel-input/dist/vue-tel-input.css";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("VeeForm", Form);
  nuxtApp.vueApp.component("VeeField", Field);
  nuxtApp.vueApp.component("VeeErrorMessage", ErrorMessage);
  nuxtApp.vueApp.component("VueTelInput", VueTelInput);
});
