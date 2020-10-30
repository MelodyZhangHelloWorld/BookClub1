<template>
  <div id="eventList">
    <h1>{{ msg1 }}</h1>
 
  </div>
</template>

<script>
export default {
  name: 'EventList',
  props: {
    msg1: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #c7712b;
}
</style>
