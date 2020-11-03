<template>
  <div class="book-info">
      <!-- <h3>
          {{bookInformation.volumeInfo.title}}
      </h3>
<div>

    {{bookInformation.volumeInfo.authors[0]}} <br>

    {{bookInformation.volumeInfo.category}} 
    {{bookInformation.volumeInfo.language}} <br>
    {{bookInformation.volumeInfo.description}} <br> 
   
</div>  <hr>-->

    <BookCard
    v-for="book in bookList"
    :key="book.volumeInfo.id"
    :title="book.volumeInfo.title"
    :author="book.volumeInfo.authors[0]"
    :category="book.volumeInfo.categories==null?'N/A':book.volumeInfo.categories[0]"
    :lang="book.volumeInfo.language"

    :imageLink="book.volumeInfo.imageLinks.thumbnail==null?'No Image from API':book.volumeInfo.imageLinks.thumbnail"
    
    :description="book.volumeInfo.description"

    />
  

 
  </div>

</template>



<script>

import BookCard from "./BookCard.vue";
export default {
    name: 'BookInfo',
    components:{  //**
    BookCard
  },
  props: ['bookList']
  
};
</script>