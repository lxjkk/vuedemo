<template>
  <div class="container">
    <div class="left">
      <ul ref="b" style="padding:0">
        <li
          :class="(scrollTop<top[index+1]&&scrollTop>=top[index]) || (list.length === index +1&&scrollTop>=top[index])?'active':''"
          style="list-style:none;margin: 20px 0;"
          v-for="(item, index) in list"
          :key="index"
          @click.native="move(index)"
        >{{item+(index+1)}}</li>
      </ul>
    </div>
    <div class="right" ref="divs">
      <div class="liston" v-for="(item, index) in lists" :key="index">
        {{item + (index +1)}}
        <p>这是我的小demo</p>
      </div>
    </div>
  </div>
</template>

<script>
// 全局定时器
let interval = null
// 设置兼容移动速度 最好是1
let send = 1
export default {
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
    this._initTops()
  },

  destroyed() {
    window.removeEventListener('scroll', this.scrollToTop)
  },
  data() {
    return {
      scrollTop: 0,
      top: [],
      list: ['商品', '商品', '商品', '商品', '商品'],
      lists: ['商品', '商品', '商品', '商品', '商品']
    }
  },
  props: {
    listLeft: {
      require: true,
      type: Array 
    },
    listRight: {
      require: true,
      type: Array
    }
  },
  methods: {
    handleScroll() {
      // 获取当前滚动位置
      this.scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop
    },
    _initTops() {
      // 从父元素中获取所有子元素相对于html的距离高度
      const tops = []
      let lis = this.$refs.divs.children
      Array.prototype.slice.call(lis).forEach(li => {
        tops.push(li.offsetTop)
      })
      this.top = tops
    },
    move(index) {
      clearInterval(interval)
      const alls = this.top[index]
      const that = this
      // 移动的距离是第一个的时候
      if (alls === 0) {
        interval = setInterval(() => {
          let issend =
            Math.floor(-this.scrollTop / 4) === 0
              ? send
              : Math.floor((alls - this.scrollTop) / 4)
          document.documentElement.scrollTop = that.scrollTop + issend
          if (that.scrollTop <= alls) {
            document.documentElement.scrollTop = document.body.scrollTop = alls
            clearInterval(interval)
          }
        })
        alert('111')
        // 移动端巨鹿小于滚动的位置
      } else if (this.scrollTop > alls) {
        interval = setInterval(() => {
          let issend =
            Math.floor(-(this.scrollTop - alls) / 4) === 0
              ? send
              : Math.floor((alls - this.scrollTop) / 4)
          document.documentElement.scrollTop = that.scrollTop + issend
          if (that.scrollTop <= alls) {
            document.documentElement.scrollTop = document.body.scrollTop = alls
            clearInterval(interval)
          }
        })
        // 移动的距离大于滚动的位置
      } else if (this.scrollTop < alls) {
        interval = setInterval(() => {
          let issend =
            Math.floor((alls - this.scrollTop) / 4) === 0
              ? send
              : Math.floor((alls - this.scrollTop) / 4)
          document.documentElement.scrollTop = that.scrollTop + issend

          if (that.scrollTop >= alls) {
            document.documentElement.scrollTop = alls
            clearInterval(interval)
          }
          if (
            that.scrollTop !== 0 &&
            document.documentElement.clientHeight +
              document.documentElement.scrollTop ===
              document.documentElement.scrollHeight
          ) {
            document.documentElement.scrollTop = document.body.scrollTop = alls
            clearInterval(interval)
          }
        })
      } else {
        document.documentElement.scrollTop = document.body.scrollTop = alls
      }
      // else if(this.scrollTop === alls) {
      //     document.documentElement.scrollTop = document.body.scrollTop = alls
      //     return false
      // }
    }
  }
}
</script>

<style>
.container {
  box-sizing: border-box;
}
.left {
  position: fixed;
  padding: 0;
  width: 20%;
  height: 100vh;
  background: rgb(230, 230, 230);
}
.right {
  padding-left: 20%;
  background: rgb(248, 144, 144);
}
.right div:nth-last-child(1) {
  height: 100vh;
  margin-bottom: 0px;
}
.liston {
  box-sizing: border-box;
  background: chartreuse;
  height: 400px;
  margin-bottom: 10px;
}
.liston2 {
  box-sizing: border-box;
  background: chartreuse;
}
.active {
  color: rgb(248, 144, 144);
}
</style>