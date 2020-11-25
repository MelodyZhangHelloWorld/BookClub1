<template>

 
         
<b-col  cols="6" md="4">
       <b-card id="bookcard"  class="m-2" @click="toDetailPage(id)"
       >
       
      <b-row  align-v="start" > 

        <b-col class="m-2" > <!-- **--><!-- image-->
        <img :src="imageLink" alt="Image N/A"
        style="width:6rem"
       
        >

     </b-col>

     <b-col> 
       <b-card-text>
    
         <b-row align-h="center" id="bookTitle" class="mb-3">  
           <b> {{title}} </b>  </b-row>

     <b-col  class="m-2">
      <b-row class="mb-2">  {{author}} </b-row>
     
     <b-row> {{category}}</b-row>
     <b-row> {{lang}}</b-row>
    
     </b-col>
         
          
  </b-card-text>      
     </b-col>
     </b-row>
   </b-card>
</b-col>
  

</template>

<script>

export default {
  props: ['id','title', 'author','category','lang','imageLink','description'],

   methods: {
      toDetailPage(id){
      //  alert("Book key: " + id);
        this.$router.push({ path: '/detail/'+id }) //https://router.vuejs.org/guide/essentials/navigation.html
      }
  }


};
</script>

<style scoped>

#bookcard {
  font-family:  Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: rgb(243, 239, 233); 
}


#bookcard:hover{
   background-color:  rgb(253, 242, 225);
   cursor: pointer;
 }
 
#bookTitle{
  font-size: large;
  text-align: center;
}



</style>