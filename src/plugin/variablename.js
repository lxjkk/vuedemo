export const ONLINE_TEST = {
    1: '在线',
    2: '离线',
    3: '未知'
}
const VueConsts = {}
VueConsts.install = function(Vue) {
Vue.prototype.$ONLINE_TEST = (value) => {
    return ONLINE_TEST[value]
 }
}

export default VueConsts
