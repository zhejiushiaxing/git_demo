<template>
  <div class="top-bar">
    <!-- logo区域 -->
    <div class="left-menu">
      <div class="logo center">
        <div class="info"> Study<i class="el-icon-share"></i></div>
      </div>
      <div class="between">
        <div
          :class="path=='/dashboard'?'active item':'item'"
          @click="switchPages('dashboard')"
        >学习行为分析</div>
        <div
          :class="path=='/subjectManagement'?'active item':'item' "
          @click="switchPages('subjectManagement')"
        >课程管理</div>
      </div>
    </div>
    <!-- 左菜单区域 -->
    <div class="right-menu center">
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
            class="el-icon-caret-bottom center"
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
  </div>
</template>

<script>
export default {
  name: 'topbar',
  computed: {
    path () {
      return this.$route.path
    }
  },
  methods: {
    switchPages (url) {
      this.$router.push({
        path: `/${url}`
      }).catch(err => { return err })
    }
  }
}
</script>

<style lang="less" scoped>
.active {
  color: #0d9ddb;
}
.top-bar {
  width: 100%;
  min-height: 8vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
  z-index: 5;
  .left-menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 2%;
    width: 20%;
    .logo {
      height: 100%;
      font-size: 25px;
      color: #0d9ddb;
      overflow: hidden;
      margin-right: 20%;
    }
    .between {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 15px;
      .item {
        flex: 1;
        margin-left: 20%;
      }
      .item:hover {
        color: #0d9ddb;
      }
    }
  }
  .right-menu {
    height: 100%;
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
      }
    }
  }
}
</style>