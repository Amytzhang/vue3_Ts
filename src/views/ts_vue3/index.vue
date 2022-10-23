<template>
  <el-tabs v-model="activeName" class="demo-tabs" @tab-change="handleClick">
    <el-tab-pane label="User" name="first">User</el-tab-pane>
    <el-tab-pane label="Config" name="second">Config</el-tab-pane>
    <el-tab-pane label="Role" name="third">Role</el-tab-pane>
    <el-tab-pane label="Task" name="fourth">Task</el-tab-pane>
  </el-tabs>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ref } from 'vue'
import type { TabsPaneContext,TabPaneName } from 'element-plus'


export default defineComponent({
  name:'tsVue3',
  setup() {
    const activeName = ref('first')
    const handleClick = (tab:TabPaneName) => {
      console.log(tab,activeName.value)
    }
    return{
      activeName,
      handleClick
    }
  },
  
})
</script>
