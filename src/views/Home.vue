<template>
  <div class="home">
    <common-Header custom />
   <div class="main" v-loading="is_loading">
      <van-pull-refresh v-model="isLoading" style="width: 100%;" @refresh="onRefresh">
      <content-info v-for="item in list" :item="item" @click.native="$router.push({path: '/p/'+item.id, query:{id:item.id}})" :key="item.id"/>
      <load-more />
      </van-pull-refresh>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src  1
// import HelloWorld from '@/components/HelloWorld.vue'
import commonHeader from '@/components/common-use/common-header'
import contentInfo from '@/components/common-use/contentinfo'
import loadMore from '@/components/common-use/load-more'
import { home_info } from '@/api/getdata'

export default {
  name: 'Home',
  components: {
    commonHeader,
    contentInfo,
    loadMore
  },
  data() {
    return {
      count: 0,
      isLoading: false,
      list: [],
      is_loading: false
    }
  },
  mounted() {
    this.getlist()
  },
  methods: {
    async onRefresh() {
      this.is_loading = true
      await this.getlist()
      this.isLoading = false;
    },
    async getlist() {
      try {
        this.is_loading = true
        const {data} = await home_info()
        this.list = data
        this.is_loading = false
      } catch(err) {
        console.log(err)
      }
      }
  }
}
</script>

<style lang="scss" scoped>
.home {
  box-sizing: border-box;
  background: $background-color-base;
  min-height: 100vh;
  .main {
    display: flex;
    box-sizing: border-box;
    width: 100%;
    min-height: calc(100vh - 60px);
  } 
}
</style>
