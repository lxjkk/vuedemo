<template>
  <div class="container">
    <div class="my-layout-contentinfo-between">
      <div>
        <div class="font-conf title" v-text="textdata"></div>
        <div style="display: flex;">
          <p class="font-conf content" v-text="text"></p>
        </div>
      </div>
      <div style="margin-left:20px">
        <van-image width="70" height="70" class="image-radius" lazy-load src="https://img.yzcdn.cn/vant/cat.jpeg" />
      </div>
    </div>

    <div class="icon-style">
      <span class="icon-style">
        <van-icon class="icon-r" name="good-job" />
        <span>0</span>
      </span>
      <span class="icon-style">
        <van-icon class="icon-r" name="like" />
        <span>0</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      textdata: 'Vant 通过 Locale 组件实现多语言支持',
      text: '1、在router.js中设置 2、checkSessionid()函数 3、登录这个页面需要时登录的状态 4、注...'
    }
  }
}
</script>

<style lang='scss' scoped>
.container {
  box-sizing: border-box;
  padding: 15px 18px;
  background-color: $background-color-common;
  margin-top: 10px;
  width: 100%;
  .title {
    font-size: 18px;
    font-weight: 700;
    overflow: hidden;
    line-height: 25px;
    max-height: 50px;
  }
  .content {
    margin-top: 6px;
    font-size: 13px;
    line-height: 1.5;
    color: #999;
    overflow: hidden;
  }
  .icon-style {
    display: flex;
    font-size: 13px;
    margin-right: 8px;
    .icon-r {
      margin-right: 4px;
    }
  }
  .image-radius {
    ::v-deep .van-image__img {
    border-radius: 4px;
    } 
  }
}
</style>