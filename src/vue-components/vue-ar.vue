<template>
    <div>
    <canvas id="yoghurt"></canvas>
    <script
      type="module"
      src="..\src\scripts\web-ar-example.js"
    ></script>
    </div>
</template>

<script>
export default {
  name: "VueAr",
  components: {
  },
  mounted() {
    console.log("mounted vue ar component");
    
  },
};
</script>

<style >
#yoghurt{
  width: 70vw;
  height: 70vh;
}
</style>