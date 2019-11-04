<template>
    <div class="div_head">
        <div class="div_head_left">
         <img src="@/assets/logo.png"/>
            <h1 style="text-align: center">渠道监控</h1>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.div_head{
    height: 100%;
    div{
        display: inline-block;
    }
}
.div_head_left{
    display: flex !important;
    height: 60px;
    align-items: center; /*定义body的元素垂直居中*/
    justify-content:space-between;
    width: 160px;
    padding: 0px 20px;
    h1{
        color: orange;
    }
    li{
        font-size: 40px;
        color: blue;
    }
    img{
        width: 55px;
        height: 55px;
    }
}
</style>
