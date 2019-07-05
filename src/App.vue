<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Home from '@/views/Home.vue'

export default {
  name: 'app',
  components: {
    Navbar,
    Home
  }
}
</script>

<style>
</style>