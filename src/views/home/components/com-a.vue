<template>
<div class="com-a">
  <h1>{{ message }}</h1>
  <com-b />
</div>
</template>

<script>
import ComB from './com-b'
export default {
  name: 'comA',
  components: {
    ComB
  },
  data () {
    return {
      message: 'hello comA'
    }
  },
  created () {
    this.$on('on-message', rs => {
      this.message = rs
    })

    this.$on('pass-data', rs => {
      this.message = rs
    })
  }
}
</script>

<style scoped>
.com-a {
  position: relative;
  margin-top: 50px;
  padding: 10px;
  background-color: #fff;
}

.com-a::before {
  content: '组件A';
  position: absolute;
  top: -13px;
  left: 10px;
  line-height: 26px;
  padding: 0 10px;
  border: 1px solid #ddd;
  background-color: #fff;
}
</style>