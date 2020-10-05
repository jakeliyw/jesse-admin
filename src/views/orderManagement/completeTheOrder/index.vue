<template>
  <div class="content">
    <jc-title :titleLeft="titleLeft"></jc-title>
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
        <td>
          <el-steps :active="2" align-center class="font-style">
            <el-step title="步骤1" description="2020.6.20"></el-step>
            <el-step title="步骤2" description="2020.6.20"></el-step>
            <el-step title="步骤3" description="2020.6.20"></el-step>
            <el-step title="步骤4" description="2020.6.20"></el-step>
            <el-step title="步骤5" description="2020.6.20"></el-step>
            <el-step title="步骤6" description="2020.6.20"></el-step>
            <el-step title="步骤7" description="2020.6.20"></el-step>
          </el-steps>
        </td>
        <td>
          <el-button type="danger" size="mini" @click="detail(slotProps)">查看详情</el-button>
          <el-button type="info" size="mini">取消订单</el-button>
        </td>
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
  },
  methods: {
    detail (slotProps) {
      console.log(slotProps)
    }
  }
}
</script>

<style scoped lang="scss">
.content {
  @include bgColor;
}
</style>
