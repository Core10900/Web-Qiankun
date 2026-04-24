import { createApp } from "vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import router from "./router";
import "./style.css";
import App from "./App.vue";
import { registerMicroApps, start } from "qiankun";

registerMicroApps([
  {
    name: "vue2-app", // app name registered
    entry: "//localhost:4001",
    container: "#qiankun-container",
    activeRule: "/vue2-app",
  },
]);
start();

const app = createApp(App);

// 注册所有图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app.use(ElementPlus);
app.use(router);
app.mount("#app");
