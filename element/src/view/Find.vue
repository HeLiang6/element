<template>
    <div>
        <div class="top">
          <router-link to="/Shopping" tag="div" class="top-left">
            <div class="gold">
              <h3>金币商城</h3>
              <p>0元好物在这你</p>
            </div>
            <img src="https://cube.elemecdn.com/8/38/9c9aea0e856149083d84af3444b78jpeg.jpeg?x-oss-process=image/format,webp" alt="">
          </router-link>
          <div class="top-right">
            <div class="recommend">
              <div>
                <h3>推荐有奖</h3>
                <p>20元现金拿不停</p>
              </div>
              <img src="https://cube.elemecdn.com/5/72/7232274c3c1934861abb86ba32b7bjpeg.jpeg?x-oss-process=image/format,webp" alt="">
            </div>
            <div class="discounts">
              <div>
                <h3>周边优惠</h3>
                <p>领取口碑好券</p>
              </div>
              <img src="https://cube.elemecdn.com/5/10/2351e989d4171479ba0d7b5c06053jpeg.jpeg?x-oss-process=image/format,webp" alt="">
            </div>
          </div>
        </div>
        <div class="box">
        </div>
        <div class="main">
          <div class="main-box">
            <h2>限时好礼</h2>
            <p>金币换好礼</p>
          </div>
          <ul class="list">
            <li>
              <strong>限时优惠</strong>
              <img src="https://cube.elemecdn.com/7/0e/c4345bad31034ac9f9f44f9eb56ecjpeg.jpeg?x-oss-process=image/format,webp" alt="">
              <span>9元鲜果超市红包</span>
              <p>270金币<i></i></p>
            </li>
            <li>
              <strong>特价换购</strong>
              <img src="https://cube.elemecdn.com/2/20/b0d0d94605fc31b9ee3ab651aa7c4jpeg.jpeg?x-oss-process=image/format,webp" alt="">
              <span>数码经络按摩仪</span>
              <p>9金币<i></i></p>
            </li>
            <li>
              <strong>特价换购</strong>
              <img src="https://cube.elemecdn.com/f/93/a096dd082d6c42f600e460fffaa39jpeg.jpeg?x-oss-process=image/format,webp" alt="">
              <span>机械手感背光键盘套装</span>
              <p>9金币<i></i></p>
            </li>
          </ul>
          <div class="more">
            <router-link to="/Shopping" tag="p">查看更多<i class="iconfont icon-yjt"></i></router-link>
          </div>
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
  display: flex;
}
.top-left{
  width: 2rem;
  height: 1.6rem;
  padding: .22rem .11rem .06rem .16rem;
  border-right: 1px solid #eeeeee;
}
.gold h3{
  font-size: .16rem;
  margin-bottom: .06rem;
  color: #ff9900
}
.gold p{
  font-size: .12rem;
  margin-bottom: .06rem;
  color: #ccc;
}
.top-left img{
  width: 0.75rem;
  height: .75rem;
  float: right;
}
.recommend{
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #eeeeee;
  padding-bottom: .05rem;
}
.recommend h3{
  font-size: .16rem;
  color: #1ba9E1;
  margin-bottom: .06rem;
}
.recommend p{
  font-size: .12rem;
  color: #cccc;
}
.recommend img{
  width: 0.45rem;
  height: 0.45rem;
}
.top-right{
  width: 1.75rem;
  padding: .22rem .15rem 0;
}
.discounts{
  margin-top: .225rem;
  display: flex;
  justify-content: space-between;
  padding-bottom: .05rem;
}
.discounts h3{
  font-size: .16rem;
  color: #ED6660;
  margin-bottom: .06rem;
}
.discounts p{
  font-size: .12rem;
  color: #cccc;
}
.discounts img{
  width: 0.45rem;
  height: 0.45rem;
}
.box{
  height: 0.1rem;
  background: #eeeeee;
}
.main-box h2{
  text-align: center;
  font-size: .18rem;
  font-weight: 700;
}
.main-box{
  height: 0.4rem;
  margin-top: .1rem;
}
.main-box p{
  text-align: center;
  font-size: .1rem;
  color: #ccc;
}
.list{
  display: flex;
  padding: .12rem 0 .15rem .15rem;
}
.list li{
  width: 1.11rem;
  height: 1.65rem;
  position: relative;
  margin-right: .1rem;
}
.list li strong{
  position: absolute;
  left: 0;
  top: 0;
  padding: 0 .05rem;
  line-height: .18rem;
  font-size: .11rem;
  background: #413d3c;
  color: #ffffff;
  font-weight: 100;
}
.list li img{
  width: 1.11rem;
  height: 1.1rem;
}
.list li span{
  font-size: .13rem;
  display: block;
  color: #333333;
  margin-bottom: .05rem;
}
.list li p{
  line-height: .24rem;
  color: #ff5339;
}
.more{
  font-size: .12rem;
  color: #ccc;
  text-align: center;
}
.icon-yjt{
  font-size: .12rem;
}

</style>
