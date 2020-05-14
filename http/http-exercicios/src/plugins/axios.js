import Vue from "vue";
import axios from "axios";

axios.defaults.baseURL = "https://curso-vue-2fcb8.firebaseio.com/";
axios.defaults.headers.common["Authorization"] = "JWT";

Vue.use({
  install(Vue) {
    Vue.prototype.$http = axios;

    Vue.prototype.$http.interceptors.request.use(
      (config) => {
        console.log(config);
        return config;
      },
      (error) => Promise.reject(error)
    );

    Vue.prototype.$http.interceptors.response.use(
      (res) => {
        console.log(res);
        return res;
      },
      (error) => Promise.reject(error)
    );
  },
});
