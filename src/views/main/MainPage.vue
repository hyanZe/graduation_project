<template>
  <div>
    <el-row>
      <el-col>
        <router-view/>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.pageHeader{
  background-color: white;
  height: 10vh;
  width: 100vw;
  border-bottom: solid 1px #f7f8fa;
}
a{
  text-decoration: none;
}
</style>