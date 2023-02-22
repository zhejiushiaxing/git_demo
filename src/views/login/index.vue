<template>
  <!-- 登录页面的整体盒子 -->
  <div class="container ">
    <!-- 登录的盒子 -->
    <div class="login-box">
      <!-- 标题的盒子 -->
      <div class="title-box">welcom to Study</div>
      <!-- 登录的表单区域 -->
      <el-form
        :model="loginForm"
        :rules="loginRules"
        ref="loginRef"
        class="form-box"
      >
        <!-- 用户名 -->
        <el-form-item prop="username">
          <el-input
            v-model="loginForm.username"
            placeholder="请输入用户名"
            prefix-icon="el-icon-user-solid"
          ></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop="password">
          <el-input
            v-model="loginForm.password"
            prefix-icon="el-icon-lock"
            type="password"
            placeholder="请输入密码"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            class="btn-login"
            @click="loginFn"
          >登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
// import { loginAPI } from '@/api'
import { mapMutations } from 'vuex'

export default {
  name: 'my-login',
  data () {
    return {
      // 登录表单的数据对象
      loginForm: {
        username: '',
        password: ''
      },
      // 登录表单的验证规则对象
      loginRules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { pattern: /^[a-zA-Z0-9]{1,10}$/, message: '用户名必须是1-10的字母数字', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { pattern: /^\S{5,12}$/, message: '密码必须是5-12的非空字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    ...mapMutations(['updateToken']),
    loginFn () {
      this.$refs.loginRef.validate(async valid => {
        if (valid) {
          if (this.loginForm.username == 'jxust' && this.loginForm.password == 'jxust') {
            this.$message.success('登入成功')
            this.updateToken('jxust')
            this.$router.push('/')
          } else {
            return this.$message.error('登入失败')
          }
        } else {
          return false // 阻止默认提交行为(表单下面红色提示会自动出现)
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.container {
  background: url(../../assets/bg2.jpg) center;
  background-size: cover;
  min-width: 100%;
  min-height: 100vh;
  .login-box {
    width: 25%;
    height: 35%;
    overflow: hidden;
    border-radius: 3px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding: 0 30px;
    box-sizing: border-box;
    background-color: #fff;
    box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
    .title-box {
      margin-top: 10%;
      height: 20%;
      text-align: center;
      color: #181e33;
      font-size: 20px;
    }
    .btn-login {
      width: 100%;
    }
  }
}
</style>
