<template>
  <div class="content">
    <jc-title :titleLeft="titleLeft" :title-right="titleRight"></jc-title>
    <jc-table
      :header="tableHeader"
      :tableData="tableList"
    >
      <template v-slot="slotProps">
        <td>
          {{ slotProps.slotData.id }}
        </td>
        <td>
          {{ slotProps.slotData.orderNumber }}
        </td>
        <td>
          {{ slotProps.slotData.placeAnOrder }}
        </td>
        <td>
          {{ slotProps.slotData.deliveryDate }}
        </td>
      </template>
      <template v-slot:steps>
        <el-steps :active="2" align-center class="font-style">
          <el-step title="步骤1" description="2020.6.20"></el-step>
          <el-step title="步骤2" description="2020.6.20"></el-step>
          <el-step title="步骤3" description="2020.6.20"></el-step>
          <el-step title="步骤4" description="2020.6.20"></el-step>
          <el-step title="步骤5" description="2020.6.20"></el-step>
          <el-step title="步骤6" description="2020.6.20"></el-step>
          <el-step title="步骤7" description="2020.6.20"></el-step>
        </el-steps>
      </template>
      <template v-slot:button>
        <el-button type="primary" size="mini">点我</el-button>
        <el-button type="info" size="mini">确定</el-button>
      </template>
    </jc-table>
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
      titleRight: '',
      // '序号', '订单号', '下单时间', '预计交货期', '订单状态', '操作'
      tableHeader: [
        { label: '序号' },
        { label: '订单号' },
        { label: '下单时间' },
        { label: '预计交货期' },
        { label: '订单状态' },
        { label: '操作' }
      ],
      tableList: [
        {
          id: 1,
          orderNumber: '9999',
          placeAnOrder: '2020.6.20',
          deliveryDate: '2020.8.20'
        },
        {
          id: 2,
          orderNumber: '13213',
          placeAnOrder: '2020.6.20',
          deliveryDate: '2020.8.20'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.content {
  @include bgColor;
}

.font-style ::v-deep .el-step__title {
  font-size: 12px;
}
</style>
