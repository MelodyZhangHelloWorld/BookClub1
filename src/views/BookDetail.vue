<template>
<div >

 <b-row align-h="center" class="m-3">
       <b-col cols=8 align-h="center"><!--  major -->

   <b-card  class="m-3" id="bookdetail">
      <b-row  align-v="start" > <!-- image location-->

        <b-col md="2" class="mr-2"> <!-- **--><!-- image-->
        <img :src=imageLink alt="Image N/A"
        style="width:10rem"
        class="m-2"
        >

     </b-col>

     <b-col 
     class="ml-4 mr-2 mt-1" id="bookcardText" > <!-- text-info -->  
       
       <b-row class="mb-2" align-v="center">
         <b-col cols=8 align-h="start" id="bookTitle">  <b> {{title}} </b>  </b-col>
          <b-col align-h="start"> {{author}} </b-col>  
       
       </b-row>
      

        <b-row >
         <b-col cols=8 align-h="start"> {{category}} </b-col>
         <b-col align-h="start"> {{lang}}</b-col>
       </b-row>


        <div class="mt-1 ml-3 mr-3" >
          
            <b-row >
              <b>Description:</b>
            <b-card-text>
         
           {{ description  }} 
            </b-card-text>
             
       </b-row>
          
        </div> 


     </b-col>

  
     </b-row>

       <b-row align-h="end">
           <b-button  variant="primary" size="sm" class="mr-3 mt-2">
Comment </b-button><!-- https://bootstrap-vue.org/docs/reference/color-variants#color-variants-and-css-class-mapping -->
       </b-row>



    <div class="switchClass "> <!---->
     
    <b-row align-h="center">
     
    
       </b-row>
  
    </div>
   </b-card>
  </b-col>

  </b-row>

</div>
  <!---->

  
</template>

<script>
export default {


  props: ['id'],

    data(){
      return {
      selectedBook : null,

      title:'',
      author:'',
      category:'',
      lang:'',
      imageLink:'',
      description:'',
      hasComment: false,

      comments: [],
      comment: {
        bid:'', 
        cid:'', //time+bookid
        userName:'',
        cContent:'', //comment_content
      }

      }
  },


  created(){  
    this.selectedBook = this.$store.getters.books.find(
      (book) => book.id === this.id  
        );
   // console.log(this.selectedBook);
   
    const altImage = 'https://westsiderc.org/wp-content/uploads/2019/08/Image-Not-Available.png'; //"../assets/imgNA.jpg";
    
   this.imageLink = this.selectedBook.volumeInfo.imageLinks==null? altImage:this.selectedBook.volumeInfo.imageLinks.thumbnail;

   this.title = this.selectedBook.volumeInfo.title;

   this.author = this.selectedBook.volumeInfo.author;

   this.category = this.selectedBook.volumeInfo.categories==undefined?'Category not clear..':this.selectedBook.volumeInfo.categories[0];

   this.lang = this.selectedBook.volumeInfo.language;

            if(this.lang === "zh-CN"){
              this.lang = "simplified Chinese";
            } else if (this.lang === "zh-TW") {
               this.lang = "traditional Chinese";}
 
   this.description = this.selectedBook.volumeInfo.description==null?' No description available...':this.selectedBook.volumeInfo.description;


  },
 
};
</script>

<style scoped>

#bookdetail {
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
  
  font-size:x-large;
  
}


</style>