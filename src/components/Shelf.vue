<template>
  <div class="shelf">  <!--id="shelf"-->
    
  
        

        <!-- <ul v-if="hasBooks" >
          <li v-for ="book in getSavedBooks" :key="book.id" >
            {{ book.volumeInfo.title}} </li>

          
        </ul>
        <h3 v-else>No books found..</h3> -->
   
 <br><br><br><br><br> <!--????-->
 
<b-row align-h="center" >
  <form v-on:submit.prevent="getResult(query)">
    
      <!-- <input type="text" placeholder="press enter to search" v-model="query" /> -->

      <b-form-input id="searchInput" type="text" placeholder="press enter to search" v-model="query" ></b-form-input>
      
    </form> 
</b-row>
      


      <div v-if="hasBooks" >

<book-info 
        :book-list = "getSavedBooks"  
  />  <!-- data from Vuex, not directly from saved array -->
      </div>
<h5 class="m-3">Enter <b>Author Name</b> to start..</h5>


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
     
      query: '',
      results: '',
      itemList:'', //？

      bookList: []
    }
  },
 /* created() {
console.log (this.$store.getters.books);
  }, */
  computed:{
      getSavedBooks(){   
        return this.$store.getters.books;
      },
      hasBooks(){
        return this.$store.getters.hasBooks;
      }
  },

  methods: {
    getResult(query) {

const apiKey = "AIzaSyDjKIA2LWHZXaUbsEudEL3VTiPc4-OzBOU";
 
 // console.log(query);

 axios.get(
   //search for particular author
   'https://www.googleapis.com/books/v1/volumes?q=inauthor:'+query+'&orderBy=relevance&key='+apiKey).then(response => {
     
   //  console.log(response.data);
     
    // console.log( response.data.items[0].volumeInfo);

     this.bookList = response.data.items;  //*** VUEX
      this.$store.dispatch('saveBookData', this.bookList);

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
