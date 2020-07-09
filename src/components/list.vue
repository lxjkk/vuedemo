<template>
  <div class="container">
    <div class="left">
      <ul ref="b">
        <li v-for="(item, index) in list" :key="index" @click="a(index)">
            {{item+'名称'}}
        </li>
      </ul>
    </div>
    <div class="right" ref="divs">
      <div class="liston" v-for="(item, index) in list" :key="index" :ref="a + index">
          {{item + (index +1)}}
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
    this._initTops()
  },
  
destroyed () {
  window.removeEventListener('scroll', this.scrollToTop)
},
    data() {
        return {
            scrollTop: 0,
            top: [],
            list: ['商品','商品','商品','商品','商品']
        }
    },
  methods: {
    handleScroll() {
        // 获取当前滚动位置
      this.scrollTop =window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
    },
    _initTops() {
        const tops = []
        let lis = this.$refs.divs.children
        Array.prototype.slice.call(lis).forEach(li => {
         tops.push(li.offsetTop)
        })
        this.top = tops
    },
    a(index) {
        const alls = this.top[index]
        const that = this
        console.log(this.scrollTop)
        console.log(alls)
        if(this.scrollTop > alls) {
            const interval = setInterval(()=> {
            let issend = Math.floor(-alls / 2)
            document.documentElement.scrollTop =  that.scrollTop + issend
            if(that.scrollTop <= alls) {
                document.documentElement.scrollTop   = alls
                clearInterval(interval)
            }
        },16)
        }else if(this.scrollTop === 0 ) {
        //     const interval = setInterval(()=> {
        //     issend = Math.floor(-alls / 6)
        //     console.log(issend)
        //     document.documentElement.scrollTop =  that.scrollTop + issend
        //     if(that.scrollTop > alls) {
        //         clearInterval(interval)
        //         that.scrollTop  = alls
        //     }
        // },16)
        document.documentElement.scrollTop  = alls
        }else if(this.scrollTop < alls) {
            const interval = setInterval(()=> {
            let issend = Math.floor((alls - this.scrollTop) / 12)
            document.documentElement.scrollTop =  that.scrollTop + issend
            if(that.scrollTop >= alls) {
                document.documentElement.scrollTop = alls
                clearInterval(interval)
            }
            if(document.documentElement.scrollTop !== 0 && document.documentElement.clientHeight + document.documentElement.scrollTop === document.documentElement.scrollHeight  ) {
                document.documentElement.scrollTop = alls
                clearInterval(interval)
            }
        },16)
        }
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
  width: 20%;
  height: 100vh;
  background: rgb(230, 230, 230);
}
.right {
  padding-left: 20%;
  background: rgb(248, 144, 144);
}
.liston {
    box-sizing: border-box;
    background: chartreuse;
  height: 400px;
  margin-bottom: 10px;
}
</style>