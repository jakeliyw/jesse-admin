<template>
  <div class="login-container">
    <div class="login-form">
<!--      logo名称-->
      <span class="logo">杰希集团管理系统</span>
<!--      表单验证区域-->
      <el-form ref="form" label-width="80px" class="form-content" :model="loginForm" :rules="rules">
        <el-form-item prop="userName" label-width="0">
          <el-input class="input-style" placeholder="请输入账号" v-model="loginForm.userName">
            <i slot="prefix" class="el-input__icon el-icon-user-solid"></i>
          </el-input>
        </el-form-item>
        <el-form-item label-width="0" prop="passWord">
          <el-input class="input-style" placeholder="请选择密码" v-model="loginForm.passWord" autocomplete="off" :type="passWord">
            <i slot="prefix" class="el-input__icon el-icon-s-cooperation"></i>
            <i slot="suffix" :class="icon" @click="showPass"></i>
          </el-input>
        </el-form-item>
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
      // 双向绑定账号和密码
      loginForm: {
        userName: '',
        passWord: ''
      },
      // 密码黑色圈圈隐藏
      passWord: 'password',
      // 用于更换Input中的图标
      icon: 'el-input__icon el-icon-view',
      // 限制条件
      rules: {
        userName: [
          {
            required: true,
            message: '请输入账号',
            trigger: 'blur'
          },
          {
            min: 3,
            max: 6,
            message: '长度在 3 到 6 个字符',
            trigger: 'blur'
          }
        ],
        passWord: [
          {
            required: true,
            message: '请输入密码',
            trigger: 'blur'
          },
          {
            min: 6,
            max: 10,
            message: '长度在 6 到 10 个字符',
            trigger: 'blur'
          }
        ]
      }
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
  display: flex;
  justify-content: center;

  .login-form {
    height: 500px;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  .logo {
    font-size: 26px;
    color: #3c3f41;
    margin: 0px auto 40px auto;
    text-align: center;
    font-weight: bold;
  }

  .input-style ::v-deep .el-input__inner {
    height: 48px;
    width: 448px;
    margin-bottom: 10px;
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
