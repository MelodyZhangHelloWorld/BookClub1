<template>
  <div class="about">
    <h1>This page is for </h1>
    <h2>
      <Shelf msg2="Book Shelf"/>
    
    </h2>
  </div>
</template>
<script>
// @ is an alias to /src
import Shelf from '@/components/Shelf.vue'

export default {
  name: 'About',
  components: {
    Shelf
  }
}
</script>