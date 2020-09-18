<template>
  <router-view />
</template>

<script>
import { provide, ref } from "vue";
import { router } from "./router";
// import Frank from './components/Frank.vue'

export default {
  name: "App",
  setup() {
    console.log("setup");
    const width = document.documentElement.clientWidth;
    const asideVisible = ref(width <= 500 ? false : true);
    // const asideVisible = ref(false)
    provide("xxx", asideVisible);
    router.afterEach(() => {
      if (width <= 500) {
        asideVisible.value = false;
      }
    });
  },
  computed() {
    console.log("computed");
  },
  mounted() {
    console.log("mounted");
  },
};
</script>
