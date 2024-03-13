<template>
  <div class="app">
    <el-container>
      <el-aside width="200px">
        <Menubar></Menubar>
      </el-aside>
      <el-main >
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>


<script setup>
import Menubar from '@/views/Menubar.vue'
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
