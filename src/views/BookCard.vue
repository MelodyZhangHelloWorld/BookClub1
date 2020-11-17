<template>

       
<b-col  cols="6" md="4">
       <b-card id="bookcard"  class="m-3" >
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
       <!-- text-info class="ml-4 mr-2 mt-1" id="bookcardText"-->  
       
       <!-- <b-row class="mb-2" align-v="center">
         <b-col cols=8 align-h="start" id="bookTitle">  <b> {{title}} </b>  </b-col>
          <b-col align-h="start"> {{author}} </b-col>  
       
       </b-row>
      

       <b-row >
         <b-col cols=8 align-h="start"> {{category}} </b-col>
         <b-col align-h="start"> {{lang}}</b-col>
       </b-row> -->


        <!-- <div class="mt-1 ml-3 mr-3" >
          
            <b-row >
              <b>Description:</b>
            <b-card-text>
         
           {{ description  }} 
            </b-card-text>
             
       </b-row>
          
        </div> -->


     </b-col>

  
     </b-row>

       

   </b-card>

  
  
 

</b-col>
  
</template>

<script>
export default {


  props: ['title', 'author','category','lang','imageLink','description'],


};
</script>

<style scoped>

#bookcard {
  font-family:  Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: rgb(243, 239, 233);
  
  
 
}
#bookcardText{
  font-family: Inconsolata;
   text-align: left;
   color: rgb(29, 28, 28);
   font-size: large;
}

#bookTitle{
  font-size: large;
}


</style>