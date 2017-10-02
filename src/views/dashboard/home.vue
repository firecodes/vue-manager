<template>
  <div>
      <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
        <el-menu-item index="1">{{ $t('message.home') }}</el-menu-item>
        <el-submenu index="2">
          <template slot="title">{{ $t('message.user') }}</template>
          <el-menu-item index="2-1">{{ $t('message.item1') }}</el-menu-item>
          <el-menu-item index="2-2">{{ $t('message.item2') }}</el-menu-item>
          <el-menu-item index="2-3">{{ $t('message.item3') }}</el-menu-item>
        </el-submenu>
        <el-menu-item index="3">{{ $t('message.pCenter') }}</el-menu-item>
      </el-menu>
      <navbar></navbar>
    </Menu>
<div>
  <el-button round>圆形按钮</el-button>
  <el-button type="primary" round>主要按钮</el-button>
  <el-button type="success" round>成功按钮</el-button>
  <el-button type="info" round>信息按钮</el-button>
  <el-button type="warning" round>警告按钮</el-button>
  <el-button type="danger" round>危险按钮</el-button>
</div>
    <router-view></router-view>

  </div>
</template>
<script>
  import { global } from 'src/global/global';
  import navbar from './Navbar';
  import { toggleClass } from '@/utils'
  export default {
    components: { navbar },
    data() {
      return {
        activeIndex: '1',
      }
    },
    methods: {
      theme() {
        
      }
    }
  } 
</script>