<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">主页</router-link> | 
      <router-link to="/jdshow">京东秀</router-link> |      
      <router-link to="/about">关于</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import JDData from './components/JDData.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    JDData
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#nav{
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 60px;
}
</style>
