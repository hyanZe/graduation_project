<template>
  <div style="width: 80vw;margin: 3vh auto">
    <el-row>
      <el-col :span="11">
        <el-row style="align-items: center">
          <el-col :span="4" :offset="2">
            <span>请选择树莓派：</span>
          </el-col>
          <el-col :span="4">
            <el-select
                v-model="currentDevice"
                placeholder="请选择设备"
            >
              <el-option
                  v-for="item in deviceList"
                  :key="item.id"
                  :label="item.deviceName"
                  :value="item.id"/>
            </el-select>
          </el-col>
        </el-row>
        <el-row style="margin-top: 3vh">
          <el-col>
            <el-card shadow="hover">
              <el-row style="align-items: center">
                <el-col :span="6">
                  <span style="margin-right: 2vw">数据类型:</span>
                </el-col>
                <el-col :span="4">
                  <el-select
                      v-model="currentDataType"
                  >
                    <el-option
                        v-for="item in deviceDataTypeList"
                        :key="item"
                        :label="item"
                        :value="item"
                    />
                  </el-select>
                </el-col>
                <el-col :span="6" :offset="2">
                  <span style="margin-right: 2vw">传感器:</span>
                </el-col>
                <el-col :span="5">
                  <el-select
                      v-model="currentSensor"
                  >
                    <el-option
                        v-for="item in sensorList"
                        :key="item.id"
                        :label="item.sensorName"
                        :value="item.id"
                    />
                  </el-select>
                </el-col>
              </el-row>
              <el-row style="margin-top: 3vh">
                <el-col :offset="2">
                  <div id="sensorChart1" style="width: 30vw;height: 25vh"/>
                </el-col>
              </el-row>
            </el-card>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="11" :offset="1">

      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import {onMounted, ref, watch} from "vue";
import {emptyArray} from "@/libs/empty";
import {DeviceInfo} from "@/views/main/dashboard/Dashboard";
import {getDeviceList} from "@/apis/main/dashboard";
import * as echarts from "echarts";
import {getDeviceDataTypeList, getDeviceSensorList, getSensorDataList} from "@/apis/main/deviceDetail";

const currentDevice = ref();
const currentDataType = ref('');
const currentSensor=ref();
const deviceList = ref(emptyArray<DeviceInfo>());
const deviceDataTypeList = ref(emptyArray<string>());
const sensorList=ref(emptyArray());
const sensorData=ref();

onMounted(() => {
  initPage();
});

watch(currentDevice, (newVal) => { //之所以放在watch里而不是放在select组件的change时间里触发获取数据的方法 是因为绑定change事件的方式在页面初始化时没法触发方法 所以采用watch的方式让页面初始化时也能触发
  if (newVal !== '') {
    initDeviceDataTypeList(newVal);
  }
})

watch(currentDataType,(newVal)=>{
  if (newVal !== ''){
    handleDataTypeSelected();
  }
})

watch(currentSensor,(newVal)=>{
  if (newVal !== ''){
    handleSensorSelected();
  }
})


function initPage() {
  initDeviceList();
}

function initDeviceList() {
  getDeviceList(it => {
    if (it.success) {
      deviceList.value = emptyArray(it.data);
      for (let item of deviceList.value) {
        currentDevice.value = item.id;
        return;
      }
    }
  });
}

function initDeviceDataTypeList(deviceId: number) {
  getDeviceDataTypeList(deviceId, it => {
    if (it.success) {
      deviceDataTypeList.value = emptyArray(it.data);
      for (let item of deviceDataTypeList.value){
        currentDataType.value = item;
        return;
      }
    }
  });
}

function handleDataTypeSelected() {
  getDeviceSensorList({deviceId:currentDevice.value,dataType:currentDataType.value},it=>{
    if (it.success){
      sensorList.value = emptyArray(it.data);
      for (let item of sensorList.value){
        currentSensor.value = item.id;
        return;
      }
    }
  });
}

function handleSensorSelected(){
  console.log(currentSensor.value)
  getSensorDataList({deviceId:currentDevice.value,sensorId:currentSensor.value},it=>{
    if (it.success){
      sensorData.value = it.data;
      initDeviceDetailCharts();
    }
  });
}

function initDeviceDetailCharts() {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  let sensorChart1 = echarts.init(document.getElementById('sensorChart1'));
  sensorChart1.setOption({
    title: {
      text: '设备传感器数据变化趋势图',
      x:'center',
    },
    tooltip: {},
    xAxis: {
      data: sensorData.value.createDt,
      type: 'category'
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name: '浓度/值',
        type: 'line',
        smooth:true,
        data: sensorData.value.data
      }
    ]
  });
}
</script>

<style scoped>

</style>