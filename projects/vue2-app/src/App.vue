<template>
  <div class="sys">
    <div class="nav">
      <router-link class="item" to="/">Home</router-link>
      <router-link class="item" to="/about">About</router-link>
      <router-link class="item" to="/info">Sys</router-link>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style scoped>
.sys {
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  padding: 10px;
}
.sys .nav {
  width: 100%;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  height: 33px;
}
.sys .nav .item {
  display: inline-block;
  padding: 5px 10px;
  background-color: #409eff;
  color: #fff;
  border-radius: 4px;
  text-decoration: none;
  cursor: pointer;
}
.sys .nav .item:hover {
  background-color: #66b1ff;
}
.sys .content {
  width: 100%;
  height: calc(100% - 33px);
  box-sizing: border-box;
  padding: 10px;
}
</style>
