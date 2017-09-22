<template>
    <article>
        <div v-for="title in titleData" >
            <h2 class="title" @click="toggle(title)">{{title.TEXT}}

                <span class="icon" :class="{'hideIcon':!title.IF}"></span>
            </h2>
            <transition name="fade" v-if="title.IF"  >
                <ul>
                    <li v-for="(article,index) in title.VALUE" :key="article.TEXT">
                        <router-link :to="article.URL">{{article.TEXT}}</router-link>
                    </li>
                </ul>

            </transition>
        </div>
    </article>
</template>
<script>
  import axios from 'axios'
  export default {
    data () {
      return {
        show: false,
        titleData: []
      }
    },
    created () {
      axios.get('../static/jsonData/navData.json').then(data => {
        this.titleData = data.data.NAVTITLE
        // this.titleData.forEach((item,index)=>{
        //  this.$set(item,)
        // })*/
        console.log(data)
      })
    },
    methods: {
      toggle (item) {
        this.$set(item, 'IF', !item.IF)
        console.log(item)
      }
    }
  }
</script>
<style type="text/less" scoped lang="less">
    article {
        width: 200px;
        height: 100%;
        position: fixed;
        z-index: 10;
        left: 0;
        top: 60px;
        background: #282c33;
        .title {
            height: 45px;
            line-height: 45px;
            font-size: 15px;
            background: #393c48;
            padding-left: 15px;
            box-sizing: border-box;
            color: #dfe2e2;
            cursor: pointer;
            position: relative;

        }
        ul {
            width: 200px;
            cursor: pointer;
            li a{
                display: block;
                padding-left: 15px;
                box-sizing: border-box;
                width: 200px;
                height: 38px;
                line-height: 38px;
                font-size: 15px;
                color: #c0c0c1;
            }
        }
        .fade-enter-active, .fade-leave-active {
            transition: all 1s;
        }
        .fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */ {
            opacity: 0;
            height: 0;
            width: 0;
            transform: translateX(120px);
        }
        .icon {
            width: 12px;
            height: 7px;
            display: block;
            position: absolute;
            right: 10px;
            top: 20px;
            background: url(../assets/images/wficon.png) no-repeat -158px -23px;
        }
        .hideIcon{
            background: url(../assets/images/wficon.png) no-repeat -185px -18px;
        }

    }
</style>