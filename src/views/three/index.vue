<template>
  <div class="three_index">
   <div class="show">
      <three-example></three-example>
   </div>
   <div class="show">
     <trye></trye>
   </div>
  </div>
</template>
<script lang="ts">
import threeExample from './threeExample.vue';
import trye from './try.vue';
export default {
  name:'three',
  components:{
    threeExample,
    trye
  }
}
</script>

<style>
.three_index{
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  justify-content: space-around;
}
.show{
  flex: 1;
}

</style>