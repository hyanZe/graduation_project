<template>
  <div class="dashboardContent">
    <el-row>
      <el-col :span="12">
        <el-row>
          <el-col>
            <el-card style="width: 40vw" shadow="hover">
              <el-row>
                <el-col :span="6">
                  <el-row>
                    <el-col>
                      <span class="dataStyle">{{ sensorDataCount.dataCountTotal }}</span>
                    </el-col>
                  </el-row>
                  <el-row>
                    <el-col>
                      <span class="dataTitle">累计采集数据量</span>
                    </el-col>
                  </el-row>
                </el-col>
                <el-col :span="6">
                  <el-row>
                    <el-col>
                      <span class="dataStyle">{{ sensorDataCount.dataCountToday }}</span>
                    </el-col>
                  </el-row>
                  <el-row>
                    <el-col>
                      <span class="dataTitle">今日采集数据量</span>
                    </el-col>
                  </el-row>
                </el-col>
                <el-col :span="6">
                  <el-row>
                    <el-col>
                      <span class="dataStyle">{{ sensorDataCount.dataCountLast }}</span>
                    </el-col>
                  </el-row>
                  <el-row>
                    <el-col>
                      <span class="dataTitle">昨日采集数据量</span>
                    </el-col>
                  </el-row>
                </el-col>
                <el-col :span="6">
                  <el-row>
                    <el-col>
                      <span class="dataStyle">{{ sensorDataCount.dataCountError }}</span>
                    </el-col>
                  </el-row>
                  <el-row>
                    <el-col>
                      <span class="dataTitle">异常数据量</span>
                    </el-col>
                  </el-row>
                </el-col>
              </el-row>
            </el-card>
          </el-col>
        </el-row>
        <el-row style="margin-top: 5%">
          <el-col>
            <el-card shadow="hover">
              <el-row>
                <el-col>
                  <span>传感器个数数据</span>
                </el-col>
              </el-row>
              <el-row style="margin-top: 5%">
                <el-col :span="12">
                  <el-row class="sensorStyle">
                    <el-col :span="12">
                      <img src="@/assets/images/icon-08.png" width="35" height="35"/>
                      <br/>
                      <span>ph值检测</span>
                    </el-col>
                    <el-col :span="1">
                      <span style="color: green">{{ sensorCount.phUsing }}</span>/<span>{{ sensorCount.phTotal }}</span>
                    </el-col>
                  </el-row>
                  <el-row class="sensorStyle">
                    <el-col :span="12">
                      <img src="@/assets/images/P.png" width="35" height="35"/>
                      <br/>
                      <span>磷元素检测</span>
                    </el-col>
                    <el-col :span="1">
                      <span style="color: green">{{ sensorCount.pUsing }}</span>/<span>{{ sensorCount.pTotal }}</span>
                    </el-col>
                  </el-row>
                  <el-row class="sensorStyle">
                    <el-col :span="12">
                      <img src="@/assets/images/c.png" width="35" height="35"/>
                      <br/>
                      <span>空气温度</span>
                    </el-col>
                    <el-col :span="1">
                      <span style="color: green">{{ sensorCount.airTempUsing }}</span>/<span>{{ sensorCount.airTempTotal }}</span>
                    </el-col>
                  </el-row>
                  <el-row class="sensorStyle">
                    <el-col :span="12">
                      <img src="@/assets/images/icon-07.png" width="35" height="35"/>
                      <br/>
                      <span>基质浓度</span>
                    </el-col>
                    <el-col :span="1">
                      <span style="color: green">{{ sensorCount.baseUsing }}</span>/<span>{{ sensorCount.baseTotal }}</span>
                    </el-col>
                  </el-row>
                </el-col>
                <el-col :span="12">
                  <el-row class="sensorStyle">
                    <el-col :span="12">
                      <img src="@/assets/images/N.png" width="35" height="35"/>
                      <br/>
                      <span>氮元素检测</span>
                    </el-col>
                    <el-col :span="1">
                      <span style="color: green">{{ sensorCount.nUsing }}</span>/<span>{{ sensorCount.nTotal }}</span>
                    </el-col>
                  </el-row>
                  <el-row class="sensorStyle">
                    <el-col :span="12">
                      <img src="@/assets/images/K.png" width="35" height="35"/>
                      <br/>
                      <span>钾元素检测</span>
                    </el-col>
                    <el-col :span="1">
                      <span style="color: green">{{ sensorCount.kUsing }}</span>/<span>{{ sensorCount.kTotal }}</span>
                    </el-col>
                  </el-row>
                  <el-row class="sensorStyle">
                    <el-col :span="12">
                      <img src="@/assets/images/humidity.png" width="35" height="35"/>
                      <br/>
                      <span>空气湿度</span>
                    </el-col>
                    <el-col :span="1">
                      <span style="color: green">{{ sensorCount.airWetUsing }}</span>/<span>{{ sensorCount.airWetTotal }}</span>
                    </el-col>
                  </el-row>
                  <el-row class="sensorStyle">
                    <el-col :span="12">
                      <img src="@/assets/images/temp.png" width="35" height="35"/>
                      <br/>
                      <span>基质温度</span>
                    </el-col>
                    <el-col :span="1">
                      <span style="color: green">{{ sensorCount.baseTempUsing }}</span>/<span>{{ sensorCount.baseTempTotal }}</span>
                    </el-col>
                  </el-row>
                </el-col>
              </el-row>
            </el-card>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="9" :offset="1">
        <el-row>
          <el-col>
            <el-card shadow="hover">
              <el-row style="align-items: center">
                <el-col :span="8" :offset="4">
                  <span>请选择树莓派：</span>
                </el-col>
                <el-col :span="8">
                  <el-select
                      v-model="currentDevice"
                      placeholder="请选择设备"
                      @change="getChartData"
                  >
                    <el-option
                      v-for="item in deviceList"
                      :key="item.id"
                      :label="item.deviceName"
                      :value="item.id" />
                  </el-select>
                </el-col>
              </el-row>
              <el-row style="align-items: center;margin-top: 7%">
                <el-col :offset="2">
                  <div id="averageData" style="width: 50vh;height: 25vh"/>
                </el-col>
              </el-row>
            </el-card>
          </el-col>
        </el-row>
        <el-row style="margin-top: 8vh">
          <el-col>
            <el-card shadow="hover">
              <el-row>
                <el-col>
                  <span style="font-size: 1.2rem">设备运行状态</span>
                </el-col>
              </el-row>
              <el-row style="margin-top: 10%">
                <el-col :span="8" v-for="item in deviceCondList" :key="item.deviceName">
                  <el-progress type="dashboard" :percentage="item.sensorCountUsing / item.sensorCountTotal">
                    <template #default="">
                      <span>{{item.deviceName}}</span>
                      <br/>
                      <span>运行传感器数量</span>
                      <br/>
                      <span>{{item.sensorCountUsing}}/{{item.sensorCountTotal}}</span>
                    </template>
                  </el-progress>
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
import * as echarts from 'echarts';
import {onMounted, ref} from "vue";
import {emptyArray, emptyObject} from "@/libs/empty";
import {
  AverageDeviceData,
  DeviceCondData,
  DeviceInfo,
  SensorCount,
  SensorDataCount
} from "@/views/main/dashboard/Dashboard";
import {
  getDeviceAverageData,
  getDeviceCondData,
  getDeviceList,
  getSensorCount,
  getSensorDataCount
} from "@/apis/main/dashboard";


