<template>
  <div class="shelf">
    <h1>{{ msg2 }}</h1>
    <h2>Type In Your Search Term</h2>
 
<form v-on:submit.prevent="getResult(query)">
      <input type="text" placeholder="press enter to search" v-model="query" />
    </form> 
    



<!-- <li v-for="book in bookList" :key="book.id">
    {{ book.volumeInfo.title }}
  </li> -->


<book-info 
        :book-list = "bookList" 
  /> <!----->


  </div>
</template>

<script>

import axios from 'axios';
// import Vue from 'vue';
import BookInfo from "./BookInfo.vue";

export default {
  name: 'Shelf',

  components:{  //**
    BookInfo
  },

  props: {
    msg2: String
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

      console.log( "========================");
  console.log( this.bookList);

    //  console.log("title  " +response.data.items[0].volumeInfo.title);

    //  console.log("author  " +response.data.items[0].volumeInfo.authors);

    // console.log("rating  " +response.data.items[0].volumeInfo.averageRating);

    //  console.log("imageLink  " +response.data.items[0].volumeInfo.imageLinks.thumbnail); 

    //  console.log("infoLink   " +
    //  response.data.items[0].volumeInfo.infoLink);

    //   console.log("language is   " +
    //  response.data.items[0].volumeInfo.language);
     
    //   console.log("description    " +
    //  response.data.items[0].volumeInfo.description);
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
