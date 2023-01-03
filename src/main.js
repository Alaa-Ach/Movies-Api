import App from './App.vue'
// import the package
import Vue from "vue"
import { createApp } from 'vue'
import router from './router'
// import * as Vue from 'vue'




// Register the package
createApp(App).use(router).mount("#app");

// createApp(App).use(router).mount('#app')
