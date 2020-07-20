<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang='scss'>
#app {
  color: $color-text-regular;
  box-sizing: border-box;
  max-width: 450px;
  margin: 0 auto;
}
body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  color: $color-text-regular;
  width: 100%;
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  background: $background-color-base-body;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}
</style>
