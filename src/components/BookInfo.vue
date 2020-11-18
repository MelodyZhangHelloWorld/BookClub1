<template>
 

<b-container >  <!-- this is created to compare the sm/md tags! turned out md is better-->

<b-row align-v="center">
  
    <BookCard
    v-for="book in bookList"
    :key="book.id"
    :id='book.id'
    :title="book.volumeInfo.title"
    :author="book.volumeInfo.authors[0]"
    :category="book.volumeInfo.categories==undefined?cateMessage:book.volumeInfo.categories[0]"
    :lang="book.volumeInfo.language"

    :imageLink="book.volumeInfo.imageLinks==null?altImage:book.volumeInfo.imageLinks.thumbnail"
    
    :description="book.volumeInfo.description==null?' No description available...':book.volumeInfo.description"

    />
</b-row>
</b-container>
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
       altImage: "https://westsiderc.org/wp-content/uploads/2019/08/Image-Not-Available.png", //"../assets/imgNA.jpg",
      cateMessage: 'Category not clear..'
    }
  },

  props: ['bookList'],

  
};
</script>

<style scoped>





</style>