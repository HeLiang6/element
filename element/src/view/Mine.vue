<template>
    <div>
        <router-link to="/ID" tag="div" class="top">
          <div><i class="iconfont icon-element"></i></div>
          <div class="top-content">
            <p>4638e40d7</p>
            <span>188****6279</span>
          </div>
          <i class="iconfont icon-yjt"></i>
        </router-link>
        <div class="nav">
          <div class="nav-left">
            <strong><i>0</i>个</strong>
            <p>红包</p>
          </div>
          <div  class="nav-right">
            <strong><i>36</i>个</strong>
            <p>金币</p>
          </div>
        </div>
        <div class="main">
          <ul>
            <li>
              <i class="iconfont icon-dizi"></i>
              <p>
                <span>我的地址</span>
                <i class="iconfont icon-yjt"></i>
              </p>
            </li>
          </ul>
          <ul>
            <li>
              <i class="iconfont icon-shangcheng"></i>
              <p>
                <span>金币商城</span>
                <i class="iconfont icon-yjt"></i>
              </p>
            </li>
            <li>
              <i class="iconfont icon-souye"></i>
              <p>
                <span>分享拿20元现金</span>
                <i class="iconfont icon-yjt"></i>
              </p>
            </li>
          </ul>
          <ul>
            <li>
              <i class="iconfont icon-kefu"></i>
              <p>
                <span>我的客服</span>
                <i class="iconfont icon-yjt"></i>
              </p>
            </li>
            <li>
              <i class="iconfont icon-element"></i>
              <p>
                <span>下载饿了么APP</span>
                <i class="iconfont icon-yjt"></i>
              </p>
            </li>
            <li>
              <i class="iconfont icon-dingdan"></i>
              <p>
                <span>规则中心</span>
                <i class="iconfont icon-yjt"></i>
              </p>
            </li>
          </ul>
        </div>
        <Footer/>
    </div>
</template>
<script>
import Footer from '../components/Footer'
export default {
  components: {
    Footer
  }
}
</script>

<style scoped>
.top{
  height: 1.1rem;
  background: linear-gradient(90deg,#0af,#0085ff);
  padding: .25rem .15rem;
  display: flex;
}
.top-content{
  margin-top: .1rem;
  width: 2.57rem;
  height: .47rem;
  margin-left: .18rem;
}
.top .icon-element{
  font-size: .6rem;
  color: #fff;
}
.top-content p{
  color: #fff;
  font-size: .21rem;
  font-weight: 600;
  margin-bottom: .08rem;
  line-height: .25rem;
}
.top-content span{
  font-size: .12rem;
  color: #fff;
}
.icon-yjt{
  font-size: .1rem;
  color: #fff;
  line-height: .6rem;
}
html{
  height: 100%;
}
.nav{
  display: flex;
  justify-content: space-around;
  border-bottom: .1rem solid #eee;
}
.nav-left{
  text-align: center;
  border-right: 1px solid #eeeeee;
  height: .84rem;
  width: 1.87rem;
  padding: .15rem 0;
}
.nav-left strong {
  color: #ff5f3E;
}
.nav-left strong i{
  font-size: .25rem;
}
.nav-left p{
  font-size: .12rem;
  font-weight: 500;
}
.nav-right strong {
  color: #6ac20b;
}
.nav-right strong i{
  font-size: .25rem;
}
.nav-right p{
  font-size: .12rem;
  font-weight: 500;
}
.nav-right{
  text-align: center;
  height: .84rem;
  width: 1.87rem;
  padding: .15rem 0;
}
.main ul{
  border-bottom: .1rem solid #eee;
}
.main ul li{
  display: flex;
  padding: 0 .1rem;
  height: .45rem;
  line-height: .45rem;
}
.main ul li p{
  display: flex;
  justify-content: space-between;
  width: 3.32rem;
  height: 0.45rem;
  line-height: .45rem;
  padding-left: .05rem;
  border-bottom: 1px solid#eeeeee;
}
.main ul li p span{
  font-size: .16rem;
  display: block;
}
.main ul li p .icon-yjt{
  color: #cccccc;
  line-height: .45rem;
}
.icon-dizi{
  color: rgb(74, 165, 240);
}
.icon-shangcheng{
  color: #6ac20b;
}
.icon-souye{
  color: #fa743ed0;
}
.icon-kefu,.icon-element,.icon-dingdan{
  color: #0085ff;
}
</style>
