<template>
  <div style="width: 80%">
    <el-row style="margin-top: 3vh;align-items: center">
      <el-col :span="3" :offset="2">
        <span>请选择树莓派：</span>
      </el-col>
      <el-col :span="4">
        <el-select
            v-model="currentDevice"
            placeholder="请选择设备"
            @change="getDeviceDetail"
        >
          <el-option
              v-for="item in deviceList"
              :key="item.id"
              :label="item.deviceName"
              :value="item.id" />
        </el-select>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import {onMounted, ref} from "vue";
import {emptyArray} from "@/libs/empty";
import {DeviceInfo} from "@/views/main/dashboard/Dashboard";
import {getDeviceList} from "@/apis/main/dashboard";

const currentDevice=ref();
const deviceList=ref(emptyArray<DeviceInfo>());


onMounted(()=>{
  initPage();
});

function initPage(){
  initDeviceList();
}
function getDeviceDetail(){
  return null;
}

function initDeviceList(){
  getDeviceList(it => {
    if (it.success){
      deviceList.value = emptyArray(it.data);
    }
  });
}
</script>

<style scoped>

</style>