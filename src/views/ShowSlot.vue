<template>
  <div>
    <div class="header">
      <name-slot>
        <div>匿名插槽</div>
        <template #center="center">{{center.data}}</template>
        <template #buttom="buttom">获取底部具名插槽信息{{buttom.message}}</template>
      </name-slot>
    </div>
  </div>
</template>

<script >
import NameSlot from '../components/NameSlot'
export default{
  name:'ShowSlot',
  data () {
    return {
      nameTry:'具名插件'
    }
  },
  components: {
    NameSlot
  }
}

</script>

<style lang="scss" scoped>

</style>