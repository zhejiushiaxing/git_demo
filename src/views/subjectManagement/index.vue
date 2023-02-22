<template>
  <div class="app-wrapper">
    <div class="main">
      <!-- 筛选区域 -->
      <div class="select ">
        <!-- 标题 -->
        <div class="title">
          课程管理
        </div>
        <div class="info">
          <!-- 学期选择 -->
          <template class="item">
            <el-select
              v-model="selectValue"
              :placeholder="options[0].value"
            >
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.value"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </template>
          <!-- 搜索框区域 -->
          <div class="search item">
            <el-input
              placeholder="搜索"
              prefix-icon="el-icon-search"
              v-model="searchData"
              @change="searchHandle()"
            >
            </el-input>
          </div>
        </div>

      </div>
      <!-- 课程管理区域 -->
      <div class="manage">
        <div class="title">可切换学期筛选课程或查看全部课程</div>
        <el-row :gutter="24">
          <el-col
            :span="6"
            v-for="(o) in 7"
            :key="o"
          >
            <el-card
              :body-style="{ padding: '0px' }"
              class="card-item"
            >
              <img
                src="@/assets/book.png"
                class="image"
              >
              <div style="padding: 14px;">
                <span>大学物理</span>
                <div class="bottom">
                  <div class="time">开课时间</div>
                  <div class="time">兰红</div>
                  <div class="time">课程编号</div>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      searchData: '',
      switchValue: true,
      options: [{
        value: '2022-2023第二学期',
      }, {
        value: '2022-2023第一学期',
      }, {
        value: '2021-2022第二学期',
      }, {
        value: '2021-2022第一学期',
      }, {
        value: '2020-2021第二学期',
      }, {
        value: '全部课程',
      }],
      selectValue: ''
    }
  },
  methods: {
    searchHandle () {
      this.$router.push({
        path: '/user',
        query: {
          data: this.searchData
        }
      }).catch(err => { return err })
    }
  }
}
</script>
<style lang="scss" scoped>
.app-wrapper {
  width: 100%;
  .main {
    margin-top: 1%;
    height: 95%;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center; //定义项目在交叉轴上如何对齐
    .select {
      width: 95%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .title {
        color: #409eff;
        font-size: 20px;
      }
      .item {
        margin-right: 3%;
      }
      .info {
        display: flex;
        justify-content: center;
      }
      .el-select {
        margin-right: 2%;
        ::v-deep input::-webkit-input-placeholder {
          color: rgba(117, 117, 117, 1);
        }
      }
      //修改单个的选项的样式
      /deep/ .el-select-dropdown__item {
        background-color: transparent;
        color: rgba(117, 117, 117, 1);
      }
    }
    .manage {
      width: 95%;
      margin-top: 1%;
      .title {
        right: 1%;
        color: #7a7a7a;
        margin-bottom: 1%;
      }
      .card-item {
        margin-bottom: 10%;
        .time {
          font-size: 13px;
          color: #999;
          margin-bottom: 10px;
        }
        span {
          font-size: 20px;
        }

        .bottom {
          margin-top: 13px;
          line-height: 12px;
        }

        .image {
          width: 100%;
          height: 200px;
          overflow: hidden;
          display: block;
          object-fit: cover;
        }
      }
    }
  }
}
</style>