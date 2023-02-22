<template>
  <div class="app-wrapper">
    <div class="main">
      <div class="title">班级列表</div>
      <el-row :gutter="24">
        <el-col
          :span="8"
          v-for="(o) in 3"
          :key="o"
        >
          <el-card
            :body-style="{ padding: '0px' }"
            shadow="hover"
          >
            <div style="padding: 14px;">
              <el-descriptions
                class="margin-top"
                title="班级信息"
                :column="2"
                border
              >
                <template slot="extra">
                  <el-button
                    type="primary"
                    size="small"
                    @click="classHandle"
                  >管理</el-button>
                </template>
                <el-descriptions-item>
                  <template slot="label">
                    <i class="el-icon-user"></i>
                    教师
                  </template>
                  kooriookami
                </el-descriptions-item>
                <el-descriptions-item>
                  <template slot="label">
                    <i class="el-icon-mobile-phone"></i>
                    班级
                  </template>
                  计算机222
                </el-descriptions-item>
                <el-descriptions-item>
                  <template slot="label">
                    <i class="el-icon-location-outline"></i>
                    学生总数
                  </template>
                  43
                </el-descriptions-item>
                <el-descriptions-item>
                  <template slot="label">
                    <i class="el-icon-tickets"></i>
                    备注
                  </template>
                  <el-tag size="small">大学物理</el-tag>
                </el-descriptions-item>
                <el-descriptions-item>
                  <template slot="label">
                    <i class="el-icon-tickets"></i>
                    开班时间
                  </template>
                  2022-9-1
                </el-descriptions-item>
                <el-descriptions-item>
                  <template slot="label">
                    <i class="el-icon-tickets"></i>
                    结课时间
                  </template>
                  2022-12-23
                </el-descriptions-item>
              </el-descriptions>
            </div>
          </el-card>
        </el-col>
      </el-row>

    </div>
  </div>
</template>

<script>
export default {
  methods: {
    classHandle () {
      this.$router.push({
        path: '/class',
        query: {
          model: 'class'
        }
      }).catch(err => { return err })
    }
  }
}
</script>

<style lang="less" scoped>
.app-wrapper {
  height: 100%;
  display: flex;
  flex-direction: column; //主轴的方向，如果内部只有一个元素，那么这个值可以任意取（默认为row）
  align-items: center; //定义项目在交叉轴上如何对齐
  justify-content: center;
  .title {
    font-size: 20px;
    color: #1b1d84;
    margin-bottom: 2%;
  }
  .main {
    height: 98%;
    width: 98%;
    background-color: #fff;
    box-shadow: 0 5px 5px rgb(0 21 41 / 8%);
  }
}
</style>