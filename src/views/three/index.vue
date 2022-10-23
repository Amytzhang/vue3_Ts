<template>
  <div class="three_index">
    <div class="side-bread">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item 
           v-for="(child,cIndex) in threelist.children" 
           :tabindex="cIndex"
           :to="(`${threelist.path}`+child?.path)">{{child?.name}}
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
   <div class="show">
    
      <router-view></router-view> 
   </div>
   
  </div>
</template>
<script  lang="ts" setup>

interface typeOne {
  path?:string,
  name?:string,
  icon?:string,
}
interface routerMessage extends typeOne {
  children?:Array<typeOne>
}
  const threelist:routerMessage ={path:'/three',name:'Three.js',
    children:[
      {path:'/threeExample',name:'threeExample'},
      {path:'/trye',name:'trye'},
      {
        path:'/point',name:'point'
      }
    ]
  }
</script>

<style lang="scss" scoped>
.three_index{
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
.side-bread{
   height: 4rem;
   line-height: 4rem;
   width: 100%;
   padding: 1rem 0 0 1rem;
   box-sizing: border-box;
   background: rgba(139, 185, 231, .5);;
   .el-breadcrumb{
     font-size: 1.5rem;
   }
  }
.show{
  flex: 1;
}

</style>