import axios from 'axios'
import Qs from 'qs'
import router from '../router'

const service = axios.create({
  // 默认地址
  baseURL: '',
  // 5秒延迟断开
  timeout: 5000
})

// 请求拦截
service.interceptors.request.use(config => {

})

// 响应拦截
service.interceptors.response.use(res => {
  // 后端接口，res规范设置状态码,统一全局返回
  if (res.status === 200) {
    return Promise.resolve(res)
  } else {
    return Promise.error(res)
  }
},
error => {
  if (error.res.status) {
    switch (error.response.status) {
      // 用户没有权限访问
      case 401:
        router.replace({
          path: '/login',
          query: {
            redirect: router.currentRoute.fullPath
          }
        })
        break
      case 403:
        this.$message.error('登录过期，请重新登录')
        // 清除token
        /* 待写内容 */
        setTimeout(() => {
          router.replace({
            path: '/login',
            query: {
              redirect: router.currentRoute.fullPath
            }
          })
        }, 1000)
        break
      case 404:
        this.$message.error('404错误')
        break
      case 500:
        this.$message.error('服务器错误')
        break
      default:
        this.$message.error(error.response.data.message)
    }
    return Promise.reject(error.response)
  }
}
)

// GET方法
export function get (url, params) {
  return new Promise((resolve, reject) => {
    service.get(url, {
      params
    }).then(res => {
      resolve(res.data)
    }).catch(err => {
      reject(err.data)
    })
  })
}

// POST方法
export function post (url, params) {
  return new Promise((resolve, reject) => {
    // 序列化
    service.post(url, Qs.stringify(params)).then(res => {
      resolve(res.data)
    }).catch(err => {
      reject(err.data)
    })
  })
}
