<template>
  <router-view />
</template>

<script>
import { provide, ref } from 'vue'
// import Frank from './components/Frank.vue'

export default {
  name: 'App',
  setup(){
    console.log("setup")
    const asideVisible = ref(false)
    provide('xxx',asideVisible)
  },
  computed(){
    console.log("computed")
  },
  mounted(){
    console.log("mounted")
  }
}
</script>
