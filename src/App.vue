<template>
  <div id="app">
  
  <div id="header"> 
    <NavHeader  />


    </div> 
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">Shelf</router-link> | 
      <router-link to="/event">Event</router-link>
    </div> -->

    <router-view  />  <!-- **--> 

  
  </div>
</template>

<script>
import NavHeader from './views/NavHeader.vue'
export default {
  components: {
    NavHeader
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;

  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 10px;
  
}

#nav a {
  font-size:x-large;
  font-weight: bold;
  
  color: #9ab0c7;
}

#nav a.router-link-exact-active {
  background-color: #b6bec7;
  border-color: transparent;
  color: #fda32d;
}
</style>
