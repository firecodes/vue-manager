<template>
  <div>
      <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1">{{ $t('message.home') }}</el-menu-item>
        <el-submenu index="2">
          <template slot="title">{{ $t('message.user') }}</template>
          <el-menu-item index="2-1">{{ $t('message.item1') }}</el-menu-item>
          <el-menu-item index="2-2">{{ $t('message.item2') }}</el-menu-item>
          <el-menu-item index="2-3">{{ $t('message.item3') }}</el-menu-item>
        </el-submenu>
        <el-menu-item index="3">{{ $t('message.pCenter') }}</el-menu-item>
      </el-menu>
      <el-button @click="changeLanguage">{{languageTitle}}</el-button>
    </Menu>
        <p>{{ $i18n.locale }}</p>
        <p>{{ $i18n.locale }}</p>
        <p>{{ $i18n.locale }}</p>
    <router-view></router-view>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        languageTitle: '中文',
      }
    },
    methods: {
      changeLanguage : function () {
        if(this.languageTitle === "中文") {
          this.languageTitle = "EN"
          this.$i18n.locale = "zh-CN";
        }else if(this.languageTitle === "EN") {
          this.languageTitle = "中文"
          this.$i18n.locale = "en-US";
        }
        // this.$router.push({path: '/i18N'})
      }
    }
  } 
</script>