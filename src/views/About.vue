<template>
  <div class="about">
    <button @click="back">返回登录</button>
    <p>{{ $ONLINE_TEST(1) }}</p>
    <p v-for="item in data" :key="item.id">{{ item.name }}
      <button @click="see_info">查看信息</button>
    </p>
  </div>
</template>

<script>
import { User_info } from '@/api/getdata'
export default {
  created() {
    this.getdata()
  },
  data() {
    return {
      data: ''
    }
  },
  methods: {
    async getdata() {
      try {
        const {data} = await User_info()
      this.data = data
      } catch(err) {
        console.log(err)
      }
    },
    back() {
      this.$router.back(-1)
    },
    see_info() {
      
    }
  }
}
</script>

<style>
</style>
