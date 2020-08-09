import axios from 'axios'
// import Qs from 'qs'
import { Message } from 'element-ui'
let baseUrl = 'http://192.168.3.135/api'
if(process.env.NODE_ENV === 'development') {
    baseUrl = 'http://localhost:8081/api'
    console.log('测试环境')
} else {
    baseUrl = 'http://www.lxjkk.icu:3000/api'
    console.log('生产环境')

}
const api_Server = axios.create({
    baseURL: baseUrl,
    timeout: 5000,
    headers: {
        'Accept': 'application/json'
    }
})

api_Server.interceptors.request.use(config => {
    if(localStorage.getItem('token')){
        config.headers['token'] = localStorage.getItem('token')
    }
    return config
},err=>{
    localStorage.removeItem('token')
    return Promise.reject(err)
})

api_Server.interceptors.response.use(response => {
    const res = response.data
    if(res.code !== 0) {
        // console.log(res,'底层返回错误')
        Message({
            message: res.msg,
            type: 'error'
        })
        localStorage.removeItem('token')
        const error = new Error(res.msg || 'Error')
        error.res_data = res
        return Promise.reject(error)
    }
    return Promise.resolve(res)
},err=> {
    console.log(err)
    if(err.response && err.response.status === 422) {
        // console.log(err.response.status, '请求格式错误！')
        Message({
            message: '请求格式不正确'+ err.response.status,
            type: 'error'
        })
        return Promise.reject(err)
    }
    
   
})

export default api_Server