
import Cookies from 'js-cookie';

import { global } from 'src/global/global';
import { api } from 'src/api/api';
import { Message } from 'element-ui';

const user = {
  state: {
    uid: Cookies.get('userId'),
    token: Cookies.get('userToken') || "1111",
    userInfo: null,
  },
  mutations: {
    SET_UID: (state, uid) => {
      state.uid = uid;
    },
    SET_TOKEN: (state, token) => {
      state.token = token;
    },
    SET_USERINFO: (state, userInfo) => {
      state.userInfo = userInfo;
    },
    LOGIN_SUCCESS: () => {
      console.log('login success')
    },
  },
  actions: {
    // 获取用户信息
    GetInfo({ dispatch, commit, state }) {
      return new Promise((resolve, reject) => {
        global.get(api.getUserInfo, { params: { 'userId': state.uid } }, function (res) {
          console.log('-------根据id获取用户信息：', JSON.stringify(res))
          if (res.body.resultCode == 0) {
            var res = res.body.data;
            // Cookies.set('userToken', res.token); //Cookies.get('userId')
            // Cookies.set('userId', res.uid); //Cookies.get('userId')
            commit('SET_TOKEN', res.token);
            //设置userInfo
            commit('SET_USERINFO', res);
            //获取到信息时同时设置用户菜单权限
            // store.dispatch('GenerateRoutes', res.permissions); 等同于
            dispatch('GenerateRoutes', res.permissions);
            resolve();
          } else {
            //alert(res.body.resultMsg)
            Message({
              showClose: true,
              message: res.body.resultMsg,
              type: 'error'
            });
          }
        }, function (res) {
          reject(res);
        })
      });
    },
  }
};

export default user;
