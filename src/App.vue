<template>
  <div class="grey">
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
 
    .grey {

      h1 {
        color: $primaryGreen; 
      }
      
    }
  
</style>
