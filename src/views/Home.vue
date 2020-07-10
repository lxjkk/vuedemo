<template>
  <div class="home">
    <div>
        <img alt="Vue logo" src="../assets/logo.png">
    </div>
    <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/list">List</router-link>
    <HelloWorld msg="欢迎你来到我的网页"/>
  </div>
</template>

<script>
// @ is an alias to /src  1
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
