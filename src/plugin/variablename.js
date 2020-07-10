export const ONLINE_TEST = {
    0: '在线',
    1: '离线',
    2: '未知'
}
const VueConsts = {}
VueConsts.install = function(Vue) {
Vue.prototype.$ONLINE_TEST = (value) => {
    return ONLINE_TEST[value]
 }
}

export default VueConsts
