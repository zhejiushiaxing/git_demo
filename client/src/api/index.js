
import request from '@/utils/request'

// 登入
// export const loginAPI = ({ username, password }) => {
//   return request({
//     url: '/api/login',
//     method: 'POST',
//     /*     data: qs.stringify({
//       username,
//       password
//     }) */
//     data: {
//       username,
//       password
//     }
//   })
// }

//查询学生信息
export const searchAPI = (data) => {
  return request({
    url: '/user',
    method: 'GET',
    params: data
  })
}
