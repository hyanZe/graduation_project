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
            <el-card>
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
        <el-row style="margin-top: 3vh">
          <el-col>
            <el-card>
              <el-row>
                <el-col :span="6" :offset="9">
                  <span style="font-weight: 600;font-size: 1.1rem">设备数据采集日志</span>
                </el-col>
                <el-col :span="5" :offset="4">
                  <el-switch
                      active-text="自动刷新"
                      v-model="autoGetData"
                  />
                </el-col>
              </el-row>
              <el-row>
                <el-col>
                  <el-table
                      stripe
                      border
                      empty-text="暂无数据"
                      height="30vh"
                      max-height="30vh"
                      highlight-current-row
                      :data="dataLogs"
                  >
                    <el-table-column label="时间" prop="createDt" v-slot="scope">
                      <span>{{ scope.row.createDt.substring(scope.row.createDt.indexOf('-') + 1, scope.row.createDt.lastIndexOf('.')) }}</span>
                    </el-table-column>
                    <el-table-column label="数据类型" prop="dataType"/>
                    <el-table-column label="数据值" prop="data"/>
                    <el-table-column label="是否异常" prop="error">
                      <template v-slot="scope">
                        <el-checkbox v-model="scope.row.isError" @change="handleChangeErrorState(scope.row)"/>
                      </template>
                    </el-table-column>
                  </el-table>
                </el-col>
              </el-row>
            </el-card>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="11" :offset="1">
        <el-row>
          <el-col>
            <el-card>
              <template #header>
                <el-row style="align-items: center">
                  <el-col :span="5">
                    <span style="font-weight: 700">设备报警阈值</span>
                    <el-popover
                        placement="right"
                        title="提示"
                        trigger="hover"
                        content="当传感器数据大于等于设定值时，下位机程序将发出警告"
                    >
                      <template #reference>
                        <el-icon>
                          <Warning/>
                        </el-icon>
                      </template>
                    </el-popover>
                  </el-col>
                  <el-col :span="3" :offset="13">
                    <el-button :type="sliderEditable===false?'plain':'primary'"
                               @click="sliderEditable = !sliderEditable">
                      {{ sliderEditable === false ? '编辑' : '确认' }}
                    </el-button>
                  </el-col>
                </el-row>
              </template>
              <el-row>
                <el-col :span="3">
                  <el-slider v-model="threshold.phThreshold" vertical :min="1" :max="14" :step="0.1" height="20vh"
                             :disabled="!sliderEditable" @change="handleUpdateThreshold('phThreshold',threshold.phThreshold)"/>
                </el-col>
                <el-col :span="3">
                  <el-slider v-model="threshold.pThreshold" vertical :min="1" :max="14" :step="0.1" height="20vh"
                             :disabled="!sliderEditable" @change="handleUpdateThreshold('pThreshold',threshold.pThreshold)"/>
                </el-col>
                <el-col :span="3">
                  <el-slider v-model="threshold.airTempThreshold" vertical :min="1" :max="14" :step="0.1" height="20vh"
                             :disabled="!sliderEditable"
                             @change="handleUpdateThreshold('airTempThreshold',threshold.airTempThreshold)"/>
                </el-col>
                <el-col :span="3">
                  <el-slider v-model="threshold.baseThreshold" vertical :min="1" :max="14" :step="0.1" height="20vh"
                             :disabled="!sliderEditable" @change="handleUpdateThreshold('baseThreshold',threshold.baseThreshold)"/>
                </el-col>
                <el-col :span="3">
                  <el-slider v-model="threshold.nThreshold" vertical :min="1" :max="14" :step="0.1" height="20vh"
                             :disabled="!sliderEditable" @change="handleUpdateThreshold('nThreshold',threshold.nThreshold)"/>
                </el-col>
                <el-col :span="3">
                  <el-slider v-model="threshold.kThreshold" vertical :min="1" :max="14" :step="0.1" height="20vh"
                             :disabled="!sliderEditable" @change="handleUpdateThreshold('kThreshold',threshold.kThreshold)"/>
                </el-col>
                <el-col :span="3">
                  <el-slider v-model="threshold.airWetThreshold" vertical :min="1" :max="14" :step="0.1" height="20vh"
                             :disabled="!sliderEditable" @change="handleUpdateThreshold('airWetThreshold',threshold.airWetThreshold)"/>
                </el-col>
                <el-col :span="3">
                  <el-slider v-model="threshold.baseTempThreshold" vertical :min="1" :max="14" :step="0.1" height="20vh"
                             :disabled="!sliderEditable"
                             @change="handleUpdateThreshold('baseTempThreshold',threshold.baseTempThreshold)"/>
                </el-col>
              </el-row>
              <el-row style="margin-top: 1vh">
                <el-col :span="3">
                  <span style="text-align: center;font-weight: 500">ph值</span>
                </el-col>
                <el-col :span="3">
                  <span style="text-align: center;font-weight: 500">磷元素含量</span>
                </el-col>
                <el-col :span="3">
                  <span style="text-align: center;font-weight: 500">空气温度</span>
                </el-col>
                <el-col :span="3">
                  <span style="text-align: center;font-weight: 500">基质浓度</span>
                </el-col>
                <el-col :span="3">
                  <span style="text-align: center;font-weight: 500">氮元素含量</span>
                </el-col>
                <el-col :span="3">
                  <span style="text-align: center;font-weight: 500">钾元素含量</span>
                </el-col>
                <el-col :span="3">
                  <span style="text-align: center;font-weight: 500">空气湿度</span>
                </el-col>
                <el-col :span="3">
                  <span style="text-align: center;font-weight: 500">基质温度</span>
                </el-col>
              </el-row>
            </el-card>
          </el-col>
        </el-row>
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
import {
  getDataLogs,
  getDeviceDataTypeList,
  getDeviceSensorList,
  getSensorDataList, loadThreshold,
  updateDataState, updateThreshold
} from "@/apis/main/deviceDetail";
import {ElMessage} from "element-plus";
import {InfoFilled, Warning} from "@element-plus/icons-vue";

