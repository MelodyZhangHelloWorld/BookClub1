<template>
  <div class="book-info">


    
        <BookCard
    v-for="book in bookList"
    :key="book.volumeInfo.id"
    :title="book.volumeInfo.title"
    :author="book.volumeInfo.authors[0]"
    :category="book.volumeInfo.categories==undefined?'https://www.indiaspora.org/wp-content/uploads/2018/10/image-not-available.jpg':book.volumeInfo.categories[0]"
    :lang="book.volumeInfo.language"

    :imageLink="book.volumeInfo.imageLinks==null?altImage:book.volumeInfo.imageLinks.thumbnail"
    
    :description="book.volumeInfo.description==null?' No description available...':book.volumeInfo.description"

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

  data(){
    return{
      altImage: "https://westsiderc.org/wp-content/uploads/2019/08/Image-Not-Available.png"
    }
  },

  props: ['bookList']
  
};
</script>

<style scoped>





</style>