import request from '@/utils/request'
export function login(data) {
    return request({
        url: '/test/login',
        method: 'post',
        data:data
    })
}