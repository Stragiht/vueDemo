<template>
    <div class="main">
        <v-header></v-header>
        <v-title></v-title>
        <router-view class="content"></router-view>
    </div>
</template>
<script>
  import vHeader from '@/components/Header'
  import vTitle from '@/components/Title'

  export default {
    components: {vHeader, vTitle}

  }
</script>
<style lang="less" type="text/less" scoped>
    .main{
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        .content{
            box-sizing: border-box;
            padding: 60px 0 0 200px;
        }
    }
</style>