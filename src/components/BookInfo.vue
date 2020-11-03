<template>
  <div class="book-info">
      <h3>
          {{bookInformation.volumeInfo.title}}
      </h3>
<div>

    {{bookInformation.volumeInfo.authors[0]}} <br>

    {{bookInformation.volumeInfo.category}} 
    {{bookInformation.volumeInfo.language}} <br>
    {{bookInformation.volumeInfo.description}} <br>
   
</div>  <hr>

 
  </div>
</template>



<script>

export default {
    name: 'BookInfo',
  props: ['bookInformation']
  
};
</script>