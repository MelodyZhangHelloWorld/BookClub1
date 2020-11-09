<template>
  <div class="shelf">
    
   
 
<form v-on:submit.prevent="getResult(query)">
      <input type="text" placeholder="press enter to search" v-model="query" />
    </form> 
    



<!-- <li v-for="book in bookList" :key="book.id">
    {{ book.volumeInfo.title }}
  </li> -->


<!-- <b-col md="10" >
<book-info 
        :book-list = "bookList" 
  /> 
</b-col> | <b-col md="2" > </b-col> -->



<book-info 
        :book-list = "bookList" 
  /> 

  </div>

  
</template>

<script>

import axios from 'axios';

import BookInfo from "./BookInfo.vue";

export default {
  name: 'Shelf',

  components:{  //**
    BookInfo
  },

  props: {
 
  },
  data(){ //?
    return{
      msg3: "Shelf.vue",
      query: '',
      results: '',
      itemList:'', //？

      bookList: []


    }
  },
  methods: {
    getResult(query) {

const apiKey = "AIzaSyDjKIA2LWHZXaUbsEudEL3VTiPc4-OzBOU";
 
 console.log(query);

 axios.get(
   //search for particular author
   'https://www.googleapis.com/books/v1/volumes?q=inauthor:'+query+'&orderBy=relevance&key='+apiKey).then(response => {
     
     console.log(response.data);
     
  //  itemList = response.data.items;

     console.log( response.data.items[0].volumeInfo);

     this.bookList = response.data.items;  //***

      
  console.log( this.bookList);

     }
     
     
     
     ); 

      }
  }

};


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 30px 0 0;
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
