<template>
  <div>
    <el-row>
      <el-col>
        <page-header/>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <router-view/>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">

import PageHeader from "@/components/PageHeader.vue";
</script>

<style scoped>

</style>