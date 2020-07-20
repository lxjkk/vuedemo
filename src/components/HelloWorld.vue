<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <input type="text" v-model="userid" /><br>
    <input type="tetr" v-model="password" /><br>
    <van-button plain hairline type="primary" @click="enter">确定</van-button>
  </div>
</template>

<script>

import { login } from '@/api/login'
// import axios from 'axios'
// import Qs from 'qs'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      userid: '',
      password: '',
    }
  },
  methods: {
    async enter() {
      try {
        const obj = {
        accout: this.userid,
        password: this.password
      }
      const data = await login(obj)
      localStorage.setItem('token', data.data)
      this.$router.push('/About')
      } catch(err) {
        console.log(err)
      }
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.hello {
  h1 {
    color: $color-text-primary;
  }
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
