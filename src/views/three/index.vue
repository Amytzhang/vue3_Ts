<template>
  <div class="three_index">
   <div class="show">
      <three-example></three-example>
   </div>
   <div class="show"></div>
  </div>
</template>
<script lang="ts">
import threeExample from './threeExample.vue'

export default {
  name:'three',
  components:{
    threeExample
  }
}
</script>

<style>
.three_index{
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
}
.show{
    flex: 1;
  }

</style>