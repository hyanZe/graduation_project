<template>
  <div class="pageHeader">
    <el-row style="align-items: center">
      <el-col :span="4">
        <img src="@/assets/logo1.png" height="70"/>
      </el-col>
      <el-col :span="20">
        <el-menu
            default-active="/main/dashboard"
            mode="horizontal"
            :router="true"
        >
          <el-menu-item index="/main/dashboard">仪表盘</el-menu-item>
          <el-menu-item index="/main/deviceDetail">设备详情</el-menu-item>
        </el-menu>
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