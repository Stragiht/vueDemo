<template>
    <div>
        <v-header></v-header>
        <h1 class="logo">cnodejs Api Test</h1>
        <input type="text" v-css="{color:'blue',borderStyle:'solid', border:'1px solid red',outline:'none'}">
        <button v-user-power="100001">哈哈</button>
        <button @click="showToaster">点击我点击我</button>
        <span>{{money | currency}}</span>
        <ul class="list">
            <li v-for="(item,index ) in lists" v-if="index < 20">
                <time v-text="$utils.goodTime(item.create_at)" v-if="item.show"></time>
                :
                {{index}}
                <router-link :to="'/content/' + item.id">
                    {{ item.title}}
                </router-link>
                <button @click="showMethod(item)"> 更新</button>
            </li>
        </ul>
        <v-footer></v-footer>
    </div>
</template>


<script>
  import VHeader from '@/components/Header'
  import VFooter from '@/components/Footer'
  import utilService from '@/utils/util'
  import axios from 'axios'

  export default {
    components: {VHeader, VFooter},
    name: 'index',
    data () {
      return {
        money: 120,
        lists: [],
        arr: [1, 2, 3, 4]
      }
    },
    created () {
      console.log(this.$toast)
//      console

      this.$api.post('shop/selectShop', {'pageNum': 1, 'pageSize': 10}, data => {
        this.lists = data.data
        this.lists.forEach((item, index) => {
          this.$set(item, 'show', false)
        })
      })
      axios.get('../static/jsonData/nav.json').then(data => {
        sessionStorage.setItem('inforMession', JSON.stringify(data.data))
        let infro = JSON.parse(sessionStorage.getItem('inforMession'))
        console.log(infro)
      })
      utilService.isNotEmptyStr()
      console.log(utilService.isNumber(11))
    },
    methods: {
      showToaster () {
        this.$toast.success({
          title: 'suceesee',
          message: '成功'
        })
        this.$toast.info({
          title: '提示',
          message: '销售'
        })
        let arr = [1, 2, 3]
        let arr1 = [1, 2, 5, 4]
        console.log(utilService.getArrUnionSet(arr, arr1))
        console.log(utilService.getArrIntersection(arr, arr1))
        console.log(utilService.getArrDiffSet(arr, arr1))
      },
      showMethod (item) {
        this.lists.forEach((item, index) => {
          this.$set(item, 'show', true)
          item.show = true
          console.log(item)
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    h1, h2 {
        font-weight: normal;
    }
</style>
