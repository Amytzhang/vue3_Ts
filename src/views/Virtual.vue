<template>
<div class="virtual-show">
<div>虚拟列表</div>
  <VirtualList :listData="data" :itemSize="100"/>
</div>
</template>

<script>
import VirtualList from "./../components/VirtualList";
let d = [];
for (let i = 0; i < 1000; i++) {
  d.push({ id: i, value: i });
}

export default {
  name: "virtual",
  data() {
    return {
      data: d
    };
  },
  components: {
    VirtualList
  }
};
</script>

<style scoped>
html{
  height: 100%;
}
body{
  height: 100%;
  margin:0;
}
.virtual-show{
  width:50vw;
  height:50vh;
  position: relative;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
}
</style>
