<template>
  <div id="app">
    {{ message }}
    <!-- <vue-ar /> -->
  </div>
</template>

<script>
import VueAr from "./vue-components/vue-ar.vue";
export default {
  name: "App",
  data() {
    return {
      message: "Hello World",
    };
  },
  components: {
    VueAr,
  },
  mounted() {
    console.log("mounted");
  },
};
</script>

<style>
#app {
  font-size: 18px;
  font-family: "Roboto", sans-serif;
  color: blue;
}
</style>
