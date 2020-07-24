<template>
  <div class="container">
    <common-Header />
    <div v-loading="is_loading"  class="content-container">
      <div v-if="obj">
      <h1 class="title">{{obj.content_title}}</h1>
      <div style="display:flex;align-items: center;">
        <van-image width="36" height="36" class="image-radius" lazy-load src="https://cdn.img.wenhairu.com/images/2020/07/24/fherp.jpg" />
        <span class="send-word">福无双至</span>
      </div>
      <div class="is-time">
        <!-- <van-icon class="icon-r" size="0" name="good-job" />
        <van-icon class="icon-r" name="like" /> -->
        <span>{{obj.created_at}}</span>
      </div>
      <div class="content" v-html="obj.content"></div>
    </div>
    </div>
    
  </div>
</template>

<script>
import commonHeader from '@/components/common-use/common-header'
import { blog_content } from '@/api/getdata'

export default {
  components: {
    commonHeader
  },
  data() {
    return {
      obj: null,
      is_loading: false,
      form: {
      id: null 
      }
    }
  },
  created() {
    this.form.id = this.$route.query.id
    this.getdata()
  },
  methods: {
    async getdata() {
      try {
      this.is_loading = true
      const {data} = await blog_content(this.form)
      this.is_loading = false
      this.obj = data
      } catch(err) {
        console.log(err)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  background: #ffffff;
  min-height: 100vh;
  .content-container {
  padding: 0 1rem;
  min-height: calc(100vh - 70px);
  .title {
    margin: 15px 0;
    font-size: 30px;
    font-weight: 700;
    line-height: 1.4;
    color: #2f2f2f;
  }
  .send-word {
    font-size: 16px;
    font-weight: 600;
    line-height: 16px;
    color: #484848;
  }
  .is-time {
    margin-top: 10px;
    overflow: hidden; 
    font-size: 13px;
    color: #b1b1b1;
  }
  .content {
    margin: 10px 0;
  }
}
}

.image-radius {
  margin-right: 5px;
    ::v-deep .van-image__img {
    border-radius: 50%;
    } 
  }
</style>