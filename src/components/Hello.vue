<template>
    <div >
        <h1 class="red">LORD OF THE RINGS</h1> 
         <img :src="require('../assets/test.jpg')" alt="test image">
    </div>
   
</template>

<script>


export default {
    

}
</script>
<style lang="scss" scoped>
    
    .red {
        color: $primaryRed; 
    }
   
</style>