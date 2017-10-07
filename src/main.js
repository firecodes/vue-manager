
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
import 'nprogress/nprogress.css';// Progress 进度条 样式
import 'normalize.css/normalize.css';// normalize.css 样式格式化
import 'assets/css/index.scss'; // 全局自定义的css样式

import i18n from '@/i18n'  //国际化 
import * as filters from '@/filters'; // 全局vue filter
import {global} from '@/global/global';
import Cookies from 'js-cookie';
import "./userRouter"


Vue.use(ElementUI)
Vue.config.productionTip = false

//切换中英文
let langVal = localStorage.getItem('ELEMENT_LANGUAGE') || i18n.locale;
i18n.locale = langVal;
global.changeLanguage(langVal);

//加载用户主题,默认没有设置主题，取默认值
let themeValue = localStorage.getItem('themeValue') || 'blue';
global.changeTheme( themeValue );

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  template: '<App/>',
  components: { App }
})
