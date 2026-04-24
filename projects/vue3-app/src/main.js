import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import {
  renderWithQiankun,
  qiankunWindow,
} from "vite-plugin-qiankun/dist/helper";

let app = null;

function render(container) {
  app = createApp(App);
  app.use(router);
  app.mount(container);
}

if (qiankunWindow.__POWERED_BY_QIANKUN__) {
  renderWithQiankun({ bootstrap, mount, unmount, update });
} else {
  render("#app");
}
export async function bootstrap() {
  console.log("[vue] vue app bootstraped");
}

export async function mount(props) {
  console.log("[vue] props from main framework", props);
  render(props.container?.querySelector("#app"));
}

async function unmount() {
  console.log("vue3-vite app unmount");
  app?.unmount();
}

async function update() {
  console.log("vue3 app update");
}

// const app = createApp(App);
// app.use(router);
// app.mount("#app");
