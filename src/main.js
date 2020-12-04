import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import TeamList from "./components/TeamList.vue"

createApp(App).component("team", TeamList).use(router).mount('#app')
