<template>
  <div class="content">
    <div class="loginForm" v-if="!mode">
      <el-card>
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
            <el-button type="primary" style="width: 60%" @click="handleLogin">登录</el-button>
          </el-col>
        </el-row>
        <el-row>
          <el-col>
            <el-button type="text" @click="switchMode">没有账号?去注册</el-button>
          </el-col>
        </el-row>
      </el-card>
    </div>
    <div class="loginForm" v-if="mode">
      <el-card>
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
            <el-button type="primary" style="width: 60%" @click="handleRegister">注册</el-button>
          </el-col>
        </el-row>
        <el-row>
          <el-col>
            <el-button type="text" @click="switchMode">已有账号?直接登录</el-button>
          </el-col>
        </el-row>
      </el-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import {authLogin, register} from "@/apis/login/login";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import {LoginInfo} from "@/views/login/Login";
import {ElMessage} from "element-plus";
const username=ref('');
const password=ref('');
const mode=ref(false);

function handleLogin(){
  let loginInfo:LoginInfo = {
    username:username.value,
    password:password.value
  }
  authLogin(loginInfo,it=>{
    if (it.success){
      ElMessage.success('登录成功');
    }
  });
}

function handleRegister(){
  let loginInfo:LoginInfo = {
    username:username.value,
    password:password.value
  }
  register(loginInfo,it=>{
    if (it.success){
      ElMessage.success('注册成功');
      mode.value=!mode.value;
    }
  });
}
function switchMode(){
  username.value='';
  password.value='';
  mode.value=!mode.value;
}
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
  width: 30vw;
  margin-top: 10%;
}
.rowStyle{
  align-items: center;
  margin-top: 10%;
}
</style>