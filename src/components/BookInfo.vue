<template>
  <div class="book-info">


    
        <BookCard
    v-for="book in bookList"
    :key="book.volumeInfo.id"
    :title="book.volumeInfo.title"
    :author="book.volumeInfo.authors[0]"
    :category="book.volumeInfo.categories==undefined?'N/A':book.volumeInfo.categories[0]"
    :lang="book.volumeInfo.language"

    :imageLink="book.volumeInfo.imageLinks==null?'N/A':book.volumeInfo.imageLinks.thumbnail"
    
    :description="book.volumeInfo.description==null?'No description from API':book.volumeInfo.description"

    />
    
  

 
  </div>

</template>



<script>

import BookCard from "../views/BookCard.vue";
export default {
    name: 'BookInfo',
    components:{  //**
    BookCard
  },
  props: ['bookList']
  
};
</script>

<style scoped>





</style>