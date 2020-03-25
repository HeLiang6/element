<template>
    <div>
        <div class="top">
            <div class="location">
                <i class="iconfont icon-dizi"></i>
                <p>福建省</p>
                <i class="iconfont icon-xjt"></i>
            </div>
            <div id="scroll-box">
            <div class="top-search" :class="headerFixed?'isFixed':''">
                
                <span><i class="iconfont icon-fangdajing"></i>搜索饿了么商家、商品名称</span>
            </div>
            </div>
        </div>
        <div class="nav">
            <ul>
                <router-link to="/Cate" tag="li">
                    <img src="https://cube.elemecdn.com/7/d8/a867c870b22bc74c87c348b75528djpeg.jpeg?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed" alt="">
                    <p>美食</p>
                </router-link>
                <router-link to="/Cate" tag="li">
                    <img src="https://cube.elemecdn.com/9/21/60ac33f023d9074e13cd78f9b5964jpeg.jpeg?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed" alt="">
                    <p>夜宵</p>
                </router-link>
                <router-link to="/Cate" tag="li">
                    <img src="https://cube.elemecdn.com/e/58/bceb19258e3264e64fb856722c3c1jpeg.jpeg?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed" alt="">
                    <p>跑腿代购</p>
                </router-link>
                <router-link to="/Cate" tag="li">
                    <img src="https://cube.elemecdn.com/b/7f/432619fb21a40b05cd25d11eca02djpeg.jpeg?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed" alt="">
                    <p>汉堡披萨</p>
                </router-link>
                <router-link to="/Cate" tag="li">
                    <img src="https://cube.elemecdn.com/0/1a/314b6da88ab6c7ae9828f91652d40jpeg.jpeg?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed" alt="">
                    <p>速食简餐</p>
                </router-link>
                <router-link to="/Cate" tag="li">
                    <img src="https://cube.elemecdn.com/7/d6/6f2631288a44ec177204e05cbcb93jpeg.jpeg?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed" alt="">
                    <p>地方小吃</p>
                </router-link>
                <router-link to="/Cate" tag="li">
                    <img src="https://cube.elemecdn.com/a/7b/b02bd836411c016935d258b300cfejpeg.jpeg?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed" alt="">
                    <p>大牌惠吃</p>
                </router-link>
                <router-link to="/Cate" tag="li">
                    <img src="https://cube.elemecdn.com/d/38/7bddb07503aea4b711236348e2632jpeg.jpeg?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed" alt="">
                    <p>速食简餐</p>
                </router-link>
            </ul>
        </div>
        <div class="member">
            <div class="member-box">
                <div class="member-left">
                    <h3>品质套餐</h3>
                    <p>搭配齐全吃得好</p>
                    <span>立即抢购<i class="iconfont icon-yjt"></i></span>
                </div>
                <div class="member-right">
                    <img src="https://cube.elemecdn.com/e/ee/df43e7e53f6e1346c3fda0609f1d3png.png?x-oss-process=image/format,webp/resize,w_282,h_188,m_fixed" alt="">
                </div>
            </div>
            <div class="member-bottom">
                <div class="discounts">
                    <h3>超级会员</h3>
                    <p>每月领20元红包</p>
                </div>
                <p>立即开通<i class="iconfont icon-yjt"></i></p>
            </div>

        </div>
        <div class="main">
            <h3>推荐商家</h3>
            <ul class="main-nav">
                <li>距离最近<i class="iconfont icon-xjt"></i></li>
                <li>距离最近</li>
                <li>销量最高</li>
                <li>筛选<i class="iconfont icon-shaixuan"></i></li>
            </ul>
            <ul class="main-list">
                <router-link to="/Merchant" tag="li">
                    <div class="main-list-top">
                        <div class="list-img">
                            <img src="https://cube.elemecdn.com/7/54/55f509fb719da681c58f1b22b38cdpng.png?x-oss-process=image/format,webp/resize,w_130,h_130,m_fixed" alt="">
                        </div>
                        <div class="main-list-right">
                            <h4>一品炖罐(苏溪店)</h4>
                            <div class="distribution">
                                <p><i>¥20起送</i>|<i>配送¥2</i></p>
                                <span>蜂鸟专送</span>
                            </div>
                            <span class="else">其他小吃</span>
                        </div>
                    </div>
                    <div class="main-bottom">
                        <p><i class="iconfont icon-jian"></i>满38元减3元，满66元减5元，满98元减9元</p>
                        <p><i class="iconfont icon-pei"></i>配送费立减2元</p>
                    </div>
                </router-link
                >
                <li>
                    <div class="main-list-top">
                        <div class="list-img">
                            <img src="https://cube.elemecdn.com/7/54/55f509fb719da681c58f1b22b38cdpng.png?x-oss-process=image/format,webp/resize,w_130,h_130,m_fixed" alt="">
                        </div>
                        <div class="main-list-right">
                            <h4>一品炖罐(苏溪店)</h4>
                            <div class="distribution">
                                <p><i>¥20起送</i>|<i>配送¥2</i></p>
                                <span>蜂鸟专送</span>
                            </div>
                            <span class="else">其他小吃</span>
                        </div>
                    </div>
                    <div class="main-bottom">
                        <p><i class="iconfont icon-jian"></i>满38元减3元，满66元减5元，满98元减9元</p>
                        <p><i class="iconfont icon-pei"></i>配送费立减2元</p>
                    </div>
                </li>
                <li>
                    <div class="main-list-top">
                        <div class="list-img">
                            <img src="https://cube.elemecdn.com/7/54/55f509fb719da681c58f1b22b38cdpng.png?x-oss-process=image/format,webp/resize,w_130,h_130,m_fixed" alt="">
                        </div>
                        <div class="main-list-right">
                            <h4>一品炖罐(苏溪店)</h4>
                            <div class="distribution">
                                <p><i>¥20起送</i>|<i>配送¥2</i></p>
                                <span>蜂鸟专送</span>
                            </div>
                            <span class="else">其他小吃</span>
                        </div>
                    </div>
                    <div class="main-bottom">
                        <p><i class="iconfont icon-jian"></i>满38元减3元，满66元减5元，满98元减9元</p>
                        <p><i class="iconfont icon-pei"></i>配送费立减2元</p>
                    </div>
                </li>
                <li>
                    <div class="main-list-top">
                        <div class="list-img">
                            <img src="https://cube.elemecdn.com/7/54/55f509fb719da681c58f1b22b38cdpng.png?x-oss-process=image/format,webp/resize,w_130,h_130,m_fixed" alt="">
                        </div>
                        <div class="main-list-right">
                            <h4>一品炖罐(苏溪店)</h4>
                            <div class="distribution">
                                <p><i>¥20起送</i>|<i>配送¥2</i></p>
                                <span>蜂鸟专送</span>
                            </div>
                            <span class="else">其他小吃</span>
                        </div>
                    </div>
                    <div class="main-bottom">
                        <p><i class="iconfont icon-jian"></i>满38元减3元，满66元减5元，满98元减9元</p>
                        <p><i class="iconfont icon-pei"></i>配送费立减2元</p>
                    </div>
                </li>
                <li>
                    <div class="main-list-top">
                        <div class="list-img">
                            <img src="https://cube.elemecdn.com/7/54/55f509fb719da681c58f1b22b38cdpng.png?x-oss-process=image/format,webp/resize,w_130,h_130,m_fixed" alt="">
                        </div>
                        <div class="main-list-right">
                            <h4>一品炖罐(苏溪店)</h4>
                            <div class="distribution">
                                <p><i>¥20起送</i>|<i>配送¥2</i></p>
                                <span>蜂鸟专送</span>
                            </div>
                            <span class="else">其他小吃</span>
                        </div>
                    </div>
                    <div class="main-bottom">
                        <p><i class="iconfont icon-jian"></i>满38元减3元，满66元减5元，满98元减9元</p>
                        <p><i class="iconfont icon-pei"></i>配送费立减2元</p>
                    </div>
                </li>
                <li>
                    <div class="main-list-top">
                        <div class="list-img">
                            <img src="https://cube.elemecdn.com/7/54/55f509fb719da681c58f1b22b38cdpng.png?x-oss-process=image/format,webp/resize,w_130,h_130,m_fixed" alt="">
                        </div>
                        <div class="main-list-right">
                            <h4>一品炖罐(苏溪店)</h4>
                            <div class="distribution">
                                <p><i>¥20起送</i>|<i>配送¥2</i></p>
                                <span>蜂鸟专送</span>
                            </div>
                            <span class="else">其他小吃</span>
                        </div>
                    </div>
                    <div class="main-bottom">
                        <p><i class="iconfont icon-jian"></i>满38元减3元，满66元减5元，满98元减9元</p>
                        <p><i class="iconfont icon-pei"></i>配送费立减2元</p>
                    </div>
                </li>
                <li>
                    <div class="main-list-top">
                        <div class="list-img">
                            <img src="https://cube.elemecdn.com/7/54/55f509fb719da681c58f1b22b38cdpng.png?x-oss-process=image/format,webp/resize,w_130,h_130,m_fixed" alt="">
                        </div>
                        <div class="main-list-right">
                            <h4>一品炖罐(苏溪店)</h4>
                            <div class="distribution">
                                <p><i>¥20起送</i>|<i>配送¥2</i></p>
                                <span>蜂鸟专送</span>
                            </div>
                            <span class="else">其他小吃</span>
                        </div>
                    </div>
                    <div class="main-bottom">
                        <p><i class="iconfont icon-jian"></i>满38元减3元，满66元减5元，满98元减9元</p>
                        <p><i class="iconfont icon-pei"></i>配送费立减2元</p>
                    </div>
                </li>
                <li>
                    <div class="main-list-top">
                        <div class="list-img">
                            <img src="https://cube.elemecdn.com/7/54/55f509fb719da681c58f1b22b38cdpng.png?x-oss-process=image/format,webp/resize,w_130,h_130,m_fixed" alt="">
                        </div>
                        <div class="main-list-right">
                            <h4>一品炖罐(苏溪店)</h4>
                            <div class="distribution">
                                <p><i>¥20起送</i>|<i>配送¥2</i></p>
                                <span>蜂鸟专送</span>
                            </div>
                            <span class="else">其他小吃</span>
                        </div>
                    </div>
                    <div class="main-bottom">
                        <p><i class="iconfont icon-jian"></i>满38元减3元，满66元减5元，满98元减9元</p>
                        <p><i class="iconfont icon-pei"></i>配送费立减2元</p>
                    </div>
                </li>
                <li>
                    <div class="main-list-top">
                        <div class="list-img">
                            <img src="https://cube.elemecdn.com/7/54/55f509fb719da681c58f1b22b38cdpng.png?x-oss-process=image/format,webp/resize,w_130,h_130,m_fixed" alt="">
                        </div>
                        <div class="main-list-right">
                            <h4>一品炖罐(苏溪店)</h4>
                            <div class="distribution">
                                <p><i>¥20起送</i>|<i>配送¥2</i></p>
                                <span>蜂鸟专送</span>
                            </div>
                            <span class="else">其他小吃</span>
                        </div>
                    </div>
                    <div class="main-bottom">
                        <p><i class="iconfont icon-jian"></i>满38元减3元，满66元减5元，满98元减9元</p>
                        <p><i class="iconfont icon-pei"></i>配送费立减2元</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      headerFixed: 0
    }
  },
  mounted () {
      window.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
      window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
      handleScroll () {
        let header = document.getElementById('scroll-box');
        this.offsetTop = header.offsetTop;
        this.offsetHeight = header.offsetHeight;
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
          // 判断页面滚动的距离是否大于吸顶元素的位置
        this.headerFixed = scrollTop > (this.offsetTop - this.offsetHeight * 2);
      }
  }
}
</script>

