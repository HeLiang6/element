<template>
    <div>
        <div class="nav">
            <ul>
                <li v-for="(item,index) in nav" @click="handTabs(index)" :key="index" :class="{active:num==index}">{{item}}</li>
            </ul>
            <p>
                <i class="iconfont icon-xjt"></i>
            </p>
        </div>
        <div class="main">
            <ul class="main-nav">
                <li>距离最近<i class="iconfont icon-xjt"></i></li>
                <li>距离最近</li>
                <li>销量最高</li>
                <li>筛选<i class="iconfont icon-shaixuan"></i></li>
            </ul>
            <ul class="main-list">
                <li>
                    <div class="main-list-top">
                        <div class="list-img">
                            <img src="https://cube.elemecdn.com/e/f5/0a17a7cd8d400ff7e6a5006b344e0png.png?x-oss-process=image/format,webp/resize,w_130,h_130,m_fixed" alt="">
                        </div>
                        <div class="main-list-right">
                            <h4>肯德基宅急送（帝豪店）</h4>
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
                            <img src="https://cube.elemecdn.com/1/72/3c54d8b5a9b582555bc9e97430acfpng.png?x-oss-process=image/format,webp/resize,w_130,h_130,m_fixed" alt="">
                        </div>
                        <div class="main-list-right">
                            <h4>必胜客宅急送(华城国际店)</h4>
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
                            <img src="https://cube.elemecdn.com/1/3e/d7680194ec338a3e89988d27d79e8png.png?x-oss-process=image/format,webp/resize,w_130,h_130,m_fixed" alt="">
                        </div>
                        <div class="main-list-right">
                            <h4>客家土菜馆</h4>
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
                            <img src="https://cube.elemecdn.com/8/fb/64073d17ea483bd3323e6a0746067png.png?x-oss-process=image/format,webp/resize,w_130,h_130,m_fixed" alt="">
                        </div>
                        <div class="main-list-right">
                            <h4>1点点（树兜店）</h4>
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
      num: 0,
      nav: ['全部', '面点粥食', '简餐便当', '汉堡披萨', '香锅冒菜', '小吃炸串', '地方菜系', '日韩料理', '轻食简餐']
    }
  },
  methods: {
    handTabs (id) {
      this.num = id
    }
  }
}
</script>

<style scoped>
.nav ul{
    width: 7.5rem;
    height: 0.4rem;
}
.nav{
    width: 3.75rem;
    overflow-x: auto;
    overflow-y: hidden;
    background: linear-gradient(90deg,#0af,#0085ff);
    position: fixed;
    top: 0;
    left: 0;
}
.nav ul li{
    float: left;
    margin-left: .28rem;
    font-size: .14rem;
    line-height: .4rem;
    color: #fff;
    margin-bottom: .05rem;
}
.nav p{
    width: .45rem;
    height: 0.4rem;
    background: linear-gradient(90deg,#0af,#0085ff);
    position: absolute;
    right: 0;
    top: 0;
    text-align: center;
    line-height: .4rem;
}
.nav .icon-xjt{
    font-size: .12rem;
    color: #fff;
}
.main{
    margin-top: .4rem;
    padding-top: .4rem;
}
.main-nav{
    position: fixed;
    top: .4rem;
    left: 0;
    background: #fff;
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
    padding: 0 .03rem;
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
    padding: .15rem 0;
}
.main-nav li .icon-xjt{
    font-size: .08rem;
    margin-left: .04rem;
}
.active{
    color: #fff;
    border-bottom: 2px solid #FFF;
}
</style>
