<template>
  <div class="home">
    <el-container>
      <el-header height="50px">
        <img :src="require('@/assets/logo/logo.png')" alt="logo" class="logo">
        <div class="information">
          <img :src="require('@/assets/headPortrait/headPortrait.jpg')" alt="headPortrait" class="headPortrait">
          <i class="iconfont iconxiaoxi"></i>
          <i class="iconfont iconyouxiang"></i>
        </div>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            background-color="#484443"
            text-color="#fff"
            active-text-color="#ffd04b">
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title">个人中心</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <span slot="title">权限管理</span>
            </el-menu-item>
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>订单管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="1-1">已完成订单</el-menu-item>
                <el-menu-item index="1-2">售后订单</el-menu-item>
                <el-menu-item index="1-3">还未处理订单</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="1-4">
                <template slot="title">正在生成订单</template>
                <el-menu-item index="1-4-1">打样订单</el-menu-item>
                <el-menu-item index="1-4-2">正在生产订单</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>销售管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="1-1">未发货销售</el-menu-item>
                <el-menu-item index="1-2">已发货销售</el-menu-item>
                <el-menu-item index="1-3">销售排行榜</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>客户管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="1-1">新建客户</el-menu-item>
                <el-menu-item index="1-2">客户档案</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="4">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>商城</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="1-1">商城首页</el-menu-item>
                <el-menu-item index="1-2">产品类别</el-menu-item>
                <el-menu-item index="1-3">购物车</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
>>>>>>> dev
  </div>
</template>

<script>

export default {
  name: 'Home'
}
</script>

<style lang="scss" scoped>
@import "../assets/iconfont/iconfont";
.el-header{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.logo{
  width: 4%;
}
.el-container {
  height: 100%;
}
.el-aside {
  background-color: #484443;
  height: 100vh;
}
.information{
  display: flex;
  flex-direction: row-reverse;
  .iconfont {
    color: #999;
    font-size: 20px;
  }
  .headPortrait{
    width: 5%;
    border-radius: 50%;
  }
}
.el-menu {
  border-right: none;
}
</style>
