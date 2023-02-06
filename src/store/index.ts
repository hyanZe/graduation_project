import { createPinia } from 'pinia';
import { defineStore } from 'pinia';
import {DeviceInfo} from "@/views/main/dashboard/Dashboard";
import {emptyArray} from "@/libs/empty";

const pinia = createPinia();

export const SystemStore = defineStore('main', {
  state: () => {
    return {

    };
  },
});

export default pinia;
