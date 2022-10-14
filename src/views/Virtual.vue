<template>
<div id="app">
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

<style>
html{
  height: 100%;
}
body{
  height: 100%;
  margin:0;
}
#app{
  height:100%;
}
</style>
