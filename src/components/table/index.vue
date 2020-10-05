<template>
  <div>
    <div class="btn" :class="['btn',{'is-height':height}]">
      <table class="content" border="1">
        <!--      表头-->
        <thead>
        <tr>
          <th v-for="(item,index) in cpTableHeader" :key="index">{{ item.label }}</th>
        </tr>
        </thead>
        <!--      内容区域-->
        <tbody>
        <tr v-for="(tableData,index) in tableData" :key="index">
          <slot :slotData="tableData">
          </slot>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  props: {
    header: { // 表格头部数据
      type: Array,
      required: true
    },
    tableData: {
      type: Array,
      require: true
    },
    height: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      cpTableHeader: []
    }
  },
  watch: {
    header: {
      handler (val) {
        this.cpTableHeader = val
      },
      immediate: true,
      deep: true
    }
  }
}
</script>

<style scoped lang="scss">
table {
  /*设置相邻单元格的边框间的距离*/
  width: 100%;
  border-spacing: 0;
  /*表格设置合并边框模型*/
  border-collapse: collapse;
  background-color: white;
  text-align: center;
  border: 1px solid $borderColor;
}

.content {
  white-space: nowrap;
}

.commodity {
  width: 100px;
  height: 100px;
}
.btn{
  overflow: auto;
}
.btn.is-height{
  height: 150px;
}
</style>
