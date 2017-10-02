// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import App from './App'
import router from './router'
import i18n from './i18n'  //国际化 

import {global} from 'src/global/global';
import Cookies from 'js-cookie';


Vue.use(ElementUI)
Vue.config.productionTip = false

//切换中英文
let langVal = localStorage.getItem('ELEMENT_LANGUAGE');
if(langVal){
  i18n.locale = langVal;
  global.changeLanguage(langVal);
}

//加载用户主题,默认没有设置主题，取默认值
let themeValue = localStorage.getItem('themeValue') || 'blue';
global.changeTheme( themeValue );

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  template: '<App/>',
  components: { App }
})
