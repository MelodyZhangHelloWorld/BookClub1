<template>
  <div id="app">
  
  <div id="header"> 
    <h1>Melody's Book Club</h1>
    </div>   
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">Shelf</router-link> | 
      <router-link to="/event">Event</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;

  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #9ab0c7;
}

#nav a.router-link-exact-active {
  color: #fda32d;
}
</style>
