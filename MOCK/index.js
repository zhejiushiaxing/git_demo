import Mock from 'mockjs'

// console.log(Mock)
/* const data = Mock.mock({
  // 'string|4': '哎哟！'  //'string|1-4': '哎哟！' 随机生成一到4边
  // 生成随机字符串
  // String: '@cword(3,10)'
  // 生成指定长度的标题和句子 段落
  // title: '@ctitle(8)', // 标题
  // sentence: '@csentence(50)', // 句子
  // content: '@cparagraph()', // 段落
  // // id: '@increment(1)', // 自增id
  // name: '@cname()', // 姓名
  // idCard: '@id()', // 身份证 不能和id一起用
  // address: '@city(true)', // 地址 true 显示省份 不加只会返回城市
  // 'number|1-99': 1,
  // img_url: "@image('250X250','#FFA07A','#FFBBFF','png','坤坤')",
  // date: "@date('yyyy-MM-dd hh:mm:ss')",
}) */
// ‘name|+1’: number（属性值自动加 1，初始值为 number。）
// console.log(Mock)
const { newsList } = Mock.mock({
  'newsList|75': [
    {
      name: '@cword(2,4)',
      sex: '@cword(1)',
      class: '@cword(3,6)',
      active: "@cword(2,4)",
      date: '@date(yyyy-MM-dd)'
    }
  ]
})

// 根据url获取query参数
const getQuery = (url, name) => {
  const index = url.indexOf('?')
  if (index !== -1) {
    const queryStrArr = url.substr(index + 1).split('&')

    for (let i = 0; i < queryStrArr.length; i++) {
      const itemArr = queryStrArr[i].split('=')
      if (itemArr[0] === name) {
        return itemArr[1]
      }
    }
  }
}

// 定义获取新闻列表 加上params  /api/get/news?pageindex=1$pagesize=10
Mock.mock(/\/api\/get\/news/, 'get', (option) => {
  // console.log(option)
  // 获取传递的参数
  const pageindex = getQuery(option.url, 'pageindex')
  const pagesize = getQuery(option.url, 'pagesize')
  // console.log(pageindex, pagesize)
  const start = (pageindex - 1) * pagesize
  const end = (pageindex * pagesize) - 1
  const total = Math.ceil(newsList.length / pagesize)// 总页数 向上取整
  const List = pageindex > total ? [] : newsList.slice(start, end + 1)
  return {
    status: 200,
    message: '获取新闻列表成功',
    list: List,
    total: newsList.length
  }
})

// 添加新闻列表
Mock.mock('/api/add/news', 'post', (options) => {
  const body = JSON.parse(options.body)
  // console.log(body);
  newsList.push(
    Mock.mock({
      id: '@increment(1)',
      title: body.title,
      content: body.content,
      img_url: "@image('50*50','#FF83FA','#FCFCFC','png','mono')",
      add_time: '@date(yyyy-MM-dd hh:mm:ss)'
    })
  )
  return {
    status: 200,
    message: '添加成功'
  }
})

Mock.mock('/api/delete/news', 'post', (options) => {
  // console.log(body);
  const body = JSON.parse(options.body)
  const index = newsList.findIndex(item => {
    return item.id === body.id
  })
  newsList.splice(index, 1)
  return {
    status: 200,
    message: '删除成功'
  }
})

Mock.mock(/\/user/, 'get', (option) => {
  // console.log(option)
  // 获取传递的参数
  const pageindex = getQuery(option.url, 'pagenum')
  const pagesize = getQuery(option.url, 'pagesize')
  // console.log(pageindex, pagesize)
  const start = (pageindex - 1) * pagesize
  const end = (pageindex * pagesize) - 1
  const total = Math.ceil(newsList.length / pagesize)// 总页数 向上取整
  const List = pageindex > total ? [] : newsList.slice(start, end + 1)
  return {
    code: 0,
    message: '获取信息成功',
    data: List,
    total: newsList.length
  }
})

