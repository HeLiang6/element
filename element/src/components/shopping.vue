<template>
    <div>
        <div class="top">
            <p><i class="iconfont icon-souye"></i><em>36</em>金币</p>
            <p><i class="iconfont icon-souye"></i>兑换记录</p>
        </div>
        <div class="suit">
            <div class="suit-left">
                <img src="//yun.duiba.com.cn/images/201910/crwugjcwol.jpg" alt="">
            </div>
            <div class="suit-right">
                <img src="//yun.duiba.com.cn/images/201910/r8onusfmp9.jpg" alt="">
                <img src="//yun.duiba.com.cn/images/201910/sromdt6k96.jpg" alt="">
            </div>
        </div>
        <div class="main">
            <ul>
                <li>
                    <img src="//yun.duiba.com.cn/images/201903/it3cqrpnj3.png" alt="">
                    <p><i>超级会员8折</i>联盟专享红包</p>
                    <span>72金币</span>
                    <em>兑换</em>
                </li>
                <li>
                    <img src="//yun.duiba.com.cn/images/201804/miaq1o1asn.png" alt="">
                    <p><i>超级会员8折</i>联盟专享红包</p>
                    <span>72金币</span>
                    <em>兑换</em>
                </li>
                <li>
                    <img src="//yun.duiba.com.cn/images/201804/vx4vdzz2w0.png" alt="">
                    <p><i>超级会员8折</i>联盟专享红包</p>
                    <span>120金币</span>
                    <em>兑换</em>
                </li>
                <li>
                    <img src="//yun.duiba.com.cn/images/201804/dgn43qco2o.png" alt="">
                    <p><i>超级会员8折</i>联盟专享红包</p>
                    <span>216金币</span>
                    <em>兑换</em>
                </li>
                <li>
                    <img src="//yun.duiba.com.cn/images/201804/5026o64xpw.png" alt="">
                    <p><i>超级会员8折</i>联盟专享红包</p>
                    <span>270金币</span>
                    <em>兑换</em>
                </li>
                <li>
                    <img src="//yun.duiba.com.cn/images/201804/v4vhrej3bq.png" alt="">
                    <p><i>超级会员8折</i>联盟专享红包</p>
                    <span>90金币</span>
                    <em>兑换</em>
                </li>
                <li>
                    <img src="//yun.duiba.com.cn/images/201804/v4vhrej3bq.png" alt="">
                    <p><i>超级会员8折</i>联盟专享红包</p>
                    <span>150金币</span>
                    <em>兑换</em>
                </li>
                <li>
                    <img src="//yun.duiba.com.cn/images/201804/b3unb2iq84.png" alt="">
                    <p><i>超级会员8折</i>联盟专享红包</p>
                    <span>9金币</span>
                    <em>兑换</em>
                </li>
                <li>
                    <img src="//yun.duiba.com.cn/images/201908/lkdtydvryz.jpg" alt="">
                    <p><i>超级会员8折</i>联盟专享红包</p>
                    <span>9金币</span>
                    <em>兑换</em>
                </li>
                <li>
                    <img src="//yun.duiba.com.cn/images/201912/rizi7k6d0g.jpg" alt="">
                    <p><i>超级会员8折</i>联盟专享红包</p>
                    <span>9金币</span>
                    <em>兑换</em>
                </li>
                <li>
                    <img src="//yun.duiba.com.cn/images/201809/aw95j8re3i.jpg" alt="">
                    <p><i>超级会员8折</i>联盟专享红包</p>
                    <span>9金币</span>
                    <em>兑换</em>
                </li>
                <li>
                    <img src="//yun.duiba.com.cn/images/201612/2amqjblx28.jpg" alt="">
                    <p><i>超级会员8折</i>联盟专享红包</p>
                    <span>9金币</span>
                    <em>兑换</em>
                </li>
                <li>
                    <img src="//yun.duiba.com.cn/images/201902/rffksxxsn2.jpeg" alt="">
                    <p><i>超级会员8折</i>联盟专享红包</p>
                    <span>9金币</span>
                    <em>兑换</em>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style scoped>
.top{
    display: flex;
}
.top p{
    width: 50%;
    line-height: .5rem;
    font-size: .11rem;
}
.icon-souye{
    margin-left: .2rem;
    color: rgb(253, 87, 70);
    margin-right: .05rem;
}
.top p:nth-child(1){
    border-right: 1px solid #eeeeee;
}
.top p:nth-child(1) em{
    color: rgb(253, 87, 70);
}
.suit{
    background: rgb(249, 249, 249);
    padding: .15rem;
    display: flex;
    justify-content: space-between;
}
.suit-left img{
    width: 1.72rem;
    height: 1.25rem;
    border-right: 1px solid #eeeeee;
}
.suit-right img{
    width: 1.71rem;
    height: 0.61rem;
    border-bottom: 1px solid #eeeeee;
}
.main{
    background: rgb(249, 249, 249);
}
.main ul{
    display: flex;
    flex-wrap: wrap;
}
.main ul li{
    width: 1.87rem;
    height: 1.95rem;
    border-right: 1px solid #eee;
    border-bottom: 1px solid #eee;
}
.main ul li img{
    width: 1.86rem;
    height: 1.16rem;
}
.main ul li p{
    padding: 0 .15rem;
    font-size: .12rem;
    color: #333;
}
.main ul li p i{
    width: .7468rem;
    height: .17rem;
    padding: 0 .02rem;
    font-size: .12rem;
    background: #F0D98D;
    color: #fff;
    border-radius: .05rem;
    margin-right: .05rem;
}
.main ul li span{
    padding: 0 .15rem;
    color: #FD5746;
    font-size: .12rem;
    margin-top: .1rem;
    display: block;
}
.main ul li em{
    width: .51rem;
    height: .22rem;
    text-align: center;
    line-height: .22rem;
    font-size: .12rem;
    display: block;
    color: #FD5746;
    border: 1px solid #FD5746;
    border-radius: .4rem;
    margin-right: .15rem;
    float: right;
}
</style>
