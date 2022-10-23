import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ViewUIPlus, { Tree } from 'view-ui-plus'
import 'view-ui-plus/dist/styles/viewuiplus.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
const app = createApp(App)

app.use(store)
  .use(router)
  .use(ViewUIPlus)
  .use(ElementPlus)
  .mount('#app')
