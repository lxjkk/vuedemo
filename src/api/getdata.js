import request from '@/utils/request'
export function User_info() {
    return request({
        url: '/test/info',
        method: 'get',
    })
}

export function home_info() {
    return request({
        url: '/home/info',
        method: 'get',
    })
}

export function blog_content(data) {
    return request({
        url: '/blog/content',
        method: 'post',
        data
    })
}