<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
	/*全局覆盖默认的loading样式*/
	.el-loading-mask{
		background: rgba(0,0,0,.5);
	}
</style>
