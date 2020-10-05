<template>
  <div class="content">
    <jc-title :titleLeft="titleLeft" :titleRight="titleRight"></jc-title>
    <jc-table
      :header="tableHeader"
      :tableData="tableList"
      height
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
    <jc-title titleLeft="正在生产订单-即时通讯论坛" class="table-margin"></jc-title>
    <div class="room">
      <div class="room-left">
        <div class="name-header">
          <img :src="require('@/assets/img/avatar/three.jpeg')" alt class="portrait">
          <span class="user-herder">{{userId}}</span>
        </div>
        <div class="users">当前群聊{{100}}人</div>
        <div class="name-bottom">
          <div class="state">
            <img :src="require('@/assets/img/avatar/three.jpeg')" alt class="portrait1">
            <span class="user-right">很多撒谎觉得撒谎的静安寺</span>
          </div>
        </div>
      </div>
      <div class="room-right">
        <span class="chatRoom">杰希聊天群({{1000}})人</span>
        <div class="chatContent">
          <div class="getInto">加入群聊</div>
          <div class="chatBox">
            <span class="date">2020-9-28</span>
            <div class="leave">小明离开了群聊</div>
            <div>
              <img src="" alt>
              <span class="msgContent"></span>
              <img src="" alt>
            </div>
            <!--      客户聊天信息-->
            <div>
              <img src="" alt class="avatar">
              <span class="username">dasd</span>
              <img src="" alt class="file">
              <span class="content">dsadsa</span>
            </div>
          </div>
        </div>
        <div class="sendMessage">
          <div class="icon">
            <span class="iconfont iconbiaoqing"></span>
            <!--          @blur元素失去焦点时-->
            <div class="emoji" tabindex="1">
            <span></span>
            </div>
            <label class="iconfont iconwenjian" for="file"></label>
            <input type="file" style="display:none" id="file" />
          </div>
          <textarea cols="80" rows="5"></textarea>
          <div class="btn">
            <button class="btn-send">发送(s)</button>
          </div>
        </div>
      </div>
    </div>
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
      titleLeft: '订单详情',
      titleRight: '订单号：JC-9527',
      userId: '', // 聊天室用户昵称
      // 表单头部
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
  mounted () {
    this.userId = this.$store.state.user.user.username
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/information/iconfont";

.content {
  @include bgColor;
}
.table-margin{
  margin-top: 20px;
}
.room {
  background-color: white;
  height: 656px;
  border: 1px solid $borderColor;
  display: flex;
  flex-direction: row;
  .room-left{
    background-color: #28282a;
    width: 250px;
    display: flex;
    flex-direction: column;
    .name-header{
      height: 60px;
      border-bottom: 1px solid #000;
      display: flex;
      justify-content: space-around;
      align-items: center;
      .portrait{
        @include portrait;
      }
      .user-herder{
        @include ellipsis;
        width: 150px;
        color: white;
      }
    }
    .users{
      height: 40px;
      border-bottom: 1px solid #000;
      padding-left: 10px;
      font-size: 14px;
      display: flex;
      align-items: center;
      color: white;
    }
    .name-bottom{
      display: flex;
      height: 556px;
      flex-direction: column;
      overflow-x: hidden;
      overflow-y: auto;
      flex: 1;
      .state{
        display: flex;
        align-items: center;
        justify-content: space-around;
        padding-top: 10px;
        .portrait1{
          @include portrait;
        }
        .user-right{
          width: 150px;
          color: white;
          @include ellipsis;
        }
      }
    }
  }
  .room-right{
    display: flex;
    flex-direction: column;
    width:1430px;
    .chatRoom{
      text-align: center;
      background-color: #F5F5F5;
      height: 40px;
      line-height: 40px;
      border-bottom: 1px solid rgba(100, 100, 100, 0.3);
    }
    .chatContent{
      height: 500px;
      background-color: #F5F5F5;
      display: flex;
      flex-direction: column;
      overflow: auto;
      .leave{
        text-align: center;
        margin: 10px 0;
        color: #dadada;
      }
      .getInto {
        text-align: center;
        margin: 10px 0;
        color: #dadada;
      }
      .chatBox{
        display: flex;
        flex-direction: column;
      }
      .date{
        color: #dadada;
        text-align: center;
      }
      .my-message{
        display: flex;
        justify-content: flex-end;
        margin-right: 10px;
        margin-top: 10px;
        margin-bottom: 10px;
        div {
          display: flex;
          position: relative;

          &::after {
            content: '';
            right: 38px;
            top: 15px;
            transform: translateY(-50%);
            position: absolute;
            border-left: 6px solid #9eea6a;
            border-top: 6px solid transparent;
            border-bottom: 6px solid transparent;
            border-right: 6px solid transparent;
          }

          .file {
            max-width: 330px;
            max-height: 170px;
            margin-right: 10px;
            cursor: pointer;
          }

          .avatar {
            width: 40px;
            height: 40px;
          }

          .msgContent {
            box-sizing: border-box;
            display: inline-block;
            border-radius: 5px;
            line-height: 32px;
            background-color: #9eea6a;
            color: #000;
            padding: 5px;
            margin-right: 10px;
            min-width: 40px;
            word-wrap:break-word;
            word-break:break-all;
          }
        }
      }
    }
    .sendMessage{
      background-color: white;
      height: 156px;
      display: flex;
      flex-direction: column;
      .icon {
        padding-left: 10px;
        padding-top: 10px;
        height: 30px;
        display: flex;
        align-items: center;
        .iconbiaoqing, .iconwenjian, {
          font-size: 20px;
          padding: 0 6px;
          cursor: pointer;
        }
        .icon-jietu {
          font-size: 23px !important;
        }
      }
      textarea {
        border: none;
        resize: none;
        outline: none;
        font-size: 15px;
        padding-left: 9px;
      }
     .btn{
       display: flex;
       flex-direction: row-reverse;
       height: 50px;
       .btn-send{
         width: 60px;
         height: 30px;
         margin-right: 10px;
         background-color: #f5f5f5;
         border: 1px solid #ccc;
       }
     }
    }
  }
}
</style>
