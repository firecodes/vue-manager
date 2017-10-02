# vue-manager

[线上地址]: https://firecodes.github.io/vue-manager/

# 后台管理系统 vue-manager  admin system
使用到的技术栈：vue + vue-resource + vue-router + vue-i18n + vuex(spa必备) + element-ui + ES6 + webpack 


# 实行功能
1. 中英文切换
2. 主题样式切换
后续功能依次增加

# 感谢其余开源项目支持，本项目功能基于以下项目优化（开源因你更精彩）
1. @PanJiaChen   https://github.com/PanJiaChen/vue-element-admin
2. @lss5270   https://github.com/lss5270/vue-admin-spa


## Build Setup

``` bash
# Clone project
git clone https://github.com/firecodes/vue-manager.git

# install dependencies
npm install

# serve with hot reload at localhost:8686
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

# 关于UI系统
    由于bootstrap不支持mvvm已弃用，本项目使用了全新的elementUI系统，具体使用方法参照以下官方链接:
    1.http://element.eleme.io/#/zh-CN/component/installation


# 皮肤 element-ui 主题 更新
    相关包 npm i element-theme element-theme-default -g
    命令：
    et -i element-red.css  //定义红色主题文件
    et -i element-yellow.css  //定义黄色主题文件
    et -i element-blue.css  //定义绿色主题文件
    ....  看需求定义多个主题文件
    打开 element-red.css（相关生成文件）， 改变主题颜色变量
    --color-primary: red;  //yellow \blu \red 等
-----------------------------------------------------
    将主题文件输出目录
    et -w -o ./static/theme/default/
    et -w element-red.css -o ./static/theme/red/
    et -w element-yellow.css -o ./static/theme/yellow/
    et -w element-blue.css -o ./static/theme/blue/

    //main.js 加入以下代码查看界面效果
    import 'theme/red/index.css'
    import 'theme/yellow/index.css'
    import 'theme/blue/index.css'
---------------------------------------------------------------------------------
    采用gulp在index.css 所有样式外层加class名称。（例如：.link{} 打包为 .red-theme .link）
    相关包文件: npm i gulp gulp-clean-css gulp-css-wrap run-sequence --save-dev
    测试环境:
    src/assets/theme/red/
    src/assets/theme/yellow/
    src/assets/theme/blue/
    开发环境:
    dist/red/
    dist/yellow/
    dist/blue/
---------------------------------------------------------------------------------






