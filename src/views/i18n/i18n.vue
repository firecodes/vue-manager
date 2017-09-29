<template>
  <div>
      <div>
        <el-tag>{{ $t('message.hello') }}</el-tag>
      </div>
        <p>{{ $i18n.locale }}</p>
  </div>
</template>
<script>
  export default {
    data() {
      return {
      }
    }
  }
</script>