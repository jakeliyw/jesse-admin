<template>
  <div class="login-container">
    <div class="login-form">
      <span class="logo">杰希集团管理系统</span>
      <el-form ref="form" label-width="80px" class="form-content">
        <el-input class="input-style" placeholder="请输入账号" v-model="username">
          <i slot="prefix" class="el-input__icon el-icon-user-solid"></i>
        </el-input>
        <el-input class="input-style" placeholder="请选择密码" :type="passWord" v-model="password">
          <i slot="prefix" class="el-input__icon el-icon-s-cooperation"></i>
          <i slot="suffix" :class="icon" @click="showPass"></i>
        </el-input>
        <el-button type="primary" class="btn-login">登录</el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      username: '',
      password: '',
      // 用于更换Input中的图标
      icon: 'el-input__icon el-icon-view',
      passWord: 'password'
    }
  },
  methods: {
    showPass () {
      if (this.passWord === 'text') {
        this.passWord = 'password'
        // 更换图标
        this.icon = 'el-input__icon el-icon-view'
      } else {
        this.passWord = 'text'
        this.icon = 'el-input__icon el-icon-loading'
      }
    }
  }
}
</script>

<style scoped lang="scss">
.login-container {
  min-height: 100vh;
  width: 100%;
  background-color: #2d3a4b;
  overflow: hidden;
  display: flex;
  justify-content: center;

  .login-form {
    width: 520px;
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .logo {
    font-size: 26px;
    color: #eee;
    margin: 0px auto 40px auto;
    text-align: center;
    font-weight: bold;
  }

  .form-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .input-style ::v-deep .el-input__inner {
    height: 48px;
    width: 448px;
    margin-bottom: 20px;
  }

  .el-input__icon {
    height: 48px;
    line-height: 48px;
  }

  .btn-login {
    width: 448px;
  }
}
</style>
