<template>
<div id="bookcard">
<li>
    <h3>{{ title }}</h3>
    <img :src="imageLink" alt="No Image Link from API">
    <h4>{{ category }}  {{lang}} </h4>
      {{author}} <br> 
      
    {{description}}..  <hr>
  </li>
</div>
  
  
</template>

<script>
export default {
  props: ['title', 'author','category','lang','imageLink','description'],
 
};
</script>

<style scoped>

#bookcard {
  font-family:  Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  
 
}

</style>