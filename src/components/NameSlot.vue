<template>
  <div>
   
    <div class="header">默认是<slot></slot>
    </div>
    
    <div class="center">
      <ul>
        <li v-for="item in list" :key="item.id">
          <slot name="center" :data="item.name"></slot>
        </li>
      </ul>
    </div>
    <div>
      <slot name="buttom" message="end"></slot>
    </div>

  </div>
</template>

<script>
 export default{
  name:'NameSlot',
  data () {
    return {
      txt:'信息',
      list:[
        {id:'1',name:'first',count:1},
        {id:'2',name:'sencoder',count:2},
        {id:'3',name:'three',count:3}
        ]

    }
  }
 }

</script>

<style lang="scss" scoped>

</style>