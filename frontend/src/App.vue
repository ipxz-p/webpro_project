
<template>
  <div>
    <router-view />
  </div>
  
</template>

<script>
import Home from './views/index.vue'

export default {
  name: 'app',
  components: {
    Home
  }
}

</script>

<style scoped>

</style>
