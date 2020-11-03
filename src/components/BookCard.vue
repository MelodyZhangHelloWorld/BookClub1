<template>
  <li>
    <h3>{{ title }}</h3>
    <img :src="imageLink">
    <h4>{{ category }}  {{lang}} </h4>
      {{author}} <br> 
      
    description..  <hr>
  </li>
  
</template>

<script>
export default {
  props: ['title', 'author','category','lang','imageLink','description'],
 
};
</script>