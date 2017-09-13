<template>
    <div>
        <v-header></v-header>
        <h1 class="logo">cnodejs Api Test</h1>
        <button @click="showToaster">点击我点击我</button>
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

  export default {
    components: {VHeader, VFooter},
    name: 'index',
    data () {
      return {
        lists: [],
        arr: [1, 2, 3, 4]
      }
    },
    created () {
      console.log(this.$toast)
      this.$api.get('topics', null, data => {
        this.lists = data.data
        for (let value of this.arr) {
          console.log(value)
        }
        this.lists.forEach((item, index) => {
          this.$set(item, 'show', false)
          console.log(item)
        })
      })
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
      },
      showMethod (item) {
        this.lists.forEach((iiitem, index) => {
          iiitem.show = false
          // this.$set(item, 'show', true)
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
