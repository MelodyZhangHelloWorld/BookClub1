<template>
  <div class="shelf">  <!--id="shelf"-->

 <br><br><br><br><br> <!--????-->
 
<b-row align-h="center" >
  <form v-on:submit.prevent="getResult(query)">
  
      <b-form-input id="searchInput" type="text" 
      sm="10" size="lg"
      placeholder="press enter to search" v-model="query" ></b-form-input>
      
    </form> 
</b-row>
      


      <div v-if="hasBooks" >

<book-info 
        :book-list = "getSavedBooks"  
  />  <!-- data from Vuex, not directly from saved array -->
      </div>

      <div v-else>
 <b-row align-h="center" class="m-4">
       <b-col md="6" align-h="center" class="m-2">
    <b-alert  show variant="info">
      <h4  class="m-3">Enter <b>Author Name</b> to start..</h4></b-alert>
       </b-col> </b-row>
      </div>



 

 <BackToTop text="Top" visibleoffset="100"/>  


  </div>

  
</template>

<script>

import axios from 'axios';

import BookInfo from "./BookInfo.vue";
import BackToTop from 'vue-backtotop'



export default {
  name: 'Shelf',

  components:{  //**
    BookInfo,
   BackToTop
 
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

   // console.log( this.bookList);

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
