import RoleModel from './src/App.vue';

export const rm = {
  install(Vue) {
    Vue.component('role-model', RoleModel);
  },
};

export default RoleModel;
