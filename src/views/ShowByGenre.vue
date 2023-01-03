<template>
<div class="text-white relative" >AHA</div>

</template>


<script>
import { onMounted } from 'vue'
import {useRoute} from 'vue-router'


export default{
    name :'ShowByGenre',
    setup(){
                const route=useRoute()


                onMounted( ()=>

                    console.log(route.params)
                )




    
}
}


</script>