onMounted(() => {
  initPage();
});

const currentDevice=ref();
const deviceList=ref(emptyArray<DeviceInfo>());
const sensorDataCount = ref(emptyObject<SensorDataCount>());
const deviceCondList = ref(emptyArray<DeviceCondData>());
const averageData=ref(emptyObject<AverageDeviceData>({
  ph:0,
  p:0,
  n:0,
  k:0
}));
const sensorCount = ref(emptyObject<SensorCount>({
  phUsing:0,
  phTotal:0,
  pUsing: 0,
  pTotal: 0,
  airTempUsing: 0,
  airTempTotal: 0,
  baseUsing: 0,
  baseTotal: 0,
  nUsing: 0,
  nTotal: 0,
  kUsing: 0,
  kTotal: 0,
  airWetUsing: 0,
  airWetTotal: 0,
  baseTempUsing: 0,
  baseTempTotal: 0,
}));

function initPage() {
  try {
    getSensorDataCount(it => {
      if (it.success) {
        sensorDataCount.value = emptyObject(it.data);
      }
    })
  } catch (e) {
    sensorDataCount.value.dataCountError = 0;
    sensorDataCount.value.dataCountTotal = 0;
    sensorDataCount.value.dataCountToday = 0;
    sensorDataCount.value.dataCountLast = 0;
  }
  getSensorCount(it => {
    sensorCount.value = emptyObject(it.data);
  });
  initEcharts();
  initDeviceList();
  initDeviceCondData();
}

function initEcharts() {
// 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.getElementById('averageData'));
// 绘制图表
  myChart.setOption({
    title: {
      text: '平均元素浓度(mmol/L)'
    },
    tooltip: {},
    xAxis: {
      data: ['ph', 'P', 'N', 'K']
    },
    yAxis: {},
    series: [
      {
        name: '平均浓度',
        type: 'bar',
        data: [averageData.value.ph, averageData.value.p, averageData.value.n, averageData.value.k]
      }
    ]
  });
}

function initDeviceList(){
  getDeviceList(it => {
    if (it.success){
      deviceList.value = emptyArray(it.data);
    }
  });
}

function getChartData(){
  //获取传感器平均数据
  getDeviceAverageData(currentDevice.value,it => {
    if (it.success){
      averageData.value = emptyObject(it.data);
      initEcharts();
    }
  });
}

function initDeviceCondData(){
  getDeviceCondData(it=>{
    if (it.success){
      deviceCondList.value = emptyArray(it.data);
    }
  });
}
</script>

<style scoped>
.dashboardContent {
  width: 80vw;
  margin: 5vh auto;
}

.dataStyle {
  font-size: 2rem;
}

.dataTitle {
  font-size: 0.8rem;
}

.sensorStyle {
  align-items: center;
  margin-bottom: 12%;
}
</style>
