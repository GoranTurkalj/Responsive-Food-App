<template>
  <div class="green">
    <h1>Hello {{ name }}</h1>
    <hello-component></hello-component>
  </div>
</template>
<script>
import Hello from "./components/Hello.vue";

export default {

  components: {
    helloComponent: Hello,
  },

  data() {
    return {
      name: "Goran",
    };
  },
};
</script>
<style lang="scss">
 
    .green {

      h1 {
        color: $primaryGreen; 
      }
      
    }
  
</style>
