
// 基于axios封装网络请求的函数
import axios from 'axios'
// 会拼接在基地址后面
const myAxios = axios.create({
  baseURL: 'http://127.0.0.1:3007', // 基地址
  // headers: { 'Content-type': 'application/x-www-form-urlencoded' }
  headers: { 'Content-Type': 'application/json;charset=UTF-8' }
})
// 导出axios自定义函数
export default myAxios
