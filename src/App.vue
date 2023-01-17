<template>
  <div id="app">
    <div class="contents">
      <router-view />
    </div>
  </div>
</template>

<script setup lang="ts">
import {eventSwitch} from "@/libs/global-event";
import {ElMessage} from "element-plus";
import logger from "@/libs/logger";
import {onMounted, onUnmounted} from "vue";

onMounted(() => {
  eventSwitches.forEach(it => it.on());

});

onUnmounted(() => {
  eventSwitches.forEach(it => it.off());
});

const eventSwitches = [
  eventSwitch('Failure', err => {
    logger.warn('Failure', err);
    ElMessage.error(err.message);
  }),
  eventSwitch('ApiError', err => {
    logger.warn('ApiError', err);
    ElMessage.error(err.response?.data?.message || err.message);
  }),
  eventSwitch('NetError', err => {
    logger.warn('NetError', err);
    ElMessage.error(err.message);
  }),
  eventSwitch('DblError', err => {
    logger.info('DblError', err);
    ElMessage.warning(err.message);
  }),
  eventSwitch('NoPerms', err => {
    logger.info('NoPerms', err);
    ElMessage.warning('permission denied');
  }),
  eventSwitch('Righter', err => {
    logger.info('Righter', err);
    ElMessage.warning('invalid editor data');
  }),
];
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: -8px -8px auto;
}

.contents {
  display: flex;
  justify-content: center;
  background-color: #f7f8fa;
  height: 100vh;
}
html,
body,
#app,
.contents {
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>
