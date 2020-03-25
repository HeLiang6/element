<template>
  <div id="footer">
    <ul>
      <li
       v-for="(item,index) in tablBars" :key="index" @click="handerClick(item,index)" :class="{active:current===index}">
        <i v-html="item.icon" class="iconfont"></i>
        <span>{{item.title}}{{current}}</span>
      </li>
      <!-- <ul>
        <li @click="toggleMenu('home')" :class="{activeStyle:active==='home'}">首页</li>
        <li @click="toggleMenu('menu')" :class="{activeStyle:active==='menu'}">菜单</li>
        <li></li>
      </ul> -->
    </ul>
  </div>
</template>

<script>
export default {
  name: 'tabBar',
  data () {
    return {
      current: 0,
      active: 'home',
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
    toggleMenu (option) {
      this.active = option
    },
    handerClick (val, index) {
      // console.log(index)
      this.current = index
      // // console.log( val.path)
      this.$router.push({path: val.path})
      console.log(this.current)
      // this.$router.push({path: '/home'})
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
/* #footer>ul>.router-link-active{
    color:#0089dc;
} */
.activeStyle{
  background: gray;
}
.active{
  color: #0089dc;
}
</style>
