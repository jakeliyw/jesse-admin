<template>
  <div>
    <table border="1">
      <!--      表头-->
      <thead>
      <tr v-for="item in Commodity" :key="item.name">
        <th>{{item.name}}</th>
        <th>{{item.age}}</th>
        <th>{{item.birth}}</th>
        <th>{{item.iphone}}</th>
        <th>{{item.company}}</th>
      </tr>
      </thead>
      <!--      内容区域-->
    </table>
    <div  style="overflow: auto; height: 150px">
      <table border="1" style="background-color: white;white-space: nowrap">
        <tbody>
        <tr>
          <td>
            dsad111111111111
          </td>
          <td>
            <el-steps :active="2" align-center>
              <el-step title="步骤1" description="这是一段很长很长很长的描述性文字"></el-step>
              <el-step title="步骤2" description="这是一段很长很长很长的描述性文字"></el-step>
              <el-step title="步骤3" description="这是一段很长很长很长的描述性文字"></el-step>
              <el-step title="步骤4" description="这是一段很长很长很长的描述性文字"></el-step>
              <el-step title="步骤2" description="这是一段很长很长很长的描述性文字"></el-step>
              <el-step title="步骤3" description="这是一段很长很长很长的描述性文字"></el-step>
              <el-step title="步骤4" description="这是一段很长很长很长的描述性文字"></el-step>
            </el-steps>
            <!--          <img :src="require('@/assets/img/logo.png')" alt="" class="commodity">-->
          </td>
          <td>1990-9-9</td>
          <td>13682299090</td>
          <td>杰希科技</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      Commodity: [
        { name: '姓名', age: '年龄', birth: '出生年月', iphone: '手机号码', company: '单位' }
      ]
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
  border: 1px solid #ececec;
}
td {
  white-space: nowrap;
}
.commodity{
  width: 100px;
  height: 100px;
}

</style>
