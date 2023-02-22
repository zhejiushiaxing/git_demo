<template>
  <div>
    <!-- 列表区域 -->
    <el-table
      :data="List"
      style="width: 100%;"
      border
      stripe
    >
      <el-table-column
        label="姓名"
        prop="name"
      >
        <template v-slot="scope">
          <el-link type='primary'>{{scope.row.name}}</el-link>
        </template>
      </el-table-column>
      <el-table-column
        label="性别"
        prop="sex"
      ></el-table-column>
      <el-table-column
        label="课程"
        prop="class"
      >
      </el-table-column>
      <el-table-column
        label="行为"
        prop="active"
      >
      </el-table-column>

      <el-table-column
        label="时间"
        prop="date"
      ></el-table-column>
    </el-table>
    <!-- 分页区域 -->
    <el-pagination
      @size-change="handleSizeChangeFn"
      @current-change="handleCurrentChangeFn"
      :current-page.sync="q.pagenum"
      :page-sizes="[2, 3, 5, 10]"
      :page-size.sync="q.pagesize"
      layout="total, sizes, prev, pager, next, jumper"
    >
    </el-pagination>
  </div>
</template>

<script>
import { searchAPI } from '@/api'
export default {
  data () {
    return {
      // 查询参数对象
      data: '',
      q: {
        pagenum: 1, // 默认拿第一页数据
        pagesize: 10, // 默认当前页需要几条数据 
      },
      List: [],
      total: 0, // 总数据条数
    }
  },
  created () {
    this.data = this.$route.query.data
    this.searchHandle()
  },
  methods: {
    //  初始化学生信息列表
    async searchHandle () {
      const { data: res } = await searchAPI({ data: this.data, ...this.q })
      console.log(res);
      if (res.code !== 0) return this.$message.error('获取信息失败!')
      this.List = res.data
    },
    // 分页 每页条数改变时触发
    handleSizeChangeFn (sizes) {
      this.q.pagenum = 1
      this.searchHandle()
    },
    // 当前页码改变时触发
    handleCurrentChangeFn (nowPage) {
      // 当前要看的第几页的页数
      this.searchHandle()
    },
  }
}
</script>
  
<style>
</style>