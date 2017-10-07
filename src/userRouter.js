import Vue from 'vue';
import router from './router';
import store from './store';

import NProgress from 'nprogress'; // Progress 进度条

// register global progress.
const whiteList = ['/login', '/authredirect', '/reset', '/sendpwd', '/401', '404'];// 不重定向白名单
router.beforeEach((to, from, next) => {
    NProgress.start(); // 开启Progress
    //获取先获取用户信息，从用户信息中拿权限，判断是否手敲
    //console.log(from,'路由---->',to )
    if (store.getters.token) { // 判断是否有token。接口会有延迟
        if (to.path === '/login') {
            next({ path: '/' });
        } else if (to.path == '/401') {
            next();
        }
        else if (to.path == '/404') {
            next();
        }
        else {
            //避免F5刷新时，vex数据全无，所以需要重新获取一次数据
            if (!store.getters.userInfo) { //判断是否有用户信息 把token换成userInfo
                console.log('未获取到用户信息', store.getters.userInfo)
                store.dispatch('GetInfo').then(res => { // 拉取user_info
                    // console.log('已获取到用户信息',store.getters.userInfo)          
                    next();
                }).catch(err => {
                    console.log(err);
                });
            } else {
                if (store.getters.permission_routers[to.path] == undefined) {
                    next({ path: '/404' }); //
                    NProgress.done();
                } else if (store.getters.permission_routers[to.path] == false) {
                    next({ path: '/401' }); //
                    NProgress.done();
                }
                else {
                    next();//
                }
            }
        }
    } else {
        if (whiteList.indexOf(to.path) !== -1) { // 在免登录白名单，直接进入
            next()
        } else {
            next('/login'); // 否则全部重定向到登录页
            NProgress.done(); // 在hash模式下 改变手动改变hash 重定向回来 不会触发afterEach 暂时hack方案 ps：history模式下无问题，可删除该行！
        }
    }
    NProgress.done();
});


router.afterEach(() => {
    NProgress.done(); // 结束Progress
});