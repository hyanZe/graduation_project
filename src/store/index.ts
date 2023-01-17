import { createPinia } from 'pinia';
import { defineStore } from 'pinia';

const pinia = createPinia();

export const Store = defineStore('main', {
  state: () => {
    return {
    };
  },
});

export default pinia;
