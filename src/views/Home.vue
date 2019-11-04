<template>
  <el-container style="height: 100%;">
    <el-header>
      <m-head/>
    </el-header>
    <el-container>
      <el-aside width="auto">
        <m-submeau></m-submeau>
      </el-aside>
      <el-main>
          <m-home></m-home>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import MHead from '@/components/home/head'
import MSubmeau from '@/components/home/submeau'
import MHome from '@/components/home'

export default {
  name: 'home',
  components:{
    MHead,
    MSubmeau,
    MHome
  }
}
</script>
<style scoped lang="scss">
.el-header{
  padding: 0px;
  border-bottom: 0.5px solid gainsboro;
}
.el-main{
    padding: 0px;
    border-left: 0.5px solid gainsboro;
}
    .el-aside{

    }
</style>
