<template>
  <div class="login">
    <h1>login</h1>
  </div>
</template>

<script>
import { Login } from '@/api/login'

export default {
  name: 'login',
  created () {
    /* eslint-disable */ 
    Login({name: 1, pwd: 1234})
      .then(res => {
        console.log(res)
      })
  }
}
</script>

<style scoped>

</style>
