<template>
  <el-col>
    <el-menu class="menubar-elmenu" default-active="1">
      <el-menu-item index="1" @click="navigateTo('/about-and-help')">
        <el-icon><icon-menu /></el-icon>
        <span>工具介绍</span>
      </el-menu-item>
      <el-menu-item index="2" @click="navigateTo('/weblogic-memshell-batch-inject')">
        <el-icon><icon-menu /></el-icon>
        <span>批量打入内存马</span>
      </el-menu-item>
    </el-menu>
  </el-col>
</template>

<script setup>
import { Menu as IconMenu } from "@element-plus/icons-vue";
import { useRouter } from 'vue-router';

const router = useRouter();

function navigateTo(path) {
  console.log(path)
  router.push(path);
}
</script>