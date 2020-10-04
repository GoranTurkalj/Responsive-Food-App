<template>
    <div  class="picture">
        <h1 class="red">Hello World!</h1> 
         <img src="../assets/images/bird.jpg" alt="test image">
         <img :src="birdPicture" alt="test image 2">
           
    </div>
   
</template>

<script>

import bird from "../assets/images/bird.jpg"
export default {
    

    data(){
        return  {
            birdPicture: bird, 
        }
    }
   
    
}
</script>
<style lang="scss" scoped>
    
    .red {
        color: $primaryRed; 
    }

    .picture {

        background-image: url("../assets/images/bird.jpg");
        background-position: center;
        background-size: contain;
    }


</style>