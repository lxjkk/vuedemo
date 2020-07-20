<template>
<div>
  <div class="header-container">
    <div clss="header-left">
      <div v-if="custom">
        <span class="title">lxjkk的博客</span>
      </div>
      <div v-else>
        <van-icon name="arrow-left" size="25px" @click="$router.back()" />
      </div>
    </div>
    <div class="header-right"></div>
  </div>
  <div class="header-shim"></div>
</div>
  
</template>

<script>
export default {
  props: {
    custom: {
      default: false,
      type: Boolean
    }
  }
}
</script>

<style lang="scss" scoped>
.header-shim {
  height: 50px;
}
.header-container {
  box-sizing: border-box;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 10px;
  background-color: #ffffff;
  position: fixed;
  z-index: 1000;
  max-width: 450px;
  .title {
    font-size: 20px;
    color: $color-text-primary;
  }
  .header-right {
    width: 25px;
    height: 25px;
    background: $color-primary;
    border-radius: 50%;
  }
  &::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 200%;
      border-bottom: 1px solid $color-text-placeholder;
      transform-origin: 0 0;
      transform: scale(0.5, 0.5);
      box-sizing: border-box;
      box-shadow: 0 2px 6px $color-text-placeholder;
  }
}
</style>