const currentDevice = ref();
const currentDataType = ref('');
const currentSensor = ref();
const deviceList = ref(emptyArray<DeviceInfo>());
const deviceDataTypeList = ref(emptyArray<string>());
const sensorList = ref(emptyArray());
const sensorData = ref();
const autoGetData = ref(false);
const dataLogs = ref();
const autoGetDataLogTimer = ref(0);
const sliderEditable = ref(false);
const threshold = ref({
  phThreshold: 0,
  pThreshold: 0,
  airTempThreshold: 0,
  baseThreshold: 0,
  nThreshold: 0,
  kThreshold: 0,
  airWetThreshold: 0,
  baseTempThreshold: 0
});

onMounted(() => {
  initPage();
});

watch(currentDevice, (newVal) => { //之所以放在watch里而不是放在select组件的change时间里触发获取数据的方法 是因为绑定change事件的方式在页面初始化时没法触发方法 所以采用watch的方式让页面初始化时也能触发
  if (newVal !== '') {
    initDeviceDataTypeList(newVal);
    handleLoadDataLogs();
    handleLoadThreshold();
  }
})

watch(currentDataType, (newVal) => {
  if (newVal !== '') {
    handleDataTypeSelected();
  }
})

watch(currentSensor, (newVal) => {
  if (newVal !== '') {
    handleSensorSelected();
  }
})

watch(autoGetData, (newVal) => {
  if (newVal === true) {
    //自动刷新数据
    autoGetDataLogTimer.value = window.setInterval(() => {
      handleLoadDataLogs();
      handleSensorSelected();
    }, 3000);
  } else {
    window.clearInterval(autoGetDataLogTimer.value);
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
      for (let item of deviceDataTypeList.value) {
        currentDataType.value = item;
        return;
      }
    }
  });
}

function handleDataTypeSelected() {
  getDeviceSensorList({deviceId: currentDevice.value, dataType: currentDataType.value}, it => {
    if (it.success) {
      sensorList.value = emptyArray(it.data);
      for (let item of sensorList.value) {
        currentSensor.value = item.id;
        return;
      }
    }
  });
}

function handleSensorSelected() {
  console.log(currentSensor.value)
  getSensorDataList({deviceId: currentDevice.value, sensorId: currentSensor.value}, it => {
    if (it.success) {
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
      x: 'center',
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
        smooth: true,
        data: sensorData.value.data
      }
    ]
  });
}

function handleLoadDataLogs() {
  getDataLogs(currentDevice.value, it => {
    if (it.success) {
      dataLogs.value = it.data;
    }
  });
}

function handleChangeErrorState(row: any) {
  updateDataState({dataId: row.id, state: row.isError}, it => {
    if (it.success) {
      ElMessage.success('数据异常状态修改成功');
    }
  });
}

function handleUpdateThreshold(key: string, val: string) {
  console.log('update ' + key + ' = ' + val);
  updateThreshold({deviceId:currentDevice.value,key:key,val:val},it=>{
    if (it.success){
      console.log('update threshold success');
    }
  })
}

function handleLoadThreshold(){
  loadThreshold(currentDevice.value,it=>{
    if (it.success){
      threshold.value = it.data;
    }
  });
}
</script>

<style scoped>

</style>