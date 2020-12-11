<template>

<div class="mb-4"> 
<br><br><br><br><br>

<b-row align-h="center"  class="mb-3">
  
<b-button  @click="lastPage" variant="info" size="md" class="mr-3 mt-2">
 Back </b-button> 
     
</b-row>
  <div v-if='hasBooks'>

<!----->
 <b-row align-h="center" class="m-1">
       <b-col md="8" align-h="center"><!--  major col to md*--> 

   <b-card  class="m-3" id="bookdetail">
      <b-row  align-v="start" > <!-- image location-->

        <b-col md="3" > <!-- **--><!-- image-->
        <b-img :src=imageLink fluid alt="Image N/A"
        style="width:10rem"
        class="mt-3"
        />

     </b-col>

     <b-col 
     class="ml-2 mr-3 mt-1" id="bookcardText" > <!-- text-info -->  
       
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
  <b-button @click="saveBook"  variant="primary" size="sm" class="mr-3 mt-2">
 {{ status }} </b-button>
 
       </b-row>

   </b-card>      
  </b-col>
  </b-row>
  
         
 <div v-if='hasComment'>  
    <CommentBase     
        v-for="comment in commentList"
        :key= "comment.cid"
        :comment = "comment"    /> 

   </div> <div v-else>
     <b-row align-h="center" class="m-4">
       <b-col md="8" align-h="center" class="m-2">
    <b-alert  show variant="info">
      <h4 >No comments found.. Add your comment!</h4></b-alert>
       </b-col> </b-row>
   </div>
   
     
      
      <AddComment  :bid = 'id'
        @add-comment="addComment"
       />
<!----->
  </div>  

  <div v-else>
    <b-row align-h="center"  class="m-3"> 
<b-alert  show variant="info"><h2>No books found.. Please go back!</h2></b-alert>


    </b-row>
  </div>
<!--  -->




       <BackToTop text="Back to Top" 
       visibleoffset="200" bottom="3px"    />
    

</div>

  
</template>

<script>
import AddComment from '../components/AddComment.vue' 
import CommentBase from '../components/CommentBase.vue'
import BackToTop from 'vue-backtotop' //https://github.com/caiofsouza/vue-backtotop

import db from '../components/firebaseInit' 
import axios from 'axios';

export default {

  props: ['id'],

  components: {
    AddComment,
    CommentBase,
    BackToTop
  },

    data(){
      return {
      hasBooks: false,
      selectedBook : null,
      hasComment: false,
      commentList: [],  
      savedForEvent:false, //
      savedId:'',
      status:'Save this book for event',

      title:'',
      author:'',
      category:'',
      lang:'',
      imageLink:'',
      description:'',
     
    //comment  ?
        bid:'', 
        cid:'', 
        preferredName:'',
        commentBody:'', 
      

      }
  },


  created(){  
    const link = 'https://www.googleapis.com/books/v1/volumes/'+this.id;
 
  try {
     axios.get(link).then(response => { 
       
       this.selectedBook = response.data;
      //console.log( 'this.selected Book is   ', this.selectedBook);
    
      this.hasBooks = true;

   /* this.selectedBook = this.$store.getters.books.find(
      (book) => book.id === this.id ); */
   
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


    //getting bookComment if exists
          
      /*https://cloud.google.com/firestore/docs/query-data/queries */
      db.collection('commentList').where('bid', '==', this.id).get().then(
       (snapshot) => {
        snapshot.docs.forEach (
          doc => {
          //   console.log(doc.data());
            
            this.bid=doc.data().bid;
            this.cid=doc.data().cid;
            this.preferredName=doc.data().name;
            this.commentBody=doc.data().comment;

            const comment = {
              bid: this.bid,
              cid: this.cid,
              preferredName: this.preferredName,
              commentBody: this.commentBody
            }

             this.commentList.push(comment);
          }
        )
          //ASYNC*** -- update WITHIN then
          if(this.commentList.length > 0) {
              this.hasComment = true;       
            }
   
        }
      )
     
      }
     )    
   } catch (err) {
    console.log(err);
    }
  

  },
   
   methods: {
      
      addComment(newComment){
        
     //   console.log('new comment: ' , newComment);
        this.commentList= [...this.commentList, newComment];
        this.hasComment = true;

      db.collection('commentList').doc(newComment.cid + newComment.bid).set({

            bid: newComment.bid,
            cid: newComment.cid,
            name: newComment.preferredName, 
            comment: newComment.commentBody,             
      })
       

      },

      saveBook(evt){
        evt.preventDefault();
        
          this.savedForEvent = ! this.savedForEvent;
          console.log(" save this book ", this.id, " ", this.savedForEvent );
          if(this.savedForEvent){
            this.status = 'Book saved for event';
          } else {
            this.status = 'Save this book for event';
          } //need to check if 
      },

      lastPage(evt){
           evt.preventDefault();      
            this.$router.push({ path: '/shelf' })
      }



   }
 
};
</script>

<style scoped>

#bookdetail {
  font-family:  Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: rgb(245, 240, 233);
  
  
 
}
#bookcardText{
  font-family: Inconsolata;
   text-align: left;
   color: rgb(29, 28, 28);
   font-size: large;
}

#bookTitle{
  text-align: center;
  font-size:x-large;
  
}


</style>