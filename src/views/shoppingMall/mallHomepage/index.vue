<template>
  <div class="content">
    <jc-title :titleLeft="titleLeft" :title-right="titleRight"></jc-title>
    <jc-table></jc-table>
  </div>
</template>

<script>
import jcTitle from '@/components/title'
import jcTable from '@/components/table'
export default {
  name: 'index',
  components: {
    jcTitle,
    jcTable
  },
  data () {
    return {
      titleLeft: '售后订单',
      titleRight: ''
    }
  }
}
</script>

<style scoped lang="scss">
.content{
  @include bgColor;
}
</style>
