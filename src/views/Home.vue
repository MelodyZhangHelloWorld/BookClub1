<template>
  <div class="home">
   
    <EventList msg1="This page is for Events"/>
  </div>
</template>

<script>
// @ is an alias to /src
import EventList from '@/components/EventList.vue'

export default {
  name: 'Home',
  components: {
    EventList
  }
}
</script>
