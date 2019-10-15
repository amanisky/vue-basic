<template>
<div class="home">
  <h1>{{ message }}</h1>
  <button @click="handleClick">广播数据给组件A和组件B</button>
  <com-a />
</div>
</template>

<script>
import Emitter from '../../mixins/emitter.js'
import ComA from './components/com-a'
export default {
  name: 'home',
  mixins: [ Emitter ],
  components: {
    ComA
  },
  data () {
    return {
      message: 'hello home'
    }
  },
  created () {
    this.$on('pass-data', rs => {
      this.message = rs
    })
  },
  methods: {
    handleClick () {
      this.broadcast('comA', 'on-message', '123')
      this.broadcast('comB', 'on-message', '789')
    }
  }
}
</script>

<style scoped>
.home {
  position: relative;
  padding: 10px;
  margin: 50px;
  border: 1px solid #ddd;
  background-color: #eee;
}

.home::before {
  content: 'Home 组件';
  position: absolute;
  top: -13px;
  left: 10px;
  line-height: 26px;
  padding: 0 10px;
  border: 1px solid #ddd;
  background-color: #fff;
}
</style>
