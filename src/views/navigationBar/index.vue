<template>
    <el-container class="home-container">
      <el-header height="50px">
        <img :src="require('@/assets/img/logo.png')" alt="logo" class="logo">
        <div class="information">
          <i class="iconfont iconxiaoxi"></i>
          <i class="iconfont iconyouxiang"></i>
          <img :src="require('@/assets/img/headPortrait.jpg')" alt="头像" class="headPortrait">
          <span class="name">ID: 9527</span>
        </div>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu
            :default-active="this.$router.path"
            class="el-menu-vertical-demo"
            background-color="#484443"
            text-color="#fff"
            active-text-color="#ffd04b"
            router
          >
<!--            一级菜单-->
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-s-home"></i>
                <span>商城</span>
              </template>
<!--              二级菜单-->
              <el-menu-item-group>
                <el-menu-item index="/mallHomepage">商城首页</el-menu-item>
                <el-menu-item index="/productCategory">产品类别</el-menu-item>
                <el-menu-item index="/shoppingCart">购物车</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="4">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>订单管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/completeTheOrder">已完成订单</el-menu-item>
                <el-menu-item index="/afterSaleOrder">售后订单</el-menu-item>
                <el-menu-item index="/outstandingOrders">还未处理订单</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="1-4">
                <template slot="title">正在生成订单</template>
                <el-menu-item index="/ordersInProduction">打样订单</el-menu-item>
                <el-menu-item index="/proofingOrder">正在生产订单</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-submenu index="5">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>销售管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/unsoldSales">未发货销售</el-menu-item>
                <el-menu-item index="/deliveredSales">已发货销售</el-menu-item>
                <el-menu-item index="/salesLeaderboard">销售排行榜</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="6">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>客户管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/createCustomer">新建客户</el-menu-item>
                <el-menu-item index="/customerArchives">客户档案</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <!--            一级菜单-->
            <el-menu-item index="/personalCenter">
              <i class="el-icon-menu"></i>
              <span slot="title">个人中心</span>
            </el-menu-item>
            <el-menu-item index="/jurisdiction">
              <i class="el-icon-setting"></i>
              <span slot="title">权限管理</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
</template>

<script>

export default {
  name: 'Home'
}
</script>

<style lang="scss" scoped>
@import "../../assets/iconfont/iconfont";
.el-header{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.logo{
  width: 60px;
}
.el-container {
  height: 100%;
}
.home-container{
  height: 100vh;
}
.el-aside {
  background-color: #484443;
}
.information{
  display: flex;
  flex-direction: row;
  align-items: center;
  .iconfont {
    color: #999;
    font-size: 20px;
    margin-right: 20px;
  }
  .headPortrait{
    width: 30px;
    border-radius: 50%;
    margin-right: 10px;
  }
  .name{
    font-family: 微软雅黑;
    color: #666;
  }
}
.el-menu {
  border-right: none;
}
.el-main {
  padding: 0 20px 20px 20px;
}
</style>
