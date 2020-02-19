<template>
    <div>
        <div class="box">
            <div class="head">
                <h3>头像</h3>
                <p>
                    <i class="iconfont icon-element"></i>
                    <i class="iconfont icon-yjt"></i>
                </p>
            </div>
            <div class="username">
                <h3>用户名</h3>
                <p><span>4638e40d7</span><i class="iconfont icon-yjt"></i></p>
            </div>
            <div class="title">
                <p>账号绑定</p>
            </div>
            <div class="username">
                <h3>手机</h3>
                <p><span>188****6279</span><i class="iconfont icon-yjt"></i></p>
            </div>
            <div class="title">
                <p>安全设置</p>
            </div>
            <div class="username">
                <em>忘记密码</em>
                <p><span class="modification">修改</span><i class="iconfont icon-yjt"></i></p>
            </div>
            <div class="quit">
                推出登录
            </div>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style scoped>
.box{
    height: 6.63rem;
    background: #f5f5f5;
}
.head{
    height: .8rem;
    display: flex;
    padding: 0 .14rem;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #eeeeee;
    background: #ffffff;;
}
.head h3{
    font-weight: 700;
    font-size: .16rem;
}
.head p{
    position: relative;
}
.icon-element{
    font-size: .6rem;
    color: #0097ff;
    line-height: .8rem;
    margin-right: .2rem;
}
.head .icon-yjt{
    font-size: .14rem;
    color: #ccc;
    position: absolute;
    top: .35rem;
    right: 0rem;
}
.username{
    padding: 0 .14rem;
    height: .5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #eee;
    background: #ffffff;;
}
.username h3{
    font-size: .16rem;
    font-weight: 700;
}
.username p span{
    font-size: .16rem;
    color: #666;
}
.username .icon-yjt{
    color: #ccc;
    font-size: .14rem;
}
.title{
    padding: .16rem .14rem .07rem;
    font-size: .12rem;
    color: #999;
}
.username em{
    font-size: .16rem;
}
.username p .modification{
    color: #0097ff;
}
.quit{
    text-align: center;
    height: .49rem;
    font-size: .16rem;
    line-height: .49rem;
    color: #ff5339;
    margin-top: .2rem;
    background: #ffffff;
    font-weight: 700;
}
</style>
