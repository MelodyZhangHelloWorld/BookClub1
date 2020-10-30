<template>
  <div class="shelf">
    <h1>{{ msg2 }}</h1>
    <h2>Type In Your Search Term</h2>
 
<form v-on:submit.prevent="getResult(query)">
      <input type="text" placeholder="Type in your search" v-model="query" />
    </form> 
    


  </div>
</template>

<script>

import axios from 'axios';
// import Vue from 'vue';

export default {
  name: 'Shelf',
  props: {
    msg2: String
  },
  data(){ //?
    return{
      msg3: "Shelf.vue",
      query: '',
      results: '',
      itemList:''
    }
  },
  methods: {

   
    getResult(query) {

const apiKey = "AIzaSyDjKIA2LWHZXaUbsEudEL3VTiPc4-OzBOU";
 
 console.log(query);

 axios.get(
   'https://www.googleapis.com/books/v1/volumes?q=inauthor:'+query+'&orderBy=relevance&key='+apiKey).then(response => {
     
     console.log(response.data);
     
   //  itemList = response.data.items;

     console.log(response.data.items);
     
     }
     
     
     
     ); 

/*axios.get('https://images-api.nasa.gov/search?q=' + query + '&media_type=image').then( response => { */

        // axios.get('https://www.goodreads.com/author/show/' + query+'?format=xml&key=0TIQpFobs5Yltg1Pnw').then( response => {

        //     console.log(response.data);

           

        //     alert("end of fetching");


        //   //  this.results = response.data.collection.items;
        // }); //.catch(e ( ))
      }
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
  color: #19810c;
}
</style>
