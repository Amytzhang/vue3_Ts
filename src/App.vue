<template>
  <div class="cd">
  
    <div id="nav">
      <el-radio-group v-model="isCollapse">
        <el-radio-button :label="false">expand</el-radio-button>
        <el-radio-button :label="true">collapse</el-radio-button>
      </el-radio-group>
      <el-menu
        active-text-color="#ffd04b"
        background-color="#545c64"
        class="el-menu-vertical-demo"
        default-active="0"
        text-color="#fff"
        :collapse="isCollapse"
        @select="handleSelect"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-menu-item  v-for="(item,index) in data" 
          :index="index" 
          :route="item.path"
        >
          <el-icon><setting /></el-icon>
          <span>{{item?.name}}</span>
        </el-menu-item>
      </el-menu>
    </div>
    <div class="content">
      <router-view/>
    </div>
    
  </div>
  
</template>
<script lang="ts" setup>
import {ref,reactive} from 'vue'
import {useRouter} from 'vue-router'
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'
interface typeOne {
  path?:string,
  name?:string,
  icon?:string,
}
interface routerMessage extends typeOne {
  children?:Array<typeOne>
}
const data:Array<routerMessage>=[
  {path:'/home',name:'学习ts1',children:[{}]},
  {path:'/about',name:'学习ts2',children:[{}]},
  {path:'/interview',name:'interview',children:[{}]},
  {path:'/slot',name:'插槽',children:[{}]},
  {path:'/virtual',name:'虚拟列表', children:[]},
  {path:'/three',name:'Three.js',
    children:[
      {path:'/threeExample',name:'threeExample'},
      {path:'/trye',name:'trye'},
      {
        path:'/point',name:'point'
      }
    ]
  },
  {
    path:'/tsVue3',
    name:'vue和ts语法结合',
    children:[
    ]
  }
]
const isCollapse = ref(false)
let currentRoute = ref<number>(0)
const router = useRouter()
const handleSelect = (key: string,indexPath:string) => {
  let index = Number(key)
  currentRoute.value = index
  console.log(currentRoute)
  router.push({path:data[index].path})
}
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style lang="scss" scoped>
$content-color:rgba(255, 255, 255, 0.3);
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
  min-height: calc(100vh - 32px);
}
html,body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
#app {
  width:100%;
   height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}
.cd {
  width:100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
}

#nav {
  width: 12vw;
  height: 100wh;
}
.content {
  width: 88vw;
  overflow-y: scroll;
  background-color: $content-color;
 
}
.content::-webkit-scrollbar {
  width: 3px;
  height: 10px;
  background-color: #b5b1b1;
}
.content::-webkit-scrollbar-track{
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);  
  border-radius: 10px; 
  background-color:black;
}
.content::-webkit-scrollbar-thumb  
{  
    border-radius: 10px;  
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);  
   background-color:#b5b1b1;
} 
</style>
