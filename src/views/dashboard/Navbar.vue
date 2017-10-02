<template>
    <div class="">
        <el-menu class="navbar" mode="horizontal">
            <el-dropdown class="avatar-container" :hide-on-click="false">
                <div class="avatar-wrapper">
                    <span class="user-name">user</span>
                    <i class="el-icon-caret-bottom"></i>
                </div>
                <el-dropdown-menu class="user-dropdown" slot="dropdown">
                    <el-dropdown-item>
                        <span class="nav-lang" :class="{ 'active': lang === 'zh-CN' }" @click="handleChangeLanguage('zh-CN')">中文</span>
                        <span> / </span>
                        <span class="nav-lang" :class="{ 'active': lang === 'en-US' }" @click="handleChangeLanguage('en-US')"> En</span>
                    </el-dropdown-item>
                    <el-dropdown-item>
                        <span @click="dialogVisible = true">切换主题</span>
                    </el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </el-menu>
        <!-- 换肤弹窗 -->
        <el-dialog title="更改主题颜色" :visible.sync="dialogVisible">
            <el-form class="small-space" label-position="left" label-width="130px" style='width: 400px; margin-left:50px;'>

                <el-form-item label="请选择主题颜色：" prop="resource">
                    <el-radio-group v-model="themeValue">
                        <el-radio label="blue">蓝色</el-radio>
                        <el-radio label="green">绿色</el-radio>
                        <el-radio label="red">红色</el-radio>
                        <el-radio label="yellow">黄色</el-radio>
                    </el-radio-group>
                </el-form-item>
            </el-form>=
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="handleChangeTheme">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
import { global } from 'src/global/global';
export default {
    name: 'navbar',
    components: {

    },
    data() {
        return {
            lang: this.$i18n.locale || 'zh-CN',
            languageTitle: '中文',
            themeValue: localStorage.getItem("themeValue") ? localStorage.getItem("themeValue") : 'blue',
            dialogVisible: false
        }
    },
    computed: {
    },
    methods: {
        handleChangeLanguage: function(targetLang) {
            if (this.lang === targetLang) return;
            this.$i18n.locale = targetLang;
            this.lang = targetLang;
            global.changeLanguage(targetLang);
        },
        //换肤
        handleChangeTheme() {
            var vm = this;
            global.changeTheme(vm.themeValue);
            this.dialogVisible = false;
        }
    }
}
</script>

<style rel="stylesheet/scss" lang="scss" >
.navbar {
    height: 50px;
    line-height: 50px;
    border-radius: 0px !important;
    .fa-bars {
        cursor: pointer;
        line-height: 50px;
        height: 50px;
        float: left;
        padding: 0 15px;
    }
    /*.hideSidebar .fa-bars{
            display: none;
        }*/
    .fa-bars[isactive] {
        transform: rotate(90deg);
    }
    .hamburger-container {
        line-height: 50px;
        height: 50px;
        float: left;
        padding: 0 10px;
    }
    .errLog-container {
        display: inline-block;
        position: absolute;
        right: 150px;
    }
    .screenfull {
        position: absolute;
        right: 90px;
        top: 16px;
        color: red;
    }
    .avatar-container {
        height: 50px;
        display: inline-block;
        position: absolute;
        right: 35px;
        .avatar-wrapper {
            cursor: pointer;
            /* margin-top:5px;*/
            padding: 5px;
            position: relative;
            height: 40px;
            line-height: 40px;
            .user-name {
                float: left;
                margin-right: 5px;
            }

            .user-avatar {
                width: 40px;
                height: 40px;
                border-radius: 50%;
            }
            .el-icon-caret-bottom {
                position: absolute;
                right: -20px;
                top: 25px;
                font-size: 12px;
            }
        }
    }
}

.user-dropdown {
    .active {
        color: red;
    }
}
</style>



