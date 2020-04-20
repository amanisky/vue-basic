<template>
<div class="com-b">
  <h1>{{ message }}</h1>
  <button @click="clickHandle">发射事件给父级和根</button>
</div>
</template>

<script>
import Emitter from '../../../mixins/emitter.js'

export default {
  name: 'comB',

  mixins: [ Emitter ],

  data () {
    return {
      message: 'hello ComB'
    }
  },

  created () {
    this.$on('on-message', rs => {
      this.message = rs
    })
  },
  
  methods: {
    clickHandle () {
      this.dispatch('home', 'pass-data', 'xyz')
      this.dispatch('comA', 'pass-data', 'abc')
    }
  }
}
</script>

<style scoped>
.com-b {
  position: relative;
  margin-top: 50px;
  padding: 10px;
  background-color: #eee;
}

.com-b::before {
  content: '组件B';
  position: absolute;
  top: -13px;
  left: 10px;
  line-height: 26px;
  padding: 0 10px;
  border: 1px solid #ddd;
  background-color: #fff;
}
</style>