<style scoped>
  .isFixed{
    position: fixed;
    top: 0;
    left: 0;
}
.top{
    background-image: linear-gradient(90deg,#0af,#0085ff);
}
.location{
    margin: 0 .14rem;
    display: flex;
    line-height: .35rem;
    font-size: .18rem;
    color: #ffffff;
}
.top-search{
    background-image: linear-gradient(90deg,#0af,#0085ff);
    padding: .1rem .14rem;
}
.top-search span{
    display: inline-block;
    width: 3.47rem;
    margin: 0 auto;
    text-align: center;
    line-height: .36rem;
    background: #ffffff;
    color: #999;
}
.nav ul li{
    width: .75rem;
    height: 0.64rem;
    text-align: center;
}
.nav ul li img{
    width: .45rem;
    height: 0.45rem;
}
.nav{
    padding: .11rem 0;
}
.nav ul{
    display: flex;
    flex-wrap: wrap;
}
.nav ul li p{
    font-size: .12rem;
    color: #666;
}
.member-box{
    display: flex;
    justify-content: space-between;
    padding: .12rem 0 0 .15rem;
    background: linear-gradient(0deg,#f4f4f4 5%,#fafafa 95%);
}
.member{
    padding: .1rem;
}
.member-left h3{
    font-size: .18rem;
    margin-bottom: .05rem;
    font-weight: 700;
}
.member-left p{
    font-size: .12rem;
    margin-bottom: .05rem;
    color: #777;
}
.member-left span{
    font-size: .13rem;
    margin-bottom: .05rem;
    color: #af8260;
}
.member-right img{
    width: 1.41rem;
    height: 0.94rem;
}
.icon-yjt{
    font-size: .12rem;
}
.member-bottom{
    background: linear-gradient(90deg,#ffefc4,#f3dda0);
    padding: 0 .15rem;
    display: flex;
    justify-content: space-between;
    line-height: .4rem;
}
.discounts{
    display: flex;
}
.discounts h3{
    font-weight: 700;
    color: #644f1b;
}
.discounts p{
    font-size: .12rem;
    color: #644f1b;
    margin-left: .05rem;
}
.member-bottom p{
    color: #644f1b;
}
.main h3{
    text-align: center;
    font-size: .15rem;
}
.main-nav{
    display: flex;
    justify-content: space-between;
}
.main-nav li{
    text-align: center;
    width: 0.98rem;
    height: 0.4rem;
    line-height: .4rem;
    color: #666;
}
.main-list{
    padding: 0 .1rem;
}
.list-img img{
    width: 0.65rem;
    height: 0.65rem;
    margin-right: .1rem;
}
.main-list-top{
    display: flex;
}
.main-list-right h4{
    font-weight: 600;
    font-size: .16rem;
}
.distribution{
    width: 2.8rem;
    display: flex;
    justify-content: space-between;
    height: .15rem;
    margin-top: .05rem;
}
.distribution p{
    font-size: .12rem;
    color: #666;
    line-height: .15rem;
}
.distribution span{
    color: #ffffff;
    line-height: .15rem;
    font-size: .12rem;
    background: linear-gradient(45deg,#0085ff,#0af);
}
.else{
    padding: 0 .08rem;
    font-size: .1rem;
    display: inline-block;
    border: 1px solid #cccccc;
}
.main-bottom {
    width: 2.8rem;
    float: right;
    margin-top: .1rem;
    margin-bottom: .15rem;
}
.main-bottom p{
    font-size: .12rem;
    line-height: .18rem;
}
.icon-jian{
    font-size: .12rem;
    color: #f07373;
    margin-right: .05rem;
}
.icon-pei{
    font-size: .12rem;
    color: #f07373;
    margin-right: .05rem;
}
.main-list li{
    overflow: hidden;
    border-bottom: 1px solid #eeeeee;
}
</style>
