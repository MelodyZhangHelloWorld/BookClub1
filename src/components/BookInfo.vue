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

    <ul>
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
    </ul>
  

 
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



.ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
.li {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

</style>