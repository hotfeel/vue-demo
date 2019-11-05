<template>
    <div class="div_submeau">
        <el-menu
                :collapse="isCollapase"
                default-active="1"
                class="el-menu-vertical-demo">
            <el-menu-item index="1">
                <i class="el-icon-s-home"></i>
                <span slot="title">首页</span>
            </el-menu-item>
            <el-submenu index="2">
                <template slot="title">
                    <i class="el-icon-mobile-phone"></i>
                    <span>渠道产品</span>
                </template>
                <el-menu-item index="1-1">订单量</el-menu-item>
                <el-menu-item index="1-2">用户数</el-menu-item>
            </el-submenu>
        </el-menu>
        <div class="div_bottom" @click="collapseClick">
            <i :class="isCollapase?'el-icon-d-arrow-right':'el-icon-d-arrow-left'"/>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                isCollapase:true
            }
        },
        methods:{
            collapseClick(){
                this.isCollapase = !this.isCollapase;
            }
        }
    }
</script>
<style lang="scss" scoped>
    .div_submeau>>>.el-submenu__title{
        padding: 0px !important;
    }
    .div_submeau{
        position: relative;
        height: 100%;
    }
    .el-menu{
        border: none;
    }
    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 200px;
        min-height: 400px;
    }
    .div_bottom{
        position: absolute;
        bottom: 0px;
        text-align: right;
        width: 100%;
        font-size: 20px;
        color: gray;
        height: 30px;
        line-height: 30px;
        background-color: #c1c1c1;
        border-top: 0.5px solid gainsboro;
    }
    .div_bottom:hover{
        cursor:pointer;
    }
</style>
