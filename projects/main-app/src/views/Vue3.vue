<template>
  <div class="vue3-container" id="vue3-app-container"></div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'
import { loadMicroApp } from 'qiankun'

let microApp = null

onMounted(() => {
  microApp = loadMicroApp({
    name: 'vue3-app',
    entry: '//localhost:4002',
    container: '#vue3-app-container',
  })
})

onUnmounted(() => {
  if (microApp) {
    microApp.unmount()
  }
})
</script>

<style scoped>
.vue3-container {
  width: 100%;
  min-height: calc(100vh - 120px);
  background-color: #fff;
  border-radius: 4px;
}
</style>
