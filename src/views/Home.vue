<template>
  <div class="home">
    <common-Header custom />
   <div class="main">
      <van-pull-refresh v-model="isLoading" style="width: 100%;" @refresh="onRefresh">
      <content-info v-for="item in [1,2,3,4,5]" @click.native="$router.push({path: '/p/'+item})" :key="item"/>
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
    }
  },
  methods: {
    onRefresh() {
      setTimeout(() => {
        // eslint-disable-next-line no-undef
        this.$toast('刷新成功');
        this.isLoading = false;
        this.count++;
      }, 1000);
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
