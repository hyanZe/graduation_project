<template>
  <div class="content">
    <div class="loginForm">
      <el-row class="rowStyle">
        <el-col :span="6">
          <span>用户名：</span>
        </el-col>
        <el-col :span="17">
          <el-input
              v-model="username"
              placeholder="请输入用户名"
              input-style="text-align:center"
          />
        </el-col>
      </el-row>
      <el-row class="rowStyle">
        <el-col :span="6">
          <span>密码：</span>
        </el-col>
        <el-col :span="17">
          <el-input
              v-model="password"
              type="password"
              show-password placeholder="请输入密码"
              input-style="text-align:center"
          />
        </el-col>
      </el-row>
      <el-row class="rowStyle">
        <el-col>
          <el-button type="primary" style="width: 60%">登录</el-button>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
const username=ref('abc');
const password=ref('');
</script>

<style scoped>
.content{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
}
.loginForm{
  height: 30%;
  margin-top: 10%;
  border: 1px solid;
}
.rowStyle{
  align-items: center;
  margin-top: 10%;
}
</style>