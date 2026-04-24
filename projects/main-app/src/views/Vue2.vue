<template>
  <div class="vue2-container" id="vue2-app-container"></div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'
import { loadMicroApp } from 'qiankun'

let microApp = null

onMounted(() => {
  microApp = loadMicroApp({
    name: 'vue2-app',
    entry: '//localhost:4001',
    container: '#vue2-app-container',
  })
})

onUnmounted(() => {
  if (microApp) {
    microApp.unmount()
  }
})
</script>

<style scoped>
.vue2-container {
  width: 100%;
  min-height: calc(100vh - 120px);
  background-color: #fff;
  border-radius: 4px;
}
</style>
