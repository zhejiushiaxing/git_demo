<template>
  <div class="app-wrapper">

    <div class="navbar">
      <!-- logo区域 -->
      <div class="logo">
        <div class="info"> Study<i class="el-icon-share"></i></div>
      </div>
      <div class="info">
        <h5 class="subject"> <i class="el-icon-notebook-1"></i>大学物理 </h5>
        <h5
          class="class"
          v-if="model"
        >当前班级：计算机222班 <i class="el-icon-right"></i></h5>
      </div>
      <!-- 导航栏区域 -->
      <div>
        <el-menu
          default-active="1"
          class="el-menu"
          background-color="#fff"
          text-color="#000"
          active-text-color="#fff"
        >
          <el-menu-item index="1">
            <i class="el-icon-menu"></i>
            <span slot="title">班级详情</span>
          </el-menu-item>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">学习行为分析</span>
          </el-menu-item>
        </el-menu>
      </div>
      <!-- 返回班级选择区域 -->
      <div
        class="bottom"
        v-show="model"
      >

        <el-button
          size="small"
          type="info"
          style="width:80%; margin-bottom: 20px;"
          @click="backClassHandle"
        >返回班级分类</el-button>
      </div>
      <!-- 返回课程选择区域 -->
      <div
        class="bottom"
        v-if="!model"
      >
        <el-button
          size="small"
          type="info"
          style="width:80%; margin-bottom: 20px;"
          @click="backSubjectHandle"
        >返回课程详情</el-button>
      </div>
    </div>

    <div class="app-main">
      <!-- 顶部区域 -->
      <div class="top">
        <!-- 左菜单区域 -->
        <div class="right-menu">
          <el-dropdown
            class="avatar-container"
            trigger="click"
          >
            <div class="avatar-wrapper">
              <img
                src="@/assets/head.jpg"
                class="user-avatar"
              >
              <span class="name">管理员</span>
              <i
                class="el-icon-caret-bottom"
                style="color: #000"
              />
            </div>
            <el-dropdown-menu
              slot="dropdown"
              class="user-dropdown"
            >
              <router-link to="/">
                <el-dropdown-item> 首页 </el-dropdown-item>
              </router-link>
              <el-dropdown-item
                divided
                @click.native="logout"
              >
                <span style="display: block">退出登录</span>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>

        <!-- 搜索框区域 -->
        <div class="search">
          <el-input
            placeholder="搜索学生信息"
            prefix-icon="el-icon-search"
            v-model="searchData"
            @change="searchHandle()"
          >
          </el-input>
        </div>
      </div>

      <!-- 路由挂载区域 -->
      <transition
        name="fade-transform"
        mode="out-in"
      >
        <router-view :key="key" />
      </transition>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {

  name: 'Layout',
  computed: {
    key () {
      return this.$route.path
    },
    title () {
      return this.$route.meta.title
    },
    model () {
      return this.$route.query.model == 'class' ? true : false
    }
  },
  data () {
    return {
      searchData: '',
      switchValue: true,
    }
  },
  methods: {
    ...mapMutations(['updateToken']),
    backSubjectHandle () {
      this.$router.push({
        path: '/',
      }).catch(err => { return err })
    },
    backClassHandle () {
      this.$router.push({
        path: '/subject',
        query: { model: 'subject' }
      }).catch(err => { return err })
    },
    searchHandle () {
      this.$router.push({
        path: '/user',
        query: {
          data: this.searchData
        }
      }).catch(err => { return err })
    },
    // 退出登录
    async logout () {
      this.$confirm('你确定要离开吗?, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(async () => {
        // 使用 dispath 调用退出登录的方法
        // 其实action无论有么有async, 返回的都是一个Promise对象(vuex内部设置)
        // await等待退出流程代码走完
        await this.updateToken('')

        // 跳转到登录页面
        this.$router.replace(`/login`)

        // 退出成功后的提示
        this.$message.success('退出成功!')
      }).catch(() => {
        // 取消退出提示
        this.$message.info('已取消退出')
      })
    }
  }
}
</script>

<style  lang="less" scoped >
.el-menu-item.is-active {
  background-color: #1b1d84 !important;
}

.app-wrapper {
  display: flex;
}
.navbar {
  position: relative;
  height: 50px;
  line-height: 50px;
  min-width: 25vh;
  min-height: 100vh;
  box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
  .logo {
    font-size: 25px;
    color: #0d9ddb;
    box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
    overflow: hidden;
    .info {
      margin-left: 10%;
    }
  }
  .info {
    width: 100%;
    height: 15%;
    box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
    overflow: hidden;
    .subject {
      margin-top: 15%;
      margin-left: 10%;
      font-size: 20px;
      color: #1b1d84;
      width: 80%;
    }
    .class {
      margin-left: 10%;
      font-size: 10px;
      color: #222;
      width: 80%;
    }
    background-color: #fff;
  }
  .el-menu {
    margin-top: 30px;
  }
  .bottom {
    position: absolute;
    width: 100%;
    bottom: 0px;
    font-size: 15px;
    display: flex;
    justify-content: center;
    box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
    .change {
      height: 40px;
      box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
    }
  }
}
.app-main {
  width: 100%;
  min-height: 100vh;
  background-color: #f8f7fc;
  display: flex;
  flex-direction: column;
  .top {
    width: 100%;
    height: 50px;
    line-height: 50px;
    box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
    background-color: #fff;
    .logout {
      float: right;
    }
    .search {
      float: right;
      margin-right: 20px;
    }
  }
}

.right-menu {
  float: right;
  height: 100%;
  line-height: 50px;

  &:focus {
    outline: none;
  }

  .right-menu-item {
    display: inline-block;
    padding: 0 8px;
    height: 100%;
    font-size: 18px;
    color: #5a5e66;
    vertical-align: text-bottom;

    &.hover-effect {
      cursor: pointer;
      transition: background 0.3s;

      &:hover {
        background: rgba(0, 0, 0, 0.025);
      }
    }
  }

  .avatar-container {
    margin-right: 30px;

    .avatar-wrapper {
      // margin-top: 5px;
      position: relative;

      // 头像
      .user-avatar {
        cursor: pointer;
        width: 30px;
        height: 30px;
        border-radius: 15px;
        vertical-align: middle;
        margin-right: 10px;
      }

      // name
      .name {
        color: #000;
        vertical-align: middle;
        margin-left: 5px;
      }

      .user-dropdown {
        color: #fff;
      }

      // 下拉 icon 图标位置
      .el-icon-caret-bottom {
        cursor: pointer;
        position: absolute;
        right: -20px;
        top: 20px;
        font-size: 12px;
      }
    }
  }
}
</style>

