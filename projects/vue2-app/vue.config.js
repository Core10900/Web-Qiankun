const { defineConfig } = require("@vue/cli-service");
const { name } = require("./package.json");
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    output: {
      library: `${name}-[name]`,
      libraryTarget: "umd", //打包成 umd 库格式 所有的模块定义下都可运行
      chunkLoadingGlobal: `webpackJsonp_${name}`, //webpack5的jsonpFunction设置
    },
  },
  devServer: {
    port: 4001,
    headers: {
      "Access-Control-Allow-Origin": "*", // 主应用获取子应用时跨域响应头
    },
  },
});
