<template>
  <div id="footer">
    <ul>
      <router-link
       v-for="(item,index) in tablBars" :key="index" :to="item.path" tag="li">
        <i v-html="item.icon" class="iconfont"></i>
        <span>{{item.title}}</span>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'tabBar',
  data () {
    return {
      current: 0,
      tablBars: [
        {
          icon: '&#xe722',
          title: '首页',
          path: '/Home'
        },
        {
          icon: '&#xe603',
          title: '发现',
          path: '/Find'
        },
        {
          icon: '&#xe63f',
          title: '订单',
          path: '/List'
        },
        {
          icon: '&#xe604',
          title: '我的',
          path: '/Mine'
        }
      ]
    }
  },
  methods: {
    handClick (val) {
      this.current = val
      console.log(12)
    }
  }
}
</script>

<style scoped>
#footer{
  background-color: #fff;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  border-top: 1px solid #ddd;
}
#footer>ul{
    display: flex;
    justify-content: space-around;
}
#footer>ul>li{
    display: flex;
    flex-direction:column;
    height: .5rem;
    width: .93rem;
    align-items: center;
    justify-content: center;
    font-size: .14rem ;
}
#footer>ul>li>i{
    font-size:.23rem;
}
#footer>ul>.router-link-active{
    color:#0089dc;
}
</style>
