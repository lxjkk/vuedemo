import request from '@/utils/request'
export function User_info() {
    return request({
        url: '/test/info',
        method: 'get',
    })
}