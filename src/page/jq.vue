<template>
    <div class="love">
        <em>这里是初始文字</em>
        <button @click="testJQ">看看 jquery 有没有工作</button>
        <button v-user-power="10001">测试陈述事实</button>
        <vue-editor v-model="editorData"></vue-editor>
    </div>
</template>
<script>
  import $ from 'jquery'
  import md5 from 'js-md5'
  import { VueEditor } from 'vue2-editor'
  export default {
    components: {VueEditor},
    data () {
      return {
        editorData: ''
      }
    },
    methods: {
      testJQ () {
        $('.love em').html('jquery 工作正常！')
        let str = '12131313123123'
        str = md5(str)
        console.log(str)
        console.log(this.editorData)
      }
    }
  }
</script>