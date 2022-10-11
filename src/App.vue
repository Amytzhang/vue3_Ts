<template>
  <div class="cd">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/interview">interview</router-link>
      <!-- <router-link to="/three">three</router-link> -->
    </div>
    <div class="content">
      <router-view/>
    </div>
    
  </div>
</template>
<script>
// import HelloWorld from './components/HelloWorld.vue'
export default {
  // components: {
  //   HelloWorld
  // }
  
}
</script>

<style lang="scss">
$top-padding:50px;
$content-color:#f1f2f3;
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
.app1 {
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
  width: 10vw;
  height: 100wh;
  padding: $top-padding 0;
  box-sizing: border-box;
  background-image: linear-gradient(to right, rgba(37,198,215,0),rgba(37,198,215,1));
    display: flex;
    flex-direction: column;
  a {
    font-weight: bold;
    color: #ffffff;
    font-size: 2rem;
    &.router-link-exact-active {
      color: #f70707;
    }
  }
}
.content {
  flex: 1;
  padding: $top-padding 0;
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
